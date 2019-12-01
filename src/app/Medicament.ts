import {Posologie} from './Posologie';

export class Medicament {
    nom: string;
    posologie: Posologie;
    constructor(nom: string, posologie: Posologie) {
        this.nom = nom;
        this.posologie = posologie;
    }
}
