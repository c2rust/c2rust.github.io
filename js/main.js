import c_sample from "./c_sample.js";

// const API = "";
const API = "https://dev.opencamp.cn/c2rust";

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
        const response = await fetch(API + '/api/transcode', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    },
    run: async (data) => {
        const response = await fetch(API + '/api/run', {
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
const tool_select = document.querySelector('#tool_select');
const sample_select = document.querySelector('#sample_select');
const c_run_btn = document.querySelector('#c_run_btn');
const rust_run_btn = document.querySelector('#rust_run_btn');
const c_output = document.querySelector('#c_output');
const rust_output = document.querySelector('#rust_output');


(function init() {
    let options = '';

    for (const sample in c_sample) {
        options += `<option value="${sample}">${sample}</option>`;
    }
    
    sample_select.innerHTML = options;

    window.editor_c.setValue(c_sample.hello);
})()

sample_select.addEventListener('change', async (e) => {
    const sample = sample_select.value;
    window.editor_c.setValue(c_sample[sample]);
})

async function run(language) {
    let code = '';
    if (language == 'c') {
        code =  window.editor_c.getValue();
    } else if (language == 'rust') {
        code =  window.editor_rust.getValue();
    }

    const response = await api.run({
        language,
        code,
    });

    console.log(response);
    const lines = response.output.split('\n');
    let output = '';
    if (response.status == 0) {
        lines.forEach(line => {
            output += `<p>${line}</p>`
        })
    } else {
        lines.forEach(line => {
            output += `<p style='color: rgb(255, 85, 85)'>${line}</p>`
        })
    }
    if (language == 'c') {
        c_output.innerHTML = output;
    } else if (language == 'rust') {
        rust_output.innerHTML = output;
    }

}

c_run_btn.clicked = false;
c_run_btn.addEventListener('click', async () => {
    console.log('C run clicked!');
    if (c_run_btn.clicked) return;
    c_run_btn.clicked = true;
    try {
        await run('c');
    } catch(e) {
        console.error(e);
    }
    c_run_btn.clicked = false;
})

rust_run_btn.clicked = false;
rust_run_btn.addEventListener('click', async () => {
    console.log('Rust run clicked!');
    if (rust_run_btn.clicked) return;
    rust_run_btn.clicked = true;
    try {
        await run('rust');
    } catch(e) {
        console.error(e);
    }
    rust_run_btn.clicked = false;
})

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
