import chalk from 'chalk';
import {randomSupervillain} from 'supervillains';

export default function coolsolelog(mensagem) {
    console.log("E em um momento de raiva",chalk.red(randomSupervillain()), "disse:", chalk.red(mensagem))
}