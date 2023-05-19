export interface TemplateBuilderModel{
    "header":string,
    "bodyMessage":string,
    "footer":string,
    "buttons":string[],
    "campaign":string,
    "id":string
}
export interface TemplateBuilderArrayModel{
    all_templates:TemplateBuilderModel[],
    specific_template:TemplateBuilderModel;
}