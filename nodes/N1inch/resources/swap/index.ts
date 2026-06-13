import type { INodeProperties } from 'n8n-workflow';

export const swapDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					]
				}
			},
			"options": [
				{
					"name": "Get Quote",
					"value": "Get Quote",
					"action": "Find the best quote to swap with 1inch Router",
					"description": "Find the best quote to swap with 1inch Router",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v6.0/1/quote"
						}
					}
				},
				{
					"name": "Get Swap",
					"value": "Get Swap",
					"action": "Generate calldata to swap on 1inch Router",
					"description": "Generate calldata to swap on 1inch Router",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v6.0/1/swap"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v6.0/1/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Src",
			"name": "src",
			"required": true,
			"default": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "src",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Dst",
			"name": "dst",
			"required": true,
			"default": "0x111111111117dc0aa78b770fa6a738034120c302",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dst",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": "10000000000000000",
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
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Protocols",
			"name": "protocols",
			"description": "All supported liquidity sources by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "protocols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Fee",
			"name": "fee",
			"description": "Partner fee. min: 0; max: 3 Should be the same for /quote and /swap",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"description": "Network price per gas in wei. By default fast network gas price",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Complexity Level",
			"name": "complexityLevel",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "complexityLevel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Parts",
			"name": "parts",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "parts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Main Route Parts",
			"name": "mainRouteParts",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "mainRouteParts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Gas Limit",
			"name": "gasLimit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasLimit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Include Tokens Info",
			"name": "includeTokensInfo",
			"description": "Return fromToken and toToken info in response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeTokensInfo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Include Protocols",
			"name": "includeProtocols",
			"description": "Return used swap protocols in response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeProtocols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Include Gas",
			"name": "includeGas",
			"description": "Return approximated gas in response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeGas",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Connector Tokens",
			"name": "connectorTokens",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "connectorTokens",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Excluded Protocols",
			"name": "excludedProtocols",
			"description": "excluded supported liquidity sources",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedProtocols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Quote"
					]
				}
			}
		},
		{
			"displayName": "GET /v6.0/1/swap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Src",
			"name": "src",
			"required": true,
			"default": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "src",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Dst",
			"name": "dst",
			"required": true,
			"default": "0x111111111117dc0aa78b770fa6a738034120c302",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dst",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"default": "10000000000000000",
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
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"required": true,
			"description": "The address that calls the 1inch contract",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"required": true,
			"description": "An EOA address that initiate the transaction",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Slippage",
			"name": "slippage",
			"required": true,
			"description": "min: 0; max: 50",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Protocols",
			"name": "protocols",
			"description": "All supported liquidity sources by default",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "protocols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Fee",
			"name": "fee",
			"description": "Partner fee. min: 0; max: 3 Should be the same for /quote and /swap",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"description": "Network price per gas in wei. By default fast network gas price",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Complexity Level",
			"name": "complexityLevel",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "complexityLevel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Parts",
			"name": "parts",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "parts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Main Route Parts",
			"name": "mainRouteParts",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "mainRouteParts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Gas Limit",
			"name": "gasLimit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasLimit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Include Tokens Info",
			"name": "includeTokensInfo",
			"description": "Return fromToken and toToken info in response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeTokensInfo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Include Protocols",
			"name": "includeProtocols",
			"description": "Return used swap protocols in response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeProtocols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Include Gas",
			"name": "includeGas",
			"description": "Return approximated gas in response",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeGas",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Connector Tokens",
			"name": "connectorTokens",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "connectorTokens",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Excluded Protocols",
			"name": "excludedProtocols",
			"description": "excluded supported liquidity sources",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedProtocols",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Permit",
			"name": "permit",
			"description": "https://eips.ethereum.org/EIPS/eip-2612",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "permit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Receiver",
			"name": "receiver",
			"description": "This address will receive funds after the swap. By default same address as \"from\" param",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "receiver",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Referrer",
			"name": "referrer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referrer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Allow Partial Fill",
			"name": "allowPartialFill",
			"description": "By default set to false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowPartialFill",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Disable Estimate",
			"name": "disableEstimate",
			"description": "Enable this flag to disable onchain simulation",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "disableEstimate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
		{
			"displayName": "Use Permit 2",
			"name": "usePermit2",
			"description": "Enable this flag in case you did an approval to permit2 smart contract",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "usePermit2",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Get Swap"
					]
				}
			}
		},
];
