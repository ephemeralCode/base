//! let

// Scope 1
{
    let a = 'Variable a';
    let b = 'Variable b';
    
    // Scope 2
    {
        a = 'New Variable A'; // заменило
        let b = 'Local Variable B'; // создает новую переменную внутри scope 2
    
        console.log('Scope 2a', a); // Scope 2a New Variable A
        console.log('Scope 2b', b); // Scope 2b Local Variable B
    }
    
    console.log('Scope 1a', a); // Scope 1a New Variable A
    console.log('Scope 1b', b); // Scope 1b Variable b
}
