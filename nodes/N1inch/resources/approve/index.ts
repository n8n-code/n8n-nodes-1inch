import type { INodeProperties } from 'n8n-workflow';

export const approveDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					]
				}
			},
			"options": [
				{
					"name": "Get Spender",
					"value": "Get Spender",
					"action": "Address of the 1inch Router that is trusted to spend funds for the swap",
					"description": "Address of the 1inch Router that is trusted to spend funds for the swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v6.0/1/approve/spender"
						}
					}
				},
				{
					"name": "Get Approve",
					"value": "Get Approve",
					"action": "Generate approve calldata to allow 1inch Router to perform a swap",
					"description": "Generate approve calldata to allow 1inch Router to perform a swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v6.0/1/approve/transaction"
						}
					}
				},
				{
					"name": "Get Allowance",
					"value": "Get Allowance",
					"action": "Get the number of tokens that the 1inch Router is allowed to swap",
					"description": "Get the number of tokens that the 1inch Router is allowed to swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v6.0/1/approve/allowance"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v6.0/1/approve/spender",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					],
					"operation": [
						"Get Spender"
					]
				}
			}
		},
		{
			"displayName": "GET /v6.0/1/approve/transaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					],
					"operation": [
						"Get Approve"
					]
				}
			}
		},
		{
			"displayName": "Token Address",
			"name": "tokenAddress",
			"required": true,
			"description": "Token address you want to swap",
			"default": "0x111111111117dc0aa78b770fa6a738034120c302",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					],
					"operation": [
						"Get Approve"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"description": "The number of tokens that the 1inch Router is allowed to swap.If not specified, it will be allowed to spend an infinite amount of tokens.",
			"default": "100000000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					],
					"operation": [
						"Get Approve"
					]
				}
			}
		},
		{
			"displayName": "GET /v6.0/1/approve/allowance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					],
					"operation": [
						"Get Allowance"
					]
				}
			}
		},
		{
			"displayName": "Token Address",
			"name": "tokenAddress",
			"required": true,
			"description": "Token address you want to swap",
			"default": "0x111111111117dc0aa78b770fa6a738034120c302",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					],
					"operation": [
						"Get Allowance"
					]
				}
			}
		},
		{
			"displayName": "Wallet Address",
			"name": "walletAddress",
			"required": true,
			"description": "Wallet address for which you want to check",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "walletAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approve"
					],
					"operation": [
						"Get Allowance"
					]
				}
			}
		},
];
