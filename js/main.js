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
        const response = await fetch('/api/transcode', {
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

transcode_btn.clicked = false;
transcode_btn.addEventListener('click', async () => {
    if (transcode_btn.clicked) return;
    transcode_btn.clicked = true;

    const c_code = window.editor_c.getValue(); 

    const response = await api.transcode({
        // TODO 不同的工具
        tool: 'c2rust',
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