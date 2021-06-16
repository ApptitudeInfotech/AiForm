import React from 'react';
import AiForm, { AiRadio } from '../src/index.js';

export default {
	component: AiRadio,
	title: "AiRadio"
};


const Template = (args) => <AiForm><AiRadio {...args} /></AiForm>;

export const Radio = Template.bind({});
Radio.args = {
	name: "selectFld1",
	options: [{ label: 'Label1', value: 'value1' }, { label: 'Label2', value: 'value2' },
	{ label: 'Label3', value: 'value3' }, { label: 'Label4', value: 'value4' }]
}


export const WithSelcted = Template.bind({});
WithSelcted.args = {
	name: "preSelcted",
	options: [{ label: 'Label1', value: 'value1' }, { label: 'Label2', value: 'value2' },
	{ label: 'Label3', value: 'value3' }, { label: 'Label4', value: 'value4' }],
	selectedValue: 'value3'
}