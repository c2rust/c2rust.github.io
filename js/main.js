const API_DEV = "";
const API_ONLINE = "http://47.254.122.22:40311";

function setNewEditor(language, selector, val='') {
    const elem = document.querySelector(selector);

    // 新建编辑器
    const newEditor = CodeMirror.fromTextArea(elem, {
        // value: val,
        mode: language,
        lineNumbers: true,
        smartIndent: true,
        indentWithTabs: true,
        theme: 'dracula',
        indentUnit: 4,
        scrollbarStyle: 'simple',
        // lineWrapping: true,
        styleActiveLine: true,
        autoCloseBrackets: true,
    });

    newEditor.setValue(val);

    return newEditor;
}

window.editor_c = setNewEditor('clike', '#textarea_c', '// Type some C code!');
window.editor_rust = setNewEditor('rust', '#textarea_rust', '// Here shows rust code generated from C!');


const api = {
    transcode: async (data) => {
        const response = await fetch(API_ONLINE + '/api/transcode', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          return await response.json();
    }
}


const transcode_btn = document.querySelector("#transcode_btn");
const compile_verify_btn = document.querySelector("#compile_verify_btn");
const sample_btn = document.querySelector('#sample_btn');
const tool_select = document.querySelector('#tool_select');

transcode_btn.clicked = false;
transcode_btn.addEventListener('click', async () => {
    console.log('Transcode clicked!');
    if (transcode_btn.clicked) return;
    transcode_btn.clicked = true;

    const c_code = window.editor_c.getValue(); 
    const tool = tool_select.value;
    console.log('Tool selected:', tool);

    const response = await api.transcode({
        tool,
        code: c_code
    })

    console.log(response);
    if (response.status == 0) {
        window.editor_rust.setValue(response.code || '');
    } else {
        // TODO 提示错误
    }
    transcode_btn.clicked = false;
})

sample_btn.addEventListener('click', () => {
    window.editor_c.setValue(
`#include <stdio.h>

int main()
{
    printf("Hello, World!");
    return 0;
}
`)
})