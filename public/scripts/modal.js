export default function modal() {
    const cancelButton = document.querySelector('.button.cancel');
    const modalWrapper= document.querySelector('.modal-wrapper')
    cancelButton.addEventListener('click', close);

    function open() {
        // funcionalidade de atribuir a classe active no modal
        modalWrapper.classList.add('active');
    };
    function close() {
        // funcionalidade de remover a classe active no modal
        modalWrapper.classList.remove('active');
    };

    return {
        open,
        close
    };
};
