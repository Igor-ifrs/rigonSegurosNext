export default function birthday(params) {
    const anoAtual = new Date().getFullYear();
    const dataAniversario = params;
    const anoInformado = dataAniversario.split('/')[2];
    return anoAtual - anoInformado;
}
