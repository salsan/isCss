export interface DeclarationsInterface {
    type: 'declaration';
    property: 'content';
    value: string;
  }

export interface RuleInterface {
    type: 'font-face' | 'rule';
    selectors: string[];
    declarations: DeclarationsInterface[];
  }

export interface StylesheetInterface {
    rules:RuleInterface[];
    parsingErrors: string[]
  }

export interface CssInterface {
    type: 'stylesheet';
     stylesheet: StylesheetInterface;
  }
