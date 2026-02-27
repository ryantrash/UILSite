// The question set for the tracing problems
window.traceQuestions = [
    {
        question: 'What is the output of the following code?', 
        code: `
        int i = 0; 
        int j = 1; 
        out.println(i+++j); 
        `, 
        answers: {
            a: '1', 
            b: '2', 
            c: '115'
        }, 
        correctAnswer: 'a'
    }, 
    {
        question: "blah blah blah",
        answers: {
            a: 'True', 
            b: 'False'
        },
        correctAnswer: 'a'
    }
]
window.recursionQuestions = [
    {
        question: 'Recursion question goes here:',
        answers: {
            a: 'yes!!!',
            b: 'no.',
            c: 'maybe?'
        },
        correctAnswer: 'c'
    }
]