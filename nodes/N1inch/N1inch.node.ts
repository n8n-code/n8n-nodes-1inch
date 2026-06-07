import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { swapDescription } from './resources/swap';
import { approveDescription } from './resources/approve';
import { infoDescription } from './resources/info';

export class N1inch implements INodeType {
	description: INodeTypeDescription = {
		displayName: '1inch',
		name: 'N8nDevN1inch',
		icon: { light: 'file:./1inch.svg', dark: 'file:./1inch.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '1inch DEX aggregator with Pathfinder routing algorithm accessing 50+ liquidity sources across 12+ blockchain networks for optimal token swaps',
		defaults: { name: '1inch' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevN1inchApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Swap",
					"value": "Swap",
					"description": ""
				},
				{
					"name": "Approve",
					"value": "Approve",
					"description": ""
				},
				{
					"name": "Info",
					"value": "Info",
					"description": ""
				}
			],
			"default": ""
		},
		...swapDescription,
		...approveDescription,
		...infoDescription
		],
	};
}
