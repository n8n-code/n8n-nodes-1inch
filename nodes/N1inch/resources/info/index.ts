import type { INodeProperties } from 'n8n-workflow';

export const infoDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Info"
					]
				}
			},
			"options": [
				{
					"name": "Get Liquidity Sources",
					"value": "Get Liquidity Sources",
					"action": "List of liquidity sources that are available for routing in the 1inch Aggregation Protocol",
					"description": "List of liquidity sources that are available for routing in the 1inch Aggregation Protocol",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v6.0/1/liquidity-sources"
						}
					}
				},
				{
					"name": "Get Tokens",
					"value": "Get Tokens",
					"action": "List of tokens that are available for swap in the 1inch Aggregation protocol",
					"description": "List of tokens that are available for swap in the 1inch Aggregation protocol",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v6.0/1/tokens"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v6.0/1/liquidity-sources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Info"
					],
					"operation": [
						"Get Liquidity Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /v6.0/1/tokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Info"
					],
					"operation": [
						"Get Tokens"
					]
				}
			}
		},
];
