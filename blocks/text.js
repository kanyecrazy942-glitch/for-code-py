Blockly.defineBlocksWithJsonArray([
  {
    "type": "text_literal",
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
    "tooltip": "A literal text string.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str"
  },
  {
    "type": "text_multiline",
    "message0": "%1",
    "args0": [
      {
        "type": "field_multilinetext",
        "name": "TEXT",
        "text": ""
      }
    ],
    "output": "String",
    "colour": 160,
    "tooltip": "A multi-line text string.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str"
  },
  {
    "type": "text_concat",
    "output": "String",
    "colour": 160,
    "tooltip": "Create a new text string by joining together any number of text strings.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",
    "mutator": "text_concat_mutator"
  },
  {
    "type": "text_concat_item",
    "message0": "item",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "A string to be joined.",
    "enableContextMenu": false
  },
  {
    "type": "text_format",
    "message0": "format text %1 with",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 160,
    "tooltip": "Format a text string with a variable number of arguments.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#str.format",
    "mutator": "text_format_mutator"
  },
  {
    "type": "text_format_item",
    "message0": "argument",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "An argument to be formatted into the text.",
    "enableContextMenu": false
  },
  {
    "type": "text_length",
    "message0": "length of %1",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      }
    ],
    "output": "Number",
    "colour": 160,
    "tooltip": "Returns the number of letters in the provided text.",
    "helpUrl": "https://docs.python.org/3/library/functions.html#len"
  },
  {
    "type": "text_substring",
    "message0": "in text %1 get substring from %2 %3 to %4 %5",
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
          [ "from start", "FROM_START" ],
          [ "from end", "FROM_END" ],
          [ "first", "FIRST" ]
        ]
      },
      {
        "type": "input_value",
        "name": "AT1"
      },
      {
        "type": "field_dropdown",
        "name": "WHERE2",
        "options": [
          [ "from start", "FROM_START" ],
          [ "from end", "FROM_END" ],
          [ "last", "LAST" ]
        ]
      },
      {
        "type": "input_value",
        "name": "AT2"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 160,
    "tooltip": "Returns a specific part of a text string.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str"
  },
  {
    "type": "text_search",
    "message0": "in text %1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "HAYSTACK",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "OPERATION",
        "options": [
          [ "find first", "FIRST" ],
          [ "find last", "LAST" ],
          [ "contains", "CONTAINS" ],
          [ "starts with", "STARTSWITH" ],
          [ "ends with", "ENDSWITH" ]
        ]
      },
      {
        "type": "input_value",
        "name": "NEEDLE",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": [
      "Number",
      "Boolean"
    ],
    "colour": 160,
    "tooltip": "Searches for a substring within a text string. Returns the position of the substring or a true/false value indicating whether the substring is present.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#string-methods"
  },
  {
    "type": "text_transform",
    "message0": "to %1 of %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OPERATION",
        "options": [
          [ "UPPERCASE", "UPPERCASE" ],
          [ "lowercase", "LOWERCASE" ],
          [ "Title Case", "TITLECASE" ],
          [ "strip spaces", "STRIP" ],
          [ "strip spaces from left", "LSTRIP" ],
          [ "strip spaces from right", "RSTRIP" ]
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
    "tooltip": "Applies a transformation to a text string, such as changing its case or removing whitespace.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#string-methods"
  },
  {
    "type": "text_split_join",
    "message0": "%1 %2 with delimiter %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [ "split", "SPLIT" ],
          [ "join", "JOIN" ]
        ]
      },
      {
        "type": "input_value",
        "name": "INPUT"
      },
      {
        "type": "input_value",
        "name": "DELIMITER",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": [
      "Array",
      "String"
    ],
    "colour": 160,
    "tooltip": "Splits a text string into a list of substrings, or joins a list of strings into a single text string.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#string-methods"
  },
  {
    "type": "text_replace",
    "message0": "in text %1 replace %2 with %3",
    "args0": [
      {
        "type": "input_value",
        "name": "HAYSTACK",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "NEEDLE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "REPLACEMENT",
        "check": "String"
      }
    ],
    "message1": "number of replacements %1",
    "args1": [
      {
        "type": "input_value",
        "name": "COUNT",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 160,
    "tooltip": "Replaces all or a specified number of occurrences of a substring with another string.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#str.replace"
  },
  {
    "type": "text_html_transform",
    "message0": "%1 HTML in %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OPERATION",
        "options": [
          [ "escape", "ESCAPE" ],
          [ "unescape", "UNESCAPE" ]
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
    "tooltip": "Escapes or unescapes HTML entities in a text string.",
    "helpUrl": "https://docs.python.org/3/library/html.html"
  },
  {
    "type": "text_is_empty",
    "message0": "is text %1 empty?",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      }
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "Checks if a text string is empty.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str"
  }
]);

const textConcatMutator = {
  itemCount_: 2,

  saveExtraState: function() {
    return {
      'itemCount': this.itemCount_
    };
  },

  loadExtraState: function(state) {
    this.itemCount_ = state['itemCount'] || 2;
    this.updateShape_();
  },

  decompose: function(workspace) {
    const containerBlock = workspace.newBlock('text_concat_item');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('text_concat_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },

  compose: function(containerBlock) {
    let itemBlock = containerBlock.nextConnection.targetBlock();
    const connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },

  saveConnections: function(containerBlock) {
    let itemBlock = containerBlock.nextConnection.targetBlock();
    let i = 0;
    while (itemBlock) {
      const input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
  },

  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField('create empty text');
          if (this.getInput('WITH')) {
            this.removeInput('WITH');
          }
    } else {
        if (!this.getInput('WITH')) {
            const input = this.appendDummyInput('WITH');
            if (this.itemCount_ > 0) {
              input.appendField('create text with');
            }
            if(this.getInput('EMPTY')) {
              this.removeInput('EMPTY');
            }
        }
    }

    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        const input = this.appendValueInput('ADD' + i)
                           .setAlign(Blockly.ALIGN_RIGHT);
      }
    }
    for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
      this.removeInput('ADD' + i);
    }
  }
};

Blockly.Extensions.registerMutator(
  'text_concat_mutator',
  textConcatMutator,
  function() {
    this.itemCount_ = 2;
    this.updateShape_();
  },
  ['text_concat_item']
);

const textFormatMutator = {
  itemCount_: 0,

  saveExtraState: function() {
    return {
      'itemCount': this.itemCount_
    };
  },

  loadExtraState: function(state) {
    this.itemCount_ = state['itemCount'] || 0;
    this.updateShape_();
  },

  decompose: function(workspace) {
    const containerBlock = workspace.newBlock('text_format_item');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('text_format_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },

  compose: function(containerBlock) {
    let itemBlock = containerBlock.nextConnection.targetBlock();
    const connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput('ARG' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ARG' + i);
    }
  },

  saveConnections: function(containerBlock) {
    let itemBlock = containerBlock.nextConnection.targetBlock();
    let i = 0;
    while (itemBlock) {
      const input = this.getInput('ARG' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
  },

  updateShape_: function() {
    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ARG' + i)) {
        const input = this.appendValueInput('ARG' + i)
                           .setAlign(Blockly.ALIGN_RIGHT);
      }
    }
    for (let i = this.itemCount_; this.getInput('ARG' + i); i++) {
      this.removeInput('ARG' + i);
    }
  }
};

Blockly.Extensions.registerMutator(
  'text_format_mutator',
  textFormatMutator,
  null,
  ['text_format_item']
);
