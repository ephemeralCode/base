//! Всплытие

<div> // (event, onclick, ссылка)
    <div>
        <div> // если у дочернем и родителе будет (event, onclick, ссылка) то будет выполняться и родительский и дочерний
            stopPropagation;
        </div>
    </div>
</div>

sum.addEventListener('click', (e) => {
    e.stopPropagation;
})