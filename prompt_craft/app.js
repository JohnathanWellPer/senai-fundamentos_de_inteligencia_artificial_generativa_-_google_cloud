/*
 * FUNÇÃO PRINCIPAL: GERAR O PROMPT
 * Monta o prompt combinando as partes essenciais ensinadas no material de IA:
 * Persona -> Objetivo -> Contexto -> Formato -> Exemplos (Few-Shot).
 */
function generatePrompt() {
    // 1. Capturar os valores digitados pelo usuário
    const persona = document.getElementById('persona').value.trim();
    const objective = document.getElementById('objective').value.trim();
    const context = document.getElementById('context').value.trim();
    const format = document.getElementById('format').value.trim();
    const examples = document.getElementById('examples').value.trim();

    // 2. Validação simples: Objetivo e Contexto não podem estar vazios (Previnem alucinação)
    if (!objective || !context) {
        alert("Atenção: O 'Objetivo' e o 'Contexto' são fundamentais para evitar alucinações da IA. Preencha-os!");
        return;
    }

    // 3. Estruturação do Texto Final utilizando Template Literals (ES6)
    // O array finalPrompt guardará os blocos que existem, para depois juntar tudo.
    let finalPrompt = [];

    // Se o usuário preencheu a persona, adiciona a instrução de atuação
    if (persona) {
        finalPrompt.push(`AJA COMO:\n${persona}\n`);
    }

    // Adiciona o núcleo do prompt (Ação Principal)
    finalPrompt.push(`OBJETIVO PRINCIPAL:\n${objective}\n`);

    // Adiciona a base de conhecimento restrita (Evita IA buscar na internet dados errados)
    finalPrompt.push(`CONTEXTO / INFORMAÇÕES BASE:\n${context}\n`);

    // Se houver um formato exigido, adiciona a restrição estrutural
    if (format) {
        finalPrompt.push(`FORMATO DE SAÍDA EXIGIDO:\n${format}\n`);
    }

    // Se houver exemplos, transforma a requisição de "Zero-Shot" para "Few-Shot Learning"
    if (examples) {
        finalPrompt.push(`EXEMPLOS DE COMO RESPONDER (Few-Shot):\n${examples}\n`);
    }

    // 4. Injeta o resultado no Textarea de saída (.join junta os blocos com quebras de linha duplas)
    const outputField = document.getElementById('outputPrompt');
    outputField.value = finalPrompt.join('\n');

    // Libera o botão de copiar agora que há um prompt válido
    document.getElementById('btnCopy').disabled = false;
}

/*
 * FUNÇÃO: COPIAR PARA A ÁREA DE TRANSFERÊNCIA
 * Utiliza a Clipboard API moderna do navegador para copiar o texto gerado.
 */
function copyPrompt() {
    const outputField = document.getElementById('outputPrompt');
    
    // Seleciona o texto (útil para feedback visual e dispositivos móveis)
    outputField.select();
    outputField.setSelectionRange(0, 99999); 

    // Executa a cópia
    navigator.clipboard.writeText(outputField.value).then(() => {
        // Feedback visual de sucesso no botão
        const copyBtn = document.getElementById('btnCopy');
        const originalText = copyBtn.innerText;
        
        copyBtn.innerText = "✅ Prompt Copiado!";
        
        // Volta ao texto original após 2 segundos
        setTimeout(() => { 
            copyBtn.innerText = originalText; 
        }, 2000);
    }).catch(err => {
        alert("Erro ao copiar para a área de transferência.");
    });
}

/*
 * FUNÇÃO: LIMPAR CAMPOS
 * Zera o sistema para o usuário poder construir um novo prompt do zero.
 */
function clearFields() {
    // Limpa todos os inputs e textareas do formulário
    document.getElementById('persona').value = "";
    document.getElementById('objective').value = "";
    document.getElementById('context').value = "";
    document.getElementById('format').value = "";
    document.getElementById('examples').value = "";
    
    // Limpa o resultado e bloqueia o botão de copiar
    document.getElementById('outputPrompt').value = "";
    document.getElementById('btnCopy').disabled = true;
}