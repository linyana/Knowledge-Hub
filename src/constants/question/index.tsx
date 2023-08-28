import { JavaScriptQuestions, ReactQuestions } from "./front-end";
import { IQuestionsType } from "./types";

export const QUESTIONS: { [key: string]: IQuestionsType } = {
	react: ReactQuestions,
	javascript: JavaScriptQuestions,
};
