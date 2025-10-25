/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.libraryBlocks.texts');

goog.require('Blockly.common');

Blockly.common.defineBlocksWithJsonArray([
  // Block for text value
  {
    "type": "text",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": ""
      }
    ],
    "output": "String",
    "colour": 160,
    "helpUrl": "%{BKY_TEXT_TEXT_HELPURL}",
    "tooltip": "%{BKY_TEXT_TEXT_TOOLTIP}",
    "extensions": [
      "text_quotes",
      "parent_tooltip_when_inline"
    ]
  },
  {
    "type": "text_multiline",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_image",
        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPuccAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpiqGBgYPgPjCwMgMpiCAMMMEkgQAD/8UA0xTQ2UQAAAABJRU5ErkJggg==",
        "width": 12,
        "height": 17,
        "alt": "¶"
      },
      {
        "type": "field_multilinetext",
        "name": "TEXT",
        "text": ""
      }
    ],
    "output": "String",
    "colour": 160,
    "helpUrl": "%{BKY_TEXT_TEXT_HELPURL}",
    "tooltip": "%{BKY_TEXT_TEXT_TOOLTIP}",
    "extensions": [
      "parent_tooltip_when_inline"
    ]
  },
  {
    "type": "text_join",
    "message0": "",
    "output": "String",
    "colour": 160,
    "helpUrl": "%{BKY_TEXT_JOIN_HELPURL}",
    "tooltip": "%{BKY_TEXT_JOIN_TOOLTIP}",
    "mutator": "text_join_mutator"
  },
    {
    "type": "text_append",
    "message0": "%{BKY_TEXT_APPEND_TITLE}",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_TEXT_APPEND_VARIABLE}"
      },
      {
        "type": "input_value",
        "name": "TEXT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "%{BKY_TEXT_APPEND_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_APPEND_HELPURL}",
    "extensions": [
      "text_append_tooltip"
    ]
  },
  {
    "type": "text_length",
    "message0": "%{BKY_TEXT_LENGTH_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": ['String', 'Array']
      }
    ],
    "output": "Number",
    "colour": 160,
    "tooltip": "%{BKY_TEXT_LENGTH_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_LENGTH_HELPURL}"
  },
  {
    "type": "text_isEmpty",
    "message0": "%{BKY_TEXT_ISEMPTY_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": ['String', 'Array']
      }
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_ISEMPTY_HELPURL}"
  },
  {
    "type": "text_indexOf",
    "message0": "%{BKY_TEXT_INDEXOF_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "END",
        "options": [
          [
            "%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}",
            "FIRST"
          ],
          [
            "%{BKY_TEXT_INDEXOF_OPERATOR_LAST}",
            "LAST"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "FIND",
        "check": "String"
      }
    ],
    "output": "Number",
    "colour": 160,
    "tooltip": "%{BKY_TEXT_INDEXOF_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_INDEXOF_HELPURL}",
    "inputsInline": true,
    "extensions": [
      "text_indexOf_tooltip"
    ]
  },
  {
    "type": "text_charAt",
    "message0": "%{BKY_TEXT_CHARAT_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "WHERE",
        "options": [
          ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
          ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
          ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
          ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
          ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]
        ]
      }
    ],
    "output": "String",
    "colour": 160,
    "helpUrl": "%{BKY_TEXT_CHARAT_HELPURL}",
    "tooltip": "%{BKY_TEXT_CHARAT_TOOLTIP}",
    "inputsInline": true,
    "mutator": "text_charAt_mutator"
  },
  {
    "type": "text_getSubstring",
    "message0": "%{BKY_TEXT_GET_SUBSTRING_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "STRING",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "WHERE1",
        "options": [
          ["%{BKY_TEXT_GET_SUBSTRING_START_FROM_START}", "FROM_START"],
          ["%{BKY_TEXT_GET_SUBSTRING_START_FROM_END}", "FROM_END"],
          ["%{BKY_TEXT_GET_SUBSTRING_START_FIRST}", "FIRST"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "WHERE2",
        "options": [
          ["%{BKY_TEXT_GET_SUBSTRING_END_FROM_START}", "FROM_START"],
          ["%{BKY_TEXT_GET_SUBSTRING_END_FROM_END}", "FROM_END"],
          ["%{BKY_TEXT_GET_SUBSTRING_END_LAST}", "LAST"]
        ]
      }
    ],
    "output": "String",
    "colour": 160,
    "helpUrl": "%{BKY_TEXT_GET_SUBSTRING_HELPURL}",
    "tooltip": "%{BKY_TEXT_GET_SUBSTRING_TOOLTIP}",
    "inputsInline": true,
    "extensions": [
      "text_getSubstring_mutator"
    ]
  },
  {
    "type": "text_changeCase",
    "message0": "%{BKY_TEXT_CHANGECASE_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CASE",
        "options": [
          [
            "%{BKY_TEXT_CHANGECASE_OPERATOR_UPPERCASE}",
            "UPPERCASE"
          ],
          [
            "%{BKY_TEXT_CHANGECASE_OPERATOR_LOWERCASE}",
            "LOWERCASE"
          ],
          [
            "%{BKY_TEXT_CHANGECASE_OPERATOR_TITLECASE}",
            "TITLECASE"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 160,
    "helpUrl": "%{BKY_TEXT_CHANGECASE_HELPURL}",
    "tooltip": "%{BKY_TEXT_CHANGECASE_TOOLTIP}"
  },
  {
    "type": "text_trim",
    "message0": "%{BKY_TEXT_TRIM_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "%{BKY_TEXT_TRIM_OPERATOR_BOTH}",
            "BOTH"
          ],
          [
            "%{BKY_TEXT_TRIM_OPERATOR_LEFT}",
            "LEFT"
          ],
          [
            "%{BKY_TEXT_TRIM_OPERATOR_RIGHT}",
            "RIGHT"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 160,
    "helpUrl": "%{BKY_TEXT_TRIM_HELPURL}",
    "tooltip": "%{BKY_TEXT_TRIM_TOOLTIP}"
  },
  {
    "type": "text_print",
    "message0": "%{BKY_TEXT_PRINT_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "%{BKY_TEXT_PRINT_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_PRINT_HELPURL}"
  },
  {
    "type": "text_prompt_ext",
    "message0": "%{BKY_TEXT_PROMPT_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          ["%{BKY_TEXT_PROMPT_TYPE_TEXT}", "TEXT"],
          ["%{BKY_TEXT_PROMPT_TYPE_NUMBER}", "NUMBER"]
        ]
      },
      {
        "type": "input_value",
        "name": "TEXT"
      }
    ],
    "output": ["String", "Number"],
    "colour": 160,
    "tooltip": "%{BKY_TEXT_PROMPT_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_PROMPT_HELPURL}"
  }
]);

const TEXT_JOIN_MUTATOR = {
  /**
   * Create XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    const containerBlock = workspace.newBlock('text_create_join_container');
    containerBlock.initSvg();
    let connection = containerBlock.getInput('STACK').connection;
    for (let i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('text_create_join_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    const connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    let i = 0;
    while (itemBlock) {
      const input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(this.newQuote_(true))
          .appendField(this.newQuote_(false));
    }
    // Add new inputs.
    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        const input = this.appendValueInput('ADD' + i);
        if (i === 0) {
          input.appendField('create text with');
        }
      }
    }
    // Remove deleted inputs.
    for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
      this.removeInput('ADD' + i);
    }
  }
};

Blockly.common.defineBlocksWithJsonArray([
  {
    "type": "text_create_join_container",
    "message0": "add items %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "STACK"
      }
    ],
    "colour": 160,
    "tooltip": "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    "enableCheck": false
  },
  {
    "type": "text_create_join_item",
    "message0": "item",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    "enableCheck": false
  }
]);

Blockly.Extensions.registerMutator('text_join_mutator', TEXT_JOIN_MUTATOR, null,
    ['text_create_join_item']);
