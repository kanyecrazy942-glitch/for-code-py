/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Python generators for Blockly's text blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.texts');

goog.require('Blockly.Python');

Blockly.Python['text'] = function(block) {
  // Text value.
  const code = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_multiline'] = function(block) {
  // Text value.
  const code = Blockly.Python.multiline_quote_(block.getFieldValue('TEXT'));
  const order = code.indexOf('+') !== -1 ? Blockly.Python.ORDER_ADDITIVE :
      Blockly.Python.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Python['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  if (block.itemCount_ === 0) {
    return ['\'\'', Blockly.Python.ORDER_ATOMIC];
  } else if (block.itemCount_ === 1) {
    const element = Blockly.Python.valueToCode(block, 'ADD0',
        Blockly.Python.ORDER_NONE) || '\'\'';
    const code = 'str(' + element + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  } else if (block.itemCount_ === 2) {
    const element0 = Blockly.Python.valueToCode(block, 'ADD0',
        Blockly.Python.ORDER_NONE) || '\'\'';
    const element1 = Blockly.Python.valueToCode(block, 'ADD1',
        Blockly.Python.ORDER_NONE) || '\'\'';
    const code = 'str(' + element0 + ') + str(' + element1 + ')';
    return [code, Blockly.Python.ORDER_ADDITIVE];
  } else {
    const elements = [];
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
          Blockly.Python.ORDER_NONE) || '\'\'';
    }
    const code = '\'\'.join(map(str, [' + elements.join(', ') + ']))';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
};

Blockly.Python['text_append'] = function(block) {
  // Append to a variable in place.
  const varName = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return varName + ' = str(' + varName + ') + str(' + value + ')\n';
};

Blockly.Python['text_length'] = function(block) {
  // String or array length.
  const text = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return ['len(' + text + ')', Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_isEmpty'] = function(block) {
  // Is the string null or array empty?
  const text = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '\'\'';
  const code = 'not len(' + text + ')';
  return [code, Blockly.Python.ORDER_LOGICAL_NOT];
};

Blockly.Python['text_indexOf'] = function(block) {
  // Search the text for a substring.
  const operator = block.getFieldValue('END') === 'FIRST' ? 'find' : 'rfind';
  const substring = Blockly.Python.valueToCode(block, 'FIND',
      Blockly.Python.ORDER_NONE) || '\'\'';
  const text = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || '\'\'';
  const code = text + '.' + operator + '(' + substring + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_charAt'] = function(block) {
  // Get letter at index.
  const where = block.getFieldValue('WHERE') || 'FROM_START';
  const text = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || '\'\'';
  let at;

  switch (where) {
    case 'FIRST':
      at = '0';
      break;
    case 'LAST':
      at = '-1';
      break;
    case 'FROM_START':
      at = Blockly.Python.valueToCode(block, 'AT',
          Blockly.Python.ORDER_NONE) || '1';
      at = String(parseInt(at, 10) - 1);
      break;
    case 'FROM_END':
      at = Blockly.Python.valueToCode(block, 'AT',
          Blockly.Python.ORDER_UNARY_SIGN) || '1';
      at = '-' + at;
      break;
    case 'RANDOM':
      Blockly.Python.definitions_['import_random'] = 'import random';
      return [text + '[random.randint(0, len(' + text + ') - 1)]',
          Blockly.Python.ORDER_FUNCTION_CALL];
    default:
      throw Error('Unhandled option (text_charAt).');
  }
  return [text + '[' + at + ']', Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['text_getSubstring'] = function(block) {
  // Get substring.
  const text = Blockly.Python.valueToCode(block, 'STRING',
      Blockly.Python.ORDER_MEMBER) || '\'\'';
  const where1 = block.getFieldValue('WHERE1');
  const where2 = block.getFieldValue('WHERE2');
  let at1, at2;

  switch (where1) {
    case 'FROM_START':
      at1 = Blockly.Python.valueToCode(block, 'AT1',
          Blockly.Python.ORDER_NONE) || '1';
      at1 = String(parseInt(at1, 10) - 1);
      break;
    case 'FROM_END':
      at1 = Blockly.Python.valueToCode(block, 'AT1',
          Blockly.Python.ORDER_UNARY_SIGN) || '1';
      at1 = '-' + at1;
      break;
    case 'FIRST':
      at1 = '0';
      break;
    default:
      throw Error('Unhandled option (text_getSubstring).');
  }

  switch (where2) {
    case 'FROM_START':
      at2 = Blockly.Python.valueToCode(block, 'AT2',
          Blockly.Python.ORDER_NONE) || '1';
      break;
    case 'FROM_END':
      at2 = Blockly.Python.valueToCode(block, 'AT2',
          Blockly.Python.ORDER_UNARY_SIGN) || '1';
      at2 = '-' + at2;
      break;
    case 'LAST':
      at2 = '';
      break;
    default:
      throw Error('Unhandled option (text_getSubstring).');
  }
  const code = text + '[' + at1 + ' : ' + at2 + ']';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['text_changeCase'] = function(block) {
  // Change capitalization.
  const OPERATORS = {
    'UPPERCASE': '.upper()',
    'LOWERCASE': '.lower()',
    'TITLECASE': '.title()'
  };
  const operator = OPERATORS[block.getFieldValue('CASE')];
  const text = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_MEMBER) || '\'\'';
  const code = text + operator;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_trim'] = function(block) {
  // Trim spaces.
  const OPERATORS = {
    'LEFT': '.lstrip()',
    'RIGHT': '.rstrip()',
    'BOTH': '.strip()'
  };
  const operator = OPERATORS[block.getFieldValue('MODE')];
  const text = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_MEMBER) || '\'\'';
  const code = text + operator;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_print'] = function(block) {
  // Print statement.
  const msg = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + msg + ')\n';
};

Blockly.Python['text_prompt_ext'] = function(block) {
  // Prompt function.
  const BKY_TEXT_PROMPT_TYPE_TEXT = 'TEXT';
  const BKY_TEXT_PROMPT_TYPE_NUMBER = 'NUMBER';
  const type = block.getFieldValue('TYPE');
  let msg;
  if (block.getField('TEXT')) {
    // Internal message.
    msg = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message.
    msg = Blockly.Python.valueToCode(block, 'TEXT',
        Blockly.Python.ORDER_NONE) || '\'\'';
  }
  let code = 'input(' + msg + ')';
  if (type === BKY_TEXT_PROMPT_TYPE_NUMBER) {
    code = 'float(' + code + ')';
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_prompt'] = Blockly.Python['text_prompt_ext'];
