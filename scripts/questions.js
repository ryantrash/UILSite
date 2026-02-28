/**
 * Represents the answer choices for a question.
 * Keys are answer ids (a,b,c,d), values are the labels (3, true, etc.)
 * @typedef {Object.<string, string>} Answers 
 */

/**
 * A quiz question
 * @typedef {Object} Question
 * @property {string} question - The question text for the problem
 * @property {string} [code] - Optional code snippet paired alongside the question
 * @property {Answers} answers - Answer choices keyed by id
 * @property {string} [level] - Optional level of the problem (district, invitational, etc)
 * @property {string} correctAnswer - The id of the correct answer
 */

const urlParams = new URLSearchParams(window.location.search);
const quizType = urlParams.get('type');

/**
 * Global question list populated based on url quiz type
 * @type {Question[]} 
 */
window.questions = [];

// The question set for the tracing problems
if (quizType === "Tracing") {
    window.questions = [
        // 2018 District
        {
            question: 'What is the output of the code segment to the right?',
            code: `
        boolean yes=false,no=true,maybe=true;
        if(yes)
            out.print("no ");
        else if(no)
            out.print("yes ");
        else if(maybe)
            out.print("yes and no ");
        else
            out.print("maybe");

        `,
            answers: {
                a: 'yes',
                b: 'no',
                c: 'yes and no',
                d: 'yes yes and no'
            },
            level: 'District',
            correctAnswer: 'a'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String s="planet";
String t="moon";
String u=s.substring(1, 2)+t.substring(1);
out.print(u);
`,
            answers: {
                a: 'laoon',
                b: 'ploon',
                c: 'lmoon',
                d: 'plmoon',
                e: 'loon'
            },
            level: 'District',
            correctAnswer: 'e'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
char c='A';
int i=8;
double d=4.65;
out.print(c+i-d);
`,
            answers: {
                a: '68.0',
                b: 'D',
                c: '68',
                d: '68.35'
            },
            level: 'District',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
double d=0;
int i=10;
do {
    d+=--i;
}while(i>0);
out.print(d+" "+i)
`,
            answers: {
                a: '44.0 1',
                b: '55.0 1',
                c: '45.0 1',
                d: '55.0 0',
                e: '45.0 0'
            },
            level: 'District',
            correctAnswer: 'e'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
public static String rec(String s,int i) {
    if(s.length()==1)
        return s;
    else
        return s+rec(s.substring(0,i),i-1);
}
//client code
String s="Pecos";
out.print(rec(s,s.length()-1))
`,
            answers: {
                a: 'PecosPecoPecPe',
                b: 'PPePecPecoPecos',
                c: 'PecosPecoPecPeP',
                d: 'PePcePocePsoceP',
                e: 'PPPPP'
            },
            level: 'District',
            correctAnswer: 'c'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int[][] mat= new int[4][4];
for(int x=0;x<4;x++)
    for(int y=0;y<4;y++)
        mat[y][x]=x+2*y;
out.println(Arrays.toString(mat[2]));
`,
            answers: {
                a: '[4, 5, 6, 7]',
                b: '[2, 3, 4, 5]',
                c: '[2, 4, 6, 8]',
                d: '[1, 3, 5, 7]',
                e: '[6, 7, 8, 9]'
            },
            level: 'District',
            correctAnswer: 'a'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
Double d1=new Double(18.99);
Double d2=19.00;
if(d1.compareTo(d2)==0)
    out.print("Go");
else if(d1.compareTo(d2)>0)
    out.print("Fight");
else
    out.print("Win");
`,
            answers: {
                a: 'Go',
                b: 'Fight',
                c: 'Win',
                d: 'Error. Will not compile.',
                e: 'Error. Throws a run time exception'
            },
            level: 'District',
            correctAnswer: 'c'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String s="March2018",t="";
for(int i=0;i<s.length();i++) {
    switch(s.substring(i, i+1)) {
    case "M":t+="#";break;
    case "c":t+="*";
    case "0":t+="%";break;
    case "r":
    case "1":
    case "8":t+="&";break;
    default:t+="@";
    }
}
out.print(t);
`,
            answers: {
                a: '#@&*%@@%&&',
                b: '#@&*@@%&&',
                c: '#@@*%@@%@&',
                d: '#@@*@@%@&',
                e: '#&*%%&&'
            },
            level: 'District',
            correctAnswer: 'a'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String s="JAVA",t="java";
if(s.equals(t))
    out.print("penny ");
else if(s.equals("java"))
    out.print("nickel ");
else if(t.equalsIgnoreCase(s))
    out.print("dime ");
else if(t.equals("java"))
    out.print("quarter");
`,
            answers: {
                a: 'penny',
                b: 'nickel',
                c: 'penny nickel dime quarter',
                d: 'dime',
                e: 'dime quarter'
            },
            level: 'Invitational',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int m=10,n=1,p=1;
while(m>0) {
    p=p+n*m;
    n++;
    m-=2;
}
out.print(p);
`,
            answers: {
                a: '71',
                b: '61',
                c: '57',
                d: '70',
                e: '45'
            },
            level: 'Invitational',
            correctAnswer: 'a'
        },
        {
            question: "Which of the following best describes the method shown on the right?",
            code: `
public static int method(int[][] m) {
    int a=0;
    for(int x=0;x<m.length;x++) {
        int r=0;
        for(int y=0;y<m[x].length;y++)
            if(m[x][y]>r)
                r=m[x][y];
        a+=r;
    }
    return a;
}
`,
            answers: {
                a: 'Returns the sum of the values in the diagonal rows in array m',
                b: 'Returns the largest value in array m.',
                c: 'Returns the sum of all of the values in array m.',
                d: 'Returns the sum of the largest value in each of the rows in array m.',
                e: 'Returns the smallest value in array m.'
            },
            level: 'Invitational',
            correctAnswer: 'd'
        },
        // 2023 District
        {
            question: "What is the output of the code segment to the right?",
            code: `
int T = 12;
if (T > 10)
    T = T - 3;
if (T == 12)
    T *= 2;
else
    T /= 2;
if (T - 10 < 0)
    T++;
else
    T--;
out.print(T);
`,
            answers: {
                a: '3',
                b: '4',
                c: '5',
                d: '19',
                e: '25'
            },
            level: 'District',
            correctAnswer: 'c'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String St = "A BC DEF GH I JK LMN O";
Scanner B = new Scanner(St);
for(int x=0; x<=2; x++)
{
    B.next();
    out.print(B.next());
}
`,
            answers: {
                a: 'ABCDEFGH',
                b: 'BCGHJK',
                c: 'BCGHJKO',
                d: 'ADEFILMN',
                e: 'ADEFI'
            },
            level: 'District',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
boolean[] F = new boolean[20];
F[1] = true;
for(int x=2; x<=19; x++)
    F[x] = F[x-1] ^ F[x-2];
int C = 0;
for (int x=0; x<=19; x++)
    if (F[x])
        C++;
out.print(C);
`,
            answers: {
                a: '0',
                b: '6',
                c: '10',
                d: '13',
                e: '20'
            },
            level: 'District',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int L = 512;
int M = L / 100;
int N = (L - M * 100) / 10;
int R = L % 10;
int U = R*100 + M*10 + N;
out.print(U);
`,
            answers: {
                a: '0',
                b: '9',
                c: '16',
                d: '22',
                e: '25'
            },
            level: 'District',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int L = 512;
int M = L / 100;
int N = (L - M * 100) / 10;
int R = L % 10;
int U = R*100 + M*10 + N;
out.print(U);
`,
            answers: {
                a: '0',
                b: '9',
                c: '16',
                d: '22',
                e: '25'
            },
            level: 'District',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int A = 10;
int B = 12;
int C = 27;
out.print(A+B+"A"+C+A+"B"+('A'+B));
`,
            answers: {
                a: '22A37BA12',
                b: '22A2710B77',
                c: '22A2710BA12',
                d: '22A2710BA12',
                e: '22A37BAB'
            },
            level: 'District',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int D = 10;
int R = 2;
int P = 4;
if (D + R > P)
    P = D;
else
    D = P;
if (D + P > R)
    R = D;
else
    D = R;
if (P + R > D)
    D++;
else
    D--;
out.print(D + " " + P + " " + R);
`,
            answers: {
                a: '10 2 4',
                b: '11 10 11',
                c: '10 10 10',
                d: '11 10 10',
                e: '10 10 11'
            },
            level: 'District',
            correctAnswer: 'b'
        },
        // 2023 Regional
        {
            question: "What is the output of the code segment to the right?",
            code: `
int D = 10;
int R = 2;
int P = 4;
if (D + R > P)
    P = D;
else
    D = P;
if (D + P > R)
    R = D;
else
    D = R;
if (P + R > D)
    D++;
else
    D--;
out.print(D + " " + P + " " + R);
`,
            answers: {
                a: '10 2 4',
                b: '11 10 11',
                c: '10 10 10',
                d: '11 10 10',
                e: '10 10 11'
            },
            level: 'Regional',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int[] perfect = new int[25];
for(int x=0; x<24; x++)
    perfect[x] = x * x - 1;
out.print(perfect[10] - perfect[8]);
`,
            answers: {
                a: '32',
                b: '34',
                c: '35',
                d: '36',
                e: '38'
            },
            level: 'Regional',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int z = 0;
for(int x=1, y=-5; x<=12; x++, y++)
    z = x * y;
out.print(z);
`,
            answers: {
                a: '60',
                b: '72',
                c: '66',
                d: '55',
                e: '-66'
            },
            level: 'Regional',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int z = 0;
for(int x=1, y=-5; x<=12; x++, y++)
    z = x * y;
out.print(z);
`,
            answers: {
                a: '60',
                b: '72',
                c: '66',
                d: '55',
                e: '-66'
            },
            level: 'Regional',
            correctAnswer: 'b'
        },{
            question: "What is the output of the code segment to the right?",
            code: `
int z = 0;
for(int x=1, y=-5; x<=12; x++, y++)
    z = x * y;
out.print(z);
`,
            answers: {
                a: '60',
                b: '72',
                c: '66',
                d: '55',
                e: '-66'
            },
            level: 'Regional',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String[]L = {"BOB","JEN","SAM","PAM","MEL"};
String St = "";
for(int x=1;x<=3;x++)
{
    St += L[x-1].substring(0,1);
    St += L[x].substring(1,2);
    St += L[x+1].substring(2,3);
}
out.print(St);
`,
            answers: {
                a: 'BEMJALSAM',
                b: 'BESOEMSAL',
                c: 'BOBJENSAM',
                d: 'BSJEAANNL',
                e: 'BEMJAMSAL'
            },
            level: 'Regional',
            correctAnswer: 'e'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int[][]BP = new int[8][8];
BP[1][1] = 1;
for (int y = 2; y<=7; y++)
    for (int x = 1; x<=7; x++)
        BP[y][x]= BP[y-1][x]+BP[y-1][x-1];
out.print(BP[6][5]);
`,
            answers: {
                a: '1',
                b: '4',
                c: '5',
                d: '6',
                e: '10'
            },
            level: 'Regional',
            correctAnswer: 'c'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String One = "ABCDE";
String Two = "";
for(int x=0; x<One.length(); x++)
    Two = One.substring(x,x+1) + Two;
out.print(Two);
`,
            answers: {
                a: 'ABCDE',
                b: 'EDCBA',
                c: 'ABCDEEDCBA',
                d: 'ABCDEDCBA',
                e: 'AABBCCDDEE'
            },
            level: 'Regional',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
String One = "ABCDE";
String Two = "";
for(int x=0; x<One.length(); x++)
    Two = One.substring(x,x+1) + Two;
out.print(Two);
`,
            answers: {
                a: 'ABCDE',
                b: 'EDCBA',
                c: 'ABCDEEDCBA',
                d: 'ABCDEDCBA',
                e: 'AABBCCDDEE'
            },
            level: 'Regional',
            correctAnswer: 'b'
        },
        //2025 state
        {
            question: "What is the output of the code segment to the right?",
            code: `
boolean a = false;
boolean b = true;
a |= a ^ b & !b | a;
b ^= b ^ !a & a | !b;
out.print(a ^ b | a);
`,
            answers: {
                a: 'true',
                b: 'false',
            },
            level: 'State',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
double c = 4.5;
c = Math.nextAfter(c, -7);
String s = "" + c;
s = s.substring(0, 4);
out.printf("%.2f %s",c,s);
`,
            answers: {
                a: '4.00 4.00',
                b: '4.50 4.49',
                c: '4.50 4.50',
                d: '-3.50, -3.5',
                e: 'There is no output due to a runtime error.'
            },
            level: 'State',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int i = -7;
if(i < 0 | i++ > -10)
    out.print(1);
if(i > 0 && i-- < 10)
    out.print(2);
else out.print(3);
out.print(i);
`,
            answers: {
                a: '12-7',
                b: '13-7',
                c: '2-7',
                d: '13-6',
                e: '3-6'
            },
            level: 'State',
            correctAnswer: 'd'
        },
        {
            question: "What is output by the line marked //q09 in the code to the right?",
            code: `
int[][] mat = new int[3][5];
for(int r = 0; r < 3; r++)
    for(int c = 4; c >= 0; c--)
    mat[r][c] =
        (r + 1) * 5 + (c - 1) * c - 2;
out.println
    (Arrays.toString(mat[2])); //q09
for(int i = 0; i < 4; i ++) {
    if(i != 3) {
        mat[i][i] = mat[i][i + 1];
        mat[i][i]--;
    } if(i != 0) {
        mat[i - 1][i + 1] =
            mat[i - 1][i - 1];
        mat[i - 1][i]++;
    }
    mat[0][i] += i;
    mat[1][i] -= i;
}
out.println
    (Arrays.toString(mat[1])); //q10
`,
            answers: {
                a: '[13, 13, 15, 19, 25]',
                b: '[8, 8, 10, 14, 20]',
                c: '[17, 15, 15, 17, 21]',
                d: '[12, 10, 10, 12, 16]',
                e: 'There is no output due to a runtime error.'
            },
            level: 'State',
            correctAnswer: 'a'
        },
        {
            question: "What is output by the line marked //q10 in the code to the right?",
            code: `
int[][] mat = new int[3][5];
for(int r = 0; r < 3; r++)
    for(int c = 4; c >= 0; c--)
    mat[r][c] =
        (r + 1) * 5 + (c - 1) * c - 2;
out.println
    (Arrays.toString(mat[2])); //q09
for(int i = 0; i < 4; i ++) {
    if(i != 3) {
        mat[i][i] = mat[i][i + 1];
        mat[i][i]--;
    } if(i != 0) {
        mat[i - 1][i + 1] =
            mat[i - 1][i - 1];
        mat[i - 1][i]++;
    }
    mat[0][i] += i;
    mat[1][i] -= i;
}
out.println
    (Arrays.toString(mat[1])); //q10
`,
            answers: {
                a: '[8, 6, 9, 3, 20]',
                b: '[8, 9, 8, 6, 20]',
                c: '[12, 8, 9, 5, 16]',
                d: '[8, 8, 9, 5, 20]',
                e: 'There is no output due to a runtime error.'
            },
            level: 'State',
            correctAnswer: 'd'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
int i = 4;
switch(5) {
    case 4: i += 10;
    case 2: i++;
        break;
    default: i += 100;
}
out.print(i);
`,
            answers: {
                a: '4',
                b: '104',
                c: '15',
                d: '105',
                e: 'There is no output due to a compile error.'
            },
            level: 'State',
            correctAnswer: 'b'
        },
        {
            question: "What is the output of the code segment to the right?",
            code: `
double x = 0, y = 0;
x /= y--;
y = Math.sqrt(y);
out.print((y == x) + " ");
out.println(y);
`,
            answers: {
                a: 'true i',
                b: 'false 0',
                c: 'false NaN',
                d: 'true NaN',
                e: 'There is no output due to a compile error.'
            },
            level: 'State',
            correctAnswer: 'c'
        },
                {
            question: "What is the output of the code segment to the right?",
            code: `
double x = 0, y = 0;
x /= y--;
y = Math.sqrt(y);
out.print((y == x) + " ");
out.println(y);
`,
            answers: {
                a: 'true i',
                b: 'false 0',
                c: 'false NaN',
                d: 'true NaN',
                e: 'There is no output due to a compile error.'
            },
            level: 'State',
            correctAnswer: 'c'
        },
    ]
}

// The question set for the recursion problems

if (quizType === "Recursion") {
    window.questions = [
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
}

// The question set for the bases / numbers problems. 

if (quizType === "Bases And Numbers") {
    window.questions = [
        {
            question: 'num question goes here:',
            answers: {
                a: 'yes!!!',
                b: 'no.',
                c: 'maybe?'
            },
            correctAnswer: 'c'
        }
    ]
}

// The question set for the bases / numbers problems. 
if (quizType === "Data Structures") {
    window.questions = [
        {
            question: 'data question goes here:',
            answers: {
                a: 'yes!!!',
                b: 'no.',
                c: 'maybe?'
            },
            correctAnswer: 'c'
        }
    ]
}