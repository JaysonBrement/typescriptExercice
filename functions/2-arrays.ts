/**
 * Fonction qui prend en paramètre un tableau d'entiers positifs et retourne le premier.
 * 
 * Retourne -1 si le tableau est vide.
 */
export function getFirstNumber(array: number[]): number {
    if(typeof array[0] == undefined){
        return -1
    }else
    return array[0];
}

/**
 * Retourne le dernier élément d'un tableau de string
 * 
 * @param songs Liste de chansons
 * @returns La dernière chaîne de caractères
 */
export function getLastSongPlayed(songs:string[]): string {
    return songs[songs.length -1];
}

/**
 * Retrouve le mot le plus long d'un tableau de strings.
 * 
 * Afin de retrouver le mot le plus long vous pouvez utiliser une approche basée sur "reduce".
 * 
 * Pour apprendre à vous servir de "reduce" : https://medium.com/free-code-camp/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#720b
 */
export function findLongestWord(phrase:string[]): string {
    
    let longestWord = phrase.reduce(function(longest:string, currentWord:string): string{
        if(currentWord.length> longest.length){
            return currentWord
        }else{
            return longest
        }
    }, "");
    return longestWord;
}

/**
 * Crée et initialise un tableau avec une valeur par défaut.
 * 
 * @param length La taille du tableau à créer (number)
 * @param defaultValue La valeur par défaut (string)
 */
export function fillArrayWithDefaultValue(length:number, defaultValue:string): string[] {
    let array:string[] = [];
    for (let index = 0; index < length; index++){
        
        array.push(defaultValue);
    }
    return array;
}

/**
 * Trie un tableau de chaînes de caractères par taille croissante de chaîne.
 * 
 * Pour trier le tableau vous pourrez utiliser la méthode "sort()" associée à une fonction de comparaison : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
 * 
 * Attention : la fonction doit renvoyer un NOUVEAU TABLEAU (nouvelle instance) et non pas celui passé en paramètre. Comment faire ?
 * 
 * @param arrayToSort Le tableau de chaînes de caractères à trier
 * @returns Le tableau trié
 */
export function sortBySize(array:string[]): string[] {
    let longest = array.sort((b, a) => b.length - a.length);
    let newArray = [...longest]
    return newArray;
}

// ----------- TABLEAUX AVEC DES UNIONS -----------

/**
 * Additionne les éléments d'un tableau qu'ils soient de type "number" ou "string".
 * 
 * @param array Utilisation d'un tableau avec types multiples : https://www.geeksforgeeks.org/defining-array-with-multiple-types-in-typescript/
 * @returns Le résultat de la somme de type "number"
 */
export function sumStringsAndNumbers(array:string[] | number[]): number {
    let a = 0;
    array.forEach(element => {
        a = a+ + element;
    });
    return a;
}

/**
 * Traite un tableau pouvant contenir des "string" mais également des éléments "null".
 * Cette fonction est chargée de supprimer toutes les valeurs null et de garder les "strings".
 * 
 * Pro-tip : renseignez vous sur la fonction "filter" : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *  
 * @param array Un tableau pouvant contenir des "string" mais également des éléments "null"
 * @returns Tableau de chaînes de caractères résultat
 */
export function stringsOnly(array:string[]|null[]): string[] {
    let filtered = array.filter(string=>(string!==null))
    return filtered;
}

// ----------- TUPLES -----------

/**
 * Transforme un tuple contenant des informations d'utilisateur en un nom d'utilisateur arbitraire.
 * 
 * Par exemple :
 * - generateUsername(['John', 'Smith', 1980]) doit retourner 'smithjo_1980'
 * - generateUsername(['Bobby', 'Fallon', 1995]) should return 'fallonbo_1995'
 * 
 * @param userInfo Un tuple contenant les informations utilisateur
 * @returns Le nom utilisateur généré.
 */
export function generateUsername(tuple:[string, string, string]): string {
    return (tuple[1] + tuple[0].substring(0,2)+ "_" + tuple[2]).toLowerCase();
}

/**
 * Enum utilisée pour définir 4 points cardinaux
 * TODO : à compléter avec {North, South, East, West}
 */
export enum Direction {
North,
South,
East,
West
}

/**
 * Déplace un point sur un carte 2D (repère orthonormé)
 *
 *        ^ N
 *        |
 *        |
 * W <--[0, 0]--> E 
 *        |
 *        |
 *        S
 * 
 * Par exemple :
 * - getNextMapCoord([0, 0], Direction.North) doit retourner [0, 1]
 * - getNextMapCoord([0, 0], Direction.East)doit retourner [1, 0]
 * 
 * @param coordinates Tuple contenant des coordonnées le premier élément est la position sur l'axe des abscisses, la seconde sur l'axe des ordonnées
 * @param direction Enum présentant une direction (North, South, East, West)
 * @returns Les nouvelles coordonnées (tuple)
 */
export function getNextMapCoord( coordinates:[number, number],direction:Direction): [number,number] { 
    switch(direction){
        case Direction.North:
            coordinates[1]++;
            break;
        case Direction.South:
            coordinates[1]--;
            break;
        case Direction.East:
            coordinates[0]++;
            break;
        case Direction.West:
            coordinates[0]--;
    }
    return coordinates;
}
