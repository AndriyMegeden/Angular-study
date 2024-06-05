export interface QuestionsConfigOption {
    title: string;
    subtitle: string;
    active: boolean;
}
  
export interface QuestionsConfig {
    title: string;
    items: QuestionsConfigOption[]
}

