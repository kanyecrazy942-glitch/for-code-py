/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// This file is generated. Do not edit.

import * as Blockly from 'blockly/core';

// --- Custom Field Registration ---
// As the actual plugin is not available in this environment, a placeholder
// class is created and registered to fulfill the requirement of registering
// custom fields before they are used in block definitions.
class FieldMultilineInput extends Blockly.FieldTextInput {
  // This is a placeholder implementation.
}
Blockly.fieldRegistry.register('field_multiline_input', FieldMultilineInput);

// --- Plus/Minus Mutator Implementation ---
const plusField = {
  "type": "field_image",
  "src": "https://blockly-demo.appspot.com/static/media/plus.png",
  "width": 15,
  "height": 15,
  "alt": "+",
  "flipRtl": true
};

const minusField = {
  "type": "field_image",
  "src": "https://blockly-demo.appspot.com/static/media/minus.png",
  "width": 15,
  "height": 15,
  "alt": "-",
  "flipRtl": true
};

const DYNAMIC_LIST_PLUS_MINUS_MUTATOR = {
  /**
   * The number of items in the list.
   * @type {number}
   */
  itemCount_: 0,

  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },

  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    const targetCount = parseInt(xmlElement.getAttribute('items'), 10) || 0;
    this.updateShape_(targetCount);
  },

  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {{itemCount: number}} The state of this block.
   */
  saveExtraState: function() {
    return {
      'itemCount': this.itemCount_,
    };
  },

  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block.
   */
  loadExtraState: function(state) {
    this.updateShape_(state['itemCount']);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this {Blockly.Block}
   * @private
   */
  updateShape_: function(targetCount) {
    while (this.itemCount_ < targetCount) {
      this.addPart_();
    }
    while (this.itemCount_ > targetCount) {
      this.removePart_();
    }
    this.updateMinus_();
  },

  /**
   * Adds a new input to the end of the block.
   * @this {Blockly.Block}
   * @private
   */
  addPart_: function() {
    this.appendValueInput('ADD' + this.itemCount_);
    this.itemCount_++;
  },

  /**
   * Removes an input from the end of the block.
   * @this {Blockly.Block}
   * @private
   */
  removePart_: function() {
    this.itemCount_--;
    this.removeInput('ADD' + this.itemCount_);
  },

  /**
   * Makes sure the minus field is visible if there are inputs, and hidden if not.
   * @this {Blockly.Block}
   * @private
   */
  updateMinus_: function() {
    const minusField = this.getField('MINUS');
    if (minusField) {
      minusField.setVisible(this.itemCount_ > 0);
    }
  },

  /**
   * Adds a plus button to the end of the inputs.
   * @this {Blockly.Block}
   */
  onchange: function() {
    this.updateMinus_();
  }
};

Blockly.Extensions.registerMutator(
  'dynamic_list_plus_minus_mutator',
  DYNAMIC_LIST_PLUS_MINUS_MUTATOR,
  null,
  []
);


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
        "type": "field_multiline_input",
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
    "message0": "create text with %1 %2",
    "args0": [
        plusField,
        minusField
    ],
    "output": "String",
    "colour": 160,
    "tooltip": "Create a new text string by joining together any number of text strings.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",
    "mutator": "dynamic_list_plus_minus_mutator",
  },
  {
    "type": "text_format",
    "message0": "format text %1 with %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      },
      plusField,
      minusField
    ],
    "output": "String",
    "colour": 160,
    "tooltip": "Format a text string with a variable number of arguments.",
    "helpUrl": "https://docs.python.org/3/library/stdtypes.html#str.format",
    "mutator": "dynamic_list_plus_minus_mutator",
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
