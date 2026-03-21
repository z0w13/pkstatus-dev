import { b8 as NOOP, b9 as extend, ba as isString, bb as NO, bc as isSymbol, bd as isBuiltInDirective, be as capitalize, bf as camelize, bg as EMPTY_OBJ, bh as isObject, bi as toHandlerKey, bj as isArray, bk as isOn, bl as isReservedProp, bm as isHTMLTag, bn as isSVGTag, bo as isMathMLTag, bp as isVoidTag, bq as parseStringStyle, br as makeMap, bs as generateCodeFrame, bt as getAugmentedNamespace, bu as runtimeDom_esmBundler, bv as shared_esmBundler, J as defineComponent, bw as mergeModels, ax as useModel, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, a5 as QDialog, W as createVNode, a6 as QCard, Y as createBaseVNode, K as useSettingsStore, L as storeToRefs, r as ref, a as computed, al as renderPkDescription, aW as useRoute, ag as createElementBlock, a0 as createCommentVNode, a7 as QCardSection, $ as createTextVNode, a2 as toDisplayString, a8 as QCardActions, am as normalizeStyle, Z as QBtn } from "./index-Czhz81pV.js";
import { Q as QMarkupTable } from "./QMarkupTable-Co_abH1I.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-DvRrdQnD.js";
var vue3Fitty_common = { exports: {} };
var vue = { exports: {} };
var vue_cjs_prod = {};
/**
* @vue/compiler-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const FRAGMENT = Symbol(``);
const TELEPORT = Symbol(``);
const SUSPENSE = Symbol(``);
const KEEP_ALIVE = Symbol(``);
const BASE_TRANSITION = Symbol(
  ``
);
const OPEN_BLOCK = Symbol(``);
const CREATE_BLOCK = Symbol(``);
const CREATE_ELEMENT_BLOCK = Symbol(
  ``
);
const CREATE_VNODE = Symbol(``);
const CREATE_ELEMENT_VNODE = Symbol(
  ``
);
const CREATE_COMMENT = Symbol(
  ``
);
const CREATE_TEXT = Symbol(
  ``
);
const CREATE_STATIC = Symbol(
  ``
);
const RESOLVE_COMPONENT = Symbol(
  ``
);
const RESOLVE_DYNAMIC_COMPONENT = Symbol(
  ``
);
const RESOLVE_DIRECTIVE = Symbol(
  ``
);
const RESOLVE_FILTER = Symbol(
  ``
);
const WITH_DIRECTIVES = Symbol(
  ``
);
const RENDER_LIST = Symbol(``);
const RENDER_SLOT = Symbol(``);
const CREATE_SLOTS = Symbol(``);
const TO_DISPLAY_STRING = Symbol(
  ``
);
const MERGE_PROPS = Symbol(``);
const NORMALIZE_CLASS = Symbol(
  ``
);
const NORMALIZE_STYLE = Symbol(
  ``
);
const NORMALIZE_PROPS = Symbol(
  ``
);
const GUARD_REACTIVE_PROPS = Symbol(
  ``
);
const TO_HANDLERS = Symbol(``);
const CAMELIZE = Symbol(``);
const CAPITALIZE = Symbol(``);
const TO_HANDLER_KEY = Symbol(
  ``
);
const SET_BLOCK_TRACKING = Symbol(
  ``
);
const PUSH_SCOPE_ID = Symbol(``);
const POP_SCOPE_ID = Symbol(``);
const WITH_CTX = Symbol(``);
const UNREF = Symbol(``);
const IS_REF = Symbol(``);
const WITH_MEMO = Symbol(``);
const IS_MEMO_SAME = Symbol(``);
const helperNameMap = {
  [FRAGMENT]: `Fragment`,
  [TELEPORT]: `Teleport`,
  [SUSPENSE]: `Suspense`,
  [KEEP_ALIVE]: `KeepAlive`,
  [BASE_TRANSITION]: `BaseTransition`,
  [OPEN_BLOCK]: `openBlock`,
  [CREATE_BLOCK]: `createBlock`,
  [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
  [CREATE_VNODE]: `createVNode`,
  [CREATE_ELEMENT_VNODE]: `createElementVNode`,
  [CREATE_COMMENT]: `createCommentVNode`,
  [CREATE_TEXT]: `createTextVNode`,
  [CREATE_STATIC]: `createStaticVNode`,
  [RESOLVE_COMPONENT]: `resolveComponent`,
  [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
  [RESOLVE_DIRECTIVE]: `resolveDirective`,
  [RESOLVE_FILTER]: `resolveFilter`,
  [WITH_DIRECTIVES]: `withDirectives`,
  [RENDER_LIST]: `renderList`,
  [RENDER_SLOT]: `renderSlot`,
  [CREATE_SLOTS]: `createSlots`,
  [TO_DISPLAY_STRING]: `toDisplayString`,
  [MERGE_PROPS]: `mergeProps`,
  [NORMALIZE_CLASS]: `normalizeClass`,
  [NORMALIZE_STYLE]: `normalizeStyle`,
  [NORMALIZE_PROPS]: `normalizeProps`,
  [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
  [TO_HANDLERS]: `toHandlers`,
  [CAMELIZE]: `camelize`,
  [CAPITALIZE]: `capitalize`,
  [TO_HANDLER_KEY]: `toHandlerKey`,
  [SET_BLOCK_TRACKING]: `setBlockTracking`,
  [PUSH_SCOPE_ID]: `pushScopeId`,
  [POP_SCOPE_ID]: `popScopeId`,
  [WITH_CTX]: `withCtx`,
  [UNREF]: `unref`,
  [IS_REF]: `isRef`,
  [WITH_MEMO]: `withMemo`,
  [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach((s) => {
    helperNameMap[s] = helpers[s];
  });
}
const Namespaces = {
  "HTML": 0,
  "0": "HTML",
  "SVG": 1,
  "1": "SVG",
  "MATH_ML": 2,
  "2": "MATH_ML"
};
const NodeTypes = {
  "ROOT": 0,
  "0": "ROOT",
  "ELEMENT": 1,
  "1": "ELEMENT",
  "TEXT": 2,
  "2": "TEXT",
  "COMMENT": 3,
  "3": "COMMENT",
  "SIMPLE_EXPRESSION": 4,
  "4": "SIMPLE_EXPRESSION",
  "INTERPOLATION": 5,
  "5": "INTERPOLATION",
  "ATTRIBUTE": 6,
  "6": "ATTRIBUTE",
  "DIRECTIVE": 7,
  "7": "DIRECTIVE",
  "COMPOUND_EXPRESSION": 8,
  "8": "COMPOUND_EXPRESSION",
  "IF": 9,
  "9": "IF",
  "IF_BRANCH": 10,
  "10": "IF_BRANCH",
  "FOR": 11,
  "11": "FOR",
  "TEXT_CALL": 12,
  "12": "TEXT_CALL",
  "VNODE_CALL": 13,
  "13": "VNODE_CALL",
  "JS_CALL_EXPRESSION": 14,
  "14": "JS_CALL_EXPRESSION",
  "JS_OBJECT_EXPRESSION": 15,
  "15": "JS_OBJECT_EXPRESSION",
  "JS_PROPERTY": 16,
  "16": "JS_PROPERTY",
  "JS_ARRAY_EXPRESSION": 17,
  "17": "JS_ARRAY_EXPRESSION",
  "JS_FUNCTION_EXPRESSION": 18,
  "18": "JS_FUNCTION_EXPRESSION",
  "JS_CONDITIONAL_EXPRESSION": 19,
  "19": "JS_CONDITIONAL_EXPRESSION",
  "JS_CACHE_EXPRESSION": 20,
  "20": "JS_CACHE_EXPRESSION",
  "JS_BLOCK_STATEMENT": 21,
  "21": "JS_BLOCK_STATEMENT",
  "JS_TEMPLATE_LITERAL": 22,
  "22": "JS_TEMPLATE_LITERAL",
  "JS_IF_STATEMENT": 23,
  "23": "JS_IF_STATEMENT",
  "JS_ASSIGNMENT_EXPRESSION": 24,
  "24": "JS_ASSIGNMENT_EXPRESSION",
  "JS_SEQUENCE_EXPRESSION": 25,
  "25": "JS_SEQUENCE_EXPRESSION",
  "JS_RETURN_STATEMENT": 26,
  "26": "JS_RETURN_STATEMENT"
};
const ElementTypes = {
  "ELEMENT": 0,
  "0": "ELEMENT",
  "COMPONENT": 1,
  "1": "COMPONENT",
  "SLOT": 2,
  "2": "SLOT",
  "TEMPLATE": 3,
  "3": "TEMPLATE"
};
const ConstantTypes = {
  "NOT_CONSTANT": 0,
  "0": "NOT_CONSTANT",
  "CAN_SKIP_PATCH": 1,
  "1": "CAN_SKIP_PATCH",
  "CAN_CACHE": 2,
  "2": "CAN_CACHE",
  "CAN_STRINGIFY": 3,
  "3": "CAN_STRINGIFY"
};
const locStub = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function createRoot(children, source = "") {
  return {
    type: 0,
    source,
    children,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: locStub
  };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent2));
    }
    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2,
    loc
  };
}
function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17,
    loc,
    elements
  };
}
function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15,
    loc,
    properties
  };
}
function createObjectProperty(key, value) {
  return {
    type: 16,
    loc: locStub,
    key: isString(key) ? createSimpleExpression(key, true) : key,
    value
  };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
  return {
    type: 4,
    loc,
    content,
    isStatic,
    constType: isStatic ? 3 : constType
  };
}
function createInterpolation(content, loc) {
  return {
    type: 5,
    loc,
    content: isString(content) ? createSimpleExpression(content, false, loc) : content
  };
}
function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8,
    loc,
    children
  };
}
function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14,
    loc,
    callee,
    arguments: args
  };
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
  return {
    type: 19,
    test,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}
function createCacheExpression(index, value, needPauseTracking = false, inVOnce = false) {
  return {
    type: 20,
    index,
    value,
    needPauseTracking,
    inVOnce,
    needArraySpread: false,
    loc: locStub
  };
}
function createBlockStatement(body) {
  return {
    type: 21,
    body,
    loc: locStub
  };
}
function createTemplateLiteral(elements) {
  return {
    type: 22,
    elements,
    loc: locStub
  };
}
function createIfStatement(test, consequent, alternate) {
  return {
    type: 23,
    test,
    consequent,
    alternate,
    loc: locStub
  };
}
function createAssignmentExpression(left, right) {
  return {
    type: 24,
    left,
    right,
    loc: locStub
  };
}
function createSequenceExpression(expressions) {
  return {
    type: 25,
    expressions,
    loc: locStub
  };
}
function createReturnStatement(returns) {
  return {
    type: 26,
    returns,
    loc: locStub
  };
}
function getVNodeHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}
const defaultDelimitersOpen = new Uint8Array([123, 123]);
const defaultDelimitersClose = new Uint8Array([125, 125]);
function isTagStartChar(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function isWhitespace(c) {
  return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function isEndOfTagSection(c) {
  return c === 47 || c === 62 || isWhitespace(c);
}
function toCharCodes(str) {
  const ret = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    ret[i] = str.charCodeAt(i);
  }
  return ret;
}
const Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Tokenizer {
  constructor(stack2, cbs) {
    this.stack = stack2;
    this.cbs = cbs;
    this.state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.inXML = false;
    this.inVPre = false;
    this.newlines = [];
    this.mode = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
    this.delimiterIndex = -1;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1;
    this.mode = 0;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.currentSequence = void 0;
    this.newlines.length = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(index) {
    let line = 1;
    let column = index + 1;
    for (let i = this.newlines.length - 1; i >= 0; i--) {
      const newlineIndex = this.newlines[i];
      if (index > newlineIndex) {
        line = i + 2;
        column = index - newlineIndex;
        break;
      }
    }
    return {
      column,
      line,
      offset: index
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(c) {
    if (c === 60) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!this.inVPre && c === this.delimiterOpen[0]) {
      this.state = 2;
      this.delimiterIndex = 0;
      this.stateInterpolationOpen(c);
    }
  }
  stateInterpolationOpen(c) {
    if (c === this.delimiterOpen[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const start = this.index + 1 - this.delimiterOpen.length;
        if (start > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, start);
        }
        this.state = 3;
        this.sectionStart = start;
      } else {
        this.delimiterIndex++;
      }
    } else if (this.inRCDATA) {
      this.state = 32;
      this.stateInRCDATA(c);
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInterpolation(c) {
    if (c === this.delimiterClose[0]) {
      this.state = 4;
      this.delimiterIndex = 0;
      this.stateInterpolationClose(c);
    }
  }
  stateInterpolationClose(c) {
    if (c === this.delimiterClose[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterClose.length - 1) {
        this.cbs.oninterpolation(this.sectionStart, this.index + 1);
        if (this.inRCDATA) {
          this.state = 32;
        } else {
          this.state = 1;
        }
        this.sectionStart = this.index + 1;
      } else {
        this.delimiterIndex++;
      }
    } else {
      this.state = 3;
      this.stateInterpolation(c);
    }
  }
  stateSpecialStartSequence(c) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.inRCDATA = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = 6;
    this.stateInTagName(c);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === 62 || isWhitespace(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        this.inRCDATA = false;
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
        if (!this.inVPre && c === this.delimiterOpen[0]) {
          this.state = 2;
          this.delimiterIndex = 0;
          this.stateInterpolationOpen(c);
        }
      } else if (this.fastForwardTo(60)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === 60);
    }
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = 28;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = 23;
      this.stateInDeclaration(c);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c) {
    while (++this.index < this.buffer.length) {
      const cc = this.buffer.charCodeAt(this.index);
      if (cc === 10) {
        this.newlines.push(this.index);
      }
      if (cc === c) {
        return true;
      }
    }
    this.index = this.buffer.length - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index - 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index - 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = 1;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  startSpecial(sequence, offset) {
    this.enterRCDATA(sequence, offset);
    this.state = 31;
  }
  enterRCDATA(sequence, offset) {
    this.inRCDATA = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
  }
  stateBeforeTagName(c) {
    if (c === 33) {
      this.state = 22;
      this.sectionStart = this.index + 1;
    } else if (c === 63) {
      this.state = 24;
      this.sectionStart = this.index + 1;
    } else if (isTagStartChar(c)) {
      this.sectionStart = this.index;
      if (this.mode === 0) {
        this.state = 6;
      } else if (this.inSFCRoot) {
        this.state = 34;
      } else if (!this.inXML) {
        if (c === 116) {
          this.state = 30;
        } else {
          this.state = c === 115 ? 29 : 6;
        }
      } else {
        this.state = 6;
      }
    } else if (c === 47) {
      this.state = 8;
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.handleTagName(c);
    }
  }
  stateInSFCRootTagName(c) {
    if (isEndOfTagSection(c)) {
      const tag = this.buffer.slice(this.sectionStart, this.index);
      if (tag !== "template") {
        this.enterRCDATA(toCharCodes(`</` + tag), 0);
      }
      this.handleTagName(c);
    }
  }
  handleTagName(c) {
    this.cbs.onopentagname(this.sectionStart, this.index);
    this.sectionStart = -1;
    this.state = 11;
    this.stateBeforeAttrName(c);
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace(c)) ;
    else if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    } else {
      this.state = isTagStartChar(c) ? 9 : 27;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (c === 62 || isWhitespace(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = 10;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttrName(c) {
    if (c === 62) {
      this.cbs.onopentagend(this.index);
      if (this.inRCDATA) {
        this.state = 32;
      } else {
        this.state = 1;
      }
      this.sectionStart = this.index + 1;
    } else if (c === 47) {
      this.state = 7;
    } else if (c === 60 && this.peek() === 47) {
      this.cbs.onopentagend(this.index);
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!isWhitespace(c)) {
      this.handleAttrStart(c);
    }
  }
  handleAttrStart(c) {
    if (c === 118 && this.peek() === 45) {
      this.state = 13;
      this.sectionStart = this.index;
    } else if (c === 46 || c === 58 || c === 64 || c === 35) {
      this.cbs.ondirname(this.index, this.index + 1);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 12;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c) {
    if (c === 62) {
      this.cbs.onselfclosingtag(this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
      this.inRCDATA = false;
    } else if (!isWhitespace(c)) {
      this.state = 11;
      this.stateBeforeAttrName(c);
    }
  }
  stateInAttrName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 58) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else if (c === 46) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDirArg(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 91) {
      this.state = 15;
    } else if (c === 46) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDynamicDirArg(c) {
    if (c === 93) {
      this.state = 14;
    } else if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index + 1);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirModifier(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 46) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.sectionStart = this.index + 1;
    }
  }
  handleAttrNameEnd(c) {
    this.sectionStart = this.index;
    this.state = 17;
    this.cbs.onattribnameend(this.index);
    this.stateAfterAttrName(c);
  }
  stateAfterAttrName(c) {
    if (c === 61) {
      this.state = 18;
    } else if (c === 47 || c === 62) {
      this.cbs.onattribend(0, this.sectionStart);
      this.sectionStart = -1;
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(0, this.sectionStart);
      this.handleAttrStart(c);
    }
  }
  stateBeforeAttrValue(c) {
    if (c === 34) {
      this.state = 19;
      this.sectionStart = this.index + 1;
    } else if (c === 39) {
      this.state = 20;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this.index;
      this.state = 21;
      this.stateInAttrValueNoQuotes(c);
    }
  }
  handleInAttrValue(c, quote) {
    if (c === quote || this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(
        quote === 34 ? 3 : 2,
        this.index + 1
      );
      this.state = 11;
    }
  }
  stateInAttrValueDoubleQuotes(c) {
    this.handleInAttrValue(c, 34);
  }
  stateInAttrValueSingleQuotes(c) {
    this.handleInAttrValue(c, 39);
  }
  stateInAttrValueNoQuotes(c) {
    if (isWhitespace(c) || c === 62) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(1, this.index);
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (c === 39 || c === 60 || c === 61 || c === 96) {
      this.cbs.onerr(
        18,
        this.index
      );
    } else ;
  }
  stateBeforeDeclaration(c) {
    if (c === 91) {
      this.state = 26;
      this.sequenceIndex = 0;
    } else {
      this.state = c === 45 ? 25 : 23;
    }
  }
  stateInDeclaration(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c) {
    if (c === 45) {
      this.state = 28;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 23;
    }
  }
  stateInSpecialComment(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.oncomment(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c) {
    if (c === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (c === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  stateBeforeSpecialT(c) {
    if (c === Sequences.TitleEnd[3]) {
      this.startSpecial(Sequences.TitleEnd, 4);
    } else if (c === Sequences.TextareaEnd[3]) {
      this.startSpecial(Sequences.TextareaEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(input) {
    this.buffer = input;
    while (this.index < this.buffer.length) {
      const c = this.buffer.charCodeAt(this.index);
      if (c === 10 && this.state !== 33) {
        this.newlines.push(this.index);
      }
      switch (this.state) {
        case 1: {
          this.stateText(c);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(c);
          break;
        }
        case 3: {
          this.stateInterpolation(c);
          break;
        }
        case 4: {
          this.stateInterpolationClose(c);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case 32: {
          this.stateInRCDATA(c);
          break;
        }
        case 26: {
          this.stateCDATASequence(c);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(c);
          break;
        }
        case 12: {
          this.stateInAttrName(c);
          break;
        }
        case 13: {
          this.stateInDirName(c);
          break;
        }
        case 14: {
          this.stateInDirArg(c);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(c);
          break;
        }
        case 16: {
          this.stateInDirModifier(c);
          break;
        }
        case 28: {
          this.stateInCommentLike(c);
          break;
        }
        case 27: {
          this.stateInSpecialComment(c);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(c);
          break;
        }
        case 6: {
          this.stateInTagName(c);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(c);
          break;
        }
        case 9: {
          this.stateInClosingTagName(c);
          break;
        }
        case 5: {
          this.stateBeforeTagName(c);
          break;
        }
        case 17: {
          this.stateAfterAttrName(c);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(c);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(c);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(c);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(c);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(c);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case 23: {
          this.stateInDeclaration(c);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case 25: {
          this.stateBeforeComment(c);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
    this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.sectionStart !== this.index) {
      if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === 19 || this.state === 20 || this.state === 21) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  finish() {
    this.handleTrailingData();
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length;
    if (this.sectionStart >= endIndex) {
      return;
    }
    if (this.state === 28) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex);
      }
    } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
    else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitCodePoint(cp, consumed) {
  }
}
const CompilerDeprecationTypes = {
  "COMPILER_IS_ON_ELEMENT": "COMPILER_IS_ON_ELEMENT",
  "COMPILER_V_BIND_SYNC": "COMPILER_V_BIND_SYNC",
  "COMPILER_V_BIND_OBJECT_ORDER": "COMPILER_V_BIND_OBJECT_ORDER",
  "COMPILER_V_ON_NATIVE": "COMPILER_V_ON_NATIVE",
  "COMPILER_V_IF_V_FOR_PRECEDENCE": "COMPILER_V_IF_V_FOR_PRECEDENCE",
  "COMPILER_NATIVE_TEMPLATE": "COMPILER_NATIVE_TEMPLATE",
  "COMPILER_INLINE_TEMPLATE": "COMPILER_INLINE_TEMPLATE",
  "COMPILER_FILTERS": "COMPILER_FILTERS"
};
const deprecationData = {
  ["COMPILER_IS_ON_ELEMENT"]: {
    message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
    link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
  },
  ["COMPILER_V_BIND_SYNC"]: {
    message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
  },
  ["COMPILER_V_BIND_OBJECT_ORDER"]: {
    message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
  },
  ["COMPILER_V_ON_NATIVE"]: {
    message: `.native modifier for v-on has been removed as is no longer necessary.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
  },
  ["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
    message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
  },
  ["COMPILER_NATIVE_TEMPLATE"]: {
    message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.`
  },
  ["COMPILER_INLINE_TEMPLATE"]: {
    message: `"inline-template" has been removed in Vue 3.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
  },
  ["COMPILER_FILTERS"]: {
    message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
  }
};
function getCompatValue(key, { compatConfig }) {
  const value = compatConfig && compatConfig[key];
  if (key === "MODE") {
    return value || 3;
  } else {
    return value;
  }
}
function isCompatEnabled(key, context) {
  const mode = getCompatValue("MODE", context);
  const value = getCompatValue(key, context);
  return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
  const enabled = isCompatEnabled(key, context);
  return enabled;
}
function warnDeprecation(key, context, loc, ...args) {
  const val = getCompatValue(key, context);
  if (val === "suppress-warning") {
    return;
  }
  const { message, link } = deprecationData[key];
  const msg = `(deprecation ${key}) ${typeof message === "function" ? message(...args) : message}${link ? `
  Details: ${link}` : ``}`;
  const err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
}
function defaultOnError(error) {
  throw error;
}
function defaultOnWarn(msg) {
}
function createCompilerError(code, loc, messages, additionalMessage) {
  const msg = `https://vuejs.org/error-reference/#compiler-${code}`;
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}
const ErrorCodes = {
  "ABRUPT_CLOSING_OF_EMPTY_COMMENT": 0,
  "0": "ABRUPT_CLOSING_OF_EMPTY_COMMENT",
  "CDATA_IN_HTML_CONTENT": 1,
  "1": "CDATA_IN_HTML_CONTENT",
  "DUPLICATE_ATTRIBUTE": 2,
  "2": "DUPLICATE_ATTRIBUTE",
  "END_TAG_WITH_ATTRIBUTES": 3,
  "3": "END_TAG_WITH_ATTRIBUTES",
  "END_TAG_WITH_TRAILING_SOLIDUS": 4,
  "4": "END_TAG_WITH_TRAILING_SOLIDUS",
  "EOF_BEFORE_TAG_NAME": 5,
  "5": "EOF_BEFORE_TAG_NAME",
  "EOF_IN_CDATA": 6,
  "6": "EOF_IN_CDATA",
  "EOF_IN_COMMENT": 7,
  "7": "EOF_IN_COMMENT",
  "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT": 8,
  "8": "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",
  "EOF_IN_TAG": 9,
  "9": "EOF_IN_TAG",
  "INCORRECTLY_CLOSED_COMMENT": 10,
  "10": "INCORRECTLY_CLOSED_COMMENT",
  "INCORRECTLY_OPENED_COMMENT": 11,
  "11": "INCORRECTLY_OPENED_COMMENT",
  "INVALID_FIRST_CHARACTER_OF_TAG_NAME": 12,
  "12": "INVALID_FIRST_CHARACTER_OF_TAG_NAME",
  "MISSING_ATTRIBUTE_VALUE": 13,
  "13": "MISSING_ATTRIBUTE_VALUE",
  "MISSING_END_TAG_NAME": 14,
  "14": "MISSING_END_TAG_NAME",
  "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES": 15,
  "15": "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",
  "NESTED_COMMENT": 16,
  "16": "NESTED_COMMENT",
  "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME": 17,
  "17": "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",
  "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE": 18,
  "18": "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",
  "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME": 19,
  "19": "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",
  "UNEXPECTED_NULL_CHARACTER": 20,
  "20": "UNEXPECTED_NULL_CHARACTER",
  "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME": 21,
  "21": "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",
  "UNEXPECTED_SOLIDUS_IN_TAG": 22,
  "22": "UNEXPECTED_SOLIDUS_IN_TAG",
  "X_INVALID_END_TAG": 23,
  "23": "X_INVALID_END_TAG",
  "X_MISSING_END_TAG": 24,
  "24": "X_MISSING_END_TAG",
  "X_MISSING_INTERPOLATION_END": 25,
  "25": "X_MISSING_INTERPOLATION_END",
  "X_MISSING_DIRECTIVE_NAME": 26,
  "26": "X_MISSING_DIRECTIVE_NAME",
  "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END": 27,
  "27": "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",
  "X_V_IF_NO_EXPRESSION": 28,
  "28": "X_V_IF_NO_EXPRESSION",
  "X_V_IF_SAME_KEY": 29,
  "29": "X_V_IF_SAME_KEY",
  "X_V_ELSE_NO_ADJACENT_IF": 30,
  "30": "X_V_ELSE_NO_ADJACENT_IF",
  "X_V_FOR_NO_EXPRESSION": 31,
  "31": "X_V_FOR_NO_EXPRESSION",
  "X_V_FOR_MALFORMED_EXPRESSION": 32,
  "32": "X_V_FOR_MALFORMED_EXPRESSION",
  "X_V_FOR_TEMPLATE_KEY_PLACEMENT": 33,
  "33": "X_V_FOR_TEMPLATE_KEY_PLACEMENT",
  "X_V_BIND_NO_EXPRESSION": 34,
  "34": "X_V_BIND_NO_EXPRESSION",
  "X_V_ON_NO_EXPRESSION": 35,
  "35": "X_V_ON_NO_EXPRESSION",
  "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET": 36,
  "36": "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",
  "X_V_SLOT_MIXED_SLOT_USAGE": 37,
  "37": "X_V_SLOT_MIXED_SLOT_USAGE",
  "X_V_SLOT_DUPLICATE_SLOT_NAMES": 38,
  "38": "X_V_SLOT_DUPLICATE_SLOT_NAMES",
  "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN": 39,
  "39": "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",
  "X_V_SLOT_MISPLACED": 40,
  "40": "X_V_SLOT_MISPLACED",
  "X_V_MODEL_NO_EXPRESSION": 41,
  "41": "X_V_MODEL_NO_EXPRESSION",
  "X_V_MODEL_MALFORMED_EXPRESSION": 42,
  "42": "X_V_MODEL_MALFORMED_EXPRESSION",
  "X_V_MODEL_ON_SCOPE_VARIABLE": 43,
  "43": "X_V_MODEL_ON_SCOPE_VARIABLE",
  "X_V_MODEL_ON_PROPS": 44,
  "44": "X_V_MODEL_ON_PROPS",
  "X_INVALID_EXPRESSION": 45,
  "45": "X_INVALID_EXPRESSION",
  "X_KEEP_ALIVE_INVALID_CHILDREN": 46,
  "46": "X_KEEP_ALIVE_INVALID_CHILDREN",
  "X_PREFIX_ID_NOT_SUPPORTED": 47,
  "47": "X_PREFIX_ID_NOT_SUPPORTED",
  "X_MODULE_MODE_NOT_SUPPORTED": 48,
  "48": "X_MODULE_MODE_NOT_SUPPORTED",
  "X_CACHE_HANDLER_NOT_SUPPORTED": 49,
  "49": "X_CACHE_HANDLER_NOT_SUPPORTED",
  "X_SCOPE_ID_NOT_SUPPORTED": 50,
  "50": "X_SCOPE_ID_NOT_SUPPORTED",
  "X_VNODE_HOOKS": 51,
  "51": "X_VNODE_HOOKS",
  "X_V_BIND_INVALID_SAME_NAME_ARGUMENT": 52,
  "52": "X_V_BIND_INVALID_SAME_NAME_ARGUMENT",
  "__EXTEND_POINT__": 53,
  "53": "__EXTEND_POINT__"
};
const errorMessages = {
  // parse errors
  [0]: "Illegal comment.",
  [1]: "CDATA section is allowed only in XML context.",
  [2]: "Duplicate attribute.",
  [3]: "End tag cannot have attributes.",
  [4]: "Illegal '/' in tags.",
  [5]: "Unexpected EOF in tag.",
  [6]: "Unexpected EOF in CDATA section.",
  [7]: "Unexpected EOF in comment.",
  [8]: "Unexpected EOF in script.",
  [9]: "Unexpected EOF in tag.",
  [10]: "Incorrectly closed comment.",
  [11]: "Incorrectly opened comment.",
  [12]: "Illegal tag name. Use '&lt;' to print '<'.",
  [13]: "Attribute value was expected.",
  [14]: "End tag name was expected.",
  [15]: "Whitespace was expected.",
  [16]: "Unexpected '<!--' in comment.",
  [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  [19]: "Attribute name cannot start with '='.",
  [21]: "'<?' is allowed only in XML context.",
  [20]: `Unexpected null character.`,
  [22]: "Illegal '/' in tags.",
  // Vue-specific parse errors
  [23]: "Invalid end tag.",
  [24]: "Element is missing end tag.",
  [25]: "Interpolation end sign was not found.",
  [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  [26]: "Legal directive name was expected.",
  // transform errors
  [28]: `v-if/v-else-if is missing expression.`,
  [29]: `v-if/else branches must use unique keys.`,
  [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
  [31]: `v-for is missing expression.`,
  [32]: `v-for has invalid expression.`,
  [33]: `<template v-for> key should be placed on the <template> tag.`,
  [34]: `v-bind is missing expression.`,
  [52]: `v-bind with same-name shorthand only allows static argument.`,
  [35]: `v-on is missing expression.`,
  [36]: `Unexpected custom directive on <slot> outlet.`,
  [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
  [38]: `Duplicate slot names found. `,
  [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
  [40]: `v-slot can only be used on components or <template> tags.`,
  [41]: `v-model is missing expression.`,
  [42]: `v-model value must be a valid JavaScript member expression.`,
  [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
  [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  [45]: `Error parsing JavaScript expression: `,
  [46]: `<KeepAlive> expects exactly one child component.`,
  [51]: `@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.`,
  // generic errors
  [47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
  [48]: `ES module mode is not supported in this build of compiler.`,
  [49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
  [50]: `"scopeId" option is only supported in module mode.`,
  // just to fulfill types
  [53]: ``
};
function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = /* @__PURE__ */ Object.create(null)) {
  {
    return;
  }
}
function isReferencedIdentifier(id, parent, parentStack) {
  {
    return false;
  }
}
function isInDestructureAssignment(parent, parentStack) {
  if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
    let i = parentStack.length;
    while (i--) {
      const p = parentStack[i];
      if (p.type === "AssignmentExpression") {
        return true;
      } else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) {
        break;
      }
    }
  }
  return false;
}
function isInNewExpression(parentStack) {
  let i = parentStack.length;
  while (i--) {
    const p = parentStack[i];
    if (p.type === "NewExpression") {
      return true;
    } else if (p.type !== "MemberExpression") {
      break;
    }
  }
  return false;
}
function walkFunctionParams(node, onIdent) {
  for (const p of node.params) {
    for (const id of extractIdentifiers(p)) {
      onIdent(id);
    }
  }
}
function walkBlockDeclarations(block, onIdent) {
  for (const stmt of block.body) {
    if (stmt.type === "VariableDeclaration") {
      if (stmt.declare) continue;
      for (const decl of stmt.declarations) {
        for (const id of extractIdentifiers(decl.id)) {
          onIdent(id);
        }
      }
    } else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
      if (stmt.declare || !stmt.id) continue;
      onIdent(stmt.id);
    } else if (isForStatement(stmt)) {
      walkForStatement(stmt, true, onIdent);
    }
  }
}
function isForStatement(stmt) {
  return stmt.type === "ForOfStatement" || stmt.type === "ForInStatement" || stmt.type === "ForStatement";
}
function walkForStatement(stmt, isVar, onIdent) {
  const variable = stmt.type === "ForStatement" ? stmt.init : stmt.left;
  if (variable && variable.type === "VariableDeclaration" && (variable.kind === "var" ? isVar : false)) {
    for (const decl of variable.declarations) {
      for (const id of extractIdentifiers(decl.id)) {
        onIdent(id);
      }
    }
  }
}
function extractIdentifiers(param, nodes = []) {
  switch (param.type) {
    case "Identifier":
      nodes.push(param);
      break;
    case "MemberExpression":
      let object = param;
      while (object.type === "MemberExpression") {
        object = object.object;
      }
      nodes.push(object);
      break;
    case "ObjectPattern":
      for (const prop of param.properties) {
        if (prop.type === "RestElement") {
          extractIdentifiers(prop.argument, nodes);
        } else {
          extractIdentifiers(prop.value, nodes);
        }
      }
      break;
    case "ArrayPattern":
      param.elements.forEach((element) => {
        if (element) extractIdentifiers(element, nodes);
      });
      break;
    case "RestElement":
      extractIdentifiers(param.argument, nodes);
      break;
    case "AssignmentPattern":
      extractIdentifiers(param.left, nodes);
      break;
  }
  return nodes;
}
const isFunctionType = (node) => {
  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};
const isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
const isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
const TS_NODE_TYPES = [
  "TSAsExpression",
  // foo as number
  "TSTypeAssertion",
  // (<number>foo)
  "TSNonNullExpression",
  // foo!
  "TSInstantiationExpression",
  // foo<string>
  "TSSatisfiesExpression"
  // foo satisfies T
];
function unwrapTSNode(node) {
  if (TS_NODE_TYPES.includes(node.type)) {
    return unwrapTSNode(node.expression);
  } else {
    return node;
  }
}
const isStaticExp = (p) => p.type === 4 && p.isStatic;
function isCoreComponent(tag) {
  switch (tag) {
    case "Teleport":
    case "teleport":
      return TELEPORT;
    case "Suspense":
    case "suspense":
      return SUSPENSE;
    case "KeepAlive":
    case "keep-alive":
      return KEEP_ALIVE;
    case "BaseTransition":
    case "base-transition":
      return BASE_TRANSITION;
  }
}
const nonIdentifierRE = /^$|^\d|[^\$\w\xA0-\uFFFF]/;
const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
const getExpSource = (exp) => exp.type === 4 ? exp.content : exp.loc.source;
const isMemberExpressionBrowser = (exp) => {
  const path = getExpSource(exp).trim().replace(whitespaceRE, (s) => s.trim());
  let state = 0;
  let stateStack = [];
  let currentOpenBracketCount = 0;
  let currentOpenParensCount = 0;
  let currentStringType = null;
  for (let i = 0; i < path.length; i++) {
    const char = path.charAt(i);
    switch (state) {
      case 0:
        if (char === "[") {
          stateStack.push(state);
          state = 1;
          currentOpenBracketCount++;
        } else if (char === "(") {
          stateStack.push(state);
          state = 2;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
          return false;
        }
        break;
      case 1:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `[`) {
          currentOpenBracketCount++;
        } else if (char === `]`) {
          if (!--currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 2:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `(`) {
          currentOpenParensCount++;
        } else if (char === `)`) {
          if (i === path.length - 1) {
            return false;
          }
          if (!--currentOpenParensCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 3:
        if (char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }
        break;
    }
  }
  return !currentOpenBracketCount && !currentOpenParensCount;
};
const isMemberExpressionNode = NOOP;
const isMemberExpression = isMemberExpressionBrowser;
const fnExpRE = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const isFnExpressionBrowser = (exp) => fnExpRE.test(getExpSource(exp));
const isFnExpressionNode = NOOP;
const isFnExpression = isFnExpressionBrowser;
function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
  return advancePositionWithMutation(
    {
      offset: pos.offset,
      line: pos.line,
      column: pos.column
    },
    source,
    numberOfCharacters
  );
}
function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
  let linesCount = 0;
  let lastNewLinePos = -1;
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10) {
      linesCount++;
      lastNewLinePos = i;
    }
  }
  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg || `unexpected compiler condition`);
  }
}
function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 7 && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (dynamicOnly) continue;
      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}
function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
  return node.props.some(
    (p) => p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
    p.arg.type !== 4 || // v-bind:[_ctx.foo]
    !p.arg.isStatic)
    // v-bind:[foo]
  );
}
function isText$1(node) {
  return node.type === 5 || node.type === 2;
}
function isVPre(p) {
  return p.type === 7 && p.name === "pre";
}
function isVSlot(p) {
  return p.type === 7 && p.name === "slot";
}
function isTemplateNode(node) {
  return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
  return node.type === 1 && node.tagType === 2;
}
const propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function getUnnormalizedProps(props, callPath = []) {
  if (props && !isString(props) && props.type === 14) {
    const callee = props.callee;
    if (!isString(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(
        props.arguments[0],
        callPath.concat(props)
      );
    }
  }
  return [props, callPath];
}
function injectProp(node, prop, context) {
  let propsWithInjection;
  let props = node.type === 13 ? node.props : node.arguments[2];
  let callPath = [];
  let parentCall;
  if (props && !isString(props) && props.type === 14) {
    const ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }
  if (props == null || isString(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14) {
    const first = props.arguments[0];
    if (!isString(first) && first.type === 15) {
      if (!hasProp(prop, first)) {
        first.properties.unshift(prop);
      }
    } else {
      if (props.callee === TO_HANDLERS) {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props
        ]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }
    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15) {
    if (!hasProp(prop, props)) {
      props.properties.unshift(prop);
    }
    propsWithInjection = props;
  } else {
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
      createObjectExpression([prop]),
      props
    ]);
    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }
  if (node.type === 13) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}
function hasProp(prop, props) {
  let result = false;
  if (prop.key.type === 4) {
    const propKeyName = prop.key.content;
    result = props.properties.some(
      (p) => p.key.type === 4 && p.key.content === propKeyName
    );
  }
  return result;
}
function toValidAssetId(name, type) {
  return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
  })}`;
}
function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }
  switch (node.type) {
    case 1:
      for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 7 && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 11:
      if (hasScopeRef(node.source, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 9:
      return node.branches.some((b) => hasScopeRef(b, ids));
    case 10:
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 4:
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
    case 8:
      return node.children.some((c) => isObject(c) && hasScopeRef(c, ids));
    case 5:
    case 12:
      return hasScopeRef(node.content, ids);
    case 2:
    case 3:
    case 20:
      return false;
    default:
      return false;
  }
}
function getMemoedVNodeCall(node) {
  if (node.type === 14 && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
const defaultParserOptions = {
  parseMode: "base",
  ns: 0,
  delimiters: [`{{`, `}}`],
  getNamespace: () => 0,
  isVoidTag: NO,
  isPreTag: NO,
  isIgnoreNewlineTag: NO,
  isCustomElement: NO,
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: false,
  prefixIdentifiers: false
};
let currentOptions = defaultParserOptions;
let currentRoot = null;
let currentInput = "";
let currentOpenTag = null;
let currentProp = null;
let currentAttrValue = "";
let currentAttrStartIndex = -1;
let currentAttrEndIndex = -1;
let inPre = 0;
let inVPre = false;
let currentVPreBoundary = null;
const stack = [];
const tokenizer = new Tokenizer(stack, {
  onerr: emitError,
  ontext(start, end) {
    onText(getSlice(start, end), start, end);
  },
  ontextentity(char, start, end) {
    onText(char, start, end);
  },
  oninterpolation(start, end) {
    if (inVPre) {
      return onText(getSlice(start, end), start, end);
    }
    let innerStart = start + tokenizer.delimiterOpen.length;
    let innerEnd = end - tokenizer.delimiterClose.length;
    while (isWhitespace(currentInput.charCodeAt(innerStart))) {
      innerStart++;
    }
    while (isWhitespace(currentInput.charCodeAt(innerEnd - 1))) {
      innerEnd--;
    }
    let exp = getSlice(innerStart, innerEnd);
    if (exp.includes("&")) {
      {
        exp = currentOptions.decodeEntities(exp, false);
      }
    }
    addNode({
      type: 5,
      content: createExp(exp, false, getLoc(innerStart, innerEnd)),
      loc: getLoc(start, end)
    });
  },
  onopentagname(start, end) {
    const name = getSlice(start, end);
    currentOpenTag = {
      type: 1,
      tag: name,
      ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: getLoc(start - 1, end),
      codegenNode: void 0
    };
  },
  onopentagend(end) {
    endOpenTag(end);
  },
  onclosetag(start, end) {
    const name = getSlice(start, end);
    if (!currentOptions.isVoidTag(name)) {
      let found = false;
      for (let i = 0; i < stack.length; i++) {
        const e = stack[i];
        if (e.tag.toLowerCase() === name.toLowerCase()) {
          found = true;
          if (i > 0) {
            emitError(24, stack[0].loc.start.offset);
          }
          for (let j = 0; j <= i; j++) {
            const el = stack.shift();
            onCloseTag(el, end, j < i);
          }
          break;
        }
      }
      if (!found) {
        emitError(23, backTrack(start, 60));
      }
    }
  },
  onselfclosingtag(end) {
    const name = currentOpenTag.tag;
    currentOpenTag.isSelfClosing = true;
    endOpenTag(end);
    if (stack[0] && stack[0].tag === name) {
      onCloseTag(stack.shift(), end);
    }
  },
  onattribname(start, end) {
    currentProp = {
      type: 6,
      name: getSlice(start, end),
      nameLoc: getLoc(start, end),
      value: void 0,
      loc: getLoc(start)
    };
  },
  ondirname(start, end) {
    const raw = getSlice(start, end);
    const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
    if (!inVPre && name === "") {
      emitError(26, start);
    }
    if (inVPre || name === "") {
      currentProp = {
        type: 6,
        name: raw,
        nameLoc: getLoc(start, end),
        value: void 0,
        loc: getLoc(start)
      };
    } else {
      currentProp = {
        type: 7,
        name,
        rawName: raw,
        exp: void 0,
        arg: void 0,
        modifiers: raw === "." ? [createSimpleExpression("prop")] : [],
        loc: getLoc(start)
      };
      if (name === "pre") {
        inVPre = tokenizer.inVPre = true;
        currentVPreBoundary = currentOpenTag;
        const props = currentOpenTag.props;
        for (let i = 0; i < props.length; i++) {
          if (props[i].type === 7) {
            props[i] = dirToAttr(props[i]);
          }
        }
      }
    }
  },
  ondirarg(start, end) {
    if (start === end) return;
    const arg = getSlice(start, end);
    if (inVPre && !isVPre(currentProp)) {
      currentProp.name += arg;
      setLocEnd(currentProp.nameLoc, end);
    } else {
      const isStatic = arg[0] !== `[`;
      currentProp.arg = createExp(
        isStatic ? arg : arg.slice(1, -1),
        isStatic,
        getLoc(start, end),
        isStatic ? 3 : 0
      );
    }
  },
  ondirmodifier(start, end) {
    const mod = getSlice(start, end);
    if (inVPre && !isVPre(currentProp)) {
      currentProp.name += "." + mod;
      setLocEnd(currentProp.nameLoc, end);
    } else if (currentProp.name === "slot") {
      const arg = currentProp.arg;
      if (arg) {
        arg.content += "." + mod;
        setLocEnd(arg.loc, end);
      }
    } else {
      const exp = createSimpleExpression(mod, true, getLoc(start, end));
      currentProp.modifiers.push(exp);
    }
  },
  onattribdata(start, end) {
    currentAttrValue += getSlice(start, end);
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
    currentAttrEndIndex = end;
  },
  onattribentity(char, start, end) {
    currentAttrValue += char;
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
    currentAttrEndIndex = end;
  },
  onattribnameend(end) {
    const start = currentProp.loc.start.offset;
    const name = getSlice(start, end);
    if (currentProp.type === 7) {
      currentProp.rawName = name;
    }
    if (currentOpenTag.props.some(
      (p) => (p.type === 7 ? p.rawName : p.name) === name
    )) {
      emitError(2, start);
    }
  },
  onattribend(quote, end) {
    if (currentOpenTag && currentProp) {
      setLocEnd(currentProp.loc, end);
      if (quote !== 0) {
        if (currentAttrValue.includes("&")) {
          currentAttrValue = currentOptions.decodeEntities(
            currentAttrValue,
            true
          );
        }
        if (currentProp.type === 6) {
          if (currentProp.name === "class") {
            currentAttrValue = condense(currentAttrValue).trim();
          }
          if (quote === 1 && !currentAttrValue) {
            emitError(13, end);
          }
          currentProp.value = {
            type: 2,
            content: currentAttrValue,
            loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
          };
          if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") {
            tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
          }
        } else {
          let expParseMode = 0;
          currentProp.exp = createExp(
            currentAttrValue,
            false,
            getLoc(currentAttrStartIndex, currentAttrEndIndex),
            0,
            expParseMode
          );
          if (currentProp.name === "for") {
            currentProp.forParseResult = parseForExpression(currentProp.exp);
          }
          let syncIndex = -1;
          if (currentProp.name === "bind" && (syncIndex = currentProp.modifiers.findIndex(
            (mod) => mod.content === "sync"
          )) > -1 && checkCompatEnabled(
            "COMPILER_V_BIND_SYNC",
            currentOptions,
            currentProp.loc,
            currentProp.arg.loc.source
          )) {
            currentProp.name = "model";
            currentProp.modifiers.splice(syncIndex, 1);
          }
        }
      }
      if (currentProp.type !== 7 || currentProp.name !== "pre") {
        currentOpenTag.props.push(currentProp);
      }
    }
    currentAttrValue = "";
    currentAttrStartIndex = currentAttrEndIndex = -1;
  },
  oncomment(start, end) {
    if (currentOptions.comments) {
      addNode({
        type: 3,
        content: getSlice(start, end),
        loc: getLoc(start - 4, end + 3)
      });
    }
  },
  onend() {
    const end = currentInput.length;
    for (let index = 0; index < stack.length; index++) {
      onCloseTag(stack[index], end - 1);
      emitError(24, stack[index].loc.start.offset);
    }
  },
  oncdata(start, end) {
    if (stack[0].ns !== 0) {
      onText(getSlice(start, end), start, end);
    } else {
      emitError(1, start - 9);
    }
  },
  onprocessinginstruction(start) {
    if ((stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
      emitError(
        21,
        start - 1
      );
    }
  }
});
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  const [, LHS, RHS] = inMatch;
  const createAliasExpression = (content, offset, asParam = false) => {
    const start = loc.start.offset + offset;
    const end = start + content.length;
    return createExp(
      content,
      false,
      getLoc(start, end),
      0,
      asParam ? 1 : 0
      /* Normal */
    );
  };
  const result = {
    source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: false
  };
  let valueContent = LHS.trim().replace(stripParensRE, "").trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);
  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, "").trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;
    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(keyContent, keyOffset, true);
    }
    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();
      if (indexContent) {
        result.index = createAliasExpression(
          indexContent,
          exp.indexOf(
            indexContent,
            result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
          ),
          true
        );
      }
    }
  }
  if (valueContent) {
    result.value = createAliasExpression(valueContent, trimmedOffset, true);
  }
  return result;
}
function getSlice(start, end) {
  return currentInput.slice(start, end);
}
function endOpenTag(end) {
  if (tokenizer.inSFCRoot) {
    currentOpenTag.innerLoc = getLoc(end + 1, end + 1);
  }
  addNode(currentOpenTag);
  const { tag, ns } = currentOpenTag;
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre++;
  }
  if (currentOptions.isVoidTag(tag)) {
    onCloseTag(currentOpenTag, end);
  } else {
    stack.unshift(currentOpenTag);
    if (ns === 1 || ns === 2) {
      tokenizer.inXML = true;
    }
  }
  currentOpenTag = null;
}
function onText(content, start, end) {
  {
    const tag = stack[0] && stack[0].tag;
    if (tag !== "script" && tag !== "style" && content.includes("&")) {
      content = currentOptions.decodeEntities(content, false);
    }
  }
  const parent = stack[0] || currentRoot;
  const lastNode = parent.children[parent.children.length - 1];
  if (lastNode && lastNode.type === 2) {
    lastNode.content += content;
    setLocEnd(lastNode.loc, end);
  } else {
    parent.children.push({
      type: 2,
      content,
      loc: getLoc(start, end)
    });
  }
}
function onCloseTag(el, end, isImplied = false) {
  if (isImplied) {
    setLocEnd(el.loc, backTrack(end, 60));
  } else {
    setLocEnd(el.loc, lookAhead(end, 62) + 1);
  }
  if (tokenizer.inSFCRoot) {
    if (el.children.length) {
      el.innerLoc.end = extend({}, el.children[el.children.length - 1].loc.end);
    } else {
      el.innerLoc.end = extend({}, el.innerLoc.start);
    }
    el.innerLoc.source = getSlice(
      el.innerLoc.start.offset,
      el.innerLoc.end.offset
    );
  }
  const { tag, ns, children } = el;
  if (!inVPre) {
    if (tag === "slot") {
      el.tagType = 2;
    } else if (isFragmentTemplate(el)) {
      el.tagType = 3;
    } else if (isComponent(el)) {
      el.tagType = 1;
    }
  }
  if (!tokenizer.inRCDATA) {
    el.children = condenseWhitespace(children);
  }
  if (ns === 0 && currentOptions.isIgnoreNewlineTag(tag)) {
    const first = children[0];
    if (first && first.type === 2) {
      first.content = first.content.replace(/^\r?\n/, "");
    }
  }
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre--;
  }
  if (currentVPreBoundary === el) {
    inVPre = tokenizer.inVPre = false;
    currentVPreBoundary = null;
  }
  if (tokenizer.inXML && (stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
    tokenizer.inXML = false;
  }
  {
    const props = el.props;
    if (!tokenizer.inSFCRoot && isCompatEnabled(
      "COMPILER_NATIVE_TEMPLATE",
      currentOptions
    ) && el.tag === "template" && !isFragmentTemplate(el)) {
      const parent = stack[0] || currentRoot;
      const index = parent.children.indexOf(el);
      parent.children.splice(index, 1, ...el.children);
    }
    const inlineTemplateProp = props.find(
      (p) => p.type === 6 && p.name === "inline-template"
    );
    if (inlineTemplateProp && checkCompatEnabled(
      "COMPILER_INLINE_TEMPLATE",
      currentOptions,
      inlineTemplateProp.loc
    ) && el.children.length) {
      inlineTemplateProp.value = {
        type: 2,
        content: getSlice(
          el.children[0].loc.start.offset,
          el.children[el.children.length - 1].loc.end.offset
        ),
        loc: inlineTemplateProp.loc
      };
    }
  }
}
function lookAhead(index, c) {
  let i = index;
  while (currentInput.charCodeAt(i) !== c && i < currentInput.length - 1) i++;
  return i;
}
function backTrack(index, c) {
  let i = index;
  while (currentInput.charCodeAt(i) !== c && i >= 0) i--;
  return i;
}
const specialTemplateDir = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function isFragmentTemplate({ tag, props }) {
  if (tag === "template") {
    for (let i = 0; i < props.length; i++) {
      if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) {
        return true;
      }
    }
  }
  return false;
}
function isComponent({ tag, props }) {
  if (currentOptions.isCustomElement(tag)) {
    return false;
  }
  if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || currentOptions.isBuiltInComponent && currentOptions.isBuiltInComponent(tag) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) {
    return true;
  }
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    if (p.type === 6) {
      if (p.name === "is" && p.value) {
        if (p.value.content.startsWith("vue:")) {
          return true;
        } else if (checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          currentOptions,
          p.loc
        )) {
          return true;
        }
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      p.name === "bind" && isStaticArgOf(p.arg, "is") && checkCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        currentOptions,
        p.loc
      )
    ) {
      return true;
    }
  }
  return false;
}
function isUpperCase(c) {
  return c > 64 && c < 91;
}
const windowsNewlineRE = /\r\n/g;
function condenseWhitespace(nodes) {
  const shouldCondense = currentOptions.whitespace !== "preserve";
  let removedWhitespace = false;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type === 2) {
      if (!inPre) {
        if (isAllWhitespace(node.content)) {
          const prev = nodes[i - 1] && nodes[i - 1].type;
          const next = nodes[i + 1] && nodes[i + 1].type;
          if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
            removedWhitespace = true;
            nodes[i] = null;
          } else {
            node.content = " ";
          }
        } else if (shouldCondense) {
          node.content = condense(node.content);
        }
      } else {
        node.content = node.content.replace(windowsNewlineRE, "\n");
      }
    }
  }
  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function isAllWhitespace(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isWhitespace(str.charCodeAt(i))) {
      return false;
    }
  }
  return true;
}
function hasNewlineChar(str) {
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 10 || c === 13) {
      return true;
    }
  }
  return false;
}
function condense(str) {
  let ret = "";
  let prevCharIsWhitespace = false;
  for (let i = 0; i < str.length; i++) {
    if (isWhitespace(str.charCodeAt(i))) {
      if (!prevCharIsWhitespace) {
        ret += " ";
        prevCharIsWhitespace = true;
      }
    } else {
      ret += str[i];
      prevCharIsWhitespace = false;
    }
  }
  return ret;
}
function addNode(node) {
  (stack[0] || currentRoot).children.push(node);
}
function getLoc(start, end) {
  return {
    start: tokenizer.getPos(start),
    // @ts-expect-error allow late attachment
    end: end == null ? end : tokenizer.getPos(end),
    // @ts-expect-error allow late attachment
    source: end == null ? end : getSlice(start, end)
  };
}
function cloneLoc(loc) {
  return getLoc(loc.start.offset, loc.end.offset);
}
function setLocEnd(loc, end) {
  loc.end = tokenizer.getPos(end);
  loc.source = getSlice(loc.start.offset, end);
}
function dirToAttr(dir) {
  const attr = {
    type: 6,
    name: dir.rawName,
    nameLoc: getLoc(
      dir.loc.start.offset,
      dir.loc.start.offset + dir.rawName.length
    ),
    value: void 0,
    loc: dir.loc
  };
  if (dir.exp) {
    const loc = dir.exp.loc;
    if (loc.end.offset < dir.loc.end.offset) {
      loc.start.offset--;
      loc.start.column--;
      loc.end.offset++;
      loc.end.column++;
    }
    attr.value = {
      type: 2,
      content: dir.exp.content,
      loc
    };
  }
  return attr;
}
function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0) {
  const exp = createSimpleExpression(content, isStatic, loc, constType);
  return exp;
}
function emitError(code, index, message) {
  currentOptions.onError(
    createCompilerError(code, getLoc(index, index))
  );
}
function reset() {
  tokenizer.reset();
  currentOpenTag = null;
  currentProp = null;
  currentAttrValue = "";
  currentAttrStartIndex = -1;
  currentAttrEndIndex = -1;
  stack.length = 0;
}
function baseParse(input, options) {
  reset();
  currentInput = input;
  currentOptions = extend({}, defaultParserOptions);
  if (options) {
    let key;
    for (key in options) {
      if (options[key] != null) {
        currentOptions[key] = options[key];
      }
    }
  }
  tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
  tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
  const delimiters = options && options.delimiters;
  if (delimiters) {
    tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
    tokenizer.delimiterClose = toCharCodes(delimiters[1]);
  }
  const root = currentRoot = createRoot([], input);
  tokenizer.parse(currentInput);
  root.loc = getLoc(0, input.length);
  root.children = condenseWhitespace(root.children);
  currentRoot = null;
  return root;
}
function cacheStatic(root, context) {
  walk(
    root,
    void 0,
    context,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!getSingleElementRoot(root)
  );
}
function getSingleElementRoot(root) {
  const children = root.children.filter((x) => x.type !== 3);
  return children.length === 1 && children[0].type === 1 && !isSlotOutlet(children[0]) ? children[0] : null;
}
function walk(node, parent, context, doNotHoistNode = false, inFor = false) {
  const { children } = node;
  const toCache = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 1 && child.tagType === 0) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType > 0) {
        if (constantType >= 2) {
          child.codegenNode.patchFlag = -1;
          toCache.push(child);
          continue;
        }
      } else {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          const flag = codegenNode.patchFlag;
          if ((flag === void 0 || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
            const props = getNodeProps(child);
            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }
          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType >= 2) {
        if (child.codegenNode.type === 14 && child.codegenNode.arguments.length > 0) {
          child.codegenNode.arguments.push(
            `-1`
          );
        }
        toCache.push(child);
        continue;
      }
    }
    if (child.type === 1) {
      const isComponent2 = child.tagType === 1;
      if (isComponent2) {
        context.scopes.vSlot++;
      }
      walk(child, node, context, false, inFor);
      if (isComponent2) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11) {
      walk(child, node, context, child.children.length === 1, true);
    } else if (child.type === 9) {
      for (let i2 = 0; i2 < child.branches.length; i2++) {
        walk(
          child.branches[i2],
          node,
          context,
          child.branches[i2].children.length === 1,
          inFor
        );
      }
    }
  }
  let cachedAsArray = false;
  const slotCacheKeys = [];
  if (toCache.length === children.length && node.type === 1) {
    if (node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
      node.codegenNode.children = getCacheExpression(
        createArrayExpression(node.codegenNode.children)
      );
      cachedAsArray = true;
    } else if (node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
      const slot = getSlotNode(node.codegenNode, "default");
      if (slot) {
        slotCacheKeys.push(context.cached.length);
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    } else if (node.tagType === 3 && parent && parent.type === 1 && parent.tagType === 1 && parent.codegenNode && parent.codegenNode.type === 13 && parent.codegenNode.children && !isArray(parent.codegenNode.children) && parent.codegenNode.children.type === 15) {
      const slotName = findDir(node, "slot", true);
      const slot = slotName && slotName.arg && getSlotNode(parent.codegenNode, slotName.arg);
      if (slot) {
        slotCacheKeys.push(context.cached.length);
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    }
  }
  if (!cachedAsArray) {
    for (const child of toCache) {
      slotCacheKeys.push(context.cached.length);
      child.codegenNode = context.cache(child.codegenNode);
    }
  }
  if (slotCacheKeys.length && node.type === 1 && node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
    node.codegenNode.children.properties.push(
      createObjectProperty(
        `__`,
        createSimpleExpression(JSON.stringify(slotCacheKeys), false)
      )
    );
  }
  function getCacheExpression(value) {
    const exp = context.cache(value);
    if (inFor && context.hmr) {
      exp.needArraySpread = true;
    }
    return exp;
  }
  function getSlotNode(node2, name) {
    if (node2.children && !isArray(node2.children) && node2.children.type === 15) {
      const slot = node2.children.properties.find(
        (p) => p.key === name || p.key.content === name
      );
      return slot && slot.value;
    }
  }
  if (toCache.length && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}
function getConstantType(node, context) {
  const { constantCache } = context;
  switch (node.type) {
    case 1:
      if (node.tagType !== 0) {
        return 0;
      }
      const cached = constantCache.get(node);
      if (cached !== void 0) {
        return cached;
      }
      const codegenNode = node.codegenNode;
      if (codegenNode.type !== 13) {
        return 0;
      }
      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject" && node.tag !== "math") {
        return 0;
      }
      if (codegenNode.patchFlag === void 0) {
        let returnType2 = 3;
        const generatedPropsType = getGeneratedPropsConstantType(node, context);
        if (generatedPropsType === 0) {
          constantCache.set(node, 0);
          return 0;
        }
        if (generatedPropsType < returnType2) {
          returnType2 = generatedPropsType;
        }
        for (let i = 0; i < node.children.length; i++) {
          const childType = getConstantType(node.children[i], context);
          if (childType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (childType < returnType2) {
            returnType2 = childType;
          }
        }
        if (returnType2 > 1) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7 && p.name === "bind" && p.exp) {
              const expType = getConstantType(p.exp, context);
              if (expType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (expType < returnType2) {
                returnType2 = expType;
              }
            }
          }
        }
        if (codegenNode.isBlock) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7) {
              constantCache.set(node, 0);
              return 0;
            }
          }
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(
            getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
          );
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }
        constantCache.set(node, returnType2);
        return returnType2;
      } else {
        constantCache.set(node, 0);
        return 0;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return getConstantType(node.content, context);
    case 4:
      return node.constType;
    case 8:
      let returnType = 3;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isString(child) || isSymbol(child)) {
          continue;
        }
        const childType = getConstantType(child, context);
        if (childType === 0) {
          return 0;
        } else if (childType < returnType) {
          returnType = childType;
        }
      }
      return returnType;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const allowHoistedHelperSet = /* @__PURE__ */ new Set([
  NORMALIZE_CLASS,
  NORMALIZE_STYLE,
  NORMALIZE_PROPS,
  GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    const arg = value.arguments[0];
    if (arg.type === 4) {
      return getConstantType(arg, context);
    } else if (arg.type === 14) {
      return getConstantTypeOfHelperCall(arg, context);
    }
  }
  return 0;
}
function getGeneratedPropsConstantType(node, context) {
  let returnType = 3;
  const props = getNodeProps(node);
  if (props && props.type === 15) {
    const { properties } = props;
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      const keyType = getConstantType(key, context);
      if (keyType === 0) {
        return keyType;
      }
      if (keyType < returnType) {
        returnType = keyType;
      }
      let valueType;
      if (value.type === 4) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14) {
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0;
      }
      if (valueType === 0) {
        return valueType;
      }
      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }
  return returnType;
}
function getNodeProps(node) {
  const codegenNode = node.codegenNode;
  if (codegenNode.type === 13) {
    return codegenNode.props;
  }
}
function createTransformContext(root, {
  filename = "",
  prefixIdentifiers = false,
  hoistStatic = false,
  hmr = false,
  cacheHandlers = false,
  nodeTransforms = [],
  directiveTransforms = {},
  transformHoist = null,
  isBuiltInComponent = NOOP,
  isCustomElement = NOOP,
  expressionPlugins = [],
  scopeId = null,
  slotted = true,
  ssr = false,
  inSSR = false,
  ssrCssVars = ``,
  bindingMetadata = EMPTY_OBJ,
  inline = false,
  isTS = false,
  onError = defaultOnError,
  onWarn = defaultOnWarn,
  compatConfig
}) {
  const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const context = {
    // options
    filename,
    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
    prefixIdentifiers,
    hoistStatic,
    hmr,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    slotted,
    ssr,
    inSSR,
    ssrCssVars,
    bindingMetadata,
    inline,
    isTS,
    onError,
    onWarn,
    compatConfig,
    // state
    root,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper(name) {
      const count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper(name) {
      const count = context.helpers.get(name);
      if (count) {
        const currentCount = count - 1;
        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },
    replaceNode(node) {
      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode(node) {
      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      if (!node || node === context.currentNode) {
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }
      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: NOOP,
    addIdentifiers(exp) {
    },
    removeIdentifiers(exp) {
    },
    hoist(exp) {
      if (isString(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      const identifier = createSimpleExpression(
        `_hoisted_${context.hoists.length}`,
        false,
        exp.loc,
        2
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache(exp, isVNode = false, inVOnce = false) {
      const cacheExp = createCacheExpression(
        context.cached.length,
        exp,
        isVNode,
        inVOnce
      );
      context.cached.push(cacheExp);
      return cacheExp;
    }
  };
  {
    context.filters = /* @__PURE__ */ new Set();
  }
  return context;
}
function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  if (options.hoistStatic) {
    cacheStatic(root, context);
  }
  if (!options.ssr) {
    createRootCodegen(root, context);
  }
  root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  root.transformed = true;
  {
    root.filters = [...context.filters];
  }
}
function createRootCodegen(root, context) {
  const { helper } = context;
  const { children } = root;
  if (children.length === 1) {
    const singleElementRootChild = getSingleElementRoot(root);
    if (singleElementRootChild && singleElementRootChild.codegenNode) {
      const codegenNode = singleElementRootChild.codegenNode;
      if (codegenNode.type === 13) {
        convertToBlock(codegenNode, context);
      }
      root.codegenNode = codegenNode;
    } else {
      root.codegenNode = children[0];
    }
  } else if (children.length > 1) {
    let patchFlag = 64;
    root.codegenNode = createVNodeCall(
      context,
      helper(FRAGMENT),
      void 0,
      root.children,
      patchFlag,
      void 0,
      void 0,
      true,
      void 0,
      false
    );
  } else ;
}
function traverseChildren(parent, context) {
  let i = 0;
  const nodeRemoved = () => {
    i--;
  };
  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (isString(child)) continue;
    context.grandParent = context.parent;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}
function traverseNode(node, context) {
  context.currentNode = node;
  const { nodeTransforms } = context;
  const exitFns = [];
  for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
    const onExit = nodeTransforms[i2](node, context);
    if (onExit) {
      if (isArray(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }
    if (!context.currentNode) {
      return;
    } else {
      node = context.currentNode;
    }
  }
  switch (node.type) {
    case 3:
      if (!context.ssr) {
        context.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }
      break;
    // for container types, further traverse downwards
    case 9:
      for (let i2 = 0; i2 < node.branches.length; i2++) {
        traverseNode(node.branches[i2], context);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      traverseChildren(node, context);
      break;
  }
  context.currentNode = node;
  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}
function createStructuralDirectiveTransform(name, fn) {
  const matches = isString(name) ? (n) => n === name : (n) => name.test(n);
  return (node, context) => {
    if (node.type === 1) {
      const { props } = node;
      if (node.tagType === 3 && props.some(isVSlot)) {
        return;
      }
      const exitFns = [];
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 7 && matches(prop.name)) {
          props.splice(i, 1);
          i--;
          const onExit = fn(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }
      return exitFns;
    }
  };
}
const PURE_ANNOTATION = `/*@__PURE__*/`;
const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, {
  mode = "function",
  prefixIdentifiers = mode === "module",
  sourceMap = false,
  filename = `template.vue.html`,
  scopeId = null,
  optimizeImports = false,
  runtimeGlobalName = `Vue`,
  runtimeModuleName = `vue`,
  ssrRuntimeModuleName = "vue/server-renderer",
  ssr = false,
  isTS = false,
  inSSR = false
}) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssrRuntimeModuleName,
    ssr,
    isTS,
    inSSR,
    source: ast.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(key) {
      return `_${helperNameMap[key]}`;
    },
    push(code, newlineIndex = -2, node) {
      context.code += code;
    },
    indent() {
      newline(++context.indentLevel);
    },
    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },
    newline() {
      newline(context.indentLevel);
    }
  };
  function newline(n) {
    context.push(
      "\n" + `  `.repeat(n),
      0
      /* Start */
    );
  }
  return context;
}
function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  const {
    mode,
    push,
    prefixIdentifiers,
    indent,
    deindent,
    newline,
    scopeId,
    ssr
  } = context;
  const helpers = Array.from(ast.helpers);
  const hasHelpers = helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== "module";
  const preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  }
  const functionName = ssr ? `ssrRender` : `render`;
  const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  const signature = args.join(", ");
  {
    push(`function ${functionName}(${signature}) {`);
  }
  indent();
  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent();
    if (hasHelpers) {
      push(
        `const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`,
        -1
        /* End */
      );
      newline();
    }
  }
  if (ast.components.length) {
    genAssets(ast.components, "component", context);
    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }
  if (ast.directives.length) {
    genAssets(ast.directives, "directive", context);
    if (ast.temps > 0) {
      newline();
    }
  }
  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, "filter", context);
    newline();
  }
  if (ast.temps > 0) {
    push(`let `);
    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }
  if (ast.components.length || ast.directives.length || ast.temps) {
    push(
      `
`,
      0
      /* Start */
    );
    newline();
  }
  if (!ssr) {
    push(`return `);
  }
  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }
  if (useWithBlock) {
    deindent();
    push(`}`);
  }
  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    preamble: ``,
    map: context.map ? context.map.toJSON() : void 0
  };
}
function genFunctionPreamble(ast, context) {
  const {
    ssr,
    prefixIdentifiers,
    push,
    newline,
    runtimeModuleName,
    runtimeGlobalName,
    ssrRuntimeModuleName
  } = context;
  const VueBinding = runtimeGlobalName;
  const helpers = Array.from(ast.helpers);
  if (helpers.length > 0) {
    {
      push(
        `const _Vue = ${VueBinding}
`,
        -1
        /* End */
      );
      if (ast.hoists.length) {
        const staticHelpers = [
          CREATE_VNODE,
          CREATE_ELEMENT_VNODE,
          CREATE_COMMENT,
          CREATE_TEXT,
          CREATE_STATIC
        ].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ");
        push(
          `const { ${staticHelpers} } = _Vue
`,
          -1
          /* End */
        );
      }
    }
  }
  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
  const resolver = helper(
    type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
  );
  for (let i = 0; i < assets.length; i++) {
    let id = assets[i];
    const maybeSelfReference = id.endsWith("__self");
    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }
    push(
      `const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
    );
    if (i < assets.length - 1) {
      newline();
    }
  }
}
function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }
  context.pure = true;
  const { push, newline } = context;
  newline();
  for (let i = 0; i < hoists.length; i++) {
    const exp = hoists[i];
    if (exp) {
      push(`const _hoisted_${i + 1} = `);
      genNode(exp, context);
      newline();
    }
  }
  context.pure = false;
}
function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 || false;
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
  const { push, newline } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (isString(node)) {
      push(
        node,
        -3
        /* Unknown */
      );
    } else if (isArray(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }
    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(",");
        newline();
      } else {
        comma && push(", ");
      }
    }
  }
}
function genNode(node, context) {
  if (isString(node)) {
    context.push(
      node,
      -3
      /* Unknown */
    );
    return;
  }
  if (isSymbol(node)) {
    context.push(context.helper(node));
    return;
  }
  switch (node.type) {
    case 1:
    case 9:
    case 11:
      genNode(node.codegenNode, context);
      break;
    case 2:
      genText(node, context);
      break;
    case 4:
      genExpression(node, context);
      break;
    case 5:
      genInterpolation(node, context);
      break;
    case 12:
      genNode(node.codegenNode, context);
      break;
    case 8:
      genCompoundExpression(node, context);
      break;
    case 3:
      genComment(node, context);
      break;
    case 13:
      genVNodeCall(node, context);
      break;
    case 14:
      genCallExpression(node, context);
      break;
    case 15:
      genObjectExpression(node, context);
      break;
    case 17:
      genArrayExpression(node, context);
      break;
    case 18:
      genFunctionExpression(node, context);
      break;
    case 19:
      genConditionalExpression(node, context);
      break;
    case 20:
      genCacheExpression(node, context);
      break;
    case 21:
      genNodeList(node.body, context, true, false);
      break;
  }
}
function genText(node, context) {
  context.push(JSON.stringify(node.content), -3, node);
}
function genExpression(node, context) {
  const { content, isStatic } = node;
  context.push(
    isStatic ? JSON.stringify(content) : content,
    -3,
    node
  );
}
function genInterpolation(node, context) {
  const { push, helper, pure } = context;
  if (pure) push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}
function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isString(child)) {
      context.push(
        child,
        -3
        /* Unknown */
      );
    } else {
      genNode(child, context);
    }
  }
}
function genExpressionAsPropertyKey(node, context) {
  const { push } = context;
  if (node.type === 8) {
    push(`[`);
    genCompoundExpression(node, context);
    push(`]`);
  } else if (node.isStatic) {
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, -2, node);
  } else {
    push(`[${node.content}]`, -3, node);
  }
}
function genComment(node, context) {
  const { push, helper, pure } = context;
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(
    `${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`,
    -3,
    node
  );
}
function genVNodeCall(node, context) {
  const { push, helper, pure } = context;
  const {
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2
  } = node;
  let patchFlagString;
  if (patchFlag) {
    {
      patchFlagString = String(patchFlag);
    }
  }
  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }
  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }
  if (pure) {
    push(PURE_ANNOTATION);
  }
  const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
  push(helper(callHelper) + `(`, -2, node);
  genNodeList(
    genNullableArgs([tag, props, children, patchFlagString, dynamicProps]),
    context
  );
  push(`)`);
  if (isBlock) {
    push(`)`);
  }
  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}
function genNullableArgs(args) {
  let i = args.length;
  while (i--) {
    if (args[i] != null) break;
  }
  return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
  const { push, helper, pure } = context;
  const callee = isString(node.callee) ? node.callee : helper(node.callee);
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(callee + `(`, -2, node);
  genNodeList(node.arguments, context);
  push(`)`);
}
function genObjectExpression(node, context) {
  const { push, indent, deindent, newline } = context;
  const { properties } = node;
  if (!properties.length) {
    push(`{}`, -2, node);
    return;
  }
  const multilines = properties.length > 1 || false;
  push(multilines ? `{` : `{ `);
  multilines && indent();
  for (let i = 0; i < properties.length; i++) {
    const { key, value } = properties[i];
    genExpressionAsPropertyKey(key, context);
    push(`: `);
    genNode(value, context);
    if (i < properties.length - 1) {
      push(`,`);
      newline();
    }
  }
  multilines && deindent();
  push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
  const { push, indent, deindent } = context;
  const { params, returns, body, newline, isSlot } = node;
  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }
  push(`(`, -2, node);
  if (isArray(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }
  push(`) => `);
  if (newline || body) {
    push(`{`);
    indent();
  }
  if (returns) {
    if (newline) {
      push(`return `);
    }
    if (isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }
  if (newline || body) {
    deindent();
    push(`}`);
  }
  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(`, undefined, true`);
    }
    push(`)`);
  }
}
function genConditionalExpression(node, context) {
  const { test, consequent, alternate, newline: needNewline } = node;
  const { push, indent, deindent, newline } = context;
  if (test.type === 4) {
    const needsParens = !isSimpleIdentifier(test.content);
    needsParens && push(`(`);
    genExpression(test, context);
    needsParens && push(`)`);
  } else {
    push(`(`);
    genNode(test, context);
    push(`)`);
  }
  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19;
  if (!isNested) {
    context.indentLevel++;
  }
  genNode(alternate, context);
  if (!isNested) {
    context.indentLevel--;
  }
  needNewline && deindent(
    true
    /* without newline */
  );
}
function genCacheExpression(node, context) {
  const { push, helper, indent, deindent, newline } = context;
  const { needPauseTracking, needArraySpread } = node;
  if (needArraySpread) {
    push(`[...(`);
  }
  push(`_cache[${node.index}] || (`);
  if (needPauseTracking) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1`);
    if (node.inVOnce) push(`, true`);
    push(`),`);
    newline();
    push(`(`);
  }
  push(`_cache[${node.index}] = `);
  genNode(node.value, context);
  if (needPauseTracking) {
    push(`).cacheIndex = ${node.index},`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }
  push(`)`);
  if (needArraySpread) {
    push(`)]`);
  }
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const transformExpression = (node, context) => {
  if (node.type === 5) {
    node.content = processExpression(
      node.content,
      context
    );
  } else if (node.type === 1) {
    const memo = findDir(node, "memo");
    for (let i = 0; i < node.props.length; i++) {
      const dir = node.props[i];
      if (dir.type === 7 && dir.name !== "for") {
        const exp = dir.exp;
        const arg = dir.arg;
        if (exp && exp.type === 4 && !(dir.name === "on" && arg) && // key has been processed in transformFor(vMemo + vFor)
        !(memo && arg && arg.type === 4 && arg.content === "key")) {
          dir.exp = processExpression(
            exp,
            context,
            // slot args must be processed as function params
            dir.name === "slot"
          );
        }
        if (arg && arg.type === 4 && !arg.isStatic) {
          dir.arg = processExpression(arg, context);
        }
      }
    }
  }
};
function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
  {
    return node;
  }
}
function stringifyExpression(exp) {
  if (isString(exp)) {
    return exp;
  } else if (exp.type === 4) {
    return exp.content;
  } else {
    return exp.children.map(stringifyExpression).join("");
  }
}
const transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          );
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          );
        }
      };
    });
  }
);
function processIf(node, dir, context, processCodegen) {
  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(
      createCompilerError(28, dir.loc)
    );
    dir.exp = createSimpleExpression(`true`, false, loc);
  }
  if (dir.name === "if") {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9,
      loc: cloneLoc(node.loc),
      branches: [branch]
    };
    context.replaceNode(ifNode);
    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    const siblings = context.parent.children;
    let i = siblings.indexOf(node);
    while (i-- >= -1) {
      const sibling = siblings[i];
      if (sibling && sibling.type === 3) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 9) {
        if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        context.removeNode();
        const branch = createIfBranch(node, dir);
        sibling.branches.push(branch);
        const onExit = processCodegen && processCodegen(sibling, branch, false);
        traverseNode(branch, context);
        if (onExit) onExit();
        context.currentNode = null;
      } else {
        context.onError(
          createCompilerError(30, node.loc)
        );
      }
      break;
    }
  }
}
function createIfBranch(node, dir) {
  const isTemplateIf = node.tagType === 3;
  return {
    type: 10,
    loc: node.loc,
    condition: dir.name === "else" ? void 0 : dir.exp,
    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
    userKey: findProp(node, `key`),
    isTemplateIf
  };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, keyIndex, context),
      // make sure to pass in asBlock: true so that the comment node call
      // closes the current block.
      createCallExpression(context.helper(CREATE_COMMENT), [
        '""',
        "true"
      ])
    );
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
  const { helper } = context;
  const keyProperty = createObjectProperty(
    `key`,
    createSimpleExpression(
      `${keyIndex}`,
      false,
      locStub,
      2
    )
  );
  const { children } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11) {
      const vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      let patchFlag = 64;
      return createVNodeCall(
        context,
        helper(FRAGMENT),
        createObjectExpression([keyProperty]),
        children,
        patchFlag,
        void 0,
        void 0,
        true,
        false,
        false,
        branch.loc
      );
    }
  } else {
    const ret = firstChild.codegenNode;
    const vnodeCall = getMemoedVNodeCall(ret);
    if (vnodeCall.type === 13) {
      convertToBlock(vnodeCall, context);
    }
    injectProp(vnodeCall, keyProperty, context);
    return ret;
  }
}
function getParentCondition(node) {
  while (true) {
    if (node.type === 19) {
      if (node.alternate.type === 19) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20) {
      node = node.value;
    }
  }
}
const transformBind = (dir, _node, context) => {
  const { modifiers, loc } = dir;
  const arg = dir.arg;
  let { exp } = dir;
  if (exp && exp.type === 4 && !exp.content.trim()) {
    {
      exp = void 0;
    }
  }
  if (!exp) {
    if (arg.type !== 4 || !arg.isStatic) {
      context.onError(
        createCompilerError(
          52,
          arg.loc
        )
      );
      return {
        props: [
          createObjectProperty(arg, createSimpleExpression("", true, loc))
        ]
      };
    }
    transformBindShorthand(dir);
    exp = dir.exp;
  }
  if (arg.type !== 4) {
    arg.children.unshift(`(`);
    arg.children.push(`) || ""`);
  } else if (!arg.isStatic) {
    arg.content = arg.content ? `${arg.content} || ""` : `""`;
  }
  if (modifiers.some((mod) => mod.content === "camel")) {
    if (arg.type === 4) {
      if (arg.isStatic) {
        arg.content = camelize(arg.content);
      } else {
        arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
      }
    } else {
      arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
      arg.children.push(`)`);
    }
  }
  if (!context.inSSR) {
    if (modifiers.some((mod) => mod.content === "prop")) {
      injectPrefix(arg, ".");
    }
    if (modifiers.some((mod) => mod.content === "attr")) {
      injectPrefix(arg, "^");
    }
  }
  return {
    props: [createObjectProperty(arg, exp)]
  };
};
const transformBindShorthand = (dir, context) => {
  const arg = dir.arg;
  const propName = camelize(arg.content);
  dir.exp = createSimpleExpression(propName, false, arg.loc);
};
const injectPrefix = (arg, prefix) => {
  if (arg.type === 4) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = `\`${prefix}\${${arg.content}}\``;
    }
  } else {
    arg.children.unshift(`'${prefix}' + (`);
    arg.children.push(`)`);
  }
};
const transformFor = createStructuralDirectiveTransform(
  "for",
  (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const isTemplate = isTemplateNode(node);
      const memo = findDir(node, "memo");
      const keyProp = findProp(node, `key`, false, true);
      const isDirKey = keyProp && keyProp.type === 7;
      if (isDirKey && !keyProp.exp) {
        transformBindShorthand(keyProp);
      }
      let keyExp = keyProp && (keyProp.type === 6 ? keyProp.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : keyProp.exp);
      const keyProperty = keyProp && keyExp ? createObjectProperty(`key`, keyExp) : null;
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        renderExp,
        fragmentFlag,
        void 0,
        void 0,
        true,
        !isStableFragment,
        false,
        node.loc
      );
      return () => {
        let childBlock;
        const { children } = forNode;
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(
            context,
            helper(FRAGMENT),
            keyProperty ? createObjectExpression([keyProperty]) : void 0,
            node.children,
            64,
            void 0,
            void 0,
            true,
            void 0,
            false
          );
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          if (childBlock.isBlock !== !isStableFragment) {
            if (childBlock.isBlock) {
              removeHelper(OPEN_BLOCK);
              removeHelper(
                getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
              );
            } else {
              removeHelper(
                getVNodeHelper(context.inSSR, childBlock.isComponent)
              );
            }
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }
        if (memo) {
          const loop = createFunctionExpression(
            createForLoopParams(forNode.parseResult, [
              createSimpleExpression(`_cached`)
            ])
          );
          loop.body = createBlockStatement([
            createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
            createCompoundExpression([
              `if (_cached`,
              ...keyExp ? [` && _cached.key === `, keyExp] : [],
              ` && ${context.helperString(
                IS_MEMO_SAME
              )}(_cached, _memo)) return _cached`
            ]),
            createCompoundExpression([`const _item = `, childBlock]),
            createSimpleExpression(`_item.memo = _memo`),
            createSimpleExpression(`return _item`)
          ]);
          renderExp.arguments.push(
            loop,
            createSimpleExpression(`_cache`),
            createSimpleExpression(String(context.cached.length))
          );
          context.cached.push(null);
        } else {
          renderExp.arguments.push(
            createFunctionExpression(
              createForLoopParams(forNode.parseResult),
              childBlock,
              true
            )
          );
        }
      };
    });
  }
);
function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(
      createCompilerError(31, dir.loc)
    );
    return;
  }
  const parseResult = dir.forParseResult;
  if (!parseResult) {
    context.onError(
      createCompilerError(32, dir.loc)
    );
    return;
  }
  finalizeForParseResult(parseResult);
  const { addIdentifiers, removeIdentifiers, scopes } = context;
  const { source, value, key, index } = parseResult;
  const forNode = {
    type: 11,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode);
  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit) onExit();
  };
}
function finalizeForParseResult(result, context) {
  if (result.finalized) return;
  result.finalized = true;
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
  return createParamsList([value, key, index, ...memoArgs]);
}
function createParamsList(args) {
  let i = args.length;
  while (i--) {
    if (args[i]) break;
  }
  return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
const defaultFallback = createSimpleExpression(`undefined`, false);
const trackSlotScopes = (node, context) => {
  if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
    const vSlot = findDir(node, "slot");
    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return () => {
        context.scopes.vSlot--;
      };
    }
  }
};
const trackVForSlotScopes = (node, context) => {
  let vFor;
  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
    const result = vFor.forParseResult;
    if (result) {
      finalizeForParseResult(result);
      const { value, key, index } = result;
      const { addIdentifiers, removeIdentifiers } = context;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return () => {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};
const buildClientSlotFn = (props, _vForExp, children, loc) => createFunctionExpression(
  props,
  children,
  false,
  true,
  children.length ? children[0].loc : loc
);
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const { children, loc } = node;
  const slotsProperties = [];
  const dynamicSlots = [];
  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
  const onComponentSlot = findDir(node, "slot", true);
  if (onComponentSlot) {
    const { arg, exp } = onComponentSlot;
    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }
    slotsProperties.push(
      createObjectProperty(
        arg || createSimpleExpression("default", true),
        buildSlotFn(exp, void 0, children, loc)
      )
    );
  }
  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = /* @__PURE__ */ new Set();
  let conditionalBranchIndex = 0;
  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;
    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
      if (slotElement.type !== 3) {
        implicitDefaultChildren.push(slotElement);
      }
      continue;
    }
    if (onComponentSlot) {
      context.onError(
        createCompilerError(37, slotDir.loc)
      );
      break;
    }
    hasTemplateSlots = true;
    const { children: slotChildren, loc: slotLoc } = slotElement;
    const {
      arg: slotName = createSimpleExpression(`default`, true),
      exp: slotProps,
      loc: dirLoc
    } = slotDir;
    let staticSlotName;
    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }
    const vFor = findDir(slotElement, "for");
    const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
    let vIf;
    let vElse;
    if (vIf = findDir(slotElement, "if")) {
      hasDynamicSlots = true;
      dynamicSlots.push(
        createConditionalExpression(
          vIf.exp,
          buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
          defaultFallback
        )
      );
    } else if (vElse = findDir(
      slotElement,
      /^else(-if)?$/,
      true
      /* allowEmpty */
    )) {
      let j = i;
      let prev;
      while (j--) {
        prev = children[j];
        if (prev.type !== 3 && isNonWhitespaceContent(prev)) {
          break;
        }
      }
      if (prev && isTemplateNode(prev) && findDir(prev, /^(else-)?if$/)) {
        let conditional = dynamicSlots[dynamicSlots.length - 1];
        while (conditional.alternate.type === 19) {
          conditional = conditional.alternate;
        }
        conditional.alternate = vElse.exp ? createConditionalExpression(
          vElse.exp,
          buildDynamicSlot(
            slotName,
            slotFunction,
            conditionalBranchIndex++
          ),
          defaultFallback
        ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(
          createCompilerError(30, vElse.loc)
        );
      }
    } else if (vFor) {
      hasDynamicSlots = true;
      const parseResult = vFor.forParseResult;
      if (parseResult) {
        finalizeForParseResult(parseResult);
        dynamicSlots.push(
          createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(
              createForLoopParams(parseResult),
              buildDynamicSlot(slotName, slotFunction),
              true
            )
          ])
        );
      } else {
        context.onError(
          createCompilerError(
            32,
            vFor.loc
          )
        );
      }
    } else {
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(
            createCompilerError(
              38,
              dirLoc
            )
          );
          continue;
        }
        seenSlotNames.add(staticSlotName);
        if (staticSlotName === "default") {
          hasNamedDefaultSlot = true;
        }
      }
      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }
  if (!onComponentSlot) {
    const buildDefaultSlotProperty = (props, children2) => {
      const fn = buildSlotFn(props, void 0, children2, loc);
      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }
      return createObjectProperty(`default`, fn);
    };
    if (!hasTemplateSlots) {
      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
      if (hasNamedDefaultSlot) {
        context.onError(
          createCompilerError(
            39,
            implicitDefaultChildren[0].loc
          )
        );
      } else {
        slotsProperties.push(
          buildDefaultSlotProperty(void 0, implicitDefaultChildren)
        );
      }
    }
  }
  const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
  let slots = createObjectExpression(
    slotsProperties.concat(
      createObjectProperty(
        `_`,
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        createSimpleExpression(
          slotFlag + ``,
          false
        )
      )
    ),
    loc
  );
  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [
      slots,
      createArrayExpression(dynamicSlots)
    ]);
  }
  return {
    slots,
    hasDynamicSlots
  };
}
function buildDynamicSlot(name, fn, index) {
  const props = [
    createObjectProperty(`name`, name),
    createObjectProperty(`fn`, fn)
  ];
  if (index != null) {
    props.push(
      createObjectProperty(`key`, createSimpleExpression(String(index), true))
    );
  }
  return createObjectExpression(props);
}
function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    switch (child.type) {
      case 1:
        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
          return true;
        }
        break;
      case 9:
        if (hasForwardedSlots(child.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }
  return false;
}
function isNonWhitespaceContent(node) {
  if (node.type !== 2 && node.type !== 12)
    return true;
  return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}
const directiveImportMap = /* @__PURE__ */ new WeakMap();
const transformElement = (node, context) => {
  return function postTransformElement() {
    node = context.currentNode;
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    const { tag, props } = node;
    const isComponent2 = node.tagType === 1;
    let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
    const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    let vnodeProps;
    let vnodeChildren;
    let patchFlag = 0;
    let vnodeDynamicProps;
    let dynamicPropNames;
    let vnodeDirectives;
    let shouldUseBlock = (
      // dynamic component may resolve to plain elements
      isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
      // updates inside get proper isSVG flag at runtime. (#639, #643)
      // This is technically web-specific, but splitting the logic out of core
      // leads to too much unnecessary complexity.
      (tag === "svg" || tag === "foreignObject" || tag === "math")
    );
    if (props.length > 0) {
      const propsBuildResult = buildProps(
        node,
        context,
        void 0,
        isComponent2,
        isDynamicComponent
      );
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      const directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(
        directives.map((dir) => buildDirectiveArgs(dir, context))
      ) : void 0;
      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    }
    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        shouldUseBlock = true;
        patchFlag |= 1024;
      }
      const shouldBuildAsSlots = isComponent2 && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;
      if (shouldBuildAsSlots) {
        const { slots, hasDynamicSlots } = buildSlots(node, context);
        vnodeChildren = slots;
        if (hasDynamicSlots) {
          patchFlag |= 1024;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        const child = node.children[0];
        const type = child.type;
        const hasDynamicTextChild = type === 5 || type === 8;
        if (hasDynamicTextChild && getConstantType(child, context) === 0) {
          patchFlag |= 1;
        }
        if (hasDynamicTextChild || type === 2) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    }
    if (dynamicPropNames && dynamicPropNames.length) {
      vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
    }
    node.codegenNode = createVNodeCall(
      context,
      vnodeTag,
      vnodeProps,
      vnodeChildren,
      patchFlag === 0 ? void 0 : patchFlag,
      vnodeDynamicProps,
      vnodeDirectives,
      !!shouldUseBlock,
      false,
      isComponent2,
      node.loc
    );
  };
};
function resolveComponentType(node, context, ssr = false) {
  let { tag } = node;
  const isExplicitDynamic = isComponentTag(tag);
  const isProp = findProp(
    node,
    "is",
    false,
    true
    /* allow empty */
  );
  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled(
      "COMPILER_IS_ON_ELEMENT",
      context
    )) {
      let exp;
      if (isProp.type === 6) {
        exp = isProp.value && createSimpleExpression(isProp.value.content, true);
      } else {
        exp = isProp.exp;
        if (!exp) {
          exp = createSimpleExpression(`is`, false, isProp.arg.loc);
        }
      }
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
      tag = isProp.value.content.slice(4);
    }
  }
  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
  if (builtIn) {
    if (!ssr) context.helper(builtIn);
    return builtIn;
  }
  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
  const { tag, loc: elementLoc, children } = node;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = [];
  const hasChildren = children.length > 0;
  let shouldUseBlock = false;
  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];
  const pushMergeArg = (arg) => {
    if (properties.length) {
      mergeArgs.push(
        createObjectExpression(dedupeProperties(properties), elementLoc)
      );
      properties = [];
    }
    if (arg) mergeArgs.push(arg);
  };
  const pushRefVForMarker = () => {
    if (context.scopes.vFor > 0) {
      properties.push(
        createObjectProperty(
          createSimpleExpression("ref_for", true),
          createSimpleExpression("true")
        )
      );
    }
  };
  const analyzePatchFlag = ({ key, value }) => {
    if (isStaticExp(key)) {
      const name = key.content;
      const isEventHandler = isOn(name);
      if (isEventHandler && (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== "onclick" && // omit v-model handlers
      name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !isReservedProp(name)) {
        hasHydrationEventBinding = true;
      }
      if (isEventHandler && isReservedProp(name)) {
        hasVnodeHook = true;
      }
      if (isEventHandler && value.type === 14) {
        value = value.arguments[0];
      }
      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
        return;
      }
      if (name === "ref") {
        hasRef = true;
      } else if (name === "class") {
        hasClassBinding = true;
      } else if (name === "style") {
        hasStyleBinding = true;
      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
      if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (prop.type === 6) {
      const { loc, name, nameLoc, value } = prop;
      let isStatic = true;
      if (name === "ref") {
        hasRef = true;
        pushRefVForMarker();
      }
      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      properties.push(
        createObjectProperty(
          createSimpleExpression(name, true, nameLoc),
          createSimpleExpression(
            value ? value.content : "",
            isStatic,
            value ? value.loc : loc
          )
        )
      );
    } else {
      const { name, arg, exp, loc, modifiers } = prop;
      const isVBind = name === "bind";
      const isVOn = name === "on";
      if (name === "slot") {
        if (!isComponent2) {
          context.onError(
            createCompilerError(40, loc)
          );
        }
        continue;
      }
      if (name === "once" || name === "memo") {
        continue;
      }
      if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      if (isVOn && ssr) {
        continue;
      }
      if (
        // #938: elements with dynamic keys should be forced into blocks
        isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
      ) {
        shouldUseBlock = true;
      }
      if (isVBind && isStaticArgOf(arg, "ref")) {
        pushRefVForMarker();
      }
      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;
        if (exp) {
          if (isVBind) {
            {
              pushMergeArg();
              if (isCompatEnabled(
                "COMPILER_V_BIND_OBJECT_ORDER",
                context
              )) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            pushRefVForMarker();
            pushMergeArg();
            mergeArgs.push(exp);
          } else {
            pushMergeArg({
              type: 14,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent2 ? [exp] : [exp, `true`]
            });
          }
        } else {
          context.onError(
            createCompilerError(
              isVBind ? 34 : 35,
              loc
            )
          );
        }
        continue;
      }
      if (isVBind && modifiers.some((mod) => mod.content === "prop")) {
        patchFlag |= 32;
      }
      const directiveTransform = context.directiveTransforms[name];
      if (directiveTransform) {
        const { props: props2, needRuntime } = directiveTransform(prop, node, context);
        !ssr && props2.forEach(analyzePatchFlag);
        if (isVOn && arg && !isStaticExp(arg)) {
          pushMergeArg(createObjectExpression(props2, elementLoc));
        } else {
          properties.push(...props2);
        }
        if (needRuntime) {
          runtimeDirectives.push(prop);
          if (isSymbol(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!isBuiltInDirective(name)) {
        runtimeDirectives.push(prop);
        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }
  let propsExpression = void 0;
  if (mergeArgs.length) {
    pushMergeArg();
    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(
        context.helper(MERGE_PROPS),
        mergeArgs,
        elementLoc
      );
    } else {
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(
      dedupeProperties(properties),
      elementLoc
    );
  }
  if (hasDynamicKeys) {
    patchFlag |= 16;
  } else {
    if (hasClassBinding && !isComponent2) {
      patchFlag |= 2;
    }
    if (hasStyleBinding && !isComponent2) {
      patchFlag |= 4;
    }
    if (dynamicPropNames.length) {
      patchFlag |= 8;
    }
    if (hasHydrationEventBinding) {
      patchFlag |= 32;
    }
  }
  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512;
  }
  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15:
        let classKeyIndex = -1;
        let styleKeyIndex = -1;
        let hasDynamicKey = false;
        for (let i = 0; i < propsExpression.properties.length; i++) {
          const key = propsExpression.properties[i].key;
          if (isStaticExp(key)) {
            if (key.content === "class") {
              classKeyIndex = i;
            } else if (key.content === "style") {
              styleKeyIndex = i;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }
        const classProp = propsExpression.properties[classKeyIndex];
        const styleProp = propsExpression.properties[styleKeyIndex];
        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(
              context.helper(NORMALIZE_CLASS),
              [classProp.value]
            );
          }
          if (styleProp && // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17)) {
            styleProp.value = createCallExpression(
              context.helper(NORMALIZE_STYLE),
              [styleProp.value]
            );
          }
        } else {
          propsExpression = createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [propsExpression]
          );
        }
        break;
      case 14:
        break;
      default:
        propsExpression = createCallExpression(
          context.helper(NORMALIZE_PROPS),
          [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]
        );
        break;
    }
  }
  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames,
    shouldUseBlock
  };
}
function dedupeProperties(properties) {
  const knownProps = /* @__PURE__ */ new Map();
  const deduped = [];
  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.key.type === 8 || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }
    const name = prop.key.content;
    const existing = knownProps.get(name);
    if (existing) {
      if (name === "style" || name === "class" || isOn(name)) {
        mergeAsArray(existing, prop);
      }
    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }
  return deduped;
}
function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression(
      [existing.value, incoming.value],
      existing.loc
    );
  }
}
function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);
  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
  }
  const { loc } = dir;
  if (dir.exp) dirArgs.push(dir.exp);
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }
    dirArgs.push(dir.arg);
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(`void 0`);
    }
    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(
      createObjectExpression(
        dir.modifiers.map(
          (modifier) => createObjectProperty(modifier, trueExpression)
        ),
        loc
      )
    );
  }
  return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;
  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ", ";
  }
  return propsNamesString + `]`;
}
function isComponentTag(tag) {
  return tag === "component" || tag === "Component";
}
const transformSlotOutlet = (node, context) => {
  if (isSlotOutlet(node)) {
    const { children, loc } = node;
    const { slotName, slotProps } = processSlotOutlet(node, context);
    const slotArgs = [
      context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
      slotName,
      "{}",
      "undefined",
      "true"
    ];
    let expectedLen = 2;
    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }
    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }
    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }
    slotArgs.splice(expectedLen);
    node.codegenNode = createCallExpression(
      context.helper(RENDER_SLOT),
      slotArgs,
      loc
    );
  }
};
function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = void 0;
  const nonNameProps = [];
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (p.value) {
        if (p.name === "name") {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = camelize(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
        if (p.exp) {
          slotName = p.exp;
        } else if (p.arg && p.arg.type === 4) {
          const name = camelize(p.arg.content);
          slotName = p.exp = createSimpleExpression(name, false, p.arg.loc);
        }
      } else {
        if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }
        nonNameProps.push(p);
      }
    }
  }
  if (nonNameProps.length > 0) {
    const { props, directives } = buildProps(
      node,
      context,
      nonNameProps,
      false,
      false
    );
    slotProps = props;
    if (directives.length) {
      context.onError(
        createCompilerError(
          36,
          directives[0].loc
        )
      );
    }
  }
  return {
    slotName,
    slotProps
  };
}
const transformOn$1 = (dir, node, context, augmentor) => {
  const { loc, modifiers, arg } = dir;
  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35, loc));
  }
  let eventName;
  if (arg.type === 4) {
    if (arg.isStatic) {
      let rawName = arg.content;
      if (rawName.startsWith("vue:")) {
        rawName = `vnode-${rawName.slice(4)}`;
      }
      const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        toHandlerKey(camelize(rawName))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${rawName}`
      );
      eventName = createSimpleExpression(eventString, true, arg.loc);
    } else {
      eventName = createCompoundExpression([
        `${context.helperString(TO_HANDLER_KEY)}(`,
        arg,
        `)`
      ]);
    }
  } else {
    eventName = arg;
    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
    eventName.children.push(`)`);
  }
  let exp = dir.exp;
  if (exp && !exp.content.trim()) {
    exp = void 0;
  }
  let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
  if (exp) {
    const isMemberExp = isMemberExpression(exp);
    const isInlineStatement = !(isMemberExp || isFnExpression(exp));
    const hasMultipleStatements = exp.content.includes(`;`);
    if (isInlineStatement || shouldCache && isMemberExp) {
      exp = createCompoundExpression([
        `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
        exp,
        hasMultipleStatements ? `}` : `)`
      ]);
    }
  }
  let ret = {
    props: [
      createObjectProperty(
        eventName,
        exp || createSimpleExpression(`() => {}`, false, loc)
      )
    ]
  };
  if (augmentor) {
    ret = augmentor(ret);
  }
  if (shouldCache) {
    ret.props[0].value = context.cache(ret.props[0].value);
  }
  ret.props.forEach((p) => p.key.isHandlerKey = true);
  return ret;
};
const transformText = (node, context) => {
  if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
    return () => {
      const children = node.children;
      let currentContainer = void 0;
      let hasText = false;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child)) {
          hasText = true;
          for (let j = i + 1; j < children.length; j++) {
            const next = children[j];
            if (isText$1(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression(
                  [child],
                  child.loc
                );
              }
              currentContainer.children.push(` + `, next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = void 0;
              break;
            }
          }
        }
      }
      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(
        (p) => p.type === 7 && !context.directiveTransforms[p.name]
      ) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === "template"))) {
        return;
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child) || child.type === 8) {
          const callArgs = [];
          if (child.type !== 2 || child.content !== " ") {
            callArgs.push(child);
          }
          if (!context.ssr && getConstantType(child, context) === 0) {
            callArgs.push(
              `1`
            );
          }
          children[i] = {
            type: 12,
            content: child,
            loc: child.loc,
            codegenNode: createCallExpression(
              context.helper(CREATE_TEXT),
              callArgs
            )
          };
        }
      }
    };
  }
};
const seen$1 = /* @__PURE__ */ new WeakSet();
const transformOnce = (node, context) => {
  if (node.type === 1 && findDir(node, "once", true)) {
    if (seen$1.has(node) || context.inVOnce || context.inSSR) {
      return;
    }
    seen$1.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return () => {
      context.inVOnce = false;
      const cur = context.currentNode;
      if (cur.codegenNode) {
        cur.codegenNode = context.cache(
          cur.codegenNode,
          true,
          true
        );
      }
    };
  }
};
const transformModel$1 = (dir, node, context) => {
  const { exp, arg } = dir;
  if (!exp) {
    context.onError(
      createCompilerError(41, dir.loc)
    );
    return createTransformProps();
  }
  const rawExp = exp.loc.source.trim();
  const expString = exp.type === 4 ? exp.content : rawExp;
  const bindingType = context.bindingMetadata[rawExp];
  if (bindingType === "props" || bindingType === "props-aliased") {
    context.onError(createCompilerError(44, exp.loc));
    return createTransformProps();
  }
  if (!expString.trim() || !isMemberExpression(exp) && true) {
    context.onError(
      createCompilerError(42, exp.loc)
    );
    return createTransformProps();
  }
  const propName = arg ? arg : createSimpleExpression("modelValue", true);
  const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
  let assignmentExp;
  const eventArg = context.isTS ? `($event: any)` : `$event`;
  {
    assignmentExp = createCompoundExpression([
      `${eventArg} => ((`,
      exp,
      `) = $event)`
    ]);
  }
  const props = [
    // modelValue: foo
    createObjectProperty(propName, dir.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    createObjectProperty(eventName, assignmentExp)
  ];
  if (dir.modifiers.length && node.tagType === 1) {
    const modifiers = dir.modifiers.map((m) => m.content).map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
    const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
    props.push(
      createObjectProperty(
        modifiersKey,
        createSimpleExpression(
          `{ ${modifiers} }`,
          false,
          dir.loc,
          2
        )
      )
    );
  }
  return createTransformProps(props);
};
function createTransformProps(props = []) {
  return { props };
}
const validDivisionCharRE = /[\w).+\-_$\]]/;
const transformFilter = (node, context) => {
  if (!isCompatEnabled("COMPILER_FILTERS", context)) {
    return;
  }
  if (node.type === 5) {
    rewriteFilter(node.content, context);
  } else if (node.type === 1) {
    node.props.forEach((prop) => {
      if (prop.type === 7 && prop.name !== "for" && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};
function rewriteFilter(node, context) {
  if (node.type === 4) {
    parseFilter(node, context);
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child !== "object") continue;
      if (child.type === 4) {
        parseFilter(child, context);
      } else if (child.type === 8) {
        rewriteFilter(node, context);
      } else if (child.type === 5) {
        rewriteFilter(child.content, context);
      }
    }
  }
}
function parseFilter(node, context) {
  const exp = node.content;
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c, prev, i, expression, filters = [];
  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 39 && prev !== 92) inSingle = false;
    } else if (inDouble) {
      if (c === 34 && prev !== 92) inDouble = false;
    } else if (inTemplateString) {
      if (c === 96 && prev !== 92) inTemplateString = false;
    } else if (inRegex) {
      if (c === 47 && prev !== 92) inRegex = false;
    } else if (c === 124 && // pipe
    exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
      if (expression === void 0) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 34:
          inDouble = true;
          break;
        // "
        case 39:
          inSingle = true;
          break;
        // '
        case 96:
          inTemplateString = true;
          break;
        // `
        case 40:
          paren++;
          break;
        // (
        case 41:
          paren--;
          break;
        // )
        case 91:
          square++;
          break;
        // [
        case 93:
          square--;
          break;
        // ]
        case 123:
          curly++;
          break;
        // {
        case 125:
          curly--;
          break;
      }
      if (c === 47) {
        let j = i - 1;
        let p;
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== " ") break;
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }
  if (expression === void 0) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }
  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }
  if (filters.length) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }
    node.content = expression;
    node.ast = void 0;
  }
}
function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  const i = filter.indexOf("(");
  if (i < 0) {
    context.filters.add(filter);
    return `${toValidAssetId(filter, "filter")}(${exp})`;
  } else {
    const name = filter.slice(0, i);
    const args = filter.slice(i + 1);
    context.filters.add(name);
    return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
  }
}
const seen = /* @__PURE__ */ new WeakSet();
const transformMemo = (node, context) => {
  if (node.type === 1) {
    const dir = findDir(node, "memo");
    if (!dir || seen.has(node)) {
      return;
    }
    seen.add(node);
    return () => {
      const codegenNode = node.codegenNode || context.currentNode.codegenNode;
      if (codegenNode && codegenNode.type === 13) {
        if (node.tagType !== 1) {
          convertToBlock(codegenNode, context);
        }
        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
          dir.exp,
          createFunctionExpression(void 0, codegenNode),
          `_cache`,
          String(context.cached.length)
        ]);
        context.cached.push(null);
      }
    };
  }
};
function getBaseTransformPreset(prefixIdentifiers) {
  return [
    [
      transformOnce,
      transformIf,
      transformMemo,
      transformFor,
      ...[transformFilter],
      ...[],
      transformSlotOutlet,
      transformElement,
      trackSlotScopes,
      transformText
    ],
    {
      on: transformOn$1,
      bind: transformBind,
      model: transformModel$1
    }
  ];
}
function baseCompile(source, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === "module";
  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(47));
    } else if (isModuleMode) {
      onError(createCompilerError(48));
    }
  }
  const prefixIdentifiers = false;
  if (options.cacheHandlers) {
    onError(createCompilerError(49));
  }
  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(50));
  }
  const resolvedOptions = extend({}, options, {
    prefixIdentifiers
  });
  const ast = isString(source) ? baseParse(source, resolvedOptions) : source;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(
    ast,
    extend({}, resolvedOptions, {
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: extend(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
        // user transforms
      )
    })
  );
  return generate(ast, resolvedOptions);
}
const BindingTypes = {
  "DATA": "data",
  "PROPS": "props",
  "PROPS_ALIASED": "props-aliased",
  "SETUP_LET": "setup-let",
  "SETUP_CONST": "setup-const",
  "SETUP_REACTIVE_CONST": "setup-reactive-const",
  "SETUP_MAYBE_REF": "setup-maybe-ref",
  "SETUP_REF": "setup-ref",
  "OPTIONS": "options",
  "LITERAL_CONST": "literal-const"
};
const noopDirectiveTransform = () => ({ props: [] });
/**
* @vue/compiler-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const V_MODEL_RADIO = Symbol(``);
const V_MODEL_CHECKBOX = Symbol(
  ``
);
const V_MODEL_TEXT = Symbol(``);
const V_MODEL_SELECT = Symbol(
  ``
);
const V_MODEL_DYNAMIC = Symbol(
  ``
);
const V_ON_WITH_MODIFIERS = Symbol(
  ``
);
const V_ON_WITH_KEYS = Symbol(
  ``
);
const V_SHOW = Symbol(``);
const TRANSITION = Symbol(``);
const TRANSITION_GROUP = Symbol(
  ``
);
registerRuntimeHelpers({
  [V_MODEL_RADIO]: `vModelRadio`,
  [V_MODEL_CHECKBOX]: `vModelCheckbox`,
  [V_MODEL_TEXT]: `vModelText`,
  [V_MODEL_SELECT]: `vModelSelect`,
  [V_MODEL_DYNAMIC]: `vModelDynamic`,
  [V_ON_WITH_MODIFIERS]: `withModifiers`,
  [V_ON_WITH_KEYS]: `withKeys`,
  [V_SHOW]: `vShow`,
  [TRANSITION]: `Transition`,
  [TRANSITION_GROUP]: `TransitionGroup`
});
let decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
  if (!decoder) {
    decoder = document.createElement("div");
  }
  if (asAttr) {
    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
    return decoder.children[0].getAttribute("foo");
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}
const parserOptions = {
  parseMode: "html",
  isVoidTag,
  isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
  isPreTag: (tag) => tag === "pre",
  isIgnoreNewlineTag: (tag) => tag === "pre" || tag === "textarea",
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: (tag) => {
    if (tag === "Transition" || tag === "transition") {
      return TRANSITION;
    } else if (tag === "TransitionGroup" || tag === "transition-group") {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(tag, parent, rootNamespace) {
    let ns = parent ? parent.ns : rootNamespace;
    if (parent && ns === 2) {
      if (parent.tag === "annotation-xml") {
        if (tag === "svg") {
          return 1;
        }
        if (parent.props.some(
          (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
        )) {
          ns = 0;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
        ns = 0;
      }
    } else if (parent && ns === 1) {
      if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
        ns = 0;
      }
    }
    if (ns === 0) {
      if (tag === "svg") {
        return 1;
      }
      if (tag === "math") {
        return 2;
      }
    }
    return ns;
  }
};
const transformStyle = (node) => {
  if (node.type === 1) {
    node.props.forEach((p, i) => {
      if (p.type === 6 && p.name === "style" && p.value) {
        node.props[i] = {
          type: 7,
          name: `bind`,
          arg: createSimpleExpression(`style`, true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};
const parseInlineCSS = (cssText, loc) => {
  const normalized = parseStringStyle(cssText);
  return createSimpleExpression(
    JSON.stringify(normalized),
    false,
    loc,
    3
  );
};
function createDOMCompilerError(code, loc) {
  return createCompilerError(
    code,
    loc
  );
}
const DOMErrorCodes = {
  "X_V_HTML_NO_EXPRESSION": 53,
  "53": "X_V_HTML_NO_EXPRESSION",
  "X_V_HTML_WITH_CHILDREN": 54,
  "54": "X_V_HTML_WITH_CHILDREN",
  "X_V_TEXT_NO_EXPRESSION": 55,
  "55": "X_V_TEXT_NO_EXPRESSION",
  "X_V_TEXT_WITH_CHILDREN": 56,
  "56": "X_V_TEXT_WITH_CHILDREN",
  "X_V_MODEL_ON_INVALID_ELEMENT": 57,
  "57": "X_V_MODEL_ON_INVALID_ELEMENT",
  "X_V_MODEL_ARG_ON_ELEMENT": 58,
  "58": "X_V_MODEL_ARG_ON_ELEMENT",
  "X_V_MODEL_ON_FILE_INPUT_ELEMENT": 59,
  "59": "X_V_MODEL_ON_FILE_INPUT_ELEMENT",
  "X_V_MODEL_UNNECESSARY_VALUE": 60,
  "60": "X_V_MODEL_UNNECESSARY_VALUE",
  "X_V_SHOW_NO_EXPRESSION": 61,
  "61": "X_V_SHOW_NO_EXPRESSION",
  "X_TRANSITION_INVALID_CHILDREN": 62,
  "62": "X_TRANSITION_INVALID_CHILDREN",
  "X_IGNORED_SIDE_EFFECT_TAG": 63,
  "63": "X_IGNORED_SIDE_EFFECT_TAG",
  "__EXTEND_POINT__": 64,
  "64": "__EXTEND_POINT__"
};
const DOMErrorMessages = {
  [53]: `v-html is missing expression.`,
  [54]: `v-html will override element children.`,
  [55]: `v-text is missing expression.`,
  [56]: `v-text will override element children.`,
  [57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
  [58]: `v-model argument is not supported on plain elements.`,
  [59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
  [60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
  [61]: `v-show is missing expression.`,
  [62]: `<Transition> expects exactly one child element or component.`,
  [63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};
const transformVHtml = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(53, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(54, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`innerHTML`, true, loc),
        exp || createSimpleExpression("", true)
      )
    ]
  };
};
const transformVText = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(55, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(56, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`textContent`, true),
        exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(
          context.helperString(TO_DISPLAY_STRING),
          [exp],
          loc
        ) : createSimpleExpression("", true)
      )
    ]
  };
};
const transformModel = (dir, node, context) => {
  const baseResult = transformModel$1(dir, node, context);
  if (!baseResult.props.length || node.tagType === 1) {
    return baseResult;
  }
  if (dir.arg) {
    context.onError(
      createDOMCompilerError(
        58,
        dir.arg.loc
      )
    );
  }
  const { tag } = node;
  const isCustomElement = context.isCustomElement(tag);
  if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
    let directiveToUse = V_MODEL_TEXT;
    let isInvalidType = false;
    if (tag === "input" || isCustomElement) {
      const type = findProp(node, `type`);
      if (type) {
        if (type.type === 7) {
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type.value) {
          switch (type.value.content) {
            case "radio":
              directiveToUse = V_MODEL_RADIO;
              break;
            case "checkbox":
              directiveToUse = V_MODEL_CHECKBOX;
              break;
            case "file":
              isInvalidType = true;
              context.onError(
                createDOMCompilerError(
                  59,
                  dir.loc
                )
              );
              break;
          }
        }
      } else if (hasDynamicKeyVBind(node)) {
        directiveToUse = V_MODEL_DYNAMIC;
      } else ;
    } else if (tag === "select") {
      directiveToUse = V_MODEL_SELECT;
    } else ;
    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(
      createDOMCompilerError(
        57,
        dir.loc
      )
    );
  }
  baseResult.props = baseResult.props.filter(
    (p) => !(p.key.type === 4 && p.key.content === "modelValue")
  );
  return baseResult;
};
const isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
const isNonKeyModifier = /* @__PURE__ */ makeMap(
  // event propagation management
  `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
);
const maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
const isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`);
const resolveModifiers = (key, modifiers, context, loc) => {
  const keyModifiers = [];
  const nonKeyModifiers = [];
  const eventOptionModifiers = [];
  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i].content;
    if (modifier === "native" && checkCompatEnabled(
      "COMPILER_V_ON_NATIVE",
      context
    )) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      eventOptionModifiers.push(modifier);
    } else {
      if (maybeKeyModifier(modifier)) {
        if (isStaticExp(key)) {
          if (isKeyboardEvent(key.content.toLowerCase())) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }
  return {
    keyModifiers,
    nonKeyModifiers,
    eventOptionModifiers
  };
};
const transformClick = (key, event) => {
  const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
  return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
    `(`,
    key,
    `) === "onClick" ? "${event}" : (`,
    key,
    `)`
  ]) : key;
};
const transformOn = (dir, node, context) => {
  return transformOn$1(dir, node, context, (baseResult) => {
    const { modifiers } = dir;
    if (!modifiers.length) return baseResult;
    let { key, value: handlerExp } = baseResult.props[0];
    const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
    if (nonKeyModifiers.includes("right")) {
      key = transformClick(key, `onContextmenu`);
    }
    if (nonKeyModifiers.includes("middle")) {
      key = transformClick(key, `onMouseup`);
    }
    if (nonKeyModifiers.length) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
        handlerExp,
        JSON.stringify(nonKeyModifiers)
      ]);
    }
    if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
    (!isStaticExp(key) || isKeyboardEvent(key.content.toLowerCase()))) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
        handlerExp,
        JSON.stringify(keyModifiers)
      ]);
    }
    if (eventOptionModifiers.length) {
      const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
      key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
    }
    return {
      props: [createObjectProperty(key, handlerExp)]
    };
  });
};
const transformShow = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(61, loc)
    );
  }
  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};
const ignoreSideEffectTags = (node, context) => {
  if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
    context.removeNode();
  }
};
const DOMNodeTransforms = [
  transformStyle,
  ...[]
];
const DOMDirectiveTransforms = {
  cloak: noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  // override compiler-core
  on: transformOn,
  // override compiler-core
  show: transformShow
};
function compile(src, options = {}) {
  return baseCompile(
    src,
    extend({}, parserOptions, options, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend(
        {},
        DOMDirectiveTransforms,
        options.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
function parse(template, options = {}) {
  return baseParse(template, extend({}, parserOptions, options));
}
const compilerDom_esmBundler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE_TRANSITION,
  BindingTypes,
  CAMELIZE,
  CAPITALIZE,
  CREATE_BLOCK,
  CREATE_COMMENT,
  CREATE_ELEMENT_BLOCK,
  CREATE_ELEMENT_VNODE,
  CREATE_SLOTS,
  CREATE_STATIC,
  CREATE_TEXT,
  CREATE_VNODE,
  CompilerDeprecationTypes,
  ConstantTypes,
  DOMDirectiveTransforms,
  DOMErrorCodes,
  DOMErrorMessages,
  DOMNodeTransforms,
  ElementTypes,
  ErrorCodes,
  FRAGMENT,
  GUARD_REACTIVE_PROPS,
  IS_MEMO_SAME,
  IS_REF,
  KEEP_ALIVE,
  MERGE_PROPS,
  NORMALIZE_CLASS,
  NORMALIZE_PROPS,
  NORMALIZE_STYLE,
  Namespaces,
  NodeTypes,
  OPEN_BLOCK,
  POP_SCOPE_ID,
  PUSH_SCOPE_ID,
  RENDER_LIST,
  RENDER_SLOT,
  RESOLVE_COMPONENT,
  RESOLVE_DIRECTIVE,
  RESOLVE_DYNAMIC_COMPONENT,
  RESOLVE_FILTER,
  SET_BLOCK_TRACKING,
  SUSPENSE,
  TELEPORT,
  TO_DISPLAY_STRING,
  TO_HANDLERS,
  TO_HANDLER_KEY,
  TRANSITION,
  TRANSITION_GROUP,
  TS_NODE_TYPES,
  UNREF,
  V_MODEL_CHECKBOX,
  V_MODEL_DYNAMIC,
  V_MODEL_RADIO,
  V_MODEL_SELECT,
  V_MODEL_TEXT,
  V_ON_WITH_KEYS,
  V_ON_WITH_MODIFIERS,
  V_SHOW,
  WITH_CTX,
  WITH_DIRECTIVES,
  WITH_MEMO,
  advancePositionWithClone,
  advancePositionWithMutation,
  assert,
  baseCompile,
  baseParse,
  buildDirectiveArgs,
  buildProps,
  buildSlots,
  checkCompatEnabled,
  compile,
  convertToBlock,
  createArrayExpression,
  createAssignmentExpression,
  createBlockStatement,
  createCacheExpression,
  createCallExpression,
  createCompilerError,
  createCompoundExpression,
  createConditionalExpression,
  createDOMCompilerError,
  createForLoopParams,
  createFunctionExpression,
  createIfStatement,
  createInterpolation,
  createObjectExpression,
  createObjectProperty,
  createReturnStatement,
  createRoot,
  createSequenceExpression,
  createSimpleExpression,
  createStructuralDirectiveTransform,
  createTemplateLiteral,
  createTransformContext,
  createVNodeCall,
  errorMessages,
  extractIdentifiers,
  findDir,
  findProp,
  forAliasRE,
  generate,
  generateCodeFrame,
  getBaseTransformPreset,
  getConstantType,
  getMemoedVNodeCall,
  getVNodeBlockHelper,
  getVNodeHelper,
  hasDynamicKeyVBind,
  hasScopeRef,
  helperNameMap,
  injectProp,
  isCoreComponent,
  isFnExpression,
  isFnExpressionBrowser,
  isFnExpressionNode,
  isFunctionType,
  isInDestructureAssignment,
  isInNewExpression,
  isMemberExpression,
  isMemberExpressionBrowser,
  isMemberExpressionNode,
  isReferencedIdentifier,
  isSimpleIdentifier,
  isSlotOutlet,
  isStaticArgOf,
  isStaticExp,
  isStaticProperty,
  isStaticPropertyKey,
  isTemplateNode,
  isText: isText$1,
  isVPre,
  isVSlot,
  locStub,
  noopDirectiveTransform,
  parse,
  parserOptions,
  processExpression,
  processFor,
  processIf,
  processSlotOutlet,
  registerRuntimeHelpers,
  resolveComponentType,
  stringifyExpression,
  toValidAssetId,
  trackSlotScopes,
  trackVForSlotScopes,
  transform,
  transformBind,
  transformElement,
  transformExpression,
  transformModel: transformModel$1,
  transformOn: transformOn$1,
  transformStyle,
  traverseNode,
  unwrapTSNode,
  walkBlockDeclarations,
  walkFunctionParams,
  walkIdentifiers,
  warnDeprecation
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(compilerDom_esmBundler);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(runtimeDom_esmBundler);
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(shared_esmBundler);
/**
* vue v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var hasRequiredVue_cjs_prod;
function requireVue_cjs_prod() {
  if (hasRequiredVue_cjs_prod) return vue_cjs_prod;
  hasRequiredVue_cjs_prod = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e) {
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        for (var k in e) {
          n[k] = e[k];
        }
      }
      n.default = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          return shared.NOOP;
        }
      }
      const key = shared.genCacheKey(template, options);
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend(
        {
          hoistStatic: true,
          onError: void 0,
          onWarn: shared.NOOP
        },
        options
      );
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      const render = new Function("Vue", code)(runtimeDom__namespace);
      render._rc = true;
      return compileCache[key] = render;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = runtimeDom[k];
    });
  })(vue_cjs_prod);
  return vue_cjs_prod;
}
var hasRequiredVue;
function requireVue() {
  if (hasRequiredVue) return vue.exports;
  hasRequiredVue = 1;
  {
    vue.exports = requireVue_cjs_prod();
  }
  return vue.exports;
}
var hasRequiredVue3Fitty_common;
function requireVue3Fitty_common() {
  if (hasRequiredVue3Fitty_common) return vue3Fitty_common.exports;
  hasRequiredVue3Fitty_common = 1;
  (function(module) {
    (function() {
      var __webpack_modules__ = {
        /***/
        744: (
          /***/
          function(__unused_webpack_module, exports) {
            exports.Z = (sfc, props) => {
              const target = sfc.__vccOpts || sfc;
              for (const [key, val] of props) {
                target[key] = val;
              }
              return target;
            };
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.d = function(exports, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
              Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      !function() {
        __webpack_require__.r = function(exports) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports, "__esModule", { value: true });
        };
      }();
      !function() {
        __webpack_require__.p = "";
      }();
      var __webpack_exports__ = {};
      !function() {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          Fitty: function() {
            return (
              /* reexport */
              Fitty
            );
          },
          "default": function() {
            return (
              /* binding */
              entry_lib
            );
          }
        });
        if (typeof window !== "undefined") {
          var currentScript = window.document.currentScript;
          var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          if (src) {
            __webpack_require__.p = src[1];
          }
        }
        var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = requireVue();
        const _hoisted_12 = ["id"];
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            class: "mainwrap",
            id: _ctx.contentID
          }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "content", {}, void 0, true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {}, void 0, true)], 8, _hoisted_12);
        }
        var e = function(e2) {
          if (e2) {
            var t = function(e3) {
              return [].slice.call(e3);
            }, n = 0, i = 1, r = 2, o = 3, a = [], l = null, u = "requestAnimationFrame" in e2 ? function() {
              e2.cancelAnimationFrame(l), l = e2.requestAnimationFrame(function() {
                return s(a.filter(function(e3) {
                  return e3.dirty && e3.active;
                }));
              });
            } : function() {
            }, c = function(e3) {
              return function() {
                a.forEach(function(t2) {
                  return t2.dirty = e3;
                }), u();
              };
            }, s = function(e3) {
              e3.filter(function(e4) {
                return !e4.styleComputed;
              }).forEach(function(e4) {
                e4.styleComputed = m(e4);
              }), e3.filter(y).forEach(v);
              var t2 = e3.filter(p);
              t2.forEach(d), t2.forEach(function(e4) {
                v(e4), f(e4);
              }), t2.forEach(S);
            }, f = function(e3) {
              return e3.dirty = n;
            }, d = function(e3) {
              e3.availableWidth = e3.element.parentNode.clientWidth, e3.currentWidth = e3.element.scrollWidth, e3.previousFontSize = e3.currentFontSize, e3.currentFontSize = Math.min(Math.max(e3.minSize, e3.availableWidth / e3.currentWidth * e3.previousFontSize), e3.maxSize), e3.whiteSpace = e3.multiLine && e3.currentFontSize === e3.minSize ? "normal" : "nowrap";
            }, p = function(e3) {
              return e3.dirty !== r || e3.dirty === r && e3.element.parentNode.clientWidth !== e3.availableWidth;
            }, m = function(t2) {
              var n2 = e2.getComputedStyle(t2.element, null);
              return t2.currentFontSize = parseFloat(n2.getPropertyValue("font-size")), t2.display = n2.getPropertyValue("display"), t2.whiteSpace = n2.getPropertyValue("white-space"), true;
            }, y = function(e3) {
              var t2 = false;
              return !e3.preStyleTestCompleted && (/inline-/.test(e3.display) || (t2 = true, e3.display = "inline-block"), "nowrap" !== e3.whiteSpace && (t2 = true, e3.whiteSpace = "nowrap"), e3.preStyleTestCompleted = true, t2);
            }, v = function(e3) {
              e3.element.style.whiteSpace = e3.whiteSpace, e3.element.style.display = e3.display, e3.element.style.fontSize = e3.currentFontSize + "px";
            }, S = function(e3) {
              e3.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e3.previousFontSize, newValue: e3.currentFontSize, scaleFactor: e3.currentFontSize / e3.previousFontSize } }));
            }, h = function(e3, t2) {
              return function() {
                e3.dirty = t2, e3.active && u();
              };
            }, w = function(e3) {
              return function() {
                a = a.filter(function(t2) {
                  return t2.element !== e3.element;
                }), e3.observeMutations && e3.observer.disconnect(), e3.element.style.whiteSpace = e3.originalStyle.whiteSpace, e3.element.style.display = e3.originalStyle.display, e3.element.style.fontSize = e3.originalStyle.fontSize;
              };
            }, b = function(e3) {
              return function() {
                e3.active || (e3.active = true, u());
              };
            }, z = function(e3) {
              return function() {
                return e3.active = false;
              };
            }, F = function(e3) {
              e3.observeMutations && (e3.observer = new MutationObserver(h(e3, i)), e3.observer.observe(e3.element, e3.observeMutations));
            }, g = { minSize: 16, maxSize: 512, multiLine: true, observeMutations: "MutationObserver" in e2 && { subtree: true, childList: true, characterData: true } }, W = null, E = function() {
              e2.clearTimeout(W), W = e2.setTimeout(c(r), x.observeWindowDelay);
            }, M = ["resize", "orientationchange"];
            return Object.defineProperty(x, "observeWindow", { set: function(t2) {
              var n2 = "".concat(t2 ? "add" : "remove", "EventListener");
              M.forEach(function(t3) {
                e2[n2](t3, E);
              });
            } }), x.observeWindow = true, x.observeWindowDelay = 100, x.fitAll = c(o), x;
          }
          function C(e3, t2) {
            var n2 = Object.assign({}, g, t2), i2 = e3.map(function(e4) {
              var t3 = Object.assign({}, n2, { element: e4, active: true });
              return function(e5) {
                e5.originalStyle = { whiteSpace: e5.element.style.whiteSpace, display: e5.element.style.display, fontSize: e5.element.style.fontSize }, F(e5), e5.newbie = true, e5.dirty = true, a.push(e5);
              }(t3), { element: e4, fit: h(t3, o), unfreeze: b(t3), freeze: z(t3), unsubscribe: w(t3) };
            });
            return u(), i2;
          }
          function x(e3) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return "string" == typeof e3 ? C(t(document.querySelectorAll(e3)), n2) : C([e3], n2)[0];
          }
        }("undefined" == typeof window ? null : window);
        var fitty_module = e;
        const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
        var esm_browser_native = {
          randomUUID
        };
        let getRandomValues;
        const rnds8 = new Uint8Array(16);
        function rng() {
          if (!getRandomValues) {
            getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
            if (!getRandomValues) {
              throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            }
          }
          return getRandomValues(rnds8);
        }
        const byteToHex = [];
        for (let i = 0; i < 256; ++i) {
          byteToHex.push((i + 256).toString(16).slice(1));
        }
        function unsafeStringify(arr, offset = 0) {
          return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
        }
        function v4(options, buf, offset) {
          if (esm_browser_native.randomUUID && !buf && !options) {
            return esm_browser_native.randomUUID();
          }
          options = options || {};
          const rnds = options.random || (options.rng || rng)();
          rnds[6] = rnds[6] & 15 | 64;
          rnds[8] = rnds[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = rnds[i];
            }
            return buf;
          }
          return unsafeStringify(rnds);
        }
        var esm_browser_v4 = v4;
        var Fittyvue_type_script_lang_ts = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
          setup() {
            const contentID = "fitty-" + esm_browser_v4();
            return {
              contentID
            };
          },
          mounted() {
            this.$nextTick(() => {
              fitty_module("#" + this.contentID, this.options);
            });
          },
          name: "lumenpink-fitty",
          props: {
            options: Object
          }
        });
        var exportHelper = __webpack_require__(744);
        const __exports__ = /* @__PURE__ */ (0, exportHelper.Z)(Fittyvue_type_script_lang_ts, [["render", render], ["__scopeId", "data-v-85cf7f76"]]);
        var Fitty = __exports__;
        const components_plugin = {
          install(app) {
            app.component(Fitty.name, Fitty);
          }
        };
        var components = components_plugin;
        var entry_lib = components;
      }();
      module.exports = __webpack_exports__;
    })();
  })(vue3Fitty_common);
  return vue3Fitty_common.exports;
}
var vue3Fitty_commonExports = requireVue3Fitty_common();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AvatarDialog",
  props: /* @__PURE__ */ mergeModels({
    avatarUrl: { type: String, required: true }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const showAvatar = useModel(__props, "modelValue");
    const __returned__ = { showAvatar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $setup.showAvatar,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.showAvatar = $event)
  }, {
    default: withCtx(() => [
      createVNode(QCard, null, {
        default: withCtx(() => [
          createBaseVNode("img", { src: $props.avatarUrl }, null, 8, _hoisted_1$1)
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]);
}
const AvatarDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/zowie/dev/pkstatus/src/components/Card/AvatarDialog.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MemberCard",
  props: {
    member: { type: Object, required: true },
    system: { type: Object, required: true },
    details: { type: Boolean, required: false, default: true },
    popup: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const settings = useSettingsStore();
    const { detectPronouns, lookup, id: idOpts } = storeToRefs(settings);
    const showAvatar = ref(false);
    const systemPage = computed(
      () => {
        var _a;
        return (_a = useRoute().name) == null ? void 0 : _a.toString().startsWith("lookup-system");
      }
    );
    const __returned__ = { settings, detectPronouns, lookup, idOpts, showAvatar, systemPage, get Fitty() {
      return vue3Fitty_commonExports.Fitty;
    }, InitialFallbackAvatar, RelativeTimeDisplay, AvatarDialog, get renderPkDescription() {
      return renderPkDescription;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "col-auto self-center" };
const _hoisted_2 = { class: "col q-ml-md self-center" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { key: 2 };
const _hoisted_7 = { key: 3 };
const _hoisted_8 = { key: 4 };
const _hoisted_9 = { key: 5 };
const _hoisted_10 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, null, {
    default: withCtx(() => {
      var _a;
      return [
        createVNode(QCardSection, { class: "row" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              $props.member.avatarUrl ? (openBlock(), createBlock($setup["InitialFallbackAvatar"], {
                key: 0,
                size: "64px",
                url: $props.member.avatarUrl,
                name: $props.member.getName($setup.detectPronouns),
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.showAvatar = !!$props.member.avatarUrl)
              }, null, 8, ["url", "name"])) : createCommentVNode("v-if", true)
            ]),
            createBaseVNode("div", _hoisted_2, [
              createVNode($setup["Fitty"], {
                style: { "line-height": "100%" },
                options: { maxSize: 100 }
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($props.member.getName($setup.detectPronouns)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        $props.member.bannerUrl ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $props.member.bannerUrl
        }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true),
        $props.popup ? (openBlock(), createBlock(QCardActions, {
          key: 1,
          class: "bg-primary text-white",
          style: normalizeStyle(
            $setup.lookup.colorAccent ? `min-height: 52px; background-color: #${$props.member.color} !important;` : ""
          )
        }, {
          default: withCtx(() => [
            !$setup.systemPage ? (openBlock(), createBlock(QBtn, {
              key: 0,
              color: "dark",
              label: "View System",
              to: `/lookup/system/${$props.system.id}`
            }, null, 8, ["to"])) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["style"])) : createCommentVNode("v-if", true),
        $props.details ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
          default: withCtx(() => [
            createVNode(QMarkupTable, {
              flat: "",
              separator: "horizontal",
              style: { "overflow": "hidden" }
            }, {
              default: withCtx(() => [
                createBaseVNode("tbody", null, [
                  createBaseVNode("tr", null, [
                    _cache[2] || (_cache[2] = createBaseVNode(
                      "td",
                      null,
                      "ID",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.member.formatId($setup.idOpts)),
                      1
                      /* TEXT */
                    )
                  ]),
                  $props.member.getPronouns($setup.detectPronouns) ? (openBlock(), createElementBlock("tr", _hoisted_4, [
                    _cache[3] || (_cache[3] = createBaseVNode(
                      "td",
                      null,
                      "Pronouns",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.member.getPronouns($setup.detectPronouns)),
                      1
                      /* TEXT */
                    )
                  ])) : createCommentVNode("v-if", true),
                  createBaseVNode("tr", null, [
                    _cache[4] || (_cache[4] = createBaseVNode(
                      "td",
                      null,
                      "System",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.system.getName($setup.detectPronouns)),
                      1
                      /* TEXT */
                    )
                  ]),
                  $props.member.messageCount ? (openBlock(), createElementBlock("tr", _hoisted_5, [
                    _cache[5] || (_cache[5] = createBaseVNode(
                      "td",
                      null,
                      "Messages Sent",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.member.messageCount.toLocaleString()),
                      1
                      /* TEXT */
                    )
                  ])) : createCommentVNode("v-if", true),
                  $props.member.lastMessageAt ? (openBlock(), createElementBlock("tr", _hoisted_6, [
                    _cache[6] || (_cache[6] = createBaseVNode(
                      "td",
                      null,
                      "Last Message",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode("td", null, [
                      createVNode($setup["RelativeTimeDisplay"], {
                        time: $props.member.lastMessageAt
                      }, null, 8, ["time"])
                    ])
                  ])) : createCommentVNode("v-if", true),
                  $props.member.birthday ? (openBlock(), createElementBlock("tr", _hoisted_7, [
                    _cache[7] || (_cache[7] = createBaseVNode(
                      "td",
                      null,
                      "Birthday",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.member.getFormattedBirthday()),
                      1
                      /* TEXT */
                    )
                  ])) : createCommentVNode("v-if", true),
                  $props.member.color ? (openBlock(), createElementBlock("tr", _hoisted_8, [
                    _cache[8] || (_cache[8] = createBaseVNode(
                      "td",
                      null,
                      "Color",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      {
                        style: normalizeStyle({
                          color: `#${$props.member.color}`,
                          fontSize: "48px",
                          lineHeight: "16px",
                          textIndent: "-4px"
                        })
                      },
                      " • ",
                      4
                      /* STYLE */
                    )
                  ])) : createCommentVNode("v-if", true),
                  $props.member.createdAt ? (openBlock(), createElementBlock("tr", _hoisted_9, [
                    _cache[9] || (_cache[9] = createBaseVNode(
                      "td",
                      null,
                      "Created At",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.member.createdAt.format("YYYY-MM-DD")),
                      1
                      /* TEXT */
                    )
                  ])) : createCommentVNode("v-if", true)
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        !!((_a = $props.member.description) == null ? void 0 : _a.length) ? (openBlock(), createBlock(QCardSection, { key: 3 }, {
          default: withCtx(() => [
            createCommentVNode(" eslint-disable vue/no-v-html -- needed for rendering "),
            createBaseVNode("div", {
              class: "description",
              innerHTML: $setup.renderPkDescription($props.member.description)
            }, null, 8, _hoisted_10),
            createCommentVNode(" eslint-enable vue/no-v-html ")
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        $props.member.avatarUrl ? (openBlock(), createBlock($setup["AvatarDialog"], {
          key: 4,
          modelValue: $setup.showAvatar,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.showAvatar = $event),
          "avatar-url": $props.member.avatarUrl
        }, null, 8, ["modelValue", "avatar-url"])) : createCommentVNode("v-if", true)
      ];
    }),
    _: 1
    /* STABLE */
  });
}
const MemberCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bc5d2d8d"], ["__file", "/home/zowie/dev/pkstatus/src/components/Card/MemberCard.vue"]]);
export {
  AvatarDialog as A,
  MemberCard as M,
  vue3Fitty_commonExports as v
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyQ2FyZC1CU2NpaUhqay5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B2dWUrY29tcGlsZXItY29yZUAzLjUuMTgvbm9kZV9tb2R1bGVzL0B2dWUvY29tcGlsZXItY29yZS9kaXN0L2NvbXBpbGVyLWNvcmUuZXNtLWJ1bmRsZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHZ1ZStjb21waWxlci1kb21AMy41LjE4L25vZGVfbW9kdWxlcy9AdnVlL2NvbXBpbGVyLWRvbS9kaXN0L2NvbXBpbGVyLWRvbS5lc20tYnVuZGxlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWVAMy41LjE4X3R5cGVzY3JpcHRANS45LjIvbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5janMucHJvZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWVAMy41LjE4X3R5cGVzY3JpcHRANS45LjIvbm9kZV9tb2R1bGVzL3Z1ZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbHVtZW5waW5rK3Z1ZTMtZml0dHlAMC4xLjRfdHlwZXNjcmlwdEA1LjkuMi9ub2RlX21vZHVsZXMvQGx1bWVucGluay92dWUzLWZpdHR5L2Rpc3QvQGx1bWVucGluay92dWUzLWZpdHR5LmNvbW1vbi5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQXZhdGFyRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvTWVtYmVyQ2FyZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIEB2dWUvY29tcGlsZXItY29yZSB2My41LjE4XG4qIChjKSAyMDE4LXByZXNlbnQgWXV4aSAoRXZhbikgWW91IGFuZCBWdWUgY29udHJpYnV0b3JzXG4qIEBsaWNlbnNlIE1JVFxuKiovXG5pbXBvcnQgeyBpc1N0cmluZywgTk9PUCwgaXNPYmplY3QsIGV4dGVuZCwgTk8sIGlzU3ltYm9sLCBQYXRjaEZsYWdOYW1lcywgaXNBcnJheSwgY2FwaXRhbGl6ZSwgY2FtZWxpemUsIEVNUFRZX09CSiwgc2xvdEZsYWdzVGV4dCwgaXNPbiwgaXNCdWlsdEluRGlyZWN0aXZlLCBpc1Jlc2VydmVkUHJvcCwgdG9IYW5kbGVyS2V5IH0gZnJvbSAnQHZ1ZS9zaGFyZWQnO1xuZXhwb3J0IHsgZ2VuZXJhdGVDb2RlRnJhbWUgfSBmcm9tICdAdnVlL3NoYXJlZCc7XG5cbmNvbnN0IEZSQUdNRU5UID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgRnJhZ21lbnRgIDogYGApO1xuY29uc3QgVEVMRVBPUlQgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBUZWxlcG9ydGAgOiBgYCk7XG5jb25zdCBTVVNQRU5TRSA9IFN5bWJvbCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYFN1c3BlbnNlYCA6IGBgKTtcbmNvbnN0IEtFRVBfQUxJVkUgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBLZWVwQWxpdmVgIDogYGApO1xuY29uc3QgQkFTRV9UUkFOU0lUSU9OID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYEJhc2VUcmFuc2l0aW9uYCA6IGBgXG4pO1xuY29uc3QgT1BFTl9CTE9DSyA9IFN5bWJvbCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYG9wZW5CbG9ja2AgOiBgYCk7XG5jb25zdCBDUkVBVEVfQkxPQ0sgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBjcmVhdGVCbG9ja2AgOiBgYCk7XG5jb25zdCBDUkVBVEVfRUxFTUVOVF9CTE9DSyA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBjcmVhdGVFbGVtZW50QmxvY2tgIDogYGBcbik7XG5jb25zdCBDUkVBVEVfVk5PREUgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBjcmVhdGVWTm9kZWAgOiBgYCk7XG5jb25zdCBDUkVBVEVfRUxFTUVOVF9WTk9ERSA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBjcmVhdGVFbGVtZW50Vk5vZGVgIDogYGBcbik7XG5jb25zdCBDUkVBVEVfQ09NTUVOVCA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBjcmVhdGVDb21tZW50Vk5vZGVgIDogYGBcbik7XG5jb25zdCBDUkVBVEVfVEVYVCA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBjcmVhdGVUZXh0Vk5vZGVgIDogYGBcbik7XG5jb25zdCBDUkVBVEVfU1RBVElDID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYGNyZWF0ZVN0YXRpY1ZOb2RlYCA6IGBgXG4pO1xuY29uc3QgUkVTT0xWRV9DT01QT05FTlQgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgcmVzb2x2ZUNvbXBvbmVudGAgOiBgYFxuKTtcbmNvbnN0IFJFU09MVkVfRFlOQU1JQ19DT01QT05FTlQgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgcmVzb2x2ZUR5bmFtaWNDb21wb25lbnRgIDogYGBcbik7XG5jb25zdCBSRVNPTFZFX0RJUkVDVElWRSA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGByZXNvbHZlRGlyZWN0aXZlYCA6IGBgXG4pO1xuY29uc3QgUkVTT0xWRV9GSUxURVIgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgcmVzb2x2ZUZpbHRlcmAgOiBgYFxuKTtcbmNvbnN0IFdJVEhfRElSRUNUSVZFUyA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGB3aXRoRGlyZWN0aXZlc2AgOiBgYFxuKTtcbmNvbnN0IFJFTkRFUl9MSVNUID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgcmVuZGVyTGlzdGAgOiBgYCk7XG5jb25zdCBSRU5ERVJfU0xPVCA9IFN5bWJvbCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYHJlbmRlclNsb3RgIDogYGApO1xuY29uc3QgQ1JFQVRFX1NMT1RTID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgY3JlYXRlU2xvdHNgIDogYGApO1xuY29uc3QgVE9fRElTUExBWV9TVFJJTkcgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgdG9EaXNwbGF5U3RyaW5nYCA6IGBgXG4pO1xuY29uc3QgTUVSR0VfUFJPUFMgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBtZXJnZVByb3BzYCA6IGBgKTtcbmNvbnN0IE5PUk1BTElaRV9DTEFTUyA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBub3JtYWxpemVDbGFzc2AgOiBgYFxuKTtcbmNvbnN0IE5PUk1BTElaRV9TVFlMRSA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBub3JtYWxpemVTdHlsZWAgOiBgYFxuKTtcbmNvbnN0IE5PUk1BTElaRV9QUk9QUyA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBub3JtYWxpemVQcm9wc2AgOiBgYFxuKTtcbmNvbnN0IEdVQVJEX1JFQUNUSVZFX1BST1BTID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYGd1YXJkUmVhY3RpdmVQcm9wc2AgOiBgYFxuKTtcbmNvbnN0IFRPX0hBTkRMRVJTID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgdG9IYW5kbGVyc2AgOiBgYCk7XG5jb25zdCBDQU1FTElaRSA9IFN5bWJvbCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYGNhbWVsaXplYCA6IGBgKTtcbmNvbnN0IENBUElUQUxJWkUgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBjYXBpdGFsaXplYCA6IGBgKTtcbmNvbnN0IFRPX0hBTkRMRVJfS0VZID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYHRvSGFuZGxlcktleWAgOiBgYFxuKTtcbmNvbnN0IFNFVF9CTE9DS19UUkFDS0lORyA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGBzZXRCbG9ja1RyYWNraW5nYCA6IGBgXG4pO1xuY29uc3QgUFVTSF9TQ09QRV9JRCA9IFN5bWJvbCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYHB1c2hTY29wZUlkYCA6IGBgKTtcbmNvbnN0IFBPUF9TQ09QRV9JRCA9IFN5bWJvbCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYHBvcFNjb3BlSWRgIDogYGApO1xuY29uc3QgV0lUSF9DVFggPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGB3aXRoQ3R4YCA6IGBgKTtcbmNvbnN0IFVOUkVGID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgdW5yZWZgIDogYGApO1xuY29uc3QgSVNfUkVGID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgaXNSZWZgIDogYGApO1xuY29uc3QgV0lUSF9NRU1PID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgd2l0aE1lbW9gIDogYGApO1xuY29uc3QgSVNfTUVNT19TQU1FID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgaXNNZW1vU2FtZWAgOiBgYCk7XG5jb25zdCBoZWxwZXJOYW1lTWFwID0ge1xuICBbRlJBR01FTlRdOiBgRnJhZ21lbnRgLFxuICBbVEVMRVBPUlRdOiBgVGVsZXBvcnRgLFxuICBbU1VTUEVOU0VdOiBgU3VzcGVuc2VgLFxuICBbS0VFUF9BTElWRV06IGBLZWVwQWxpdmVgLFxuICBbQkFTRV9UUkFOU0lUSU9OXTogYEJhc2VUcmFuc2l0aW9uYCxcbiAgW09QRU5fQkxPQ0tdOiBgb3BlbkJsb2NrYCxcbiAgW0NSRUFURV9CTE9DS106IGBjcmVhdGVCbG9ja2AsXG4gIFtDUkVBVEVfRUxFTUVOVF9CTE9DS106IGBjcmVhdGVFbGVtZW50QmxvY2tgLFxuICBbQ1JFQVRFX1ZOT0RFXTogYGNyZWF0ZVZOb2RlYCxcbiAgW0NSRUFURV9FTEVNRU5UX1ZOT0RFXTogYGNyZWF0ZUVsZW1lbnRWTm9kZWAsXG4gIFtDUkVBVEVfQ09NTUVOVF06IGBjcmVhdGVDb21tZW50Vk5vZGVgLFxuICBbQ1JFQVRFX1RFWFRdOiBgY3JlYXRlVGV4dFZOb2RlYCxcbiAgW0NSRUFURV9TVEFUSUNdOiBgY3JlYXRlU3RhdGljVk5vZGVgLFxuICBbUkVTT0xWRV9DT01QT05FTlRdOiBgcmVzb2x2ZUNvbXBvbmVudGAsXG4gIFtSRVNPTFZFX0RZTkFNSUNfQ09NUE9ORU5UXTogYHJlc29sdmVEeW5hbWljQ29tcG9uZW50YCxcbiAgW1JFU09MVkVfRElSRUNUSVZFXTogYHJlc29sdmVEaXJlY3RpdmVgLFxuICBbUkVTT0xWRV9GSUxURVJdOiBgcmVzb2x2ZUZpbHRlcmAsXG4gIFtXSVRIX0RJUkVDVElWRVNdOiBgd2l0aERpcmVjdGl2ZXNgLFxuICBbUkVOREVSX0xJU1RdOiBgcmVuZGVyTGlzdGAsXG4gIFtSRU5ERVJfU0xPVF06IGByZW5kZXJTbG90YCxcbiAgW0NSRUFURV9TTE9UU106IGBjcmVhdGVTbG90c2AsXG4gIFtUT19ESVNQTEFZX1NUUklOR106IGB0b0Rpc3BsYXlTdHJpbmdgLFxuICBbTUVSR0VfUFJPUFNdOiBgbWVyZ2VQcm9wc2AsXG4gIFtOT1JNQUxJWkVfQ0xBU1NdOiBgbm9ybWFsaXplQ2xhc3NgLFxuICBbTk9STUFMSVpFX1NUWUxFXTogYG5vcm1hbGl6ZVN0eWxlYCxcbiAgW05PUk1BTElaRV9QUk9QU106IGBub3JtYWxpemVQcm9wc2AsXG4gIFtHVUFSRF9SRUFDVElWRV9QUk9QU106IGBndWFyZFJlYWN0aXZlUHJvcHNgLFxuICBbVE9fSEFORExFUlNdOiBgdG9IYW5kbGVyc2AsXG4gIFtDQU1FTElaRV06IGBjYW1lbGl6ZWAsXG4gIFtDQVBJVEFMSVpFXTogYGNhcGl0YWxpemVgLFxuICBbVE9fSEFORExFUl9LRVldOiBgdG9IYW5kbGVyS2V5YCxcbiAgW1NFVF9CTE9DS19UUkFDS0lOR106IGBzZXRCbG9ja1RyYWNraW5nYCxcbiAgW1BVU0hfU0NPUEVfSURdOiBgcHVzaFNjb3BlSWRgLFxuICBbUE9QX1NDT1BFX0lEXTogYHBvcFNjb3BlSWRgLFxuICBbV0lUSF9DVFhdOiBgd2l0aEN0eGAsXG4gIFtVTlJFRl06IGB1bnJlZmAsXG4gIFtJU19SRUZdOiBgaXNSZWZgLFxuICBbV0lUSF9NRU1PXTogYHdpdGhNZW1vYCxcbiAgW0lTX01FTU9fU0FNRV06IGBpc01lbW9TYW1lYFxufTtcbmZ1bmN0aW9uIHJlZ2lzdGVyUnVudGltZUhlbHBlcnMoaGVscGVycykge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGhlbHBlcnMpLmZvckVhY2goKHMpID0+IHtcbiAgICBoZWxwZXJOYW1lTWFwW3NdID0gaGVscGVyc1tzXTtcbiAgfSk7XG59XG5cbmNvbnN0IE5hbWVzcGFjZXMgPSB7XG4gIFwiSFRNTFwiOiAwLFxuICBcIjBcIjogXCJIVE1MXCIsXG4gIFwiU1ZHXCI6IDEsXG4gIFwiMVwiOiBcIlNWR1wiLFxuICBcIk1BVEhfTUxcIjogMixcbiAgXCIyXCI6IFwiTUFUSF9NTFwiXG59O1xuY29uc3QgTm9kZVR5cGVzID0ge1xuICBcIlJPT1RcIjogMCxcbiAgXCIwXCI6IFwiUk9PVFwiLFxuICBcIkVMRU1FTlRcIjogMSxcbiAgXCIxXCI6IFwiRUxFTUVOVFwiLFxuICBcIlRFWFRcIjogMixcbiAgXCIyXCI6IFwiVEVYVFwiLFxuICBcIkNPTU1FTlRcIjogMyxcbiAgXCIzXCI6IFwiQ09NTUVOVFwiLFxuICBcIlNJTVBMRV9FWFBSRVNTSU9OXCI6IDQsXG4gIFwiNFwiOiBcIlNJTVBMRV9FWFBSRVNTSU9OXCIsXG4gIFwiSU5URVJQT0xBVElPTlwiOiA1LFxuICBcIjVcIjogXCJJTlRFUlBPTEFUSU9OXCIsXG4gIFwiQVRUUklCVVRFXCI6IDYsXG4gIFwiNlwiOiBcIkFUVFJJQlVURVwiLFxuICBcIkRJUkVDVElWRVwiOiA3LFxuICBcIjdcIjogXCJESVJFQ1RJVkVcIixcbiAgXCJDT01QT1VORF9FWFBSRVNTSU9OXCI6IDgsXG4gIFwiOFwiOiBcIkNPTVBPVU5EX0VYUFJFU1NJT05cIixcbiAgXCJJRlwiOiA5LFxuICBcIjlcIjogXCJJRlwiLFxuICBcIklGX0JSQU5DSFwiOiAxMCxcbiAgXCIxMFwiOiBcIklGX0JSQU5DSFwiLFxuICBcIkZPUlwiOiAxMSxcbiAgXCIxMVwiOiBcIkZPUlwiLFxuICBcIlRFWFRfQ0FMTFwiOiAxMixcbiAgXCIxMlwiOiBcIlRFWFRfQ0FMTFwiLFxuICBcIlZOT0RFX0NBTExcIjogMTMsXG4gIFwiMTNcIjogXCJWTk9ERV9DQUxMXCIsXG4gIFwiSlNfQ0FMTF9FWFBSRVNTSU9OXCI6IDE0LFxuICBcIjE0XCI6IFwiSlNfQ0FMTF9FWFBSRVNTSU9OXCIsXG4gIFwiSlNfT0JKRUNUX0VYUFJFU1NJT05cIjogMTUsXG4gIFwiMTVcIjogXCJKU19PQkpFQ1RfRVhQUkVTU0lPTlwiLFxuICBcIkpTX1BST1BFUlRZXCI6IDE2LFxuICBcIjE2XCI6IFwiSlNfUFJPUEVSVFlcIixcbiAgXCJKU19BUlJBWV9FWFBSRVNTSU9OXCI6IDE3LFxuICBcIjE3XCI6IFwiSlNfQVJSQVlfRVhQUkVTU0lPTlwiLFxuICBcIkpTX0ZVTkNUSU9OX0VYUFJFU1NJT05cIjogMTgsXG4gIFwiMThcIjogXCJKU19GVU5DVElPTl9FWFBSRVNTSU9OXCIsXG4gIFwiSlNfQ09ORElUSU9OQUxfRVhQUkVTU0lPTlwiOiAxOSxcbiAgXCIxOVwiOiBcIkpTX0NPTkRJVElPTkFMX0VYUFJFU1NJT05cIixcbiAgXCJKU19DQUNIRV9FWFBSRVNTSU9OXCI6IDIwLFxuICBcIjIwXCI6IFwiSlNfQ0FDSEVfRVhQUkVTU0lPTlwiLFxuICBcIkpTX0JMT0NLX1NUQVRFTUVOVFwiOiAyMSxcbiAgXCIyMVwiOiBcIkpTX0JMT0NLX1NUQVRFTUVOVFwiLFxuICBcIkpTX1RFTVBMQVRFX0xJVEVSQUxcIjogMjIsXG4gIFwiMjJcIjogXCJKU19URU1QTEFURV9MSVRFUkFMXCIsXG4gIFwiSlNfSUZfU1RBVEVNRU5UXCI6IDIzLFxuICBcIjIzXCI6IFwiSlNfSUZfU1RBVEVNRU5UXCIsXG4gIFwiSlNfQVNTSUdOTUVOVF9FWFBSRVNTSU9OXCI6IDI0LFxuICBcIjI0XCI6IFwiSlNfQVNTSUdOTUVOVF9FWFBSRVNTSU9OXCIsXG4gIFwiSlNfU0VRVUVOQ0VfRVhQUkVTU0lPTlwiOiAyNSxcbiAgXCIyNVwiOiBcIkpTX1NFUVVFTkNFX0VYUFJFU1NJT05cIixcbiAgXCJKU19SRVRVUk5fU1RBVEVNRU5UXCI6IDI2LFxuICBcIjI2XCI6IFwiSlNfUkVUVVJOX1NUQVRFTUVOVFwiXG59O1xuY29uc3QgRWxlbWVudFR5cGVzID0ge1xuICBcIkVMRU1FTlRcIjogMCxcbiAgXCIwXCI6IFwiRUxFTUVOVFwiLFxuICBcIkNPTVBPTkVOVFwiOiAxLFxuICBcIjFcIjogXCJDT01QT05FTlRcIixcbiAgXCJTTE9UXCI6IDIsXG4gIFwiMlwiOiBcIlNMT1RcIixcbiAgXCJURU1QTEFURVwiOiAzLFxuICBcIjNcIjogXCJURU1QTEFURVwiXG59O1xuY29uc3QgQ29uc3RhbnRUeXBlcyA9IHtcbiAgXCJOT1RfQ09OU1RBTlRcIjogMCxcbiAgXCIwXCI6IFwiTk9UX0NPTlNUQU5UXCIsXG4gIFwiQ0FOX1NLSVBfUEFUQ0hcIjogMSxcbiAgXCIxXCI6IFwiQ0FOX1NLSVBfUEFUQ0hcIixcbiAgXCJDQU5fQ0FDSEVcIjogMixcbiAgXCIyXCI6IFwiQ0FOX0NBQ0hFXCIsXG4gIFwiQ0FOX1NUUklOR0lGWVwiOiAzLFxuICBcIjNcIjogXCJDQU5fU1RSSU5HSUZZXCJcbn07XG5jb25zdCBsb2NTdHViID0ge1xuICBzdGFydDogeyBsaW5lOiAxLCBjb2x1bW46IDEsIG9mZnNldDogMCB9LFxuICBlbmQ6IHsgbGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDAgfSxcbiAgc291cmNlOiBcIlwiXG59O1xuZnVuY3Rpb24gY3JlYXRlUm9vdChjaGlsZHJlbiwgc291cmNlID0gXCJcIikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IDAsXG4gICAgc291cmNlLFxuICAgIGNoaWxkcmVuLFxuICAgIGhlbHBlcnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG4gICAgY29tcG9uZW50czogW10sXG4gICAgZGlyZWN0aXZlczogW10sXG4gICAgaG9pc3RzOiBbXSxcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBjYWNoZWQ6IFtdLFxuICAgIHRlbXBzOiAwLFxuICAgIGNvZGVnZW5Ob2RlOiB2b2lkIDAsXG4gICAgbG9jOiBsb2NTdHViXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVWTm9kZUNhbGwoY29udGV4dCwgdGFnLCBwcm9wcywgY2hpbGRyZW4sIHBhdGNoRmxhZywgZHluYW1pY1Byb3BzLCBkaXJlY3RpdmVzLCBpc0Jsb2NrID0gZmFsc2UsIGRpc2FibGVUcmFja2luZyA9IGZhbHNlLCBpc0NvbXBvbmVudCA9IGZhbHNlLCBsb2MgPSBsb2NTdHViKSB7XG4gIGlmIChjb250ZXh0KSB7XG4gICAgaWYgKGlzQmxvY2spIHtcbiAgICAgIGNvbnRleHQuaGVscGVyKE9QRU5fQkxPQ0spO1xuICAgICAgY29udGV4dC5oZWxwZXIoZ2V0Vk5vZGVCbG9ja0hlbHBlcihjb250ZXh0LmluU1NSLCBpc0NvbXBvbmVudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmhlbHBlcihnZXRWTm9kZUhlbHBlcihjb250ZXh0LmluU1NSLCBpc0NvbXBvbmVudCkpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlcykge1xuICAgICAgY29udGV4dC5oZWxwZXIoV0lUSF9ESVJFQ1RJVkVTKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAxMyxcbiAgICB0YWcsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgcGF0Y2hGbGFnLFxuICAgIGR5bmFtaWNQcm9wcyxcbiAgICBkaXJlY3RpdmVzLFxuICAgIGlzQmxvY2ssXG4gICAgZGlzYWJsZVRyYWNraW5nLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIGxvY1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQXJyYXlFeHByZXNzaW9uKGVsZW1lbnRzLCBsb2MgPSBsb2NTdHViKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogMTcsXG4gICAgbG9jLFxuICAgIGVsZW1lbnRzXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVPYmplY3RFeHByZXNzaW9uKHByb3BlcnRpZXMsIGxvYyA9IGxvY1N0dWIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAxNSxcbiAgICBsb2MsXG4gICAgcHJvcGVydGllc1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlT2JqZWN0UHJvcGVydHkoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IDE2LFxuICAgIGxvYzogbG9jU3R1YixcbiAgICBrZXk6IGlzU3RyaW5nKGtleSkgPyBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGtleSwgdHJ1ZSkgOiBrZXksXG4gICAgdmFsdWVcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oY29udGVudCwgaXNTdGF0aWMgPSBmYWxzZSwgbG9jID0gbG9jU3R1YiwgY29uc3RUeXBlID0gMCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IDQsXG4gICAgbG9jLFxuICAgIGNvbnRlbnQsXG4gICAgaXNTdGF0aWMsXG4gICAgY29uc3RUeXBlOiBpc1N0YXRpYyA/IDMgOiBjb25zdFR5cGVcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUludGVycG9sYXRpb24oY29udGVudCwgbG9jKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogNSxcbiAgICBsb2MsXG4gICAgY29udGVudDogaXNTdHJpbmcoY29udGVudCkgPyBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGNvbnRlbnQsIGZhbHNlLCBsb2MpIDogY29udGVudFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRFeHByZXNzaW9uKGNoaWxkcmVuLCBsb2MgPSBsb2NTdHViKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogOCxcbiAgICBsb2MsXG4gICAgY2hpbGRyZW5cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNhbGxFeHByZXNzaW9uKGNhbGxlZSwgYXJncyA9IFtdLCBsb2MgPSBsb2NTdHViKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogMTQsXG4gICAgbG9jLFxuICAgIGNhbGxlZSxcbiAgICBhcmd1bWVudHM6IGFyZ3NcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uRXhwcmVzc2lvbihwYXJhbXMsIHJldHVybnMgPSB2b2lkIDAsIG5ld2xpbmUgPSBmYWxzZSwgaXNTbG90ID0gZmFsc2UsIGxvYyA9IGxvY1N0dWIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAxOCxcbiAgICBwYXJhbXMsXG4gICAgcmV0dXJucyxcbiAgICBuZXdsaW5lLFxuICAgIGlzU2xvdCxcbiAgICBsb2NcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbmRpdGlvbmFsRXhwcmVzc2lvbih0ZXN0LCBjb25zZXF1ZW50LCBhbHRlcm5hdGUsIG5ld2xpbmUgPSB0cnVlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogMTksXG4gICAgdGVzdCxcbiAgICBjb25zZXF1ZW50LFxuICAgIGFsdGVybmF0ZSxcbiAgICBuZXdsaW5lLFxuICAgIGxvYzogbG9jU3R1YlxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQ2FjaGVFeHByZXNzaW9uKGluZGV4LCB2YWx1ZSwgbmVlZFBhdXNlVHJhY2tpbmcgPSBmYWxzZSwgaW5WT25jZSA9IGZhbHNlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogMjAsXG4gICAgaW5kZXgsXG4gICAgdmFsdWUsXG4gICAgbmVlZFBhdXNlVHJhY2tpbmcsXG4gICAgaW5WT25jZSxcbiAgICBuZWVkQXJyYXlTcHJlYWQ6IGZhbHNlLFxuICAgIGxvYzogbG9jU3R1YlxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQmxvY2tTdGF0ZW1lbnQoYm9keSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IDIxLFxuICAgIGJvZHksXG4gICAgbG9jOiBsb2NTdHViXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZUxpdGVyYWwoZWxlbWVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAyMixcbiAgICBlbGVtZW50cyxcbiAgICBsb2M6IGxvY1N0dWJcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlmU3RhdGVtZW50KHRlc3QsIGNvbnNlcXVlbnQsIGFsdGVybmF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IDIzLFxuICAgIHRlc3QsXG4gICAgY29uc2VxdWVudCxcbiAgICBhbHRlcm5hdGUsXG4gICAgbG9jOiBsb2NTdHViXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25tZW50RXhwcmVzc2lvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IDI0LFxuICAgIGxlZnQsXG4gICAgcmlnaHQsXG4gICAgbG9jOiBsb2NTdHViXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTZXF1ZW5jZUV4cHJlc3Npb24oZXhwcmVzc2lvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAyNSxcbiAgICBleHByZXNzaW9ucyxcbiAgICBsb2M6IGxvY1N0dWJcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJldHVyblN0YXRlbWVudChyZXR1cm5zKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogMjYsXG4gICAgcmV0dXJucyxcbiAgICBsb2M6IGxvY1N0dWJcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFZOb2RlSGVscGVyKHNzciwgaXNDb21wb25lbnQpIHtcbiAgcmV0dXJuIHNzciB8fCBpc0NvbXBvbmVudCA/IENSRUFURV9WTk9ERSA6IENSRUFURV9FTEVNRU5UX1ZOT0RFO1xufVxuZnVuY3Rpb24gZ2V0Vk5vZGVCbG9ja0hlbHBlcihzc3IsIGlzQ29tcG9uZW50KSB7XG4gIHJldHVybiBzc3IgfHwgaXNDb21wb25lbnQgPyBDUkVBVEVfQkxPQ0sgOiBDUkVBVEVfRUxFTUVOVF9CTE9DSztcbn1cbmZ1bmN0aW9uIGNvbnZlcnRUb0Jsb2NrKG5vZGUsIHsgaGVscGVyLCByZW1vdmVIZWxwZXIsIGluU1NSIH0pIHtcbiAgaWYgKCFub2RlLmlzQmxvY2spIHtcbiAgICBub2RlLmlzQmxvY2sgPSB0cnVlO1xuICAgIHJlbW92ZUhlbHBlcihnZXRWTm9kZUhlbHBlcihpblNTUiwgbm9kZS5pc0NvbXBvbmVudCkpO1xuICAgIGhlbHBlcihPUEVOX0JMT0NLKTtcbiAgICBoZWxwZXIoZ2V0Vk5vZGVCbG9ja0hlbHBlcihpblNTUiwgbm9kZS5pc0NvbXBvbmVudCkpO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHREZWxpbWl0ZXJzT3BlbiA9IG5ldyBVaW50OEFycmF5KFsxMjMsIDEyM10pO1xuY29uc3QgZGVmYXVsdERlbGltaXRlcnNDbG9zZSA9IG5ldyBVaW50OEFycmF5KFsxMjUsIDEyNV0pO1xuZnVuY3Rpb24gaXNUYWdTdGFydENoYXIoYykge1xuICByZXR1cm4gYyA+PSA5NyAmJiBjIDw9IDEyMiB8fCBjID49IDY1ICYmIGMgPD0gOTA7XG59XG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoYykge1xuICByZXR1cm4gYyA9PT0gMzIgfHwgYyA9PT0gMTAgfHwgYyA9PT0gOSB8fCBjID09PSAxMiB8fCBjID09PSAxMztcbn1cbmZ1bmN0aW9uIGlzRW5kT2ZUYWdTZWN0aW9uKGMpIHtcbiAgcmV0dXJuIGMgPT09IDQ3IHx8IGMgPT09IDYyIHx8IGlzV2hpdGVzcGFjZShjKTtcbn1cbmZ1bmN0aW9uIHRvQ2hhckNvZGVzKHN0cikge1xuICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShzdHIubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICByZXRbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuY29uc3QgU2VxdWVuY2VzID0ge1xuICBDZGF0YTogbmV3IFVpbnQ4QXJyYXkoWzY3LCA2OCwgNjUsIDg0LCA2NSwgOTFdKSxcbiAgLy8gQ0RBVEFbXG4gIENkYXRhRW5kOiBuZXcgVWludDhBcnJheShbOTMsIDkzLCA2Ml0pLFxuICAvLyBdXT5cbiAgQ29tbWVudEVuZDogbmV3IFVpbnQ4QXJyYXkoWzQ1LCA0NSwgNjJdKSxcbiAgLy8gYC0tPmBcbiAgU2NyaXB0RW5kOiBuZXcgVWludDhBcnJheShbNjAsIDQ3LCAxMTUsIDk5LCAxMTQsIDEwNSwgMTEyLCAxMTZdKSxcbiAgLy8gYDxcXC9zY3JpcHRgXG4gIFN0eWxlRW5kOiBuZXcgVWludDhBcnJheShbNjAsIDQ3LCAxMTUsIDExNiwgMTIxLCAxMDgsIDEwMV0pLFxuICAvLyBgPC9zdHlsZWBcbiAgVGl0bGVFbmQ6IG5ldyBVaW50OEFycmF5KFs2MCwgNDcsIDExNiwgMTA1LCAxMTYsIDEwOCwgMTAxXSksXG4gIC8vIGA8L3RpdGxlYFxuICBUZXh0YXJlYUVuZDogbmV3IFVpbnQ4QXJyYXkoW1xuICAgIDYwLFxuICAgIDQ3LFxuICAgIDExNixcbiAgICAxMDEsXG4gICAgMTIwLFxuICAgIDExNixcbiAgICA5NyxcbiAgICAxMTQsXG4gICAgMTAxLFxuICAgIDk3XG4gIF0pXG4gIC8vIGA8L3RleHRhcmVhXG59O1xuY2xhc3MgVG9rZW5pemVyIHtcbiAgY29uc3RydWN0b3Ioc3RhY2ssIGNicykge1xuICAgIHRoaXMuc3RhY2sgPSBzdGFjaztcbiAgICB0aGlzLmNicyA9IGNicztcbiAgICAvKiogVGhlIGN1cnJlbnQgc3RhdGUgdGhlIHRva2VuaXplciBpcyBpbi4gKi9cbiAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAvKiogVGhlIHJlYWQgYnVmZmVyLiAqL1xuICAgIHRoaXMuYnVmZmVyID0gXCJcIjtcbiAgICAvKiogVGhlIGJlZ2lubmluZyBvZiB0aGUgc2VjdGlvbiB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyByZWFkLiAqL1xuICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gMDtcbiAgICAvKiogVGhlIGluZGV4IHdpdGhpbiB0aGUgYnVmZmVyIHRoYXQgd2UgYXJlIGN1cnJlbnRseSBsb29raW5nIGF0LiAqL1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIC8qKiBUaGUgc3RhcnQgb2YgdGhlIGxhc3QgZW50aXR5LiAqL1xuICAgIHRoaXMuZW50aXR5U3RhcnQgPSAwO1xuICAgIC8qKiBTb21lIGJlaGF2aW9yLCBlZy4gd2hlbiBkZWNvZGluZyBlbnRpdGllcywgaXMgZG9uZSB3aGlsZSB3ZSBhcmUgaW4gYW5vdGhlciBzdGF0ZS4gVGhpcyBrZWVwcyB0cmFjayBvZiB0aGUgb3RoZXIgc3RhdGUgdHlwZS4gKi9cbiAgICB0aGlzLmJhc2VTdGF0ZSA9IDE7XG4gICAgLyoqIEZvciBzcGVjaWFsIHBhcnNpbmcgYmVoYXZpb3IgaW5zaWRlIG9mIHNjcmlwdCBhbmQgc3R5bGUgdGFncy4gKi9cbiAgICB0aGlzLmluUkNEQVRBID0gZmFsc2U7XG4gICAgLyoqIEZvciBkaXNhYmxpbmcgUkNEQVRBIHRhZ3MgaGFuZGxpbmcgKi9cbiAgICB0aGlzLmluWE1MID0gZmFsc2U7XG4gICAgLyoqIEZvciBkaXNhYmxpbmcgaW50ZXJwb2xhdGlvbiBwYXJzaW5nIGluIHYtcHJlICovXG4gICAgdGhpcy5pblZQcmUgPSBmYWxzZTtcbiAgICAvKiogUmVjb3JkIG5ld2xpbmUgcG9zaXRpb25zIGZvciBmYXN0IGxpbmUgLyBjb2x1bW4gY2FsY3VsYXRpb24gKi9cbiAgICB0aGlzLm5ld2xpbmVzID0gW107XG4gICAgdGhpcy5tb2RlID0gMDtcbiAgICB0aGlzLmRlbGltaXRlck9wZW4gPSBkZWZhdWx0RGVsaW1pdGVyc09wZW47XG4gICAgdGhpcy5kZWxpbWl0ZXJDbG9zZSA9IGRlZmF1bHREZWxpbWl0ZXJzQ2xvc2U7XG4gICAgdGhpcy5kZWxpbWl0ZXJJbmRleCA9IC0xO1xuICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gdm9pZCAwO1xuICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IDA7XG4gIH1cbiAgZ2V0IGluU0ZDUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAyICYmIHRoaXMuc3RhY2subGVuZ3RoID09PSAwO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgIHRoaXMubW9kZSA9IDA7XG4gICAgdGhpcy5idWZmZXIgPSBcIlwiO1xuICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gMDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLmJhc2VTdGF0ZSA9IDE7XG4gICAgdGhpcy5pblJDREFUQSA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gdm9pZCAwO1xuICAgIHRoaXMubmV3bGluZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmRlbGltaXRlck9wZW4gPSBkZWZhdWx0RGVsaW1pdGVyc09wZW47XG4gICAgdGhpcy5kZWxpbWl0ZXJDbG9zZSA9IGRlZmF1bHREZWxpbWl0ZXJzQ2xvc2U7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlIFBvc2l0aW9uIG9iamVjdCB3aXRoIGxpbmUgLyBjb2x1bW4gaW5mb3JtYXRpb24gdXNpbmcgcmVjb3JkZWRcbiAgICogbmV3bGluZSBwb3NpdGlvbnMuIFdlIGtub3cgdGhlIGluZGV4IGlzIGFsd2F5cyBnb2luZyB0byBiZSBhbiBhbHJlYWR5XG4gICAqIHByb2Nlc3NlZCBpbmRleCwgc28gYWxsIHRoZSBuZXdsaW5lcyB1cCB0byB0aGlzIGluZGV4IHNob3VsZCBoYXZlIGJlZW5cbiAgICogcmVjb3JkZWQuXG4gICAqL1xuICBnZXRQb3MoaW5kZXgpIHtcbiAgICBsZXQgbGluZSA9IDE7XG4gICAgbGV0IGNvbHVtbiA9IGluZGV4ICsgMTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5uZXdsaW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgbmV3bGluZUluZGV4ID0gdGhpcy5uZXdsaW5lc1tpXTtcbiAgICAgIGlmIChpbmRleCA+IG5ld2xpbmVJbmRleCkge1xuICAgICAgICBsaW5lID0gaSArIDI7XG4gICAgICAgIGNvbHVtbiA9IGluZGV4IC0gbmV3bGluZUluZGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbixcbiAgICAgIGxpbmUsXG4gICAgICBvZmZzZXQ6IGluZGV4XG4gICAgfTtcbiAgfVxuICBwZWVrKCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlci5jaGFyQ29kZUF0KHRoaXMuaW5kZXggKyAxKTtcbiAgfVxuICBzdGF0ZVRleHQoYykge1xuICAgIGlmIChjID09PSA2MCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggPiB0aGlzLnNlY3Rpb25TdGFydCkge1xuICAgICAgICB0aGlzLmNicy5vbnRleHQodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IDU7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgfSBlbHNlIGlmICghdGhpcy5pblZQcmUgJiYgYyA9PT0gdGhpcy5kZWxpbWl0ZXJPcGVuWzBdKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMjtcbiAgICAgIHRoaXMuZGVsaW1pdGVySW5kZXggPSAwO1xuICAgICAgdGhpcy5zdGF0ZUludGVycG9sYXRpb25PcGVuKGMpO1xuICAgIH1cbiAgfVxuICBzdGF0ZUludGVycG9sYXRpb25PcGVuKGMpIHtcbiAgICBpZiAoYyA9PT0gdGhpcy5kZWxpbWl0ZXJPcGVuW3RoaXMuZGVsaW1pdGVySW5kZXhdKSB7XG4gICAgICBpZiAodGhpcy5kZWxpbWl0ZXJJbmRleCA9PT0gdGhpcy5kZWxpbWl0ZXJPcGVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4ICsgMSAtIHRoaXMuZGVsaW1pdGVyT3Blbi5sZW5ndGg7XG4gICAgICAgIGlmIChzdGFydCA+IHRoaXMuc2VjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5jYnMub250ZXh0KHRoaXMuc2VjdGlvblN0YXJ0LCBzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IDM7XG4gICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gc3RhcnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbGltaXRlckluZGV4Kys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmluUkNEQVRBKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMzI7XG4gICAgICB0aGlzLnN0YXRlSW5SQ0RBVEEoYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgICAgdGhpcy5zdGF0ZVRleHQoYyk7XG4gICAgfVxuICB9XG4gIHN0YXRlSW50ZXJwb2xhdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IHRoaXMuZGVsaW1pdGVyQ2xvc2VbMF0pIHtcbiAgICAgIHRoaXMuc3RhdGUgPSA0O1xuICAgICAgdGhpcy5kZWxpbWl0ZXJJbmRleCA9IDA7XG4gICAgICB0aGlzLnN0YXRlSW50ZXJwb2xhdGlvbkNsb3NlKGMpO1xuICAgIH1cbiAgfVxuICBzdGF0ZUludGVycG9sYXRpb25DbG9zZShjKSB7XG4gICAgaWYgKGMgPT09IHRoaXMuZGVsaW1pdGVyQ2xvc2VbdGhpcy5kZWxpbWl0ZXJJbmRleF0pIHtcbiAgICAgIGlmICh0aGlzLmRlbGltaXRlckluZGV4ID09PSB0aGlzLmRlbGltaXRlckNsb3NlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5jYnMub25pbnRlcnBvbGF0aW9uKHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgIGlmICh0aGlzLmluUkNEQVRBKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IDMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbGltaXRlckluZGV4Kys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAzO1xuICAgICAgdGhpcy5zdGF0ZUludGVycG9sYXRpb24oYyk7XG4gICAgfVxuICB9XG4gIHN0YXRlU3BlY2lhbFN0YXJ0U2VxdWVuY2UoYykge1xuICAgIGNvbnN0IGlzRW5kID0gdGhpcy5zZXF1ZW5jZUluZGV4ID09PSB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5sZW5ndGg7XG4gICAgY29uc3QgaXNNYXRjaCA9IGlzRW5kID8gKFxuICAgICAgLy8gSWYgd2UgYXJlIGF0IHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlLCBtYWtlIHN1cmUgdGhlIHRhZyBuYW1lIGhhcyBlbmRlZFxuICAgICAgaXNFbmRPZlRhZ1NlY3Rpb24oYylcbiAgICApIDogKFxuICAgICAgLy8gT3RoZXJ3aXNlLCBkbyBhIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvblxuICAgICAgKGMgfCAzMikgPT09IHRoaXMuY3VycmVudFNlcXVlbmNlW3RoaXMuc2VxdWVuY2VJbmRleF1cbiAgICApO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgdGhpcy5pblJDREFUQSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIWlzRW5kKSB7XG4gICAgICB0aGlzLnNlcXVlbmNlSW5kZXgrKztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMDtcbiAgICB0aGlzLnN0YXRlID0gNjtcbiAgICB0aGlzLnN0YXRlSW5UYWdOYW1lKGMpO1xuICB9XG4gIC8qKiBMb29rIGZvciBhbiBlbmQgdGFnLiBGb3IgPHRpdGxlPiBhbmQgPHRleHRhcmVhPiwgYWxzbyBkZWNvZGUgZW50aXRpZXMuICovXG4gIHN0YXRlSW5SQ0RBVEEoYykge1xuICAgIGlmICh0aGlzLnNlcXVlbmNlSW5kZXggPT09IHRoaXMuY3VycmVudFNlcXVlbmNlLmxlbmd0aCkge1xuICAgICAgaWYgKGMgPT09IDYyIHx8IGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICBjb25zdCBlbmRPZlRleHQgPSB0aGlzLmluZGV4IC0gdGhpcy5jdXJyZW50U2VxdWVuY2UubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5zZWN0aW9uU3RhcnQgPCBlbmRPZlRleHQpIHtcbiAgICAgICAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgdGhpcy5pbmRleCA9IGVuZE9mVGV4dDtcbiAgICAgICAgICB0aGlzLmNicy5vbnRleHQodGhpcy5zZWN0aW9uU3RhcnQsIGVuZE9mVGV4dCk7XG4gICAgICAgICAgdGhpcy5pbmRleCA9IGFjdHVhbEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gZW5kT2ZUZXh0ICsgMjtcbiAgICAgICAgdGhpcy5zdGF0ZUluQ2xvc2luZ1RhZ05hbWUoYyk7XG4gICAgICAgIHRoaXMuaW5SQ0RBVEEgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKChjIHwgMzIpID09PSB0aGlzLmN1cnJlbnRTZXF1ZW5jZVt0aGlzLnNlcXVlbmNlSW5kZXhdKSB7XG4gICAgICB0aGlzLnNlcXVlbmNlSW5kZXggKz0gMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VxdWVuY2VJbmRleCA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlID09PSBTZXF1ZW5jZXMuVGl0bGVFbmQgfHwgdGhpcy5jdXJyZW50U2VxdWVuY2UgPT09IFNlcXVlbmNlcy5UZXh0YXJlYUVuZCAmJiAhdGhpcy5pblNGQ1Jvb3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluVlByZSAmJiBjID09PSB0aGlzLmRlbGltaXRlck9wZW5bMF0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gMjtcbiAgICAgICAgICB0aGlzLmRlbGltaXRlckluZGV4ID0gMDtcbiAgICAgICAgICB0aGlzLnN0YXRlSW50ZXJwb2xhdGlvbk9wZW4oYyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5mYXN0Rm9yd2FyZFRvKDYwKSkge1xuICAgICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSBOdW1iZXIoYyA9PT0gNjApO1xuICAgIH1cbiAgfVxuICBzdGF0ZUNEQVRBU2VxdWVuY2UoYykge1xuICAgIGlmIChjID09PSBTZXF1ZW5jZXMuQ2RhdGFbdGhpcy5zZXF1ZW5jZUluZGV4XSkge1xuICAgICAgaWYgKCsrdGhpcy5zZXF1ZW5jZUluZGV4ID09PSBTZXF1ZW5jZXMuQ2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAyODtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UgPSBTZXF1ZW5jZXMuQ2RhdGFFbmQ7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IDA7XG4gICAgICB0aGlzLnN0YXRlID0gMjM7XG4gICAgICB0aGlzLnN0YXRlSW5EZWNsYXJhdGlvbihjKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FpdCBmb3Igb25lIHNwZWNpZmljIGNoYXJhY3Rlciwgd2UgY2FuIHNwZWVkIHRoaW5ncyB1cFxuICAgKiBieSBza2lwcGluZyB0aHJvdWdoIHRoZSBidWZmZXIgdW50aWwgd2UgZmluZCBpdC5cbiAgICpcbiAgICogQHJldHVybnMgV2hldGhlciB0aGUgY2hhcmFjdGVyIHdhcyBmb3VuZC5cbiAgICovXG4gIGZhc3RGb3J3YXJkVG8oYykge1xuICAgIHdoaWxlICgrK3RoaXMuaW5kZXggPCB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNjID0gdGhpcy5idWZmZXIuY2hhckNvZGVBdCh0aGlzLmluZGV4KTtcbiAgICAgIGlmIChjYyA9PT0gMTApIHtcbiAgICAgICAgdGhpcy5uZXdsaW5lcy5wdXNoKHRoaXMuaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKGNjID09PSBjKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmluZGV4ID0gdGhpcy5idWZmZXIubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIENvbW1lbnRzIGFuZCBDREFUQSBlbmQgd2l0aCBgLS0+YCBhbmQgYF1dPmAuXG4gICAqXG4gICAqIFRoZWlyIGNvbW1vbiBxdWFsaXRpZXMgYXJlOlxuICAgKiAtIFRoZWlyIGVuZCBzZXF1ZW5jZXMgaGF2ZSBhIGRpc3RpbmN0IGNoYXJhY3RlciB0aGV5IHN0YXJ0IHdpdGguXG4gICAqIC0gVGhhdCBjaGFyYWN0ZXIgaXMgdGhlbiByZXBlYXRlZCwgc28gd2UgaGF2ZSB0byBjaGVjayBtdWx0aXBsZSByZXBlYXRzLlxuICAgKiAtIEFsbCBjaGFyYWN0ZXJzIGJ1dCB0aGUgc3RhcnQgY2hhcmFjdGVyIG9mIHRoZSBzZXF1ZW5jZSBjYW4gYmUgc2tpcHBlZC5cbiAgICovXG4gIHN0YXRlSW5Db21tZW50TGlrZShjKSB7XG4gICAgaWYgKGMgPT09IHRoaXMuY3VycmVudFNlcXVlbmNlW3RoaXMuc2VxdWVuY2VJbmRleF0pIHtcbiAgICAgIGlmICgrK3RoaXMuc2VxdWVuY2VJbmRleCA9PT0gdGhpcy5jdXJyZW50U2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9PT0gU2VxdWVuY2VzLkNkYXRhRW5kKSB7XG4gICAgICAgICAgdGhpcy5jYnMub25jZGF0YSh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCAtIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2JzLm9uY29tbWVudCh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCAtIDIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zZXF1ZW5jZUluZGV4ID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5mYXN0Rm9yd2FyZFRvKHRoaXMuY3VycmVudFNlcXVlbmNlWzBdKSkge1xuICAgICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYyAhPT0gdGhpcy5jdXJyZW50U2VxdWVuY2VbdGhpcy5zZXF1ZW5jZUluZGV4IC0gMV0pIHtcbiAgICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IDA7XG4gICAgfVxuICB9XG4gIHN0YXJ0U3BlY2lhbChzZXF1ZW5jZSwgb2Zmc2V0KSB7XG4gICAgdGhpcy5lbnRlclJDREFUQShzZXF1ZW5jZSwgb2Zmc2V0KTtcbiAgICB0aGlzLnN0YXRlID0gMzE7XG4gIH1cbiAgZW50ZXJSQ0RBVEEoc2VxdWVuY2UsIG9mZnNldCkge1xuICAgIHRoaXMuaW5SQ0RBVEEgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gc2VxdWVuY2U7XG4gICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gb2Zmc2V0O1xuICB9XG4gIHN0YXRlQmVmb3JlVGFnTmFtZShjKSB7XG4gICAgaWYgKGMgPT09IDMzKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMjI7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gNjMpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAyNDtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmIChpc1RhZ1N0YXJ0Q2hhcihjKSkge1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gMCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gNjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pblNGQ1Jvb3QpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDM0O1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pblhNTCkge1xuICAgICAgICBpZiAoYyA9PT0gMTE2KSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IDMwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBjID09PSAxMTUgPyAyOSA6IDY7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSA2O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYyA9PT0gNDcpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSA4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgIHRoaXMuc3RhdGVUZXh0KGMpO1xuICAgIH1cbiAgfVxuICBzdGF0ZUluVGFnTmFtZShjKSB7XG4gICAgaWYgKGlzRW5kT2ZUYWdTZWN0aW9uKGMpKSB7XG4gICAgICB0aGlzLmhhbmRsZVRhZ05hbWUoYyk7XG4gICAgfVxuICB9XG4gIHN0YXRlSW5TRkNSb290VGFnTmFtZShjKSB7XG4gICAgaWYgKGlzRW5kT2ZUYWdTZWN0aW9uKGMpKSB7XG4gICAgICBjb25zdCB0YWcgPSB0aGlzLmJ1ZmZlci5zbGljZSh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICBpZiAodGFnICE9PSBcInRlbXBsYXRlXCIpIHtcbiAgICAgICAgdGhpcy5lbnRlclJDREFUQSh0b0NoYXJDb2RlcyhgPC9gICsgdGFnKSwgMCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZVRhZ05hbWUoYyk7XG4gICAgfVxuICB9XG4gIGhhbmRsZVRhZ05hbWUoYykge1xuICAgIHRoaXMuY2JzLm9ub3BlbnRhZ25hbWUodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gLTE7XG4gICAgdGhpcy5zdGF0ZSA9IDExO1xuICAgIHRoaXMuc3RhdGVCZWZvcmVBdHRyTmFtZShjKTtcbiAgfVxuICBzdGF0ZUJlZm9yZUNsb3NpbmdUYWdOYW1lKGMpIHtcbiAgICBpZiAoaXNXaGl0ZXNwYWNlKGMpKSA7IGVsc2UgaWYgKGMgPT09IDYyKSB7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkge1xuICAgICAgICB0aGlzLmNicy5vbmVycigxNCwgdGhpcy5pbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBpc1RhZ1N0YXJ0Q2hhcihjKSA/IDkgOiAyNztcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICB9XG4gIH1cbiAgc3RhdGVJbkNsb3NpbmdUYWdOYW1lKGMpIHtcbiAgICBpZiAoYyA9PT0gNjIgfHwgaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICB0aGlzLmNicy5vbmNsb3NldGFnKHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gLTE7XG4gICAgICB0aGlzLnN0YXRlID0gMTA7XG4gICAgICB0aGlzLnN0YXRlQWZ0ZXJDbG9zaW5nVGFnTmFtZShjKTtcbiAgICB9XG4gIH1cbiAgc3RhdGVBZnRlckNsb3NpbmdUYWdOYW1lKGMpIHtcbiAgICBpZiAoYyA9PT0gNjIpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cbiAgc3RhdGVCZWZvcmVBdHRyTmFtZShjKSB7XG4gICAgaWYgKGMgPT09IDYyKSB7XG4gICAgICB0aGlzLmNicy5vbm9wZW50YWdlbmQodGhpcy5pbmRleCk7XG4gICAgICBpZiAodGhpcy5pblJDREFUQSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gMzI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmIChjID09PSA0Nykge1xuICAgICAgdGhpcy5zdGF0ZSA9IDc7XG4gICAgICBpZiAoKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgZmFsc2UpICYmIHRoaXMucGVlaygpICE9PSA2Mikge1xuICAgICAgICB0aGlzLmNicy5vbmVycigyMiwgdGhpcy5pbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjID09PSA2MCAmJiB0aGlzLnBlZWsoKSA9PT0gNDcpIHtcbiAgICAgIHRoaXMuY2JzLm9ub3BlbnRhZ2VuZCh0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuc3RhdGUgPSA1O1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIH0gZWxzZSBpZiAoIWlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgaWYgKCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZhbHNlKSAmJiBjID09PSA2MSkge1xuICAgICAgICB0aGlzLmNicy5vbmVycihcbiAgICAgICAgICAxOSxcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZUF0dHJTdGFydChjKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQXR0clN0YXJ0KGMpIHtcbiAgICBpZiAoYyA9PT0gMTE4ICYmIHRoaXMucGVlaygpID09PSA0NSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IDEzO1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gNDYgfHwgYyA9PT0gNTggfHwgYyA9PT0gNjQgfHwgYyA9PT0gMzUpIHtcbiAgICAgIHRoaXMuY2JzLm9uZGlybmFtZSh0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICB0aGlzLnN0YXRlID0gMTQ7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gMTI7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgfVxuICB9XG4gIHN0YXRlSW5TZWxmQ2xvc2luZ1RhZyhjKSB7XG4gICAgaWYgKGMgPT09IDYyKSB7XG4gICAgICB0aGlzLmNicy5vbnNlbGZjbG9zaW5ndGFnKHRoaXMuaW5kZXgpO1xuICAgICAgdGhpcy5zdGF0ZSA9IDE7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgdGhpcy5pblJDREFUQSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIWlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IDExO1xuICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJOYW1lKGMpO1xuICAgIH1cbiAgfVxuICBzdGF0ZUluQXR0ck5hbWUoYykge1xuICAgIGlmIChjID09PSA2MSB8fCBpc0VuZE9mVGFnU2VjdGlvbihjKSkge1xuICAgICAgdGhpcy5jYnMub25hdHRyaWJuYW1lKHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuaGFuZGxlQXR0ck5hbWVFbmQoYyk7XG4gICAgfSBlbHNlIGlmICgoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkgJiYgKGMgPT09IDM0IHx8IGMgPT09IDM5IHx8IGMgPT09IDYwKSkge1xuICAgICAgdGhpcy5jYnMub25lcnIoXG4gICAgICAgIDE3LFxuICAgICAgICB0aGlzLmluZGV4XG4gICAgICApO1xuICAgIH1cbiAgfVxuICBzdGF0ZUluRGlyTmFtZShjKSB7XG4gICAgaWYgKGMgPT09IDYxIHx8IGlzRW5kT2ZUYWdTZWN0aW9uKGMpKSB7XG4gICAgICB0aGlzLmNicy5vbmRpcm5hbWUodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgdGhpcy5oYW5kbGVBdHRyTmFtZUVuZChjKTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDU4KSB7XG4gICAgICB0aGlzLmNicy5vbmRpcm5hbWUodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgdGhpcy5zdGF0ZSA9IDE0O1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDQ2KSB7XG4gICAgICB0aGlzLmNicy5vbmRpcm5hbWUodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgdGhpcy5zdGF0ZSA9IDE2O1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cbiAgc3RhdGVJbkRpckFyZyhjKSB7XG4gICAgaWYgKGMgPT09IDYxIHx8IGlzRW5kT2ZUYWdTZWN0aW9uKGMpKSB7XG4gICAgICB0aGlzLmNicy5vbmRpcmFyZyh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICB0aGlzLmhhbmRsZUF0dHJOYW1lRW5kKGMpO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gOTEpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAxNTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDQ2KSB7XG4gICAgICB0aGlzLmNicy5vbmRpcmFyZyh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICB0aGlzLnN0YXRlID0gMTY7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIH1cbiAgfVxuICBzdGF0ZUluRHluYW1pY0RpckFyZyhjKSB7XG4gICAgaWYgKGMgPT09IDkzKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMTQ7XG4gICAgfSBlbHNlIGlmIChjID09PSA2MSB8fCBpc0VuZE9mVGFnU2VjdGlvbihjKSkge1xuICAgICAgdGhpcy5jYnMub25kaXJhcmcodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgIHRoaXMuaGFuZGxlQXR0ck5hbWVFbmQoYyk7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkge1xuICAgICAgICB0aGlzLmNicy5vbmVycihcbiAgICAgICAgICAyNyxcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRlSW5EaXJNb2RpZmllcihjKSB7XG4gICAgaWYgKGMgPT09IDYxIHx8IGlzRW5kT2ZUYWdTZWN0aW9uKGMpKSB7XG4gICAgICB0aGlzLmNicy5vbmRpcm1vZGlmaWVyKHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuaGFuZGxlQXR0ck5hbWVFbmQoYyk7XG4gICAgfSBlbHNlIGlmIChjID09PSA0Nikge1xuICAgICAgdGhpcy5jYnMub25kaXJtb2RpZmllcih0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIH1cbiAgfVxuICBoYW5kbGVBdHRyTmFtZUVuZChjKSB7XG4gICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuc3RhdGUgPSAxNztcbiAgICB0aGlzLmNicy5vbmF0dHJpYm5hbWVlbmQodGhpcy5pbmRleCk7XG4gICAgdGhpcy5zdGF0ZUFmdGVyQXR0ck5hbWUoYyk7XG4gIH1cbiAgc3RhdGVBZnRlckF0dHJOYW1lKGMpIHtcbiAgICBpZiAoYyA9PT0gNjEpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAxODtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDQ3IHx8IGMgPT09IDYyKSB7XG4gICAgICB0aGlzLmNicy5vbmF0dHJpYmVuZCgwLCB0aGlzLnNlY3Rpb25TdGFydCk7XG4gICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IC0xO1xuICAgICAgdGhpcy5zdGF0ZSA9IDExO1xuICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJOYW1lKGMpO1xuICAgIH0gZWxzZSBpZiAoIWlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgdGhpcy5jYnMub25hdHRyaWJlbmQoMCwgdGhpcy5zZWN0aW9uU3RhcnQpO1xuICAgICAgdGhpcy5oYW5kbGVBdHRyU3RhcnQoYyk7XG4gICAgfVxuICB9XG4gIHN0YXRlQmVmb3JlQXR0clZhbHVlKGMpIHtcbiAgICBpZiAoYyA9PT0gMzQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAxOTtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmIChjID09PSAzOSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IDIwO1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB9IGVsc2UgaWYgKCFpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgIHRoaXMuc3RhdGUgPSAyMTtcbiAgICAgIHRoaXMuc3RhdGVJbkF0dHJWYWx1ZU5vUXVvdGVzKGMpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVJbkF0dHJWYWx1ZShjLCBxdW90ZSkge1xuICAgIGlmIChjID09PSBxdW90ZSB8fCB0aGlzLmZhc3RGb3J3YXJkVG8ocXVvdGUpKSB7XG4gICAgICB0aGlzLmNicy5vbmF0dHJpYmRhdGEodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSAtMTtcbiAgICAgIHRoaXMuY2JzLm9uYXR0cmliZW5kKFxuICAgICAgICBxdW90ZSA9PT0gMzQgPyAzIDogMixcbiAgICAgICAgdGhpcy5pbmRleCArIDFcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRlID0gMTE7XG4gICAgfVxuICB9XG4gIHN0YXRlSW5BdHRyVmFsdWVEb3VibGVRdW90ZXMoYykge1xuICAgIHRoaXMuaGFuZGxlSW5BdHRyVmFsdWUoYywgMzQpO1xuICB9XG4gIHN0YXRlSW5BdHRyVmFsdWVTaW5nbGVRdW90ZXMoYykge1xuICAgIHRoaXMuaGFuZGxlSW5BdHRyVmFsdWUoYywgMzkpO1xuICB9XG4gIHN0YXRlSW5BdHRyVmFsdWVOb1F1b3RlcyhjKSB7XG4gICAgaWYgKGlzV2hpdGVzcGFjZShjKSB8fCBjID09PSA2Mikge1xuICAgICAgdGhpcy5jYnMub25hdHRyaWJkYXRhKHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gLTE7XG4gICAgICB0aGlzLmNicy5vbmF0dHJpYmVuZCgxLCB0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuc3RhdGUgPSAxMTtcbiAgICAgIHRoaXMuc3RhdGVCZWZvcmVBdHRyTmFtZShjKTtcbiAgICB9IGVsc2UgaWYgKCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZhbHNlKSAmJiBjID09PSAzNCB8fCBjID09PSAzOSB8fCBjID09PSA2MCB8fCBjID09PSA2MSB8fCBjID09PSA5Nikge1xuICAgICAgdGhpcy5jYnMub25lcnIoXG4gICAgICAgIDE4LFxuICAgICAgICB0aGlzLmluZGV4XG4gICAgICApO1xuICAgIH0gZWxzZSA7XG4gIH1cbiAgc3RhdGVCZWZvcmVEZWNsYXJhdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IDkxKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMjY7XG4gICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gYyA9PT0gNDUgPyAyNSA6IDIzO1xuICAgIH1cbiAgfVxuICBzdGF0ZUluRGVjbGFyYXRpb24oYykge1xuICAgIGlmIChjID09PSA2MiB8fCB0aGlzLmZhc3RGb3J3YXJkVG8oNjIpKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG4gIHN0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oYykge1xuICAgIGlmIChjID09PSA2MiB8fCB0aGlzLmZhc3RGb3J3YXJkVG8oNjIpKSB7XG4gICAgICB0aGlzLmNicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbih0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG4gIHN0YXRlQmVmb3JlQ29tbWVudChjKSB7XG4gICAgaWYgKGMgPT09IDQ1KSB7XG4gICAgICB0aGlzLnN0YXRlID0gMjg7XG4gICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFNlcXVlbmNlcy5Db21tZW50RW5kO1xuICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMjtcbiAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAyMztcbiAgICB9XG4gIH1cbiAgc3RhdGVJblNwZWNpYWxDb21tZW50KGMpIHtcbiAgICBpZiAoYyA9PT0gNjIgfHwgdGhpcy5mYXN0Rm9yd2FyZFRvKDYyKSkge1xuICAgICAgdGhpcy5jYnMub25jb21tZW50KHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cbiAgc3RhdGVCZWZvcmVTcGVjaWFsUyhjKSB7XG4gICAgaWYgKGMgPT09IFNlcXVlbmNlcy5TY3JpcHRFbmRbM10pIHtcbiAgICAgIHRoaXMuc3RhcnRTcGVjaWFsKFNlcXVlbmNlcy5TY3JpcHRFbmQsIDQpO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gU2VxdWVuY2VzLlN0eWxlRW5kWzNdKSB7XG4gICAgICB0aGlzLnN0YXJ0U3BlY2lhbChTZXF1ZW5jZXMuU3R5bGVFbmQsIDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gNjtcbiAgICAgIHRoaXMuc3RhdGVJblRhZ05hbWUoYyk7XG4gICAgfVxuICB9XG4gIHN0YXRlQmVmb3JlU3BlY2lhbFQoYykge1xuICAgIGlmIChjID09PSBTZXF1ZW5jZXMuVGl0bGVFbmRbM10pIHtcbiAgICAgIHRoaXMuc3RhcnRTcGVjaWFsKFNlcXVlbmNlcy5UaXRsZUVuZCwgNCk7XG4gICAgfSBlbHNlIGlmIChjID09PSBTZXF1ZW5jZXMuVGV4dGFyZWFFbmRbM10pIHtcbiAgICAgIHRoaXMuc3RhcnRTcGVjaWFsKFNlcXVlbmNlcy5UZXh0YXJlYUVuZCwgNCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSA2O1xuICAgICAgdGhpcy5zdGF0ZUluVGFnTmFtZShjKTtcbiAgICB9XG4gIH1cbiAgc3RhcnRFbnRpdHkoKSB7XG4gIH1cbiAgc3RhdGVJbkVudGl0eSgpIHtcbiAgfVxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCB0aGUgYnVmZmVyLCBjYWxsaW5nIHRoZSBmdW5jdGlvbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgKlxuICAgKiBTdGF0ZXMgdGhhdCBhcmUgbW9yZSBsaWtlbHkgdG8gYmUgaGl0IGFyZSBoaWdoZXIgdXAsIGFzIGEgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuXG4gICAqL1xuICBwYXJzZShpbnB1dCkge1xuICAgIHRoaXMuYnVmZmVyID0gaW5wdXQ7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmJ1ZmZlci5jaGFyQ29kZUF0KHRoaXMuaW5kZXgpO1xuICAgICAgaWYgKGMgPT09IDEwICYmIHRoaXMuc3RhdGUgIT09IDMzKSB7XG4gICAgICAgIHRoaXMubmV3bGluZXMucHVzaCh0aGlzLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlVGV4dChjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW50ZXJwb2xhdGlvbk9wZW4oYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUludGVycG9sYXRpb24oYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUludGVycG9sYXRpb25DbG9zZShjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDMxOiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVNwZWNpYWxTdGFydFNlcXVlbmNlKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMzI6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5SQ0RBVEEoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAyNjoge1xuICAgICAgICAgIHRoaXMuc3RhdGVDREFUQVNlcXVlbmNlKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMTk6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5BdHRyVmFsdWVEb3VibGVRdW90ZXMoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxMjoge1xuICAgICAgICAgIHRoaXMuc3RhdGVJbkF0dHJOYW1lKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMTM6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5EaXJOYW1lKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMTQ6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5EaXJBcmcoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxNToge1xuICAgICAgICAgIHRoaXMuc3RhdGVJbkR5bmFtaWNEaXJBcmcoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxNjoge1xuICAgICAgICAgIHRoaXMuc3RhdGVJbkRpck1vZGlmaWVyKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMjg6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5Db21tZW50TGlrZShjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDI3OiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUluU3BlY2lhbENvbW1lbnQoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxMToge1xuICAgICAgICAgIHRoaXMuc3RhdGVCZWZvcmVBdHRyTmFtZShjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDY6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5UYWdOYW1lKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMzQ6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5TRkNSb290VGFnTmFtZShjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDk6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5DbG9zaW5nVGFnTmFtZShjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDU6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlVGFnTmFtZShjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDE3OiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUFmdGVyQXR0ck5hbWUoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAyMDoge1xuICAgICAgICAgIHRoaXMuc3RhdGVJbkF0dHJWYWx1ZVNpbmdsZVF1b3RlcyhjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDE4OiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJWYWx1ZShjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlQ2xvc2luZ1RhZ05hbWUoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxMDoge1xuICAgICAgICAgIHRoaXMuc3RhdGVBZnRlckNsb3NpbmdUYWdOYW1lKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMjk6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlU3BlY2lhbFMoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzMDoge1xuICAgICAgICAgIHRoaXMuc3RhdGVCZWZvcmVTcGVjaWFsVChjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDIxOiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUluQXR0clZhbHVlTm9RdW90ZXMoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSA3OiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUluU2VsZkNsb3NpbmdUYWcoYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAyMzoge1xuICAgICAgICAgIHRoaXMuc3RhdGVJbkRlY2xhcmF0aW9uKGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMjI6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlRGVjbGFyYXRpb24oYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAyNToge1xuICAgICAgICAgIHRoaXMuc3RhdGVCZWZvcmVDb21tZW50KGMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMjQ6IHtcbiAgICAgICAgICB0aGlzLnN0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzMzoge1xuICAgICAgICAgIHRoaXMuc3RhdGVJbkVudGl0eSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBkYXRhIHRoYXQgaGFzIGFscmVhZHkgYmVlbiBjb25zdW1lZCBmcm9tIHRoZSBidWZmZXIuXG4gICAqL1xuICBjbGVhbnVwKCkge1xuICAgIGlmICh0aGlzLnNlY3Rpb25TdGFydCAhPT0gdGhpcy5pbmRleCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IDEgfHwgdGhpcy5zdGF0ZSA9PT0gMzIgJiYgdGhpcy5zZXF1ZW5jZUluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2JzLm9udGV4dCh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gMTkgfHwgdGhpcy5zdGF0ZSA9PT0gMjAgfHwgdGhpcy5zdGF0ZSA9PT0gMjEpIHtcbiAgICAgICAgdGhpcy5jYnMub25hdHRyaWJkYXRhKHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmaW5pc2goKSB7XG4gICAgdGhpcy5oYW5kbGVUcmFpbGluZ0RhdGEoKTtcbiAgICB0aGlzLmNicy5vbmVuZCgpO1xuICB9XG4gIC8qKiBIYW5kbGUgYW55IHRyYWlsaW5nIGRhdGEuICovXG4gIGhhbmRsZVRyYWlsaW5nRGF0YSgpIHtcbiAgICBjb25zdCBlbmRJbmRleCA9IHRoaXMuYnVmZmVyLmxlbmd0aDtcbiAgICBpZiAodGhpcy5zZWN0aW9uU3RhcnQgPj0gZW5kSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IDI4KSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2VxdWVuY2UgPT09IFNlcXVlbmNlcy5DZGF0YUVuZCkge1xuICAgICAgICB0aGlzLmNicy5vbmNkYXRhKHRoaXMuc2VjdGlvblN0YXJ0LCBlbmRJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNicy5vbmNvbW1lbnQodGhpcy5zZWN0aW9uU3RhcnQsIGVuZEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IDYgfHwgdGhpcy5zdGF0ZSA9PT0gMTEgfHwgdGhpcy5zdGF0ZSA9PT0gMTggfHwgdGhpcy5zdGF0ZSA9PT0gMTcgfHwgdGhpcy5zdGF0ZSA9PT0gMTIgfHwgdGhpcy5zdGF0ZSA9PT0gMTMgfHwgdGhpcy5zdGF0ZSA9PT0gMTQgfHwgdGhpcy5zdGF0ZSA9PT0gMTUgfHwgdGhpcy5zdGF0ZSA9PT0gMTYgfHwgdGhpcy5zdGF0ZSA9PT0gMjAgfHwgdGhpcy5zdGF0ZSA9PT0gMTkgfHwgdGhpcy5zdGF0ZSA9PT0gMjEgfHwgdGhpcy5zdGF0ZSA9PT0gOSkgOyBlbHNlIHtcbiAgICAgIHRoaXMuY2JzLm9udGV4dCh0aGlzLnNlY3Rpb25TdGFydCwgZW5kSW5kZXgpO1xuICAgIH1cbiAgfVxuICBlbWl0Q29kZVBvaW50KGNwLCBjb25zdW1lZCkge1xuICB9XG59XG5cbmNvbnN0IENvbXBpbGVyRGVwcmVjYXRpb25UeXBlcyA9IHtcbiAgXCJDT01QSUxFUl9JU19PTl9FTEVNRU5UXCI6IFwiQ09NUElMRVJfSVNfT05fRUxFTUVOVFwiLFxuICBcIkNPTVBJTEVSX1ZfQklORF9TWU5DXCI6IFwiQ09NUElMRVJfVl9CSU5EX1NZTkNcIixcbiAgXCJDT01QSUxFUl9WX0JJTkRfT0JKRUNUX09SREVSXCI6IFwiQ09NUElMRVJfVl9CSU5EX09CSkVDVF9PUkRFUlwiLFxuICBcIkNPTVBJTEVSX1ZfT05fTkFUSVZFXCI6IFwiQ09NUElMRVJfVl9PTl9OQVRJVkVcIixcbiAgXCJDT01QSUxFUl9WX0lGX1ZfRk9SX1BSRUNFREVOQ0VcIjogXCJDT01QSUxFUl9WX0lGX1ZfRk9SX1BSRUNFREVOQ0VcIixcbiAgXCJDT01QSUxFUl9OQVRJVkVfVEVNUExBVEVcIjogXCJDT01QSUxFUl9OQVRJVkVfVEVNUExBVEVcIixcbiAgXCJDT01QSUxFUl9JTkxJTkVfVEVNUExBVEVcIjogXCJDT01QSUxFUl9JTkxJTkVfVEVNUExBVEVcIixcbiAgXCJDT01QSUxFUl9GSUxURVJTXCI6IFwiQ09NUElMRVJfRklMVEVSU1wiXG59O1xuY29uc3QgZGVwcmVjYXRpb25EYXRhID0ge1xuICBbXCJDT01QSUxFUl9JU19PTl9FTEVNRU5UXCJdOiB7XG4gICAgbWVzc2FnZTogYFBsYXRmb3JtLW5hdGl2ZSBlbGVtZW50cyB3aXRoIFwiaXNcIiBwcm9wIHdpbGwgbm8gbG9uZ2VyIGJlIHRyZWF0ZWQgYXMgY29tcG9uZW50cyBpbiBWdWUgMyB1bmxlc3MgdGhlIFwiaXNcIiB2YWx1ZSBpcyBleHBsaWNpdGx5IHByZWZpeGVkIHdpdGggXCJ2dWU6XCIuYCxcbiAgICBsaW5rOiBgaHR0cHM6Ly92My1taWdyYXRpb24udnVlanMub3JnL2JyZWFraW5nLWNoYW5nZXMvY3VzdG9tLWVsZW1lbnRzLWludGVyb3AuaHRtbGBcbiAgfSxcbiAgW1wiQ09NUElMRVJfVl9CSU5EX1NZTkNcIl06IHtcbiAgICBtZXNzYWdlOiAoa2V5KSA9PiBgLnN5bmMgbW9kaWZpZXIgZm9yIHYtYmluZCBoYXMgYmVlbiByZW1vdmVkLiBVc2Ugdi1tb2RlbCB3aXRoIGFyZ3VtZW50IGluc3RlYWQuIFxcYHYtYmluZDoke2tleX0uc3luY1xcYCBzaG91bGQgYmUgY2hhbmdlZCB0byBcXGB2LW1vZGVsOiR7a2V5fVxcYC5gLFxuICAgIGxpbms6IGBodHRwczovL3YzLW1pZ3JhdGlvbi52dWVqcy5vcmcvYnJlYWtpbmctY2hhbmdlcy92LW1vZGVsLmh0bWxgXG4gIH0sXG4gIFtcIkNPTVBJTEVSX1ZfQklORF9PQkpFQ1RfT1JERVJcIl06IHtcbiAgICBtZXNzYWdlOiBgdi1iaW5kPVwib2JqXCIgdXNhZ2UgaXMgbm93IG9yZGVyIHNlbnNpdGl2ZSBhbmQgYmVoYXZlcyBsaWtlIEphdmFTY3JpcHQgb2JqZWN0IHNwcmVhZDogaXQgd2lsbCBub3cgb3ZlcndyaXRlIGFuIGV4aXN0aW5nIG5vbi1tZXJnZWFibGUgYXR0cmlidXRlIHRoYXQgYXBwZWFycyBiZWZvcmUgdi1iaW5kIGluIHRoZSBjYXNlIG9mIGNvbmZsaWN0LiBUbyByZXRhaW4gMi54IGJlaGF2aW9yLCBtb3ZlIHYtYmluZCB0byBtYWtlIGl0IHRoZSBmaXJzdCBhdHRyaWJ1dGUuIFlvdSBjYW4gYWxzbyBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgaWYgdGhlIHVzYWdlIGlzIGludGVuZGVkLmAsXG4gICAgbGluazogYGh0dHBzOi8vdjMtbWlncmF0aW9uLnZ1ZWpzLm9yZy9icmVha2luZy1jaGFuZ2VzL3YtYmluZC5odG1sYFxuICB9LFxuICBbXCJDT01QSUxFUl9WX09OX05BVElWRVwiXToge1xuICAgIG1lc3NhZ2U6IGAubmF0aXZlIG1vZGlmaWVyIGZvciB2LW9uIGhhcyBiZWVuIHJlbW92ZWQgYXMgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeS5gLFxuICAgIGxpbms6IGBodHRwczovL3YzLW1pZ3JhdGlvbi52dWVqcy5vcmcvYnJlYWtpbmctY2hhbmdlcy92LW9uLW5hdGl2ZS1tb2RpZmllci1yZW1vdmVkLmh0bWxgXG4gIH0sXG4gIFtcIkNPTVBJTEVSX1ZfSUZfVl9GT1JfUFJFQ0VERU5DRVwiXToge1xuICAgIG1lc3NhZ2U6IGB2LWlmIC8gdi1mb3IgcHJlY2VkZW5jZSB3aGVuIHVzZWQgb24gdGhlIHNhbWUgZWxlbWVudCBoYXMgY2hhbmdlZCBpbiBWdWUgMzogdi1pZiBub3cgdGFrZXMgaGlnaGVyIHByZWNlZGVuY2UgYW5kIHdpbGwgbm8gbG9uZ2VyIGhhdmUgYWNjZXNzIHRvIHYtZm9yIHNjb3BlIHZhcmlhYmxlcy4gSXQgaXMgYmVzdCB0byBhdm9pZCB0aGUgYW1iaWd1aXR5IHdpdGggPHRlbXBsYXRlPiB0YWdzIG9yIHVzZSBhIGNvbXB1dGVkIHByb3BlcnR5IHRoYXQgZmlsdGVycyB2LWZvciBkYXRhIHNvdXJjZS5gLFxuICAgIGxpbms6IGBodHRwczovL3YzLW1pZ3JhdGlvbi52dWVqcy5vcmcvYnJlYWtpbmctY2hhbmdlcy92LWlmLXYtZm9yLmh0bWxgXG4gIH0sXG4gIFtcIkNPTVBJTEVSX05BVElWRV9URU1QTEFURVwiXToge1xuICAgIG1lc3NhZ2U6IGA8dGVtcGxhdGU+IHdpdGggbm8gc3BlY2lhbCBkaXJlY3RpdmVzIHdpbGwgcmVuZGVyIGFzIGEgbmF0aXZlIHRlbXBsYXRlIGVsZW1lbnQgaW5zdGVhZCBvZiBpdHMgaW5uZXIgY29udGVudCBpbiBWdWUgMy5gXG4gIH0sXG4gIFtcIkNPTVBJTEVSX0lOTElORV9URU1QTEFURVwiXToge1xuICAgIG1lc3NhZ2U6IGBcImlubGluZS10ZW1wbGF0ZVwiIGhhcyBiZWVuIHJlbW92ZWQgaW4gVnVlIDMuYCxcbiAgICBsaW5rOiBgaHR0cHM6Ly92My1taWdyYXRpb24udnVlanMub3JnL2JyZWFraW5nLWNoYW5nZXMvaW5saW5lLXRlbXBsYXRlLWF0dHJpYnV0ZS5odG1sYFxuICB9LFxuICBbXCJDT01QSUxFUl9GSUxURVJTXCJdOiB7XG4gICAgbWVzc2FnZTogYGZpbHRlcnMgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gVnVlIDMuIFRoZSBcInxcIiBzeW1ib2wgd2lsbCBiZSB0cmVhdGVkIGFzIG5hdGl2ZSBKYXZhU2NyaXB0IGJpdHdpc2UgT1Igb3BlcmF0b3IuIFVzZSBtZXRob2QgY2FsbHMgb3IgY29tcHV0ZWQgcHJvcGVydGllcyBpbnN0ZWFkLmAsXG4gICAgbGluazogYGh0dHBzOi8vdjMtbWlncmF0aW9uLnZ1ZWpzLm9yZy9icmVha2luZy1jaGFuZ2VzL2ZpbHRlcnMuaHRtbGBcbiAgfVxufTtcbmZ1bmN0aW9uIGdldENvbXBhdFZhbHVlKGtleSwgeyBjb21wYXRDb25maWcgfSkge1xuICBjb25zdCB2YWx1ZSA9IGNvbXBhdENvbmZpZyAmJiBjb21wYXRDb25maWdba2V5XTtcbiAgaWYgKGtleSA9PT0gXCJNT0RFXCIpIHtcbiAgICByZXR1cm4gdmFsdWUgfHwgMztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzQ29tcGF0RW5hYmxlZChrZXksIGNvbnRleHQpIHtcbiAgY29uc3QgbW9kZSA9IGdldENvbXBhdFZhbHVlKFwiTU9ERVwiLCBjb250ZXh0KTtcbiAgY29uc3QgdmFsdWUgPSBnZXRDb21wYXRWYWx1ZShrZXksIGNvbnRleHQpO1xuICByZXR1cm4gbW9kZSA9PT0gMyA/IHZhbHVlID09PSB0cnVlIDogdmFsdWUgIT09IGZhbHNlO1xufVxuZnVuY3Rpb24gY2hlY2tDb21wYXRFbmFibGVkKGtleSwgY29udGV4dCwgbG9jLCAuLi5hcmdzKSB7XG4gIGNvbnN0IGVuYWJsZWQgPSBpc0NvbXBhdEVuYWJsZWQoa2V5LCBjb250ZXh0KTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgZW5hYmxlZCkge1xuICAgIHdhcm5EZXByZWNhdGlvbihrZXksIGNvbnRleHQsIGxvYywgLi4uYXJncyk7XG4gIH1cbiAgcmV0dXJuIGVuYWJsZWQ7XG59XG5mdW5jdGlvbiB3YXJuRGVwcmVjYXRpb24oa2V5LCBjb250ZXh0LCBsb2MsIC4uLmFyZ3MpIHtcbiAgY29uc3QgdmFsID0gZ2V0Q29tcGF0VmFsdWUoa2V5LCBjb250ZXh0KTtcbiAgaWYgKHZhbCA9PT0gXCJzdXBwcmVzcy13YXJuaW5nXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBtZXNzYWdlLCBsaW5rIH0gPSBkZXByZWNhdGlvbkRhdGFba2V5XTtcbiAgY29uc3QgbXNnID0gYChkZXByZWNhdGlvbiAke2tleX0pICR7dHlwZW9mIG1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIiA/IG1lc3NhZ2UoLi4uYXJncykgOiBtZXNzYWdlfSR7bGluayA/IGBcbiAgRGV0YWlsczogJHtsaW5rfWAgOiBgYH1gO1xuICBjb25zdCBlcnIgPSBuZXcgU3ludGF4RXJyb3IobXNnKTtcbiAgZXJyLmNvZGUgPSBrZXk7XG4gIGlmIChsb2MpIGVyci5sb2MgPSBsb2M7XG4gIGNvbnRleHQub25XYXJuKGVycik7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRPbkVycm9yKGVycm9yKSB7XG4gIHRocm93IGVycm9yO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uV2Fybihtc2cpIHtcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjb25zb2xlLndhcm4oYFtWdWUgd2Fybl0gJHttc2cubWVzc2FnZX1gKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBpbGVyRXJyb3IoY29kZSwgbG9jLCBtZXNzYWdlcywgYWRkaXRpb25hbE1lc3NhZ2UpIHtcbiAgY29uc3QgbXNnID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSA/IChtZXNzYWdlcyB8fCBlcnJvck1lc3NhZ2VzKVtjb2RlXSArIChhZGRpdGlvbmFsTWVzc2FnZSB8fCBgYCkgOiBgaHR0cHM6Ly92dWVqcy5vcmcvZXJyb3ItcmVmZXJlbmNlLyNjb21waWxlci0ke2NvZGV9YDtcbiAgY29uc3QgZXJyb3IgPSBuZXcgU3ludGF4RXJyb3IoU3RyaW5nKG1zZykpO1xuICBlcnJvci5jb2RlID0gY29kZTtcbiAgZXJyb3IubG9jID0gbG9jO1xuICByZXR1cm4gZXJyb3I7XG59XG5jb25zdCBFcnJvckNvZGVzID0ge1xuICBcIkFCUlVQVF9DTE9TSU5HX09GX0VNUFRZX0NPTU1FTlRcIjogMCxcbiAgXCIwXCI6IFwiQUJSVVBUX0NMT1NJTkdfT0ZfRU1QVFlfQ09NTUVOVFwiLFxuICBcIkNEQVRBX0lOX0hUTUxfQ09OVEVOVFwiOiAxLFxuICBcIjFcIjogXCJDREFUQV9JTl9IVE1MX0NPTlRFTlRcIixcbiAgXCJEVVBMSUNBVEVfQVRUUklCVVRFXCI6IDIsXG4gIFwiMlwiOiBcIkRVUExJQ0FURV9BVFRSSUJVVEVcIixcbiAgXCJFTkRfVEFHX1dJVEhfQVRUUklCVVRFU1wiOiAzLFxuICBcIjNcIjogXCJFTkRfVEFHX1dJVEhfQVRUUklCVVRFU1wiLFxuICBcIkVORF9UQUdfV0lUSF9UUkFJTElOR19TT0xJRFVTXCI6IDQsXG4gIFwiNFwiOiBcIkVORF9UQUdfV0lUSF9UUkFJTElOR19TT0xJRFVTXCIsXG4gIFwiRU9GX0JFRk9SRV9UQUdfTkFNRVwiOiA1LFxuICBcIjVcIjogXCJFT0ZfQkVGT1JFX1RBR19OQU1FXCIsXG4gIFwiRU9GX0lOX0NEQVRBXCI6IDYsXG4gIFwiNlwiOiBcIkVPRl9JTl9DREFUQVwiLFxuICBcIkVPRl9JTl9DT01NRU5UXCI6IDcsXG4gIFwiN1wiOiBcIkVPRl9JTl9DT01NRU5UXCIsXG4gIFwiRU9GX0lOX1NDUklQVF9IVE1MX0NPTU1FTlRfTElLRV9URVhUXCI6IDgsXG4gIFwiOFwiOiBcIkVPRl9JTl9TQ1JJUFRfSFRNTF9DT01NRU5UX0xJS0VfVEVYVFwiLFxuICBcIkVPRl9JTl9UQUdcIjogOSxcbiAgXCI5XCI6IFwiRU9GX0lOX1RBR1wiLFxuICBcIklOQ09SUkVDVExZX0NMT1NFRF9DT01NRU5UXCI6IDEwLFxuICBcIjEwXCI6IFwiSU5DT1JSRUNUTFlfQ0xPU0VEX0NPTU1FTlRcIixcbiAgXCJJTkNPUlJFQ1RMWV9PUEVORURfQ09NTUVOVFwiOiAxMSxcbiAgXCIxMVwiOiBcIklOQ09SUkVDVExZX09QRU5FRF9DT01NRU5UXCIsXG4gIFwiSU5WQUxJRF9GSVJTVF9DSEFSQUNURVJfT0ZfVEFHX05BTUVcIjogMTIsXG4gIFwiMTJcIjogXCJJTlZBTElEX0ZJUlNUX0NIQVJBQ1RFUl9PRl9UQUdfTkFNRVwiLFxuICBcIk1JU1NJTkdfQVRUUklCVVRFX1ZBTFVFXCI6IDEzLFxuICBcIjEzXCI6IFwiTUlTU0lOR19BVFRSSUJVVEVfVkFMVUVcIixcbiAgXCJNSVNTSU5HX0VORF9UQUdfTkFNRVwiOiAxNCxcbiAgXCIxNFwiOiBcIk1JU1NJTkdfRU5EX1RBR19OQU1FXCIsXG4gIFwiTUlTU0lOR19XSElURVNQQUNFX0JFVFdFRU5fQVRUUklCVVRFU1wiOiAxNSxcbiAgXCIxNVwiOiBcIk1JU1NJTkdfV0hJVEVTUEFDRV9CRVRXRUVOX0FUVFJJQlVURVNcIixcbiAgXCJORVNURURfQ09NTUVOVFwiOiAxNixcbiAgXCIxNlwiOiBcIk5FU1RFRF9DT01NRU5UXCIsXG4gIFwiVU5FWFBFQ1RFRF9DSEFSQUNURVJfSU5fQVRUUklCVVRFX05BTUVcIjogMTcsXG4gIFwiMTdcIjogXCJVTkVYUEVDVEVEX0NIQVJBQ1RFUl9JTl9BVFRSSUJVVEVfTkFNRVwiLFxuICBcIlVORVhQRUNURURfQ0hBUkFDVEVSX0lOX1VOUVVPVEVEX0FUVFJJQlVURV9WQUxVRVwiOiAxOCxcbiAgXCIxOFwiOiBcIlVORVhQRUNURURfQ0hBUkFDVEVSX0lOX1VOUVVPVEVEX0FUVFJJQlVURV9WQUxVRVwiLFxuICBcIlVORVhQRUNURURfRVFVQUxTX1NJR05fQkVGT1JFX0FUVFJJQlVURV9OQU1FXCI6IDE5LFxuICBcIjE5XCI6IFwiVU5FWFBFQ1RFRF9FUVVBTFNfU0lHTl9CRUZPUkVfQVRUUklCVVRFX05BTUVcIixcbiAgXCJVTkVYUEVDVEVEX05VTExfQ0hBUkFDVEVSXCI6IDIwLFxuICBcIjIwXCI6IFwiVU5FWFBFQ1RFRF9OVUxMX0NIQVJBQ1RFUlwiLFxuICBcIlVORVhQRUNURURfUVVFU1RJT05fTUFSS19JTlNURUFEX09GX1RBR19OQU1FXCI6IDIxLFxuICBcIjIxXCI6IFwiVU5FWFBFQ1RFRF9RVUVTVElPTl9NQVJLX0lOU1RFQURfT0ZfVEFHX05BTUVcIixcbiAgXCJVTkVYUEVDVEVEX1NPTElEVVNfSU5fVEFHXCI6IDIyLFxuICBcIjIyXCI6IFwiVU5FWFBFQ1RFRF9TT0xJRFVTX0lOX1RBR1wiLFxuICBcIlhfSU5WQUxJRF9FTkRfVEFHXCI6IDIzLFxuICBcIjIzXCI6IFwiWF9JTlZBTElEX0VORF9UQUdcIixcbiAgXCJYX01JU1NJTkdfRU5EX1RBR1wiOiAyNCxcbiAgXCIyNFwiOiBcIlhfTUlTU0lOR19FTkRfVEFHXCIsXG4gIFwiWF9NSVNTSU5HX0lOVEVSUE9MQVRJT05fRU5EXCI6IDI1LFxuICBcIjI1XCI6IFwiWF9NSVNTSU5HX0lOVEVSUE9MQVRJT05fRU5EXCIsXG4gIFwiWF9NSVNTSU5HX0RJUkVDVElWRV9OQU1FXCI6IDI2LFxuICBcIjI2XCI6IFwiWF9NSVNTSU5HX0RJUkVDVElWRV9OQU1FXCIsXG4gIFwiWF9NSVNTSU5HX0RZTkFNSUNfRElSRUNUSVZFX0FSR1VNRU5UX0VORFwiOiAyNyxcbiAgXCIyN1wiOiBcIlhfTUlTU0lOR19EWU5BTUlDX0RJUkVDVElWRV9BUkdVTUVOVF9FTkRcIixcbiAgXCJYX1ZfSUZfTk9fRVhQUkVTU0lPTlwiOiAyOCxcbiAgXCIyOFwiOiBcIlhfVl9JRl9OT19FWFBSRVNTSU9OXCIsXG4gIFwiWF9WX0lGX1NBTUVfS0VZXCI6IDI5LFxuICBcIjI5XCI6IFwiWF9WX0lGX1NBTUVfS0VZXCIsXG4gIFwiWF9WX0VMU0VfTk9fQURKQUNFTlRfSUZcIjogMzAsXG4gIFwiMzBcIjogXCJYX1ZfRUxTRV9OT19BREpBQ0VOVF9JRlwiLFxuICBcIlhfVl9GT1JfTk9fRVhQUkVTU0lPTlwiOiAzMSxcbiAgXCIzMVwiOiBcIlhfVl9GT1JfTk9fRVhQUkVTU0lPTlwiLFxuICBcIlhfVl9GT1JfTUFMRk9STUVEX0VYUFJFU1NJT05cIjogMzIsXG4gIFwiMzJcIjogXCJYX1ZfRk9SX01BTEZPUk1FRF9FWFBSRVNTSU9OXCIsXG4gIFwiWF9WX0ZPUl9URU1QTEFURV9LRVlfUExBQ0VNRU5UXCI6IDMzLFxuICBcIjMzXCI6IFwiWF9WX0ZPUl9URU1QTEFURV9LRVlfUExBQ0VNRU5UXCIsXG4gIFwiWF9WX0JJTkRfTk9fRVhQUkVTU0lPTlwiOiAzNCxcbiAgXCIzNFwiOiBcIlhfVl9CSU5EX05PX0VYUFJFU1NJT05cIixcbiAgXCJYX1ZfT05fTk9fRVhQUkVTU0lPTlwiOiAzNSxcbiAgXCIzNVwiOiBcIlhfVl9PTl9OT19FWFBSRVNTSU9OXCIsXG4gIFwiWF9WX1NMT1RfVU5FWFBFQ1RFRF9ESVJFQ1RJVkVfT05fU0xPVF9PVVRMRVRcIjogMzYsXG4gIFwiMzZcIjogXCJYX1ZfU0xPVF9VTkVYUEVDVEVEX0RJUkVDVElWRV9PTl9TTE9UX09VVExFVFwiLFxuICBcIlhfVl9TTE9UX01JWEVEX1NMT1RfVVNBR0VcIjogMzcsXG4gIFwiMzdcIjogXCJYX1ZfU0xPVF9NSVhFRF9TTE9UX1VTQUdFXCIsXG4gIFwiWF9WX1NMT1RfRFVQTElDQVRFX1NMT1RfTkFNRVNcIjogMzgsXG4gIFwiMzhcIjogXCJYX1ZfU0xPVF9EVVBMSUNBVEVfU0xPVF9OQU1FU1wiLFxuICBcIlhfVl9TTE9UX0VYVFJBTkVPVVNfREVGQVVMVF9TTE9UX0NISUxEUkVOXCI6IDM5LFxuICBcIjM5XCI6IFwiWF9WX1NMT1RfRVhUUkFORU9VU19ERUZBVUxUX1NMT1RfQ0hJTERSRU5cIixcbiAgXCJYX1ZfU0xPVF9NSVNQTEFDRURcIjogNDAsXG4gIFwiNDBcIjogXCJYX1ZfU0xPVF9NSVNQTEFDRURcIixcbiAgXCJYX1ZfTU9ERUxfTk9fRVhQUkVTU0lPTlwiOiA0MSxcbiAgXCI0MVwiOiBcIlhfVl9NT0RFTF9OT19FWFBSRVNTSU9OXCIsXG4gIFwiWF9WX01PREVMX01BTEZPUk1FRF9FWFBSRVNTSU9OXCI6IDQyLFxuICBcIjQyXCI6IFwiWF9WX01PREVMX01BTEZPUk1FRF9FWFBSRVNTSU9OXCIsXG4gIFwiWF9WX01PREVMX09OX1NDT1BFX1ZBUklBQkxFXCI6IDQzLFxuICBcIjQzXCI6IFwiWF9WX01PREVMX09OX1NDT1BFX1ZBUklBQkxFXCIsXG4gIFwiWF9WX01PREVMX09OX1BST1BTXCI6IDQ0LFxuICBcIjQ0XCI6IFwiWF9WX01PREVMX09OX1BST1BTXCIsXG4gIFwiWF9JTlZBTElEX0VYUFJFU1NJT05cIjogNDUsXG4gIFwiNDVcIjogXCJYX0lOVkFMSURfRVhQUkVTU0lPTlwiLFxuICBcIlhfS0VFUF9BTElWRV9JTlZBTElEX0NISUxEUkVOXCI6IDQ2LFxuICBcIjQ2XCI6IFwiWF9LRUVQX0FMSVZFX0lOVkFMSURfQ0hJTERSRU5cIixcbiAgXCJYX1BSRUZJWF9JRF9OT1RfU1VQUE9SVEVEXCI6IDQ3LFxuICBcIjQ3XCI6IFwiWF9QUkVGSVhfSURfTk9UX1NVUFBPUlRFRFwiLFxuICBcIlhfTU9EVUxFX01PREVfTk9UX1NVUFBPUlRFRFwiOiA0OCxcbiAgXCI0OFwiOiBcIlhfTU9EVUxFX01PREVfTk9UX1NVUFBPUlRFRFwiLFxuICBcIlhfQ0FDSEVfSEFORExFUl9OT1RfU1VQUE9SVEVEXCI6IDQ5LFxuICBcIjQ5XCI6IFwiWF9DQUNIRV9IQU5ETEVSX05PVF9TVVBQT1JURURcIixcbiAgXCJYX1NDT1BFX0lEX05PVF9TVVBQT1JURURcIjogNTAsXG4gIFwiNTBcIjogXCJYX1NDT1BFX0lEX05PVF9TVVBQT1JURURcIixcbiAgXCJYX1ZOT0RFX0hPT0tTXCI6IDUxLFxuICBcIjUxXCI6IFwiWF9WTk9ERV9IT09LU1wiLFxuICBcIlhfVl9CSU5EX0lOVkFMSURfU0FNRV9OQU1FX0FSR1VNRU5UXCI6IDUyLFxuICBcIjUyXCI6IFwiWF9WX0JJTkRfSU5WQUxJRF9TQU1FX05BTUVfQVJHVU1FTlRcIixcbiAgXCJfX0VYVEVORF9QT0lOVF9fXCI6IDUzLFxuICBcIjUzXCI6IFwiX19FWFRFTkRfUE9JTlRfX1wiXG59O1xuY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgLy8gcGFyc2UgZXJyb3JzXG4gIFswXTogXCJJbGxlZ2FsIGNvbW1lbnQuXCIsXG4gIFsxXTogXCJDREFUQSBzZWN0aW9uIGlzIGFsbG93ZWQgb25seSBpbiBYTUwgY29udGV4dC5cIixcbiAgWzJdOiBcIkR1cGxpY2F0ZSBhdHRyaWJ1dGUuXCIsXG4gIFszXTogXCJFbmQgdGFnIGNhbm5vdCBoYXZlIGF0dHJpYnV0ZXMuXCIsXG4gIFs0XTogXCJJbGxlZ2FsICcvJyBpbiB0YWdzLlwiLFxuICBbNV06IFwiVW5leHBlY3RlZCBFT0YgaW4gdGFnLlwiLFxuICBbNl06IFwiVW5leHBlY3RlZCBFT0YgaW4gQ0RBVEEgc2VjdGlvbi5cIixcbiAgWzddOiBcIlVuZXhwZWN0ZWQgRU9GIGluIGNvbW1lbnQuXCIsXG4gIFs4XTogXCJVbmV4cGVjdGVkIEVPRiBpbiBzY3JpcHQuXCIsXG4gIFs5XTogXCJVbmV4cGVjdGVkIEVPRiBpbiB0YWcuXCIsXG4gIFsxMF06IFwiSW5jb3JyZWN0bHkgY2xvc2VkIGNvbW1lbnQuXCIsXG4gIFsxMV06IFwiSW5jb3JyZWN0bHkgb3BlbmVkIGNvbW1lbnQuXCIsXG4gIFsxMl06IFwiSWxsZWdhbCB0YWcgbmFtZS4gVXNlICcmbHQ7JyB0byBwcmludCAnPCcuXCIsXG4gIFsxM106IFwiQXR0cmlidXRlIHZhbHVlIHdhcyBleHBlY3RlZC5cIixcbiAgWzE0XTogXCJFbmQgdGFnIG5hbWUgd2FzIGV4cGVjdGVkLlwiLFxuICBbMTVdOiBcIldoaXRlc3BhY2Ugd2FzIGV4cGVjdGVkLlwiLFxuICBbMTZdOiBcIlVuZXhwZWN0ZWQgJzwhLS0nIGluIGNvbW1lbnQuXCIsXG4gIFsxN106IGBBdHRyaWJ1dGUgbmFtZSBjYW5ub3QgY29udGFpbiBVKzAwMjIgKFwiKSwgVSswMDI3ICgnKSwgYW5kIFUrMDAzQyAoPCkuYCxcbiAgWzE4XTogXCJVbnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUgY2Fubm90IGNvbnRhaW4gVSswMDIyIChcXFwiKSwgVSswMDI3ICgnKSwgVSswMDNDICg8KSwgVSswMDNEICg9KSwgYW5kIFUrMDA2MCAoYCkuXCIsXG4gIFsxOV06IFwiQXR0cmlidXRlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggJz0nLlwiLFxuICBbMjFdOiBcIic8PycgaXMgYWxsb3dlZCBvbmx5IGluIFhNTCBjb250ZXh0LlwiLFxuICBbMjBdOiBgVW5leHBlY3RlZCBudWxsIGNoYXJhY3Rlci5gLFxuICBbMjJdOiBcIklsbGVnYWwgJy8nIGluIHRhZ3MuXCIsXG4gIC8vIFZ1ZS1zcGVjaWZpYyBwYXJzZSBlcnJvcnNcbiAgWzIzXTogXCJJbnZhbGlkIGVuZCB0YWcuXCIsXG4gIFsyNF06IFwiRWxlbWVudCBpcyBtaXNzaW5nIGVuZCB0YWcuXCIsXG4gIFsyNV06IFwiSW50ZXJwb2xhdGlvbiBlbmQgc2lnbiB3YXMgbm90IGZvdW5kLlwiLFxuICBbMjddOiBcIkVuZCBicmFja2V0IGZvciBkeW5hbWljIGRpcmVjdGl2ZSBhcmd1bWVudCB3YXMgbm90IGZvdW5kLiBOb3RlIHRoYXQgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgY2Fubm90IGNvbnRhaW4gc3BhY2VzLlwiLFxuICBbMjZdOiBcIkxlZ2FsIGRpcmVjdGl2ZSBuYW1lIHdhcyBleHBlY3RlZC5cIixcbiAgLy8gdHJhbnNmb3JtIGVycm9yc1xuICBbMjhdOiBgdi1pZi92LWVsc2UtaWYgaXMgbWlzc2luZyBleHByZXNzaW9uLmAsXG4gIFsyOV06IGB2LWlmL2Vsc2UgYnJhbmNoZXMgbXVzdCB1c2UgdW5pcXVlIGtleXMuYCxcbiAgWzMwXTogYHYtZWxzZS92LWVsc2UtaWYgaGFzIG5vIGFkamFjZW50IHYtaWYgb3Igdi1lbHNlLWlmLmAsXG4gIFszMV06IGB2LWZvciBpcyBtaXNzaW5nIGV4cHJlc3Npb24uYCxcbiAgWzMyXTogYHYtZm9yIGhhcyBpbnZhbGlkIGV4cHJlc3Npb24uYCxcbiAgWzMzXTogYDx0ZW1wbGF0ZSB2LWZvcj4ga2V5IHNob3VsZCBiZSBwbGFjZWQgb24gdGhlIDx0ZW1wbGF0ZT4gdGFnLmAsXG4gIFszNF06IGB2LWJpbmQgaXMgbWlzc2luZyBleHByZXNzaW9uLmAsXG4gIFs1Ml06IGB2LWJpbmQgd2l0aCBzYW1lLW5hbWUgc2hvcnRoYW5kIG9ubHkgYWxsb3dzIHN0YXRpYyBhcmd1bWVudC5gLFxuICBbMzVdOiBgdi1vbiBpcyBtaXNzaW5nIGV4cHJlc3Npb24uYCxcbiAgWzM2XTogYFVuZXhwZWN0ZWQgY3VzdG9tIGRpcmVjdGl2ZSBvbiA8c2xvdD4gb3V0bGV0LmAsXG4gIFszN106IGBNaXhlZCB2LXNsb3QgdXNhZ2Ugb24gYm90aCB0aGUgY29tcG9uZW50IGFuZCBuZXN0ZWQgPHRlbXBsYXRlPi4gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgbmFtZWQgc2xvdHMsIGFsbCBzbG90cyBzaG91bGQgdXNlIDx0ZW1wbGF0ZT4gc3ludGF4IHRvIGF2b2lkIHNjb3BlIGFtYmlndWl0eS5gLFxuICBbMzhdOiBgRHVwbGljYXRlIHNsb3QgbmFtZXMgZm91bmQuIGAsXG4gIFszOV06IGBFeHRyYW5lb3VzIGNoaWxkcmVuIGZvdW5kIHdoZW4gY29tcG9uZW50IGFscmVhZHkgaGFzIGV4cGxpY2l0bHkgbmFtZWQgZGVmYXVsdCBzbG90LiBUaGVzZSBjaGlsZHJlbiB3aWxsIGJlIGlnbm9yZWQuYCxcbiAgWzQwXTogYHYtc2xvdCBjYW4gb25seSBiZSB1c2VkIG9uIGNvbXBvbmVudHMgb3IgPHRlbXBsYXRlPiB0YWdzLmAsXG4gIFs0MV06IGB2LW1vZGVsIGlzIG1pc3NpbmcgZXhwcmVzc2lvbi5gLFxuICBbNDJdOiBgdi1tb2RlbCB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgSmF2YVNjcmlwdCBtZW1iZXIgZXhwcmVzc2lvbi5gLFxuICBbNDNdOiBgdi1tb2RlbCBjYW5ub3QgYmUgdXNlZCBvbiB2LWZvciBvciB2LXNsb3Qgc2NvcGUgdmFyaWFibGVzIGJlY2F1c2UgdGhleSBhcmUgbm90IHdyaXRhYmxlLmAsXG4gIFs0NF06IGB2LW1vZGVsIGNhbm5vdCBiZSB1c2VkIG9uIGEgcHJvcCwgYmVjYXVzZSBsb2NhbCBwcm9wIGJpbmRpbmdzIGFyZSBub3Qgd3JpdGFibGUuXG5Vc2UgYSB2LWJpbmQgYmluZGluZyBjb21iaW5lZCB3aXRoIGEgdi1vbiBsaXN0ZW5lciB0aGF0IGVtaXRzIHVwZGF0ZTp4IGV2ZW50IGluc3RlYWQuYCxcbiAgWzQ1XTogYEVycm9yIHBhcnNpbmcgSmF2YVNjcmlwdCBleHByZXNzaW9uOiBgLFxuICBbNDZdOiBgPEtlZXBBbGl2ZT4gZXhwZWN0cyBleGFjdGx5IG9uZSBjaGlsZCBjb21wb25lbnQuYCxcbiAgWzUxXTogYEB2bm9kZS0qIGhvb2tzIGluIHRlbXBsYXRlcyBhcmUgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gVXNlIHRoZSB2dWU6IHByZWZpeCBpbnN0ZWFkLiBGb3IgZXhhbXBsZSwgQHZub2RlLW1vdW50ZWQgc2hvdWxkIGJlIGNoYW5nZWQgdG8gQHZ1ZTptb3VudGVkLiBAdm5vZGUtKiBob29rcyBzdXBwb3J0IGhhcyBiZWVuIHJlbW92ZWQgaW4gMy40LmAsXG4gIC8vIGdlbmVyaWMgZXJyb3JzXG4gIFs0N106IGBcInByZWZpeElkZW50aWZpZXJzXCIgb3B0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBidWlsZCBvZiBjb21waWxlci5gLFxuICBbNDhdOiBgRVMgbW9kdWxlIG1vZGUgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJ1aWxkIG9mIGNvbXBpbGVyLmAsXG4gIFs0OV06IGBcImNhY2hlSGFuZGxlcnNcIiBvcHRpb24gaXMgb25seSBzdXBwb3J0ZWQgd2hlbiB0aGUgXCJwcmVmaXhJZGVudGlmaWVyc1wiIG9wdGlvbiBpcyBlbmFibGVkLmAsXG4gIFs1MF06IGBcInNjb3BlSWRcIiBvcHRpb24gaXMgb25seSBzdXBwb3J0ZWQgaW4gbW9kdWxlIG1vZGUuYCxcbiAgLy8ganVzdCB0byBmdWxmaWxsIHR5cGVzXG4gIFs1M106IGBgXG59O1xuXG5mdW5jdGlvbiB3YWxrSWRlbnRpZmllcnMocm9vdCwgb25JZGVudGlmaWVyLCBpbmNsdWRlQWxsID0gZmFsc2UsIHBhcmVudFN0YWNrID0gW10sIGtub3duSWRzID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCkpIHtcbiAge1xuICAgIHJldHVybjtcbiAgfVxufVxuZnVuY3Rpb24gaXNSZWZlcmVuY2VkSWRlbnRpZmllcihpZCwgcGFyZW50LCBwYXJlbnRTdGFjaykge1xuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBpc0luRGVzdHJ1Y3R1cmVBc3NpZ25tZW50KHBhcmVudCwgcGFyZW50U3RhY2spIHtcbiAgaWYgKHBhcmVudCAmJiAocGFyZW50LnR5cGUgPT09IFwiT2JqZWN0UHJvcGVydHlcIiB8fCBwYXJlbnQudHlwZSA9PT0gXCJBcnJheVBhdHRlcm5cIikpIHtcbiAgICBsZXQgaSA9IHBhcmVudFN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCBwID0gcGFyZW50U3RhY2tbaV07XG4gICAgICBpZiAocC50eXBlID09PSBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHAudHlwZSAhPT0gXCJPYmplY3RQcm9wZXJ0eVwiICYmICFwLnR5cGUuZW5kc1dpdGgoXCJQYXR0ZXJuXCIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0luTmV3RXhwcmVzc2lvbihwYXJlbnRTdGFjaykge1xuICBsZXQgaSA9IHBhcmVudFN0YWNrLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IHAgPSBwYXJlbnRTdGFja1tpXTtcbiAgICBpZiAocC50eXBlID09PSBcIk5ld0V4cHJlc3Npb25cIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChwLnR5cGUgIT09IFwiTWVtYmVyRXhwcmVzc2lvblwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gd2Fsa0Z1bmN0aW9uUGFyYW1zKG5vZGUsIG9uSWRlbnQpIHtcbiAgZm9yIChjb25zdCBwIG9mIG5vZGUucGFyYW1zKSB7XG4gICAgZm9yIChjb25zdCBpZCBvZiBleHRyYWN0SWRlbnRpZmllcnMocCkpIHtcbiAgICAgIG9uSWRlbnQoaWQpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gd2Fsa0Jsb2NrRGVjbGFyYXRpb25zKGJsb2NrLCBvbklkZW50KSB7XG4gIGZvciAoY29uc3Qgc3RtdCBvZiBibG9jay5ib2R5KSB7XG4gICAgaWYgKHN0bXQudHlwZSA9PT0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIpIHtcbiAgICAgIGlmIChzdG10LmRlY2xhcmUpIGNvbnRpbnVlO1xuICAgICAgZm9yIChjb25zdCBkZWNsIG9mIHN0bXQuZGVjbGFyYXRpb25zKSB7XG4gICAgICAgIGZvciAoY29uc3QgaWQgb2YgZXh0cmFjdElkZW50aWZpZXJzKGRlY2wuaWQpKSB7XG4gICAgICAgICAgb25JZGVudChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0bXQudHlwZSA9PT0gXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCIgfHwgc3RtdC50eXBlID09PSBcIkNsYXNzRGVjbGFyYXRpb25cIikge1xuICAgICAgaWYgKHN0bXQuZGVjbGFyZSB8fCAhc3RtdC5pZCkgY29udGludWU7XG4gICAgICBvbklkZW50KHN0bXQuaWQpO1xuICAgIH0gZWxzZSBpZiAoaXNGb3JTdGF0ZW1lbnQoc3RtdCkpIHtcbiAgICAgIHdhbGtGb3JTdGF0ZW1lbnQoc3RtdCwgdHJ1ZSwgb25JZGVudCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBpc0ZvclN0YXRlbWVudChzdG10KSB7XG4gIHJldHVybiBzdG10LnR5cGUgPT09IFwiRm9yT2ZTdGF0ZW1lbnRcIiB8fCBzdG10LnR5cGUgPT09IFwiRm9ySW5TdGF0ZW1lbnRcIiB8fCBzdG10LnR5cGUgPT09IFwiRm9yU3RhdGVtZW50XCI7XG59XG5mdW5jdGlvbiB3YWxrRm9yU3RhdGVtZW50KHN0bXQsIGlzVmFyLCBvbklkZW50KSB7XG4gIGNvbnN0IHZhcmlhYmxlID0gc3RtdC50eXBlID09PSBcIkZvclN0YXRlbWVudFwiID8gc3RtdC5pbml0IDogc3RtdC5sZWZ0O1xuICBpZiAodmFyaWFibGUgJiYgdmFyaWFibGUudHlwZSA9PT0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIgJiYgKHZhcmlhYmxlLmtpbmQgPT09IFwidmFyXCIgPyBpc1ZhciA6ICFpc1ZhcikpIHtcbiAgICBmb3IgKGNvbnN0IGRlY2wgb2YgdmFyaWFibGUuZGVjbGFyYXRpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGV4dHJhY3RJZGVudGlmaWVycyhkZWNsLmlkKSkge1xuICAgICAgICBvbklkZW50KGlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGV4dHJhY3RJZGVudGlmaWVycyhwYXJhbSwgbm9kZXMgPSBbXSkge1xuICBzd2l0Y2ggKHBhcmFtLnR5cGUpIHtcbiAgICBjYXNlIFwiSWRlbnRpZmllclwiOlxuICAgICAgbm9kZXMucHVzaChwYXJhbSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiTWVtYmVyRXhwcmVzc2lvblwiOlxuICAgICAgbGV0IG9iamVjdCA9IHBhcmFtO1xuICAgICAgd2hpbGUgKG9iamVjdC50eXBlID09PSBcIk1lbWJlckV4cHJlc3Npb25cIikge1xuICAgICAgICBvYmplY3QgPSBvYmplY3Qub2JqZWN0O1xuICAgICAgfVxuICAgICAgbm9kZXMucHVzaChvYmplY3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIk9iamVjdFBhdHRlcm5cIjpcbiAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwYXJhbS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChwcm9wLnR5cGUgPT09IFwiUmVzdEVsZW1lbnRcIikge1xuICAgICAgICAgIGV4dHJhY3RJZGVudGlmaWVycyhwcm9wLmFyZ3VtZW50LCBub2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0cmFjdElkZW50aWZpZXJzKHByb3AudmFsdWUsIG5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycmF5UGF0dGVyblwiOlxuICAgICAgcGFyYW0uZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkgZXh0cmFjdElkZW50aWZpZXJzKGVsZW1lbnQsIG5vZGVzKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlJlc3RFbGVtZW50XCI6XG4gICAgICBleHRyYWN0SWRlbnRpZmllcnMocGFyYW0uYXJndW1lbnQsIG5vZGVzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBc3NpZ25tZW50UGF0dGVyblwiOlxuICAgICAgZXh0cmFjdElkZW50aWZpZXJzKHBhcmFtLmxlZnQsIG5vZGVzKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBub2Rlcztcbn1cbmNvbnN0IGlzRnVuY3Rpb25UeXBlID0gKG5vZGUpID0+IHtcbiAgcmV0dXJuIC9GdW5jdGlvbig/OkV4cHJlc3Npb258RGVjbGFyYXRpb24pJHxNZXRob2QkLy50ZXN0KG5vZGUudHlwZSk7XG59O1xuY29uc3QgaXNTdGF0aWNQcm9wZXJ0eSA9IChub2RlKSA9PiBub2RlICYmIChub2RlLnR5cGUgPT09IFwiT2JqZWN0UHJvcGVydHlcIiB8fCBub2RlLnR5cGUgPT09IFwiT2JqZWN0TWV0aG9kXCIpICYmICFub2RlLmNvbXB1dGVkO1xuY29uc3QgaXNTdGF0aWNQcm9wZXJ0eUtleSA9IChub2RlLCBwYXJlbnQpID0+IGlzU3RhdGljUHJvcGVydHkocGFyZW50KSAmJiBwYXJlbnQua2V5ID09PSBub2RlO1xuY29uc3QgVFNfTk9ERV9UWVBFUyA9IFtcbiAgXCJUU0FzRXhwcmVzc2lvblwiLFxuICAvLyBmb28gYXMgbnVtYmVyXG4gIFwiVFNUeXBlQXNzZXJ0aW9uXCIsXG4gIC8vICg8bnVtYmVyPmZvbylcbiAgXCJUU05vbk51bGxFeHByZXNzaW9uXCIsXG4gIC8vIGZvbyFcbiAgXCJUU0luc3RhbnRpYXRpb25FeHByZXNzaW9uXCIsXG4gIC8vIGZvbzxzdHJpbmc+XG4gIFwiVFNTYXRpc2ZpZXNFeHByZXNzaW9uXCJcbiAgLy8gZm9vIHNhdGlzZmllcyBUXG5dO1xuZnVuY3Rpb24gdW53cmFwVFNOb2RlKG5vZGUpIHtcbiAgaWYgKFRTX05PREVfVFlQRVMuaW5jbHVkZXMobm9kZS50eXBlKSkge1xuICAgIHJldHVybiB1bndyYXBUU05vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5jb25zdCBpc1N0YXRpY0V4cCA9IChwKSA9PiBwLnR5cGUgPT09IDQgJiYgcC5pc1N0YXRpYztcbmZ1bmN0aW9uIGlzQ29yZUNvbXBvbmVudCh0YWcpIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIFwiVGVsZXBvcnRcIjpcbiAgICBjYXNlIFwidGVsZXBvcnRcIjpcbiAgICAgIHJldHVybiBURUxFUE9SVDtcbiAgICBjYXNlIFwiU3VzcGVuc2VcIjpcbiAgICBjYXNlIFwic3VzcGVuc2VcIjpcbiAgICAgIHJldHVybiBTVVNQRU5TRTtcbiAgICBjYXNlIFwiS2VlcEFsaXZlXCI6XG4gICAgY2FzZSBcImtlZXAtYWxpdmVcIjpcbiAgICAgIHJldHVybiBLRUVQX0FMSVZFO1xuICAgIGNhc2UgXCJCYXNlVHJhbnNpdGlvblwiOlxuICAgIGNhc2UgXCJiYXNlLXRyYW5zaXRpb25cIjpcbiAgICAgIHJldHVybiBCQVNFX1RSQU5TSVRJT047XG4gIH1cbn1cbmNvbnN0IG5vbklkZW50aWZpZXJSRSA9IC9eJHxeXFxkfFteXFwkXFx3XFx4QTAtXFx1RkZGRl0vO1xuY29uc3QgaXNTaW1wbGVJZGVudGlmaWVyID0gKG5hbWUpID0+ICFub25JZGVudGlmaWVyUkUudGVzdChuYW1lKTtcbmNvbnN0IHZhbGlkRmlyc3RJZGVudENoYXJSRSA9IC9bQS1aYS16XyRcXHhBMC1cXHVGRkZGXS87XG5jb25zdCB2YWxpZElkZW50Q2hhclJFID0gL1tcXC5cXD9cXHckXFx4QTAtXFx1RkZGRl0vO1xuY29uc3Qgd2hpdGVzcGFjZVJFID0gL1xccytbLltdXFxzKnxcXHMqWy5bXVxccysvZztcbmNvbnN0IGdldEV4cFNvdXJjZSA9IChleHApID0+IGV4cC50eXBlID09PSA0ID8gZXhwLmNvbnRlbnQgOiBleHAubG9jLnNvdXJjZTtcbmNvbnN0IGlzTWVtYmVyRXhwcmVzc2lvbkJyb3dzZXIgPSAoZXhwKSA9PiB7XG4gIGNvbnN0IHBhdGggPSBnZXRFeHBTb3VyY2UoZXhwKS50cmltKCkucmVwbGFjZSh3aGl0ZXNwYWNlUkUsIChzKSA9PiBzLnRyaW0oKSk7XG4gIGxldCBzdGF0ZSA9IDAgLyogaW5NZW1iZXJFeHAgKi87XG4gIGxldCBzdGF0ZVN0YWNrID0gW107XG4gIGxldCBjdXJyZW50T3BlbkJyYWNrZXRDb3VudCA9IDA7XG4gIGxldCBjdXJyZW50T3BlblBhcmVuc0NvdW50ID0gMDtcbiAgbGV0IGN1cnJlbnRTdHJpbmdUeXBlID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhciA9IHBhdGguY2hhckF0KGkpO1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgMCAvKiBpbk1lbWJlckV4cCAqLzpcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiW1wiKSB7XG4gICAgICAgICAgc3RhdGVTdGFjay5wdXNoKHN0YXRlKTtcbiAgICAgICAgICBzdGF0ZSA9IDEgLyogaW5CcmFja2V0cyAqLztcbiAgICAgICAgICBjdXJyZW50T3BlbkJyYWNrZXRDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgc3RhdGVTdGFjay5wdXNoKHN0YXRlKTtcbiAgICAgICAgICBzdGF0ZSA9IDIgLyogaW5QYXJlbnMgKi87XG4gICAgICAgICAgY3VycmVudE9wZW5QYXJlbnNDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKCEoaSA9PT0gMCA/IHZhbGlkRmlyc3RJZGVudENoYXJSRSA6IHZhbGlkSWRlbnRDaGFyUkUpLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEgLyogaW5CcmFja2V0cyAqLzpcbiAgICAgICAgaWYgKGNoYXIgPT09IGAnYCB8fCBjaGFyID09PSBgXCJgIHx8IGNoYXIgPT09IFwiYFwiKSB7XG4gICAgICAgICAgc3RhdGVTdGFjay5wdXNoKHN0YXRlKTtcbiAgICAgICAgICBzdGF0ZSA9IDMgLyogaW5TdHJpbmcgKi87XG4gICAgICAgICAgY3VycmVudFN0cmluZ1R5cGUgPSBjaGFyO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IGBbYCkge1xuICAgICAgICAgIGN1cnJlbnRPcGVuQnJhY2tldENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gYF1gKSB7XG4gICAgICAgICAgaWYgKCEtLWN1cnJlbnRPcGVuQnJhY2tldENvdW50KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlU3RhY2sucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyIC8qIGluUGFyZW5zICovOlxuICAgICAgICBpZiAoY2hhciA9PT0gYCdgIHx8IGNoYXIgPT09IGBcImAgfHwgY2hhciA9PT0gXCJgXCIpIHtcbiAgICAgICAgICBzdGF0ZVN0YWNrLnB1c2goc3RhdGUpO1xuICAgICAgICAgIHN0YXRlID0gMyAvKiBpblN0cmluZyAqLztcbiAgICAgICAgICBjdXJyZW50U3RyaW5nVHlwZSA9IGNoYXI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gYChgKSB7XG4gICAgICAgICAgY3VycmVudE9wZW5QYXJlbnNDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IGApYCkge1xuICAgICAgICAgIGlmIChpID09PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEtLWN1cnJlbnRPcGVuUGFyZW5zQ291bnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVTdGFjay5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMgLyogaW5TdHJpbmcgKi86XG4gICAgICAgIGlmIChjaGFyID09PSBjdXJyZW50U3RyaW5nVHlwZSkge1xuICAgICAgICAgIHN0YXRlID0gc3RhdGVTdGFjay5wb3AoKTtcbiAgICAgICAgICBjdXJyZW50U3RyaW5nVHlwZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiAhY3VycmVudE9wZW5CcmFja2V0Q291bnQgJiYgIWN1cnJlbnRPcGVuUGFyZW5zQ291bnQ7XG59O1xuY29uc3QgaXNNZW1iZXJFeHByZXNzaW9uTm9kZSA9IE5PT1AgO1xuY29uc3QgaXNNZW1iZXJFeHByZXNzaW9uID0gaXNNZW1iZXJFeHByZXNzaW9uQnJvd3NlciA7XG5jb25zdCBmbkV4cFJFID0gL15cXHMqKGFzeW5jXFxzKik/KFxcKFteKV0qP1xcKXxbXFx3JF9dKylcXHMqKDpbXj1dKyk/PT58XlxccyooYXN5bmNcXHMrKT9mdW5jdGlvbig/OlxccytbXFx3JF0rKT9cXHMqXFwoLztcbmNvbnN0IGlzRm5FeHByZXNzaW9uQnJvd3NlciA9IChleHApID0+IGZuRXhwUkUudGVzdChnZXRFeHBTb3VyY2UoZXhwKSk7XG5jb25zdCBpc0ZuRXhwcmVzc2lvbk5vZGUgPSBOT09QIDtcbmNvbnN0IGlzRm5FeHByZXNzaW9uID0gaXNGbkV4cHJlc3Npb25Ccm93c2VyIDtcbmZ1bmN0aW9uIGFkdmFuY2VQb3NpdGlvbldpdGhDbG9uZShwb3MsIHNvdXJjZSwgbnVtYmVyT2ZDaGFyYWN0ZXJzID0gc291cmNlLmxlbmd0aCkge1xuICByZXR1cm4gYWR2YW5jZVBvc2l0aW9uV2l0aE11dGF0aW9uKFxuICAgIHtcbiAgICAgIG9mZnNldDogcG9zLm9mZnNldCxcbiAgICAgIGxpbmU6IHBvcy5saW5lLFxuICAgICAgY29sdW1uOiBwb3MuY29sdW1uXG4gICAgfSxcbiAgICBzb3VyY2UsXG4gICAgbnVtYmVyT2ZDaGFyYWN0ZXJzXG4gICk7XG59XG5mdW5jdGlvbiBhZHZhbmNlUG9zaXRpb25XaXRoTXV0YXRpb24ocG9zLCBzb3VyY2UsIG51bWJlck9mQ2hhcmFjdGVycyA9IHNvdXJjZS5sZW5ndGgpIHtcbiAgbGV0IGxpbmVzQ291bnQgPSAwO1xuICBsZXQgbGFzdE5ld0xpbmVQb3MgPSAtMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkNoYXJhY3RlcnM7IGkrKykge1xuICAgIGlmIChzb3VyY2UuY2hhckNvZGVBdChpKSA9PT0gMTApIHtcbiAgICAgIGxpbmVzQ291bnQrKztcbiAgICAgIGxhc3ROZXdMaW5lUG9zID0gaTtcbiAgICB9XG4gIH1cbiAgcG9zLm9mZnNldCArPSBudW1iZXJPZkNoYXJhY3RlcnM7XG4gIHBvcy5saW5lICs9IGxpbmVzQ291bnQ7XG4gIHBvcy5jb2x1bW4gPSBsYXN0TmV3TGluZVBvcyA9PT0gLTEgPyBwb3MuY29sdW1uICsgbnVtYmVyT2ZDaGFyYWN0ZXJzIDogbnVtYmVyT2ZDaGFyYWN0ZXJzIC0gbGFzdE5ld0xpbmVQb3M7XG4gIHJldHVybiBwb3M7XG59XG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtc2cpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnIHx8IGB1bmV4cGVjdGVkIGNvbXBpbGVyIGNvbmRpdGlvbmApO1xuICB9XG59XG5mdW5jdGlvbiBmaW5kRGlyKG5vZGUsIG5hbWUsIGFsbG93RW1wdHkgPSBmYWxzZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUucHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwID0gbm9kZS5wcm9wc1tpXTtcbiAgICBpZiAocC50eXBlID09PSA3ICYmIChhbGxvd0VtcHR5IHx8IHAuZXhwKSAmJiAoaXNTdHJpbmcobmFtZSkgPyBwLm5hbWUgPT09IG5hbWUgOiBuYW1lLnRlc3QocC5uYW1lKSkpIHtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZmluZFByb3Aobm9kZSwgbmFtZSwgZHluYW1pY09ubHkgPSBmYWxzZSwgYWxsb3dFbXB0eSA9IGZhbHNlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBub2RlLnByb3BzW2ldO1xuICAgIGlmIChwLnR5cGUgPT09IDYpIHtcbiAgICAgIGlmIChkeW5hbWljT25seSkgY29udGludWU7XG4gICAgICBpZiAocC5uYW1lID09PSBuYW1lICYmIChwLnZhbHVlIHx8IGFsbG93RW1wdHkpKSB7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocC5uYW1lID09PSBcImJpbmRcIiAmJiAocC5leHAgfHwgYWxsb3dFbXB0eSkgJiYgaXNTdGF0aWNBcmdPZihwLmFyZywgbmFtZSkpIHtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaXNTdGF0aWNBcmdPZihhcmcsIG5hbWUpIHtcbiAgcmV0dXJuICEhKGFyZyAmJiBpc1N0YXRpY0V4cChhcmcpICYmIGFyZy5jb250ZW50ID09PSBuYW1lKTtcbn1cbmZ1bmN0aW9uIGhhc0R5bmFtaWNLZXlWQmluZChub2RlKSB7XG4gIHJldHVybiBub2RlLnByb3BzLnNvbWUoXG4gICAgKHApID0+IHAudHlwZSA9PT0gNyAmJiBwLm5hbWUgPT09IFwiYmluZFwiICYmICghcC5hcmcgfHwgLy8gdi1iaW5kPVwib2JqXCJcbiAgICBwLmFyZy50eXBlICE9PSA0IHx8IC8vIHYtYmluZDpbX2N0eC5mb29dXG4gICAgIXAuYXJnLmlzU3RhdGljKVxuICAgIC8vIHYtYmluZDpbZm9vXVxuICApO1xufVxuZnVuY3Rpb24gaXNUZXh0JDEobm9kZSkge1xuICByZXR1cm4gbm9kZS50eXBlID09PSA1IHx8IG5vZGUudHlwZSA9PT0gMjtcbn1cbmZ1bmN0aW9uIGlzVlByZShwKSB7XG4gIHJldHVybiBwLnR5cGUgPT09IDcgJiYgcC5uYW1lID09PSBcInByZVwiO1xufVxuZnVuY3Rpb24gaXNWU2xvdChwKSB7XG4gIHJldHVybiBwLnR5cGUgPT09IDcgJiYgcC5uYW1lID09PSBcInNsb3RcIjtcbn1cbmZ1bmN0aW9uIGlzVGVtcGxhdGVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLnRhZ1R5cGUgPT09IDM7XG59XG5mdW5jdGlvbiBpc1Nsb3RPdXRsZXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAxICYmIG5vZGUudGFnVHlwZSA9PT0gMjtcbn1cbmNvbnN0IHByb3BzSGVscGVyU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW05PUk1BTElaRV9QUk9QUywgR1VBUkRfUkVBQ1RJVkVfUFJPUFNdKTtcbmZ1bmN0aW9uIGdldFVubm9ybWFsaXplZFByb3BzKHByb3BzLCBjYWxsUGF0aCA9IFtdKSB7XG4gIGlmIChwcm9wcyAmJiAhaXNTdHJpbmcocHJvcHMpICYmIHByb3BzLnR5cGUgPT09IDE0KSB7XG4gICAgY29uc3QgY2FsbGVlID0gcHJvcHMuY2FsbGVlO1xuICAgIGlmICghaXNTdHJpbmcoY2FsbGVlKSAmJiBwcm9wc0hlbHBlclNldC5oYXMoY2FsbGVlKSkge1xuICAgICAgcmV0dXJuIGdldFVubm9ybWFsaXplZFByb3BzKFxuICAgICAgICBwcm9wcy5hcmd1bWVudHNbMF0sXG4gICAgICAgIGNhbGxQYXRoLmNvbmNhdChwcm9wcylcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbcHJvcHMsIGNhbGxQYXRoXTtcbn1cbmZ1bmN0aW9uIGluamVjdFByb3Aobm9kZSwgcHJvcCwgY29udGV4dCkge1xuICBsZXQgcHJvcHNXaXRoSW5qZWN0aW9uO1xuICBsZXQgcHJvcHMgPSBub2RlLnR5cGUgPT09IDEzID8gbm9kZS5wcm9wcyA6IG5vZGUuYXJndW1lbnRzWzJdO1xuICBsZXQgY2FsbFBhdGggPSBbXTtcbiAgbGV0IHBhcmVudENhbGw7XG4gIGlmIChwcm9wcyAmJiAhaXNTdHJpbmcocHJvcHMpICYmIHByb3BzLnR5cGUgPT09IDE0KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0VW5ub3JtYWxpemVkUHJvcHMocHJvcHMpO1xuICAgIHByb3BzID0gcmV0WzBdO1xuICAgIGNhbGxQYXRoID0gcmV0WzFdO1xuICAgIHBhcmVudENhbGwgPSBjYWxsUGF0aFtjYWxsUGF0aC5sZW5ndGggLSAxXTtcbiAgfVxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCBpc1N0cmluZyhwcm9wcykpIHtcbiAgICBwcm9wc1dpdGhJbmplY3Rpb24gPSBjcmVhdGVPYmplY3RFeHByZXNzaW9uKFtwcm9wXSk7XG4gIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gMTQpIHtcbiAgICBjb25zdCBmaXJzdCA9IHByb3BzLmFyZ3VtZW50c1swXTtcbiAgICBpZiAoIWlzU3RyaW5nKGZpcnN0KSAmJiBmaXJzdC50eXBlID09PSAxNSkge1xuICAgICAgaWYgKCFoYXNQcm9wKHByb3AsIGZpcnN0KSkge1xuICAgICAgICBmaXJzdC5wcm9wZXJ0aWVzLnVuc2hpZnQocHJvcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wcy5jYWxsZWUgPT09IFRPX0hBTkRMRVJTKSB7XG4gICAgICAgIHByb3BzV2l0aEluamVjdGlvbiA9IGNyZWF0ZUNhbGxFeHByZXNzaW9uKGNvbnRleHQuaGVscGVyKE1FUkdFX1BST1BTKSwgW1xuICAgICAgICAgIGNyZWF0ZU9iamVjdEV4cHJlc3Npb24oW3Byb3BdKSxcbiAgICAgICAgICBwcm9wc1xuICAgICAgICBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLmFyZ3VtZW50cy51bnNoaWZ0KGNyZWF0ZU9iamVjdEV4cHJlc3Npb24oW3Byb3BdKSk7XG4gICAgICB9XG4gICAgfVxuICAgICFwcm9wc1dpdGhJbmplY3Rpb24gJiYgKHByb3BzV2l0aEluamVjdGlvbiA9IHByb3BzKTtcbiAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAxNSkge1xuICAgIGlmICghaGFzUHJvcChwcm9wLCBwcm9wcykpIHtcbiAgICAgIHByb3BzLnByb3BlcnRpZXMudW5zaGlmdChwcm9wKTtcbiAgICB9XG4gICAgcHJvcHNXaXRoSW5qZWN0aW9uID0gcHJvcHM7XG4gIH0gZWxzZSB7XG4gICAgcHJvcHNXaXRoSW5qZWN0aW9uID0gY3JlYXRlQ2FsbEV4cHJlc3Npb24oY29udGV4dC5oZWxwZXIoTUVSR0VfUFJPUFMpLCBbXG4gICAgICBjcmVhdGVPYmplY3RFeHByZXNzaW9uKFtwcm9wXSksXG4gICAgICBwcm9wc1xuICAgIF0pO1xuICAgIGlmIChwYXJlbnRDYWxsICYmIHBhcmVudENhbGwuY2FsbGVlID09PSBHVUFSRF9SRUFDVElWRV9QUk9QUykge1xuICAgICAgcGFyZW50Q2FsbCA9IGNhbGxQYXRoW2NhbGxQYXRoLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfVxuICBpZiAobm9kZS50eXBlID09PSAxMykge1xuICAgIGlmIChwYXJlbnRDYWxsKSB7XG4gICAgICBwYXJlbnRDYWxsLmFyZ3VtZW50c1swXSA9IHByb3BzV2l0aEluamVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5wcm9wcyA9IHByb3BzV2l0aEluamVjdGlvbjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmVudENhbGwpIHtcbiAgICAgIHBhcmVudENhbGwuYXJndW1lbnRzWzBdID0gcHJvcHNXaXRoSW5qZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmFyZ3VtZW50c1syXSA9IHByb3BzV2l0aEluamVjdGlvbjtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhhc1Byb3AocHJvcCwgcHJvcHMpIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICBpZiAocHJvcC5rZXkudHlwZSA9PT0gNCkge1xuICAgIGNvbnN0IHByb3BLZXlOYW1lID0gcHJvcC5rZXkuY29udGVudDtcbiAgICByZXN1bHQgPSBwcm9wcy5wcm9wZXJ0aWVzLnNvbWUoXG4gICAgICAocCkgPT4gcC5rZXkudHlwZSA9PT0gNCAmJiBwLmtleS5jb250ZW50ID09PSBwcm9wS2V5TmFtZVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHRvVmFsaWRBc3NldElkKG5hbWUsIHR5cGUpIHtcbiAgcmV0dXJuIGBfJHt0eXBlfV8ke25hbWUucmVwbGFjZSgvW15cXHddL2csIChzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHNlYXJjaFZhbHVlID09PSBcIi1cIiA/IFwiX1wiIDogbmFtZS5jaGFyQ29kZUF0KHJlcGxhY2VWYWx1ZSkudG9TdHJpbmcoKTtcbiAgfSl9YDtcbn1cbmZ1bmN0aW9uIGhhc1Njb3BlUmVmKG5vZGUsIGlkcykge1xuICBpZiAoIW5vZGUgfHwgT2JqZWN0LmtleXMoaWRzKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICBjYXNlIDE6XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUucHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcCA9IG5vZGUucHJvcHNbaV07XG4gICAgICAgIGlmIChwLnR5cGUgPT09IDcgJiYgKGhhc1Njb3BlUmVmKHAuYXJnLCBpZHMpIHx8IGhhc1Njb3BlUmVmKHAuZXhwLCBpZHMpKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbi5zb21lKChjKSA9PiBoYXNTY29wZVJlZihjLCBpZHMpKTtcbiAgICBjYXNlIDExOlxuICAgICAgaWYgKGhhc1Njb3BlUmVmKG5vZGUuc291cmNlLCBpZHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGUuY2hpbGRyZW4uc29tZSgoYykgPT4gaGFzU2NvcGVSZWYoYywgaWRzKSk7XG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIG5vZGUuYnJhbmNoZXMuc29tZSgoYikgPT4gaGFzU2NvcGVSZWYoYiwgaWRzKSk7XG4gICAgY2FzZSAxMDpcbiAgICAgIGlmIChoYXNTY29wZVJlZihub2RlLmNvbmRpdGlvbiwgaWRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuLnNvbWUoKGMpID0+IGhhc1Njb3BlUmVmKGMsIGlkcykpO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiAhbm9kZS5pc1N0YXRpYyAmJiBpc1NpbXBsZUlkZW50aWZpZXIobm9kZS5jb250ZW50KSAmJiAhIWlkc1tub2RlLmNvbnRlbnRdO1xuICAgIGNhc2UgODpcbiAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuLnNvbWUoKGMpID0+IGlzT2JqZWN0KGMpICYmIGhhc1Njb3BlUmVmKGMsIGlkcykpO1xuICAgIGNhc2UgNTpcbiAgICBjYXNlIDEyOlxuICAgICAgcmV0dXJuIGhhc1Njb3BlUmVmKG5vZGUuY29udGVudCwgaWRzKTtcbiAgICBjYXNlIDI6XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgMjA6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE1lbW9lZFZOb2RlQ2FsbChub2RlKSB7XG4gIGlmIChub2RlLnR5cGUgPT09IDE0ICYmIG5vZGUuY2FsbGVlID09PSBXSVRIX01FTU8pIHtcbiAgICByZXR1cm4gbm9kZS5hcmd1bWVudHNbMV0ucmV0dXJucztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuY29uc3QgZm9yQWxpYXNSRSA9IC8oW1xcc1xcU10qPylcXHMrKD86aW58b2YpXFxzKyhcXFNbXFxzXFxTXSopLztcblxuY29uc3QgZGVmYXVsdFBhcnNlck9wdGlvbnMgPSB7XG4gIHBhcnNlTW9kZTogXCJiYXNlXCIsXG4gIG5zOiAwLFxuICBkZWxpbWl0ZXJzOiBbYHt7YCwgYH19YF0sXG4gIGdldE5hbWVzcGFjZTogKCkgPT4gMCxcbiAgaXNWb2lkVGFnOiBOTyxcbiAgaXNQcmVUYWc6IE5PLFxuICBpc0lnbm9yZU5ld2xpbmVUYWc6IE5PLFxuICBpc0N1c3RvbUVsZW1lbnQ6IE5PLFxuICBvbkVycm9yOiBkZWZhdWx0T25FcnJvcixcbiAgb25XYXJuOiBkZWZhdWx0T25XYXJuLFxuICBjb21tZW50czogISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSxcbiAgcHJlZml4SWRlbnRpZmllcnM6IGZhbHNlXG59O1xubGV0IGN1cnJlbnRPcHRpb25zID0gZGVmYXVsdFBhcnNlck9wdGlvbnM7XG5sZXQgY3VycmVudFJvb3QgPSBudWxsO1xubGV0IGN1cnJlbnRJbnB1dCA9IFwiXCI7XG5sZXQgY3VycmVudE9wZW5UYWcgPSBudWxsO1xubGV0IGN1cnJlbnRQcm9wID0gbnVsbDtcbmxldCBjdXJyZW50QXR0clZhbHVlID0gXCJcIjtcbmxldCBjdXJyZW50QXR0clN0YXJ0SW5kZXggPSAtMTtcbmxldCBjdXJyZW50QXR0ckVuZEluZGV4ID0gLTE7XG5sZXQgaW5QcmUgPSAwO1xubGV0IGluVlByZSA9IGZhbHNlO1xubGV0IGN1cnJlbnRWUHJlQm91bmRhcnkgPSBudWxsO1xuY29uc3Qgc3RhY2sgPSBbXTtcbmNvbnN0IHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIoc3RhY2ssIHtcbiAgb25lcnI6IGVtaXRFcnJvcixcbiAgb250ZXh0KHN0YXJ0LCBlbmQpIHtcbiAgICBvblRleHQoZ2V0U2xpY2Uoc3RhcnQsIGVuZCksIHN0YXJ0LCBlbmQpO1xuICB9LFxuICBvbnRleHRlbnRpdHkoY2hhciwgc3RhcnQsIGVuZCkge1xuICAgIG9uVGV4dChjaGFyLCBzdGFydCwgZW5kKTtcbiAgfSxcbiAgb25pbnRlcnBvbGF0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoaW5WUHJlKSB7XG4gICAgICByZXR1cm4gb25UZXh0KGdldFNsaWNlKHN0YXJ0LCBlbmQpLCBzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgbGV0IGlubmVyU3RhcnQgPSBzdGFydCArIHRva2VuaXplci5kZWxpbWl0ZXJPcGVuLmxlbmd0aDtcbiAgICBsZXQgaW5uZXJFbmQgPSBlbmQgLSB0b2tlbml6ZXIuZGVsaW1pdGVyQ2xvc2UubGVuZ3RoO1xuICAgIHdoaWxlIChpc1doaXRlc3BhY2UoY3VycmVudElucHV0LmNoYXJDb2RlQXQoaW5uZXJTdGFydCkpKSB7XG4gICAgICBpbm5lclN0YXJ0Kys7XG4gICAgfVxuICAgIHdoaWxlIChpc1doaXRlc3BhY2UoY3VycmVudElucHV0LmNoYXJDb2RlQXQoaW5uZXJFbmQgLSAxKSkpIHtcbiAgICAgIGlubmVyRW5kLS07XG4gICAgfVxuICAgIGxldCBleHAgPSBnZXRTbGljZShpbm5lclN0YXJ0LCBpbm5lckVuZCk7XG4gICAgaWYgKGV4cC5pbmNsdWRlcyhcIiZcIikpIHtcbiAgICAgIHtcbiAgICAgICAgZXhwID0gY3VycmVudE9wdGlvbnMuZGVjb2RlRW50aXRpZXMoZXhwLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZE5vZGUoe1xuICAgICAgdHlwZTogNSxcbiAgICAgIGNvbnRlbnQ6IGNyZWF0ZUV4cChleHAsIGZhbHNlLCBnZXRMb2MoaW5uZXJTdGFydCwgaW5uZXJFbmQpKSxcbiAgICAgIGxvYzogZ2V0TG9jKHN0YXJ0LCBlbmQpXG4gICAgfSk7XG4gIH0sXG4gIG9ub3BlbnRhZ25hbWUoc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRTbGljZShzdGFydCwgZW5kKTtcbiAgICBjdXJyZW50T3BlblRhZyA9IHtcbiAgICAgIHR5cGU6IDEsXG4gICAgICB0YWc6IG5hbWUsXG4gICAgICBuczogY3VycmVudE9wdGlvbnMuZ2V0TmFtZXNwYWNlKG5hbWUsIHN0YWNrWzBdLCBjdXJyZW50T3B0aW9ucy5ucyksXG4gICAgICB0YWdUeXBlOiAwLFxuICAgICAgLy8gd2lsbCBiZSByZWZpbmVkIG9uIHRhZyBjbG9zZVxuICAgICAgcHJvcHM6IFtdLFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgbG9jOiBnZXRMb2Moc3RhcnQgLSAxLCBlbmQpLFxuICAgICAgY29kZWdlbk5vZGU6IHZvaWQgMFxuICAgIH07XG4gIH0sXG4gIG9ub3BlbnRhZ2VuZChlbmQpIHtcbiAgICBlbmRPcGVuVGFnKGVuZCk7XG4gIH0sXG4gIG9uY2xvc2V0YWcoc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IG5hbWUgPSBnZXRTbGljZShzdGFydCwgZW5kKTtcbiAgICBpZiAoIWN1cnJlbnRPcHRpb25zLmlzVm9pZFRhZyhuYW1lKSkge1xuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGUgPSBzdGFja1tpXTtcbiAgICAgICAgaWYgKGUudGFnLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGVtaXRFcnJvcigyNCwgc3RhY2tbMF0ubG9jLnN0YXJ0Lm9mZnNldCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGk7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBzdGFjay5zaGlmdCgpO1xuICAgICAgICAgICAgb25DbG9zZVRhZyhlbCwgZW5kLCBqIDwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIGVtaXRFcnJvcigyMywgYmFja1RyYWNrKHN0YXJ0LCA2MCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb25zZWxmY2xvc2luZ3RhZyhlbmQpIHtcbiAgICBjb25zdCBuYW1lID0gY3VycmVudE9wZW5UYWcudGFnO1xuICAgIGN1cnJlbnRPcGVuVGFnLmlzU2VsZkNsb3NpbmcgPSB0cnVlO1xuICAgIGVuZE9wZW5UYWcoZW5kKTtcbiAgICBpZiAoc3RhY2tbMF0gJiYgc3RhY2tbMF0udGFnID09PSBuYW1lKSB7XG4gICAgICBvbkNsb3NlVGFnKHN0YWNrLnNoaWZ0KCksIGVuZCk7XG4gICAgfVxuICB9LFxuICBvbmF0dHJpYm5hbWUoc3RhcnQsIGVuZCkge1xuICAgIGN1cnJlbnRQcm9wID0ge1xuICAgICAgdHlwZTogNixcbiAgICAgIG5hbWU6IGdldFNsaWNlKHN0YXJ0LCBlbmQpLFxuICAgICAgbmFtZUxvYzogZ2V0TG9jKHN0YXJ0LCBlbmQpLFxuICAgICAgdmFsdWU6IHZvaWQgMCxcbiAgICAgIGxvYzogZ2V0TG9jKHN0YXJ0KVxuICAgIH07XG4gIH0sXG4gIG9uZGlybmFtZShzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgcmF3ID0gZ2V0U2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgY29uc3QgbmFtZSA9IHJhdyA9PT0gXCIuXCIgfHwgcmF3ID09PSBcIjpcIiA/IFwiYmluZFwiIDogcmF3ID09PSBcIkBcIiA/IFwib25cIiA6IHJhdyA9PT0gXCIjXCIgPyBcInNsb3RcIiA6IHJhdy5zbGljZSgyKTtcbiAgICBpZiAoIWluVlByZSAmJiBuYW1lID09PSBcIlwiKSB7XG4gICAgICBlbWl0RXJyb3IoMjYsIHN0YXJ0KTtcbiAgICB9XG4gICAgaWYgKGluVlByZSB8fCBuYW1lID09PSBcIlwiKSB7XG4gICAgICBjdXJyZW50UHJvcCA9IHtcbiAgICAgICAgdHlwZTogNixcbiAgICAgICAgbmFtZTogcmF3LFxuICAgICAgICBuYW1lTG9jOiBnZXRMb2Moc3RhcnQsIGVuZCksXG4gICAgICAgIHZhbHVlOiB2b2lkIDAsXG4gICAgICAgIGxvYzogZ2V0TG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFByb3AgPSB7XG4gICAgICAgIHR5cGU6IDcsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHJhd05hbWU6IHJhdyxcbiAgICAgICAgZXhwOiB2b2lkIDAsXG4gICAgICAgIGFyZzogdm9pZCAwLFxuICAgICAgICBtb2RpZmllcnM6IHJhdyA9PT0gXCIuXCIgPyBbY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcInByb3BcIildIDogW10sXG4gICAgICAgIGxvYzogZ2V0TG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICAgIGlmIChuYW1lID09PSBcInByZVwiKSB7XG4gICAgICAgIGluVlByZSA9IHRva2VuaXplci5pblZQcmUgPSB0cnVlO1xuICAgICAgICBjdXJyZW50VlByZUJvdW5kYXJ5ID0gY3VycmVudE9wZW5UYWc7XG4gICAgICAgIGNvbnN0IHByb3BzID0gY3VycmVudE9wZW5UYWcucHJvcHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocHJvcHNbaV0udHlwZSA9PT0gNykge1xuICAgICAgICAgICAgcHJvcHNbaV0gPSBkaXJUb0F0dHIocHJvcHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb25kaXJhcmcoc3RhcnQsIGVuZCkge1xuICAgIGlmIChzdGFydCA9PT0gZW5kKSByZXR1cm47XG4gICAgY29uc3QgYXJnID0gZ2V0U2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgaWYgKGluVlByZSAmJiAhaXNWUHJlKGN1cnJlbnRQcm9wKSkge1xuICAgICAgY3VycmVudFByb3AubmFtZSArPSBhcmc7XG4gICAgICBzZXRMb2NFbmQoY3VycmVudFByb3AubmFtZUxvYywgZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNTdGF0aWMgPSBhcmdbMF0gIT09IGBbYDtcbiAgICAgIGN1cnJlbnRQcm9wLmFyZyA9IGNyZWF0ZUV4cChcbiAgICAgICAgaXNTdGF0aWMgPyBhcmcgOiBhcmcuc2xpY2UoMSwgLTEpLFxuICAgICAgICBpc1N0YXRpYyxcbiAgICAgICAgZ2V0TG9jKHN0YXJ0LCBlbmQpLFxuICAgICAgICBpc1N0YXRpYyA/IDMgOiAwXG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgb25kaXJtb2RpZmllcihzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgbW9kID0gZ2V0U2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgaWYgKGluVlByZSAmJiAhaXNWUHJlKGN1cnJlbnRQcm9wKSkge1xuICAgICAgY3VycmVudFByb3AubmFtZSArPSBcIi5cIiArIG1vZDtcbiAgICAgIHNldExvY0VuZChjdXJyZW50UHJvcC5uYW1lTG9jLCBlbmQpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFByb3AubmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNvbnN0IGFyZyA9IGN1cnJlbnRQcm9wLmFyZztcbiAgICAgIGlmIChhcmcpIHtcbiAgICAgICAgYXJnLmNvbnRlbnQgKz0gXCIuXCIgKyBtb2Q7XG4gICAgICAgIHNldExvY0VuZChhcmcubG9jLCBlbmQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleHAgPSBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKG1vZCwgdHJ1ZSwgZ2V0TG9jKHN0YXJ0LCBlbmQpKTtcbiAgICAgIGN1cnJlbnRQcm9wLm1vZGlmaWVycy5wdXNoKGV4cCk7XG4gICAgfVxuICB9LFxuICBvbmF0dHJpYmRhdGEoc3RhcnQsIGVuZCkge1xuICAgIGN1cnJlbnRBdHRyVmFsdWUgKz0gZ2V0U2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgaWYgKGN1cnJlbnRBdHRyU3RhcnRJbmRleCA8IDApIGN1cnJlbnRBdHRyU3RhcnRJbmRleCA9IHN0YXJ0O1xuICAgIGN1cnJlbnRBdHRyRW5kSW5kZXggPSBlbmQ7XG4gIH0sXG4gIG9uYXR0cmliZW50aXR5KGNoYXIsIHN0YXJ0LCBlbmQpIHtcbiAgICBjdXJyZW50QXR0clZhbHVlICs9IGNoYXI7XG4gICAgaWYgKGN1cnJlbnRBdHRyU3RhcnRJbmRleCA8IDApIGN1cnJlbnRBdHRyU3RhcnRJbmRleCA9IHN0YXJ0O1xuICAgIGN1cnJlbnRBdHRyRW5kSW5kZXggPSBlbmQ7XG4gIH0sXG4gIG9uYXR0cmlibmFtZWVuZChlbmQpIHtcbiAgICBjb25zdCBzdGFydCA9IGN1cnJlbnRQcm9wLmxvYy5zdGFydC5vZmZzZXQ7XG4gICAgY29uc3QgbmFtZSA9IGdldFNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIGlmIChjdXJyZW50UHJvcC50eXBlID09PSA3KSB7XG4gICAgICBjdXJyZW50UHJvcC5yYXdOYW1lID0gbmFtZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRPcGVuVGFnLnByb3BzLnNvbWUoXG4gICAgICAocCkgPT4gKHAudHlwZSA9PT0gNyA/IHAucmF3TmFtZSA6IHAubmFtZSkgPT09IG5hbWVcbiAgICApKSB7XG4gICAgICBlbWl0RXJyb3IoMiwgc3RhcnQpO1xuICAgIH1cbiAgfSxcbiAgb25hdHRyaWJlbmQocXVvdGUsIGVuZCkge1xuICAgIGlmIChjdXJyZW50T3BlblRhZyAmJiBjdXJyZW50UHJvcCkge1xuICAgICAgc2V0TG9jRW5kKGN1cnJlbnRQcm9wLmxvYywgZW5kKTtcbiAgICAgIGlmIChxdW90ZSAhPT0gMCkge1xuICAgICAgICBpZiAoY3VycmVudEF0dHJWYWx1ZS5pbmNsdWRlcyhcIiZcIikpIHtcbiAgICAgICAgICBjdXJyZW50QXR0clZhbHVlID0gY3VycmVudE9wdGlvbnMuZGVjb2RlRW50aXRpZXMoXG4gICAgICAgICAgICBjdXJyZW50QXR0clZhbHVlLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9wLnR5cGUgPT09IDYpIHtcbiAgICAgICAgICBpZiAoY3VycmVudFByb3AubmFtZSA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgICAgICBjdXJyZW50QXR0clZhbHVlID0gY29uZGVuc2UoY3VycmVudEF0dHJWYWx1ZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocXVvdGUgPT09IDEgJiYgIWN1cnJlbnRBdHRyVmFsdWUpIHtcbiAgICAgICAgICAgIGVtaXRFcnJvcigxMywgZW5kKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFByb3AudmFsdWUgPSB7XG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgY29udGVudDogY3VycmVudEF0dHJWYWx1ZSxcbiAgICAgICAgICAgIGxvYzogcXVvdGUgPT09IDEgPyBnZXRMb2MoY3VycmVudEF0dHJTdGFydEluZGV4LCBjdXJyZW50QXR0ckVuZEluZGV4KSA6IGdldExvYyhjdXJyZW50QXR0clN0YXJ0SW5kZXggLSAxLCBjdXJyZW50QXR0ckVuZEluZGV4ICsgMSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0b2tlbml6ZXIuaW5TRkNSb290ICYmIGN1cnJlbnRPcGVuVGFnLnRhZyA9PT0gXCJ0ZW1wbGF0ZVwiICYmIGN1cnJlbnRQcm9wLm5hbWUgPT09IFwibGFuZ1wiICYmIGN1cnJlbnRBdHRyVmFsdWUgJiYgY3VycmVudEF0dHJWYWx1ZSAhPT0gXCJodG1sXCIpIHtcbiAgICAgICAgICAgIHRva2VuaXplci5lbnRlclJDREFUQSh0b0NoYXJDb2RlcyhgPC90ZW1wbGF0ZWApLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGV4cFBhcnNlTW9kZSA9IDAgLyogTm9ybWFsICovO1xuICAgICAgICAgIGN1cnJlbnRQcm9wLmV4cCA9IGNyZWF0ZUV4cChcbiAgICAgICAgICAgIGN1cnJlbnRBdHRyVmFsdWUsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIGdldExvYyhjdXJyZW50QXR0clN0YXJ0SW5kZXgsIGN1cnJlbnRBdHRyRW5kSW5kZXgpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIGV4cFBhcnNlTW9kZVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRQcm9wLm5hbWUgPT09IFwiZm9yXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9wLmZvclBhcnNlUmVzdWx0ID0gcGFyc2VGb3JFeHByZXNzaW9uKGN1cnJlbnRQcm9wLmV4cCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzeW5jSW5kZXggPSAtMTtcbiAgICAgICAgICBpZiAoY3VycmVudFByb3AubmFtZSA9PT0gXCJiaW5kXCIgJiYgKHN5bmNJbmRleCA9IGN1cnJlbnRQcm9wLm1vZGlmaWVycy5maW5kSW5kZXgoXG4gICAgICAgICAgICAobW9kKSA9PiBtb2QuY29udGVudCA9PT0gXCJzeW5jXCJcbiAgICAgICAgICApKSA+IC0xICYmIGNoZWNrQ29tcGF0RW5hYmxlZChcbiAgICAgICAgICAgIFwiQ09NUElMRVJfVl9CSU5EX1NZTkNcIixcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zLFxuICAgICAgICAgICAgY3VycmVudFByb3AubG9jLFxuICAgICAgICAgICAgY3VycmVudFByb3AuYXJnLmxvYy5zb3VyY2VcbiAgICAgICAgICApKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvcC5uYW1lID0gXCJtb2RlbFwiO1xuICAgICAgICAgICAgY3VycmVudFByb3AubW9kaWZpZXJzLnNwbGljZShzeW5jSW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRQcm9wLnR5cGUgIT09IDcgfHwgY3VycmVudFByb3AubmFtZSAhPT0gXCJwcmVcIikge1xuICAgICAgICBjdXJyZW50T3BlblRhZy5wcm9wcy5wdXNoKGN1cnJlbnRQcm9wKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudEF0dHJWYWx1ZSA9IFwiXCI7XG4gICAgY3VycmVudEF0dHJTdGFydEluZGV4ID0gY3VycmVudEF0dHJFbmRJbmRleCA9IC0xO1xuICB9LFxuICBvbmNvbW1lbnQoc3RhcnQsIGVuZCkge1xuICAgIGlmIChjdXJyZW50T3B0aW9ucy5jb21tZW50cykge1xuICAgICAgYWRkTm9kZSh7XG4gICAgICAgIHR5cGU6IDMsXG4gICAgICAgIGNvbnRlbnQ6IGdldFNsaWNlKHN0YXJ0LCBlbmQpLFxuICAgICAgICBsb2M6IGdldExvYyhzdGFydCAtIDQsIGVuZCArIDMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIG9uZW5kKCkge1xuICAgIGNvbnN0IGVuZCA9IGN1cnJlbnRJbnB1dC5sZW5ndGg7XG4gICAgaWYgKCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZhbHNlKSAmJiB0b2tlbml6ZXIuc3RhdGUgIT09IDEpIHtcbiAgICAgIHN3aXRjaCAodG9rZW5pemVyLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIGVtaXRFcnJvcig1LCBlbmQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBlbWl0RXJyb3IoXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIHRva2VuaXplci5zZWN0aW9uU3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgIGlmICh0b2tlbml6ZXIuY3VycmVudFNlcXVlbmNlID09PSBTZXF1ZW5jZXMuQ2RhdGFFbmQpIHtcbiAgICAgICAgICAgIGVtaXRFcnJvcig2LCBlbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbWl0RXJyb3IoNywgZW5kKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICBjYXNlIDk6XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgIGNhc2UgMTc6XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgIC8vIFwiXG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgIC8vICdcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICBlbWl0RXJyb3IoOSwgZW5kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YWNrLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgb25DbG9zZVRhZyhzdGFja1tpbmRleF0sIGVuZCAtIDEpO1xuICAgICAgZW1pdEVycm9yKDI0LCBzdGFja1tpbmRleF0ubG9jLnN0YXJ0Lm9mZnNldCk7XG4gICAgfVxuICB9LFxuICBvbmNkYXRhKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoc3RhY2tbMF0ubnMgIT09IDApIHtcbiAgICAgIG9uVGV4dChnZXRTbGljZShzdGFydCwgZW5kKSwgc3RhcnQsIGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXRFcnJvcigxLCBzdGFydCAtIDkpO1xuICAgIH1cbiAgfSxcbiAgb25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oc3RhcnQpIHtcbiAgICBpZiAoKHN0YWNrWzBdID8gc3RhY2tbMF0ubnMgOiBjdXJyZW50T3B0aW9ucy5ucykgPT09IDApIHtcbiAgICAgIGVtaXRFcnJvcihcbiAgICAgICAgMjEsXG4gICAgICAgIHN0YXJ0IC0gMVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0pO1xuY29uc3QgZm9ySXRlcmF0b3JSRSA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLztcbmNvbnN0IHN0cmlwUGFyZW5zUkUgPSAvXlxcKHxcXCkkL2c7XG5mdW5jdGlvbiBwYXJzZUZvckV4cHJlc3Npb24oaW5wdXQpIHtcbiAgY29uc3QgbG9jID0gaW5wdXQubG9jO1xuICBjb25zdCBleHAgPSBpbnB1dC5jb250ZW50O1xuICBjb25zdCBpbk1hdGNoID0gZXhwLm1hdGNoKGZvckFsaWFzUkUpO1xuICBpZiAoIWluTWF0Y2gpIHJldHVybjtcbiAgY29uc3QgWywgTEhTLCBSSFNdID0gaW5NYXRjaDtcbiAgY29uc3QgY3JlYXRlQWxpYXNFeHByZXNzaW9uID0gKGNvbnRlbnQsIG9mZnNldCwgYXNQYXJhbSA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBsb2Muc3RhcnQub2Zmc2V0ICsgb2Zmc2V0O1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgY29udGVudC5sZW5ndGg7XG4gICAgcmV0dXJuIGNyZWF0ZUV4cChcbiAgICAgIGNvbnRlbnQsXG4gICAgICBmYWxzZSxcbiAgICAgIGdldExvYyhzdGFydCwgZW5kKSxcbiAgICAgIDAsXG4gICAgICBhc1BhcmFtID8gMSAvKiBQYXJhbXMgKi8gOiAwIC8qIE5vcm1hbCAqL1xuICAgICk7XG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBzb3VyY2U6IGNyZWF0ZUFsaWFzRXhwcmVzc2lvbihSSFMudHJpbSgpLCBleHAuaW5kZXhPZihSSFMsIExIUy5sZW5ndGgpKSxcbiAgICB2YWx1ZTogdm9pZCAwLFxuICAgIGtleTogdm9pZCAwLFxuICAgIGluZGV4OiB2b2lkIDAsXG4gICAgZmluYWxpemVkOiBmYWxzZVxuICB9O1xuICBsZXQgdmFsdWVDb250ZW50ID0gTEhTLnRyaW0oKS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsIFwiXCIpLnRyaW0oKTtcbiAgY29uc3QgdHJpbW1lZE9mZnNldCA9IExIUy5pbmRleE9mKHZhbHVlQ29udGVudCk7XG4gIGNvbnN0IGl0ZXJhdG9yTWF0Y2ggPSB2YWx1ZUNvbnRlbnQubWF0Y2goZm9ySXRlcmF0b3JSRSk7XG4gIGlmIChpdGVyYXRvck1hdGNoKSB7XG4gICAgdmFsdWVDb250ZW50ID0gdmFsdWVDb250ZW50LnJlcGxhY2UoZm9ySXRlcmF0b3JSRSwgXCJcIikudHJpbSgpO1xuICAgIGNvbnN0IGtleUNvbnRlbnQgPSBpdGVyYXRvck1hdGNoWzFdLnRyaW0oKTtcbiAgICBsZXQga2V5T2Zmc2V0O1xuICAgIGlmIChrZXlDb250ZW50KSB7XG4gICAgICBrZXlPZmZzZXQgPSBleHAuaW5kZXhPZihrZXlDb250ZW50LCB0cmltbWVkT2Zmc2V0ICsgdmFsdWVDb250ZW50Lmxlbmd0aCk7XG4gICAgICByZXN1bHQua2V5ID0gY3JlYXRlQWxpYXNFeHByZXNzaW9uKGtleUNvbnRlbnQsIGtleU9mZnNldCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChpdGVyYXRvck1hdGNoWzJdKSB7XG4gICAgICBjb25zdCBpbmRleENvbnRlbnQgPSBpdGVyYXRvck1hdGNoWzJdLnRyaW0oKTtcbiAgICAgIGlmIChpbmRleENvbnRlbnQpIHtcbiAgICAgICAgcmVzdWx0LmluZGV4ID0gY3JlYXRlQWxpYXNFeHByZXNzaW9uKFxuICAgICAgICAgIGluZGV4Q29udGVudCxcbiAgICAgICAgICBleHAuaW5kZXhPZihcbiAgICAgICAgICAgIGluZGV4Q29udGVudCxcbiAgICAgICAgICAgIHJlc3VsdC5rZXkgPyBrZXlPZmZzZXQgKyBrZXlDb250ZW50Lmxlbmd0aCA6IHRyaW1tZWRPZmZzZXQgKyB2YWx1ZUNvbnRlbnQubGVuZ3RoXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh2YWx1ZUNvbnRlbnQpIHtcbiAgICByZXN1bHQudmFsdWUgPSBjcmVhdGVBbGlhc0V4cHJlc3Npb24odmFsdWVDb250ZW50LCB0cmltbWVkT2Zmc2V0LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0U2xpY2Uoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gY3VycmVudElucHV0LnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuZnVuY3Rpb24gZW5kT3BlblRhZyhlbmQpIHtcbiAgaWYgKHRva2VuaXplci5pblNGQ1Jvb3QpIHtcbiAgICBjdXJyZW50T3BlblRhZy5pbm5lckxvYyA9IGdldExvYyhlbmQgKyAxLCBlbmQgKyAxKTtcbiAgfVxuICBhZGROb2RlKGN1cnJlbnRPcGVuVGFnKTtcbiAgY29uc3QgeyB0YWcsIG5zIH0gPSBjdXJyZW50T3BlblRhZztcbiAgaWYgKG5zID09PSAwICYmIGN1cnJlbnRPcHRpb25zLmlzUHJlVGFnKHRhZykpIHtcbiAgICBpblByZSsrO1xuICB9XG4gIGlmIChjdXJyZW50T3B0aW9ucy5pc1ZvaWRUYWcodGFnKSkge1xuICAgIG9uQ2xvc2VUYWcoY3VycmVudE9wZW5UYWcsIGVuZCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhY2sudW5zaGlmdChjdXJyZW50T3BlblRhZyk7XG4gICAgaWYgKG5zID09PSAxIHx8IG5zID09PSAyKSB7XG4gICAgICB0b2tlbml6ZXIuaW5YTUwgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBjdXJyZW50T3BlblRhZyA9IG51bGw7XG59XG5mdW5jdGlvbiBvblRleHQoY29udGVudCwgc3RhcnQsIGVuZCkge1xuICB7XG4gICAgY29uc3QgdGFnID0gc3RhY2tbMF0gJiYgc3RhY2tbMF0udGFnO1xuICAgIGlmICh0YWcgIT09IFwic2NyaXB0XCIgJiYgdGFnICE9PSBcInN0eWxlXCIgJiYgY29udGVudC5pbmNsdWRlcyhcIiZcIikpIHtcbiAgICAgIGNvbnRlbnQgPSBjdXJyZW50T3B0aW9ucy5kZWNvZGVFbnRpdGllcyhjb250ZW50LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHBhcmVudCA9IHN0YWNrWzBdIHx8IGN1cnJlbnRSb290O1xuICBjb25zdCBsYXN0Tm9kZSA9IHBhcmVudC5jaGlsZHJlbltwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gIGlmIChsYXN0Tm9kZSAmJiBsYXN0Tm9kZS50eXBlID09PSAyKSB7XG4gICAgbGFzdE5vZGUuY29udGVudCArPSBjb250ZW50O1xuICAgIHNldExvY0VuZChsYXN0Tm9kZS5sb2MsIGVuZCk7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goe1xuICAgICAgdHlwZTogMixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBsb2M6IGdldExvYyhzdGFydCwgZW5kKVxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBvbkNsb3NlVGFnKGVsLCBlbmQsIGlzSW1wbGllZCA9IGZhbHNlKSB7XG4gIGlmIChpc0ltcGxpZWQpIHtcbiAgICBzZXRMb2NFbmQoZWwubG9jLCBiYWNrVHJhY2soZW5kLCA2MCkpO1xuICB9IGVsc2Uge1xuICAgIHNldExvY0VuZChlbC5sb2MsIGxvb2tBaGVhZChlbmQsIDYyKSArIDEpO1xuICB9XG4gIGlmICh0b2tlbml6ZXIuaW5TRkNSb290KSB7XG4gICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgZWwuaW5uZXJMb2MuZW5kID0gZXh0ZW5kKHt9LCBlbC5jaGlsZHJlbltlbC5jaGlsZHJlbi5sZW5ndGggLSAxXS5sb2MuZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuaW5uZXJMb2MuZW5kID0gZXh0ZW5kKHt9LCBlbC5pbm5lckxvYy5zdGFydCk7XG4gICAgfVxuICAgIGVsLmlubmVyTG9jLnNvdXJjZSA9IGdldFNsaWNlKFxuICAgICAgZWwuaW5uZXJMb2Muc3RhcnQub2Zmc2V0LFxuICAgICAgZWwuaW5uZXJMb2MuZW5kLm9mZnNldFxuICAgICk7XG4gIH1cbiAgY29uc3QgeyB0YWcsIG5zLCBjaGlsZHJlbiB9ID0gZWw7XG4gIGlmICghaW5WUHJlKSB7XG4gICAgaWYgKHRhZyA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGVsLnRhZ1R5cGUgPSAyO1xuICAgIH0gZWxzZSBpZiAoaXNGcmFnbWVudFRlbXBsYXRlKGVsKSkge1xuICAgICAgZWwudGFnVHlwZSA9IDM7XG4gICAgfSBlbHNlIGlmIChpc0NvbXBvbmVudChlbCkpIHtcbiAgICAgIGVsLnRhZ1R5cGUgPSAxO1xuICAgIH1cbiAgfVxuICBpZiAoIXRva2VuaXplci5pblJDREFUQSkge1xuICAgIGVsLmNoaWxkcmVuID0gY29uZGVuc2VXaGl0ZXNwYWNlKGNoaWxkcmVuKTtcbiAgfVxuICBpZiAobnMgPT09IDAgJiYgY3VycmVudE9wdGlvbnMuaXNJZ25vcmVOZXdsaW5lVGFnKHRhZykpIHtcbiAgICBjb25zdCBmaXJzdCA9IGNoaWxkcmVuWzBdO1xuICAgIGlmIChmaXJzdCAmJiBmaXJzdC50eXBlID09PSAyKSB7XG4gICAgICBmaXJzdC5jb250ZW50ID0gZmlyc3QuY29udGVudC5yZXBsYWNlKC9eXFxyP1xcbi8sIFwiXCIpO1xuICAgIH1cbiAgfVxuICBpZiAobnMgPT09IDAgJiYgY3VycmVudE9wdGlvbnMuaXNQcmVUYWcodGFnKSkge1xuICAgIGluUHJlLS07XG4gIH1cbiAgaWYgKGN1cnJlbnRWUHJlQm91bmRhcnkgPT09IGVsKSB7XG4gICAgaW5WUHJlID0gdG9rZW5pemVyLmluVlByZSA9IGZhbHNlO1xuICAgIGN1cnJlbnRWUHJlQm91bmRhcnkgPSBudWxsO1xuICB9XG4gIGlmICh0b2tlbml6ZXIuaW5YTUwgJiYgKHN0YWNrWzBdID8gc3RhY2tbMF0ubnMgOiBjdXJyZW50T3B0aW9ucy5ucykgPT09IDApIHtcbiAgICB0b2tlbml6ZXIuaW5YTUwgPSBmYWxzZTtcbiAgfVxuICB7XG4gICAgY29uc3QgcHJvcHMgPSBlbC5wcm9wcztcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBpc0NvbXBhdEVuYWJsZWQoXG4gICAgICBcIkNPTVBJTEVSX1ZfSUZfVl9GT1JfUFJFQ0VERU5DRVwiLFxuICAgICAgY3VycmVudE9wdGlvbnNcbiAgICApKSB7XG4gICAgICBsZXQgaGFzSWYgPSBmYWxzZTtcbiAgICAgIGxldCBoYXNGb3IgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcCA9IHByb3BzW2ldO1xuICAgICAgICBpZiAocC50eXBlID09PSA3KSB7XG4gICAgICAgICAgaWYgKHAubmFtZSA9PT0gXCJpZlwiKSB7XG4gICAgICAgICAgICBoYXNJZiA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwLm5hbWUgPT09IFwiZm9yXCIpIHtcbiAgICAgICAgICAgIGhhc0ZvciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNJZiAmJiBoYXNGb3IpIHtcbiAgICAgICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgICAgICBcIkNPTVBJTEVSX1ZfSUZfVl9GT1JfUFJFQ0VERU5DRVwiLFxuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMsXG4gICAgICAgICAgICBlbC5sb2NcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdG9rZW5pemVyLmluU0ZDUm9vdCAmJiBpc0NvbXBhdEVuYWJsZWQoXG4gICAgICBcIkNPTVBJTEVSX05BVElWRV9URU1QTEFURVwiLFxuICAgICAgY3VycmVudE9wdGlvbnNcbiAgICApICYmIGVsLnRhZyA9PT0gXCJ0ZW1wbGF0ZVwiICYmICFpc0ZyYWdtZW50VGVtcGxhdGUoZWwpKSB7XG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgXCJDT01QSUxFUl9OQVRJVkVfVEVNUExBVEVcIixcbiAgICAgICAgY3VycmVudE9wdGlvbnMsXG4gICAgICAgIGVsLmxvY1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHN0YWNrWzBdIHx8IGN1cnJlbnRSb290O1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihlbCk7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxLCAuLi5lbC5jaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGlubGluZVRlbXBsYXRlUHJvcCA9IHByb3BzLmZpbmQoXG4gICAgICAocCkgPT4gcC50eXBlID09PSA2ICYmIHAubmFtZSA9PT0gXCJpbmxpbmUtdGVtcGxhdGVcIlxuICAgICk7XG4gICAgaWYgKGlubGluZVRlbXBsYXRlUHJvcCAmJiBjaGVja0NvbXBhdEVuYWJsZWQoXG4gICAgICBcIkNPTVBJTEVSX0lOTElORV9URU1QTEFURVwiLFxuICAgICAgY3VycmVudE9wdGlvbnMsXG4gICAgICBpbmxpbmVUZW1wbGF0ZVByb3AubG9jXG4gICAgKSAmJiBlbC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIGlubGluZVRlbXBsYXRlUHJvcC52YWx1ZSA9IHtcbiAgICAgICAgdHlwZTogMixcbiAgICAgICAgY29udGVudDogZ2V0U2xpY2UoXG4gICAgICAgICAgZWwuY2hpbGRyZW5bMF0ubG9jLnN0YXJ0Lm9mZnNldCxcbiAgICAgICAgICBlbC5jaGlsZHJlbltlbC5jaGlsZHJlbi5sZW5ndGggLSAxXS5sb2MuZW5kLm9mZnNldFxuICAgICAgICApLFxuICAgICAgICBsb2M6IGlubGluZVRlbXBsYXRlUHJvcC5sb2NcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBsb29rQWhlYWQoaW5kZXgsIGMpIHtcbiAgbGV0IGkgPSBpbmRleDtcbiAgd2hpbGUgKGN1cnJlbnRJbnB1dC5jaGFyQ29kZUF0KGkpICE9PSBjICYmIGkgPCBjdXJyZW50SW5wdXQubGVuZ3RoIC0gMSkgaSsrO1xuICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIGJhY2tUcmFjayhpbmRleCwgYykge1xuICBsZXQgaSA9IGluZGV4O1xuICB3aGlsZSAoY3VycmVudElucHV0LmNoYXJDb2RlQXQoaSkgIT09IGMgJiYgaSA+PSAwKSBpLS07XG4gIHJldHVybiBpO1xufVxuY29uc3Qgc3BlY2lhbFRlbXBsYXRlRGlyID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiaWZcIiwgXCJlbHNlXCIsIFwiZWxzZS1pZlwiLCBcImZvclwiLCBcInNsb3RcIl0pO1xuZnVuY3Rpb24gaXNGcmFnbWVudFRlbXBsYXRlKHsgdGFnLCBwcm9wcyB9KSB7XG4gIGlmICh0YWcgPT09IFwidGVtcGxhdGVcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXS50eXBlID09PSA3ICYmIHNwZWNpYWxUZW1wbGF0ZURpci5oYXMocHJvcHNbaV0ubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29tcG9uZW50KHsgdGFnLCBwcm9wcyB9KSB7XG4gIGlmIChjdXJyZW50T3B0aW9ucy5pc0N1c3RvbUVsZW1lbnQodGFnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGFnID09PSBcImNvbXBvbmVudFwiIHx8IGlzVXBwZXJDYXNlKHRhZy5jaGFyQ29kZUF0KDApKSB8fCBpc0NvcmVDb21wb25lbnQodGFnKSB8fCBjdXJyZW50T3B0aW9ucy5pc0J1aWx0SW5Db21wb25lbnQgJiYgY3VycmVudE9wdGlvbnMuaXNCdWlsdEluQ29tcG9uZW50KHRhZykgfHwgY3VycmVudE9wdGlvbnMuaXNOYXRpdmVUYWcgJiYgIWN1cnJlbnRPcHRpb25zLmlzTmF0aXZlVGFnKHRhZykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IHByb3BzW2ldO1xuICAgIGlmIChwLnR5cGUgPT09IDYpIHtcbiAgICAgIGlmIChwLm5hbWUgPT09IFwiaXNcIiAmJiBwLnZhbHVlKSB7XG4gICAgICAgIGlmIChwLnZhbHVlLmNvbnRlbnQuc3RhcnRzV2l0aChcInZ1ZTpcIikpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0NvbXBhdEVuYWJsZWQoXG4gICAgICAgICAgXCJDT01QSUxFUl9JU19PTl9FTEVNRU5UXCIsXG4gICAgICAgICAgY3VycmVudE9wdGlvbnMsXG4gICAgICAgICAgcC5sb2NcbiAgICAgICAgKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvLyA6aXMgb24gcGxhaW4gZWxlbWVudCAtIG9ubHkgdHJlYXQgYXMgY29tcG9uZW50IGluIGNvbXBhdCBtb2RlXG4gICAgcC5uYW1lID09PSBcImJpbmRcIiAmJiBpc1N0YXRpY0FyZ09mKHAuYXJnLCBcImlzXCIpICYmIGNoZWNrQ29tcGF0RW5hYmxlZChcbiAgICAgIFwiQ09NUElMRVJfSVNfT05fRUxFTUVOVFwiLFxuICAgICAgY3VycmVudE9wdGlvbnMsXG4gICAgICBwLmxvY1xuICAgICkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1VwcGVyQ2FzZShjKSB7XG4gIHJldHVybiBjID4gNjQgJiYgYyA8IDkxO1xufVxuY29uc3Qgd2luZG93c05ld2xpbmVSRSA9IC9cXHJcXG4vZztcbmZ1bmN0aW9uIGNvbmRlbnNlV2hpdGVzcGFjZShub2Rlcykge1xuICBjb25zdCBzaG91bGRDb25kZW5zZSA9IGN1cnJlbnRPcHRpb25zLndoaXRlc3BhY2UgIT09IFwicHJlc2VydmVcIjtcbiAgbGV0IHJlbW92ZWRXaGl0ZXNwYWNlID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMikge1xuICAgICAgaWYgKCFpblByZSkge1xuICAgICAgICBpZiAoaXNBbGxXaGl0ZXNwYWNlKG5vZGUuY29udGVudCkpIHtcbiAgICAgICAgICBjb25zdCBwcmV2ID0gbm9kZXNbaSAtIDFdICYmIG5vZGVzW2kgLSAxXS50eXBlO1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBub2Rlc1tpICsgMV0gJiYgbm9kZXNbaSArIDFdLnR5cGU7XG4gICAgICAgICAgaWYgKCFwcmV2IHx8ICFuZXh0IHx8IHNob3VsZENvbmRlbnNlICYmIChwcmV2ID09PSAzICYmIChuZXh0ID09PSAzIHx8IG5leHQgPT09IDEpIHx8IHByZXYgPT09IDEgJiYgKG5leHQgPT09IDMgfHwgbmV4dCA9PT0gMSAmJiBoYXNOZXdsaW5lQ2hhcihub2RlLmNvbnRlbnQpKSkpIHtcbiAgICAgICAgICAgIHJlbW92ZWRXaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGVzW2ldID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5jb250ZW50ID0gXCIgXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNob3VsZENvbmRlbnNlKSB7XG4gICAgICAgICAgbm9kZS5jb250ZW50ID0gY29uZGVuc2Uobm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5jb250ZW50ID0gbm9kZS5jb250ZW50LnJlcGxhY2Uod2luZG93c05ld2xpbmVSRSwgXCJcXG5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZW1vdmVkV2hpdGVzcGFjZSA/IG5vZGVzLmZpbHRlcihCb29sZWFuKSA6IG5vZGVzO1xufVxuZnVuY3Rpb24gaXNBbGxXaGl0ZXNwYWNlKHN0cikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaXNXaGl0ZXNwYWNlKHN0ci5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGhhc05ld2xpbmVDaGFyKHN0cikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoYyA9PT0gMTAgfHwgYyA9PT0gMTMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBjb25kZW5zZShzdHIpIHtcbiAgbGV0IHJldCA9IFwiXCI7XG4gIGxldCBwcmV2Q2hhcklzV2hpdGVzcGFjZSA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc1doaXRlc3BhY2Uoc3RyLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICBpZiAoIXByZXZDaGFySXNXaGl0ZXNwYWNlKSB7XG4gICAgICAgIHJldCArPSBcIiBcIjtcbiAgICAgICAgcHJldkNoYXJJc1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXQgKz0gc3RyW2ldO1xuICAgICAgcHJldkNoYXJJc1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIGFkZE5vZGUobm9kZSkge1xuICAoc3RhY2tbMF0gfHwgY3VycmVudFJvb3QpLmNoaWxkcmVuLnB1c2gobm9kZSk7XG59XG5mdW5jdGlvbiBnZXRMb2Moc3RhcnQsIGVuZCkge1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiB0b2tlbml6ZXIuZ2V0UG9zKHN0YXJ0KSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGFsbG93IGxhdGUgYXR0YWNobWVudFxuICAgIGVuZDogZW5kID09IG51bGwgPyBlbmQgOiB0b2tlbml6ZXIuZ2V0UG9zKGVuZCksXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBhbGxvdyBsYXRlIGF0dGFjaG1lbnRcbiAgICBzb3VyY2U6IGVuZCA9PSBudWxsID8gZW5kIDogZ2V0U2xpY2Uoc3RhcnQsIGVuZClcbiAgfTtcbn1cbmZ1bmN0aW9uIGNsb25lTG9jKGxvYykge1xuICByZXR1cm4gZ2V0TG9jKGxvYy5zdGFydC5vZmZzZXQsIGxvYy5lbmQub2Zmc2V0KTtcbn1cbmZ1bmN0aW9uIHNldExvY0VuZChsb2MsIGVuZCkge1xuICBsb2MuZW5kID0gdG9rZW5pemVyLmdldFBvcyhlbmQpO1xuICBsb2Muc291cmNlID0gZ2V0U2xpY2UobG9jLnN0YXJ0Lm9mZnNldCwgZW5kKTtcbn1cbmZ1bmN0aW9uIGRpclRvQXR0cihkaXIpIHtcbiAgY29uc3QgYXR0ciA9IHtcbiAgICB0eXBlOiA2LFxuICAgIG5hbWU6IGRpci5yYXdOYW1lLFxuICAgIG5hbWVMb2M6IGdldExvYyhcbiAgICAgIGRpci5sb2Muc3RhcnQub2Zmc2V0LFxuICAgICAgZGlyLmxvYy5zdGFydC5vZmZzZXQgKyBkaXIucmF3TmFtZS5sZW5ndGhcbiAgICApLFxuICAgIHZhbHVlOiB2b2lkIDAsXG4gICAgbG9jOiBkaXIubG9jXG4gIH07XG4gIGlmIChkaXIuZXhwKSB7XG4gICAgY29uc3QgbG9jID0gZGlyLmV4cC5sb2M7XG4gICAgaWYgKGxvYy5lbmQub2Zmc2V0IDwgZGlyLmxvYy5lbmQub2Zmc2V0KSB7XG4gICAgICBsb2Muc3RhcnQub2Zmc2V0LS07XG4gICAgICBsb2Muc3RhcnQuY29sdW1uLS07XG4gICAgICBsb2MuZW5kLm9mZnNldCsrO1xuICAgICAgbG9jLmVuZC5jb2x1bW4rKztcbiAgICB9XG4gICAgYXR0ci52YWx1ZSA9IHtcbiAgICAgIHR5cGU6IDIsXG4gICAgICBjb250ZW50OiBkaXIuZXhwLmNvbnRlbnQsXG4gICAgICBsb2NcbiAgICB9O1xuICB9XG4gIHJldHVybiBhdHRyO1xufVxuZnVuY3Rpb24gY3JlYXRlRXhwKGNvbnRlbnQsIGlzU3RhdGljID0gZmFsc2UsIGxvYywgY29uc3RUeXBlID0gMCwgcGFyc2VNb2RlID0gMCAvKiBOb3JtYWwgKi8pIHtcbiAgY29uc3QgZXhwID0gY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihjb250ZW50LCBpc1N0YXRpYywgbG9jLCBjb25zdFR5cGUpO1xuICByZXR1cm4gZXhwO1xufVxuZnVuY3Rpb24gZW1pdEVycm9yKGNvZGUsIGluZGV4LCBtZXNzYWdlKSB7XG4gIGN1cnJlbnRPcHRpb25zLm9uRXJyb3IoXG4gICAgY3JlYXRlQ29tcGlsZXJFcnJvcihjb2RlLCBnZXRMb2MoaW5kZXgsIGluZGV4KSwgdm9pZCAwLCBtZXNzYWdlKVxuICApO1xufVxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gIHRva2VuaXplci5yZXNldCgpO1xuICBjdXJyZW50T3BlblRhZyA9IG51bGw7XG4gIGN1cnJlbnRQcm9wID0gbnVsbDtcbiAgY3VycmVudEF0dHJWYWx1ZSA9IFwiXCI7XG4gIGN1cnJlbnRBdHRyU3RhcnRJbmRleCA9IC0xO1xuICBjdXJyZW50QXR0ckVuZEluZGV4ID0gLTE7XG4gIHN0YWNrLmxlbmd0aCA9IDA7XG59XG5mdW5jdGlvbiBiYXNlUGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgcmVzZXQoKTtcbiAgY3VycmVudElucHV0ID0gaW5wdXQ7XG4gIGN1cnJlbnRPcHRpb25zID0gZXh0ZW5kKHt9LCBkZWZhdWx0UGFyc2VyT3B0aW9ucyk7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgbGV0IGtleTtcbiAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uc1trZXldICE9IG51bGwpIHtcbiAgICAgICAgY3VycmVudE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBpZiAoIWN1cnJlbnRPcHRpb25zLmRlY29kZUVudGl0aWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBbQHZ1ZS9jb21waWxlci1jb3JlXSBkZWNvZGVFbnRpdGllcyBvcHRpb24gaXMgcmVxdWlyZWQgaW4gYnJvd3NlciBidWlsZHMuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdG9rZW5pemVyLm1vZGUgPSBjdXJyZW50T3B0aW9ucy5wYXJzZU1vZGUgPT09IFwiaHRtbFwiID8gMSA6IGN1cnJlbnRPcHRpb25zLnBhcnNlTW9kZSA9PT0gXCJzZmNcIiA/IDIgOiAwO1xuICB0b2tlbml6ZXIuaW5YTUwgPSBjdXJyZW50T3B0aW9ucy5ucyA9PT0gMSB8fCBjdXJyZW50T3B0aW9ucy5ucyA9PT0gMjtcbiAgY29uc3QgZGVsaW1pdGVycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXJzO1xuICBpZiAoZGVsaW1pdGVycykge1xuICAgIHRva2VuaXplci5kZWxpbWl0ZXJPcGVuID0gdG9DaGFyQ29kZXMoZGVsaW1pdGVyc1swXSk7XG4gICAgdG9rZW5pemVyLmRlbGltaXRlckNsb3NlID0gdG9DaGFyQ29kZXMoZGVsaW1pdGVyc1sxXSk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IGN1cnJlbnRSb290ID0gY3JlYXRlUm9vdChbXSwgaW5wdXQpO1xuICB0b2tlbml6ZXIucGFyc2UoY3VycmVudElucHV0KTtcbiAgcm9vdC5sb2MgPSBnZXRMb2MoMCwgaW5wdXQubGVuZ3RoKTtcbiAgcm9vdC5jaGlsZHJlbiA9IGNvbmRlbnNlV2hpdGVzcGFjZShyb290LmNoaWxkcmVuKTtcbiAgY3VycmVudFJvb3QgPSBudWxsO1xuICByZXR1cm4gcm9vdDtcbn1cblxuZnVuY3Rpb24gY2FjaGVTdGF0aWMocm9vdCwgY29udGV4dCkge1xuICB3YWxrKFxuICAgIHJvb3QsXG4gICAgdm9pZCAwLFxuICAgIGNvbnRleHQsXG4gICAgLy8gUm9vdCBub2RlIGlzIHVuZm9ydHVuYXRlbHkgbm9uLWhvaXN0YWJsZSBkdWUgdG8gcG90ZW50aWFsIHBhcmVudFxuICAgIC8vIGZhbGx0aHJvdWdoIGF0dHJpYnV0ZXMuXG4gICAgISFnZXRTaW5nbGVFbGVtZW50Um9vdChyb290KVxuICApO1xufVxuZnVuY3Rpb24gZ2V0U2luZ2xlRWxlbWVudFJvb3Qocm9vdCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHJvb3QuY2hpbGRyZW4uZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09IDMpO1xuICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdLnR5cGUgPT09IDEgJiYgIWlzU2xvdE91dGxldChjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXSA6IG51bGw7XG59XG5mdW5jdGlvbiB3YWxrKG5vZGUsIHBhcmVudCwgY29udGV4dCwgZG9Ob3RIb2lzdE5vZGUgPSBmYWxzZSwgaW5Gb3IgPSBmYWxzZSkge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBub2RlO1xuICBjb25zdCB0b0NhY2hlID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChjaGlsZC50eXBlID09PSAxICYmIGNoaWxkLnRhZ1R5cGUgPT09IDApIHtcbiAgICAgIGNvbnN0IGNvbnN0YW50VHlwZSA9IGRvTm90SG9pc3ROb2RlID8gMCA6IGdldENvbnN0YW50VHlwZShjaGlsZCwgY29udGV4dCk7XG4gICAgICBpZiAoY29uc3RhbnRUeXBlID4gMCkge1xuICAgICAgICBpZiAoY29uc3RhbnRUeXBlID49IDIpIHtcbiAgICAgICAgICBjaGlsZC5jb2RlZ2VuTm9kZS5wYXRjaEZsYWcgPSAtMTtcbiAgICAgICAgICB0b0NhY2hlLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb2RlZ2VuTm9kZSA9IGNoaWxkLmNvZGVnZW5Ob2RlO1xuICAgICAgICBpZiAoY29kZWdlbk5vZGUudHlwZSA9PT0gMTMpIHtcbiAgICAgICAgICBjb25zdCBmbGFnID0gY29kZWdlbk5vZGUucGF0Y2hGbGFnO1xuICAgICAgICAgIGlmICgoZmxhZyA9PT0gdm9pZCAwIHx8IGZsYWcgPT09IDUxMiB8fCBmbGFnID09PSAxKSAmJiBnZXRHZW5lcmF0ZWRQcm9wc0NvbnN0YW50VHlwZShjaGlsZCwgY29udGV4dCkgPj0gMikge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBnZXROb2RlUHJvcHMoY2hpbGQpO1xuICAgICAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICAgIGNvZGVnZW5Ob2RlLnByb3BzID0gY29udGV4dC5ob2lzdChwcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2RlZ2VuTm9kZS5keW5hbWljUHJvcHMpIHtcbiAgICAgICAgICAgIGNvZGVnZW5Ob2RlLmR5bmFtaWNQcm9wcyA9IGNvbnRleHQuaG9pc3QoY29kZWdlbk5vZGUuZHluYW1pY1Byb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IDEyKSB7XG4gICAgICBjb25zdCBjb25zdGFudFR5cGUgPSBkb05vdEhvaXN0Tm9kZSA/IDAgOiBnZXRDb25zdGFudFR5cGUoY2hpbGQsIGNvbnRleHQpO1xuICAgICAgaWYgKGNvbnN0YW50VHlwZSA+PSAyKSB7XG4gICAgICAgIGlmIChjaGlsZC5jb2RlZ2VuTm9kZS50eXBlID09PSAxNCAmJiBjaGlsZC5jb2RlZ2VuTm9kZS5hcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNoaWxkLmNvZGVnZW5Ob2RlLmFyZ3VtZW50cy5wdXNoKFxuICAgICAgICAgICAgLTEgKyAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGAgLyogJHtQYXRjaEZsYWdOYW1lc1stMV19ICovYCA6IGBgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdG9DYWNoZS5wdXNoKGNoaWxkKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZC50eXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpc0NvbXBvbmVudCA9IGNoaWxkLnRhZ1R5cGUgPT09IDE7XG4gICAgICBpZiAoaXNDb21wb25lbnQpIHtcbiAgICAgICAgY29udGV4dC5zY29wZXMudlNsb3QrKztcbiAgICAgIH1cbiAgICAgIHdhbGsoY2hpbGQsIG5vZGUsIGNvbnRleHQsIGZhbHNlLCBpbkZvcik7XG4gICAgICBpZiAoaXNDb21wb25lbnQpIHtcbiAgICAgICAgY29udGV4dC5zY29wZXMudlNsb3QtLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IDExKSB7XG4gICAgICB3YWxrKGNoaWxkLCBub2RlLCBjb250ZXh0LCBjaGlsZC5jaGlsZHJlbi5sZW5ndGggPT09IDEsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gOSkge1xuICAgICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IGNoaWxkLmJyYW5jaGVzLmxlbmd0aDsgaTIrKykge1xuICAgICAgICB3YWxrKFxuICAgICAgICAgIGNoaWxkLmJyYW5jaGVzW2kyXSxcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgY2hpbGQuYnJhbmNoZXNbaTJdLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSxcbiAgICAgICAgICBpbkZvclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgY2FjaGVkQXNBcnJheSA9IGZhbHNlO1xuICBjb25zdCBzbG90Q2FjaGVLZXlzID0gW107XG4gIGlmICh0b0NhY2hlLmxlbmd0aCA9PT0gY2hpbGRyZW4ubGVuZ3RoICYmIG5vZGUudHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnRhZ1R5cGUgPT09IDAgJiYgbm9kZS5jb2RlZ2VuTm9kZSAmJiBub2RlLmNvZGVnZW5Ob2RlLnR5cGUgPT09IDEzICYmIGlzQXJyYXkobm9kZS5jb2RlZ2VuTm9kZS5jaGlsZHJlbikpIHtcbiAgICAgIG5vZGUuY29kZWdlbk5vZGUuY2hpbGRyZW4gPSBnZXRDYWNoZUV4cHJlc3Npb24oXG4gICAgICAgIGNyZWF0ZUFycmF5RXhwcmVzc2lvbihub2RlLmNvZGVnZW5Ob2RlLmNoaWxkcmVuKVxuICAgICAgKTtcbiAgICAgIGNhY2hlZEFzQXJyYXkgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobm9kZS50YWdUeXBlID09PSAxICYmIG5vZGUuY29kZWdlbk5vZGUgJiYgbm9kZS5jb2RlZ2VuTm9kZS50eXBlID09PSAxMyAmJiBub2RlLmNvZGVnZW5Ob2RlLmNoaWxkcmVuICYmICFpc0FycmF5KG5vZGUuY29kZWdlbk5vZGUuY2hpbGRyZW4pICYmIG5vZGUuY29kZWdlbk5vZGUuY2hpbGRyZW4udHlwZSA9PT0gMTUpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90Tm9kZShub2RlLmNvZGVnZW5Ob2RlLCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBzbG90Q2FjaGVLZXlzLnB1c2goY29udGV4dC5jYWNoZWQubGVuZ3RoKTtcbiAgICAgICAgc2xvdC5yZXR1cm5zID0gZ2V0Q2FjaGVFeHByZXNzaW9uKFxuICAgICAgICAgIGNyZWF0ZUFycmF5RXhwcmVzc2lvbihzbG90LnJldHVybnMpXG4gICAgICAgICk7XG4gICAgICAgIGNhY2hlZEFzQXJyYXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZS50YWdUeXBlID09PSAzICYmIHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gMSAmJiBwYXJlbnQudGFnVHlwZSA9PT0gMSAmJiBwYXJlbnQuY29kZWdlbk5vZGUgJiYgcGFyZW50LmNvZGVnZW5Ob2RlLnR5cGUgPT09IDEzICYmIHBhcmVudC5jb2RlZ2VuTm9kZS5jaGlsZHJlbiAmJiAhaXNBcnJheShwYXJlbnQuY29kZWdlbk5vZGUuY2hpbGRyZW4pICYmIHBhcmVudC5jb2RlZ2VuTm9kZS5jaGlsZHJlbi50eXBlID09PSAxNSkge1xuICAgICAgY29uc3Qgc2xvdE5hbWUgPSBmaW5kRGlyKG5vZGUsIFwic2xvdFwiLCB0cnVlKTtcbiAgICAgIGNvbnN0IHNsb3QgPSBzbG90TmFtZSAmJiBzbG90TmFtZS5hcmcgJiYgZ2V0U2xvdE5vZGUocGFyZW50LmNvZGVnZW5Ob2RlLCBzbG90TmFtZS5hcmcpO1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgc2xvdENhY2hlS2V5cy5wdXNoKGNvbnRleHQuY2FjaGVkLmxlbmd0aCk7XG4gICAgICAgIHNsb3QucmV0dXJucyA9IGdldENhY2hlRXhwcmVzc2lvbihcbiAgICAgICAgICBjcmVhdGVBcnJheUV4cHJlc3Npb24oc2xvdC5yZXR1cm5zKVxuICAgICAgICApO1xuICAgICAgICBjYWNoZWRBc0FycmF5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFjYWNoZWRBc0FycmF5KSB7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0b0NhY2hlKSB7XG4gICAgICBzbG90Q2FjaGVLZXlzLnB1c2goY29udGV4dC5jYWNoZWQubGVuZ3RoKTtcbiAgICAgIGNoaWxkLmNvZGVnZW5Ob2RlID0gY29udGV4dC5jYWNoZShjaGlsZC5jb2RlZ2VuTm9kZSk7XG4gICAgfVxuICB9XG4gIGlmIChzbG90Q2FjaGVLZXlzLmxlbmd0aCAmJiBub2RlLnR5cGUgPT09IDEgJiYgbm9kZS50YWdUeXBlID09PSAxICYmIG5vZGUuY29kZWdlbk5vZGUgJiYgbm9kZS5jb2RlZ2VuTm9kZS50eXBlID09PSAxMyAmJiBub2RlLmNvZGVnZW5Ob2RlLmNoaWxkcmVuICYmICFpc0FycmF5KG5vZGUuY29kZWdlbk5vZGUuY2hpbGRyZW4pICYmIG5vZGUuY29kZWdlbk5vZGUuY2hpbGRyZW4udHlwZSA9PT0gMTUpIHtcbiAgICBub2RlLmNvZGVnZW5Ob2RlLmNoaWxkcmVuLnByb3BlcnRpZXMucHVzaChcbiAgICAgIGNyZWF0ZU9iamVjdFByb3BlcnR5KFxuICAgICAgICBgX19gLFxuICAgICAgICBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKEpTT04uc3RyaW5naWZ5KHNsb3RDYWNoZUtleXMpLCBmYWxzZSlcbiAgICAgIClcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIGdldENhY2hlRXhwcmVzc2lvbih2YWx1ZSkge1xuICAgIGNvbnN0IGV4cCA9IGNvbnRleHQuY2FjaGUodmFsdWUpO1xuICAgIGlmIChpbkZvciAmJiBjb250ZXh0Lmhtcikge1xuICAgICAgZXhwLm5lZWRBcnJheVNwcmVhZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBleHA7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0U2xvdE5vZGUobm9kZTIsIG5hbWUpIHtcbiAgICBpZiAobm9kZTIuY2hpbGRyZW4gJiYgIWlzQXJyYXkobm9kZTIuY2hpbGRyZW4pICYmIG5vZGUyLmNoaWxkcmVuLnR5cGUgPT09IDE1KSB7XG4gICAgICBjb25zdCBzbG90ID0gbm9kZTIuY2hpbGRyZW4ucHJvcGVydGllcy5maW5kKFxuICAgICAgICAocCkgPT4gcC5rZXkgPT09IG5hbWUgfHwgcC5rZXkuY29udGVudCA9PT0gbmFtZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzbG90ICYmIHNsb3QudmFsdWU7XG4gICAgfVxuICB9XG4gIGlmICh0b0NhY2hlLmxlbmd0aCAmJiBjb250ZXh0LnRyYW5zZm9ybUhvaXN0KSB7XG4gICAgY29udGV4dC50cmFuc2Zvcm1Ib2lzdChjaGlsZHJlbiwgY29udGV4dCwgbm9kZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldENvbnN0YW50VHlwZShub2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgY29uc3RhbnRDYWNoZSB9ID0gY29udGV4dDtcbiAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICBjYXNlIDE6XG4gICAgICBpZiAobm9kZS50YWdUeXBlICE9PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgY29uc3QgY2FjaGVkID0gY29uc3RhbnRDYWNoZS5nZXQobm9kZSk7XG4gICAgICBpZiAoY2FjaGVkICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvZGVnZW5Ob2RlID0gbm9kZS5jb2RlZ2VuTm9kZTtcbiAgICAgIGlmIChjb2RlZ2VuTm9kZS50eXBlICE9PSAxMykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlZ2VuTm9kZS5pc0Jsb2NrICYmIG5vZGUudGFnICE9PSBcInN2Z1wiICYmIG5vZGUudGFnICE9PSBcImZvcmVpZ25PYmplY3RcIiAmJiBub2RlLnRhZyAhPT0gXCJtYXRoXCIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBpZiAoY29kZWdlbk5vZGUucGF0Y2hGbGFnID09PSB2b2lkIDApIHtcbiAgICAgICAgbGV0IHJldHVyblR5cGUyID0gMztcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkUHJvcHNUeXBlID0gZ2V0R2VuZXJhdGVkUHJvcHNDb25zdGFudFR5cGUobm9kZSwgY29udGV4dCk7XG4gICAgICAgIGlmIChnZW5lcmF0ZWRQcm9wc1R5cGUgPT09IDApIHtcbiAgICAgICAgICBjb25zdGFudENhY2hlLnNldChub2RlLCAwKTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2VuZXJhdGVkUHJvcHNUeXBlIDwgcmV0dXJuVHlwZTIpIHtcbiAgICAgICAgICByZXR1cm5UeXBlMiA9IGdlbmVyYXRlZFByb3BzVHlwZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjaGlsZFR5cGUgPSBnZXRDb25zdGFudFR5cGUobm9kZS5jaGlsZHJlbltpXSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3RhbnRDYWNoZS5zZXQobm9kZSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNoaWxkVHlwZSA8IHJldHVyblR5cGUyKSB7XG4gICAgICAgICAgICByZXR1cm5UeXBlMiA9IGNoaWxkVHlwZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldHVyblR5cGUyID4gMSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vZGUucHJvcHNbaV07XG4gICAgICAgICAgICBpZiAocC50eXBlID09PSA3ICYmIHAubmFtZSA9PT0gXCJiaW5kXCIgJiYgcC5leHApIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhwVHlwZSA9IGdldENvbnN0YW50VHlwZShwLmV4cCwgY29udGV4dCk7XG4gICAgICAgICAgICAgIGlmIChleHBUeXBlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3RhbnRDYWNoZS5zZXQobm9kZSwgMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGV4cFR5cGUgPCByZXR1cm5UeXBlMikge1xuICAgICAgICAgICAgICAgIHJldHVyblR5cGUyID0gZXhwVHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZWdlbk5vZGUuaXNCbG9jaykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vZGUucHJvcHNbaV07XG4gICAgICAgICAgICBpZiAocC50eXBlID09PSA3KSB7XG4gICAgICAgICAgICAgIGNvbnN0YW50Q2FjaGUuc2V0KG5vZGUsIDApO1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGV4dC5yZW1vdmVIZWxwZXIoT1BFTl9CTE9DSyk7XG4gICAgICAgICAgY29udGV4dC5yZW1vdmVIZWxwZXIoXG4gICAgICAgICAgICBnZXRWTm9kZUJsb2NrSGVscGVyKGNvbnRleHQuaW5TU1IsIGNvZGVnZW5Ob2RlLmlzQ29tcG9uZW50KVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29kZWdlbk5vZGUuaXNCbG9jayA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRleHQuaGVscGVyKGdldFZOb2RlSGVscGVyKGNvbnRleHQuaW5TU1IsIGNvZGVnZW5Ob2RlLmlzQ29tcG9uZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RhbnRDYWNoZS5zZXQobm9kZSwgcmV0dXJuVHlwZTIpO1xuICAgICAgICByZXR1cm4gcmV0dXJuVHlwZTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdGFudENhY2hlLnNldChub2RlLCAwKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAzO1xuICAgIGNhc2UgOTpcbiAgICBjYXNlIDExOlxuICAgIGNhc2UgMTA6XG4gICAgICByZXR1cm4gMDtcbiAgICBjYXNlIDU6XG4gICAgY2FzZSAxMjpcbiAgICAgIHJldHVybiBnZXRDb25zdGFudFR5cGUobm9kZS5jb250ZW50LCBjb250ZXh0KTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gbm9kZS5jb25zdFR5cGU7XG4gICAgY2FzZSA4OlxuICAgICAgbGV0IHJldHVyblR5cGUgPSAzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGlzU3RyaW5nKGNoaWxkKSB8fCBpc1N5bWJvbChjaGlsZCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZFR5cGUgPSBnZXRDb25zdGFudFR5cGUoY2hpbGQsIGNvbnRleHQpO1xuICAgICAgICBpZiAoY2hpbGRUeXBlID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGRUeXBlIDwgcmV0dXJuVHlwZSkge1xuICAgICAgICAgIHJldHVyblR5cGUgPSBjaGlsZFR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5UeXBlO1xuICAgIGNhc2UgMjA6XG4gICAgICByZXR1cm4gMjtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIDtcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG5jb25zdCBhbGxvd0hvaXN0ZWRIZWxwZXJTZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXG4gIE5PUk1BTElaRV9DTEFTUyxcbiAgTk9STUFMSVpFX1NUWUxFLFxuICBOT1JNQUxJWkVfUFJPUFMsXG4gIEdVQVJEX1JFQUNUSVZFX1BST1BTXG5dKTtcbmZ1bmN0aW9uIGdldENvbnN0YW50VHlwZU9mSGVscGVyQ2FsbCh2YWx1ZSwgY29udGV4dCkge1xuICBpZiAodmFsdWUudHlwZSA9PT0gMTQgJiYgIWlzU3RyaW5nKHZhbHVlLmNhbGxlZSkgJiYgYWxsb3dIb2lzdGVkSGVscGVyU2V0Lmhhcyh2YWx1ZS5jYWxsZWUpKSB7XG4gICAgY29uc3QgYXJnID0gdmFsdWUuYXJndW1lbnRzWzBdO1xuICAgIGlmIChhcmcudHlwZSA9PT0gNCkge1xuICAgICAgcmV0dXJuIGdldENvbnN0YW50VHlwZShhcmcsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoYXJnLnR5cGUgPT09IDE0KSB7XG4gICAgICByZXR1cm4gZ2V0Q29uc3RhbnRUeXBlT2ZIZWxwZXJDYWxsKGFyZywgY29udGV4dCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gZ2V0R2VuZXJhdGVkUHJvcHNDb25zdGFudFR5cGUobm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuVHlwZSA9IDM7XG4gIGNvbnN0IHByb3BzID0gZ2V0Tm9kZVByb3BzKG5vZGUpO1xuICBpZiAocHJvcHMgJiYgcHJvcHMudHlwZSA9PT0gMTUpIHtcbiAgICBjb25zdCB7IHByb3BlcnRpZXMgfSA9IHByb3BzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgY29uc3Qga2V5VHlwZSA9IGdldENvbnN0YW50VHlwZShrZXksIGNvbnRleHQpO1xuICAgICAgaWYgKGtleVR5cGUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGtleVR5cGU7XG4gICAgICB9XG4gICAgICBpZiAoa2V5VHlwZSA8IHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuVHlwZSA9IGtleVR5cGU7XG4gICAgICB9XG4gICAgICBsZXQgdmFsdWVUeXBlO1xuICAgICAgaWYgKHZhbHVlLnR5cGUgPT09IDQpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gZ2V0Q29uc3RhbnRUeXBlKHZhbHVlLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUudHlwZSA9PT0gMTQpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gZ2V0Q29uc3RhbnRUeXBlT2ZIZWxwZXJDYWxsKHZhbHVlLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlVHlwZSA9IDA7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVUeXBlID09PSAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVR5cGU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVUeXBlIDwgcmV0dXJuVHlwZSkge1xuICAgICAgICByZXR1cm5UeXBlID0gdmFsdWVUeXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0dXJuVHlwZTtcbn1cbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyhub2RlKSB7XG4gIGNvbnN0IGNvZGVnZW5Ob2RlID0gbm9kZS5jb2RlZ2VuTm9kZTtcbiAgaWYgKGNvZGVnZW5Ob2RlLnR5cGUgPT09IDEzKSB7XG4gICAgcmV0dXJuIGNvZGVnZW5Ob2RlLnByb3BzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybUNvbnRleHQocm9vdCwge1xuICBmaWxlbmFtZSA9IFwiXCIsXG4gIHByZWZpeElkZW50aWZpZXJzID0gZmFsc2UsXG4gIGhvaXN0U3RhdGljID0gZmFsc2UsXG4gIGhtciA9IGZhbHNlLFxuICBjYWNoZUhhbmRsZXJzID0gZmFsc2UsXG4gIG5vZGVUcmFuc2Zvcm1zID0gW10sXG4gIGRpcmVjdGl2ZVRyYW5zZm9ybXMgPSB7fSxcbiAgdHJhbnNmb3JtSG9pc3QgPSBudWxsLFxuICBpc0J1aWx0SW5Db21wb25lbnQgPSBOT09QLFxuICBpc0N1c3RvbUVsZW1lbnQgPSBOT09QLFxuICBleHByZXNzaW9uUGx1Z2lucyA9IFtdLFxuICBzY29wZUlkID0gbnVsbCxcbiAgc2xvdHRlZCA9IHRydWUsXG4gIHNzciA9IGZhbHNlLFxuICBpblNTUiA9IGZhbHNlLFxuICBzc3JDc3NWYXJzID0gYGAsXG4gIGJpbmRpbmdNZXRhZGF0YSA9IEVNUFRZX09CSixcbiAgaW5saW5lID0gZmFsc2UsXG4gIGlzVFMgPSBmYWxzZSxcbiAgb25FcnJvciA9IGRlZmF1bHRPbkVycm9yLFxuICBvbldhcm4gPSBkZWZhdWx0T25XYXJuLFxuICBjb21wYXRDb25maWdcbn0pIHtcbiAgY29uc3QgbmFtZU1hdGNoID0gZmlsZW5hbWUucmVwbGFjZSgvXFw/LiokLywgXCJcIikubWF0Y2goLyhbXi9cXFxcXSspXFwuXFx3KyQvKTtcbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICAvLyBvcHRpb25zXG4gICAgZmlsZW5hbWUsXG4gICAgc2VsZk5hbWU6IG5hbWVNYXRjaCAmJiBjYXBpdGFsaXplKGNhbWVsaXplKG5hbWVNYXRjaFsxXSkpLFxuICAgIHByZWZpeElkZW50aWZpZXJzLFxuICAgIGhvaXN0U3RhdGljLFxuICAgIGhtcixcbiAgICBjYWNoZUhhbmRsZXJzLFxuICAgIG5vZGVUcmFuc2Zvcm1zLFxuICAgIGRpcmVjdGl2ZVRyYW5zZm9ybXMsXG4gICAgdHJhbnNmb3JtSG9pc3QsXG4gICAgaXNCdWlsdEluQ29tcG9uZW50LFxuICAgIGlzQ3VzdG9tRWxlbWVudCxcbiAgICBleHByZXNzaW9uUGx1Z2lucyxcbiAgICBzY29wZUlkLFxuICAgIHNsb3R0ZWQsXG4gICAgc3NyLFxuICAgIGluU1NSLFxuICAgIHNzckNzc1ZhcnMsXG4gICAgYmluZGluZ01ldGFkYXRhLFxuICAgIGlubGluZSxcbiAgICBpc1RTLFxuICAgIG9uRXJyb3IsXG4gICAgb25XYXJuLFxuICAgIGNvbXBhdENvbmZpZyxcbiAgICAvLyBzdGF0ZVxuICAgIHJvb3QsXG4gICAgaGVscGVyczogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICBjb21wb25lbnRzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuICAgIGRpcmVjdGl2ZXM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG4gICAgaG9pc3RzOiBbXSxcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBjYWNoZWQ6IFtdLFxuICAgIGNvbnN0YW50Q2FjaGU6IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLFxuICAgIHRlbXBzOiAwLFxuICAgIGlkZW50aWZpZXJzOiAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICBzY29wZXM6IHtcbiAgICAgIHZGb3I6IDAsXG4gICAgICB2U2xvdDogMCxcbiAgICAgIHZQcmU6IDAsXG4gICAgICB2T25jZTogMFxuICAgIH0sXG4gICAgcGFyZW50OiBudWxsLFxuICAgIGdyYW5kUGFyZW50OiBudWxsLFxuICAgIGN1cnJlbnROb2RlOiByb290LFxuICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgaW5WT25jZTogZmFsc2UsXG4gICAgLy8gbWV0aG9kc1xuICAgIGhlbHBlcihuYW1lKSB7XG4gICAgICBjb25zdCBjb3VudCA9IGNvbnRleHQuaGVscGVycy5nZXQobmFtZSkgfHwgMDtcbiAgICAgIGNvbnRleHQuaGVscGVycy5zZXQobmFtZSwgY291bnQgKyAxKTtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgcmVtb3ZlSGVscGVyKG5hbWUpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gY29udGV4dC5oZWxwZXJzLmdldChuYW1lKTtcbiAgICAgIGlmIChjb3VudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q291bnQgPSBjb3VudCAtIDE7XG4gICAgICAgIGlmICghY3VycmVudENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5oZWxwZXJzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmhlbHBlcnMuc2V0KG5hbWUsIGN1cnJlbnRDb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGhlbHBlclN0cmluZyhuYW1lKSB7XG4gICAgICByZXR1cm4gYF8ke2hlbHBlck5hbWVNYXBbY29udGV4dC5oZWxwZXIobmFtZSldfWA7XG4gICAgfSxcbiAgICByZXBsYWNlTm9kZShub2RlKSB7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICBpZiAoIWNvbnRleHQuY3VycmVudE5vZGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vZGUgYmVpbmcgcmVwbGFjZWQgaXMgYWxyZWFkeSByZW1vdmVkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCByZXBsYWNlIHJvb3Qgbm9kZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGV4dC5wYXJlbnQuY2hpbGRyZW5bY29udGV4dC5jaGlsZEluZGV4XSA9IGNvbnRleHQuY3VycmVudE5vZGUgPSBub2RlO1xuICAgIH0sXG4gICAgcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVtb3ZlIHJvb3Qgbm9kZS5gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpc3QgPSBjb250ZXh0LnBhcmVudC5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IHJlbW92YWxJbmRleCA9IG5vZGUgPyBsaXN0LmluZGV4T2Yobm9kZSkgOiBjb250ZXh0LmN1cnJlbnROb2RlID8gY29udGV4dC5jaGlsZEluZGV4IDogLTE7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiByZW1vdmFsSW5kZXggPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgbm9kZSBiZWluZyByZW1vdmVkIGlzIG5vdCBhIGNoaWxkIG9mIGN1cnJlbnQgcGFyZW50YCk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZSA9PT0gY29udGV4dC5jdXJyZW50Tm9kZSkge1xuICAgICAgICBjb250ZXh0LmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgY29udGV4dC5vbk5vZGVSZW1vdmVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29udGV4dC5jaGlsZEluZGV4ID4gcmVtb3ZhbEluZGV4KSB7XG4gICAgICAgICAgY29udGV4dC5jaGlsZEluZGV4LS07XG4gICAgICAgICAgY29udGV4dC5vbk5vZGVSZW1vdmVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRleHQucGFyZW50LmNoaWxkcmVuLnNwbGljZShyZW1vdmFsSW5kZXgsIDEpO1xuICAgIH0sXG4gICAgb25Ob2RlUmVtb3ZlZDogTk9PUCxcbiAgICBhZGRJZGVudGlmaWVycyhleHApIHtcbiAgICB9LFxuICAgIHJlbW92ZUlkZW50aWZpZXJzKGV4cCkge1xuICAgIH0sXG4gICAgaG9pc3QoZXhwKSB7XG4gICAgICBpZiAoaXNTdHJpbmcoZXhwKSkgZXhwID0gY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihleHApO1xuICAgICAgY29udGV4dC5ob2lzdHMucHVzaChleHApO1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oXG4gICAgICAgIGBfaG9pc3RlZF8ke2NvbnRleHQuaG9pc3RzLmxlbmd0aH1gLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZXhwLmxvYyxcbiAgICAgICAgMlxuICAgICAgKTtcbiAgICAgIGlkZW50aWZpZXIuaG9pc3RlZCA9IGV4cDtcbiAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgIH0sXG4gICAgY2FjaGUoZXhwLCBpc1ZOb2RlID0gZmFsc2UsIGluVk9uY2UgPSBmYWxzZSkge1xuICAgICAgY29uc3QgY2FjaGVFeHAgPSBjcmVhdGVDYWNoZUV4cHJlc3Npb24oXG4gICAgICAgIGNvbnRleHQuY2FjaGVkLmxlbmd0aCxcbiAgICAgICAgZXhwLFxuICAgICAgICBpc1ZOb2RlLFxuICAgICAgICBpblZPbmNlXG4gICAgICApO1xuICAgICAgY29udGV4dC5jYWNoZWQucHVzaChjYWNoZUV4cCk7XG4gICAgICByZXR1cm4gY2FjaGVFeHA7XG4gICAgfVxuICB9O1xuICB7XG4gICAgY29udGV4dC5maWx0ZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybShyb290LCBvcHRpb25zKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVUcmFuc2Zvcm1Db250ZXh0KHJvb3QsIG9wdGlvbnMpO1xuICB0cmF2ZXJzZU5vZGUocm9vdCwgY29udGV4dCk7XG4gIGlmIChvcHRpb25zLmhvaXN0U3RhdGljKSB7XG4gICAgY2FjaGVTdGF0aWMocm9vdCwgY29udGV4dCk7XG4gIH1cbiAgaWYgKCFvcHRpb25zLnNzcikge1xuICAgIGNyZWF0ZVJvb3RDb2RlZ2VuKHJvb3QsIGNvbnRleHQpO1xuICB9XG4gIHJvb3QuaGVscGVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5jb250ZXh0LmhlbHBlcnMua2V5cygpXSk7XG4gIHJvb3QuY29tcG9uZW50cyA9IFsuLi5jb250ZXh0LmNvbXBvbmVudHNdO1xuICByb290LmRpcmVjdGl2ZXMgPSBbLi4uY29udGV4dC5kaXJlY3RpdmVzXTtcbiAgcm9vdC5pbXBvcnRzID0gY29udGV4dC5pbXBvcnRzO1xuICByb290LmhvaXN0cyA9IGNvbnRleHQuaG9pc3RzO1xuICByb290LnRlbXBzID0gY29udGV4dC50ZW1wcztcbiAgcm9vdC5jYWNoZWQgPSBjb250ZXh0LmNhY2hlZDtcbiAgcm9vdC50cmFuc2Zvcm1lZCA9IHRydWU7XG4gIHtcbiAgICByb290LmZpbHRlcnMgPSBbLi4uY29udGV4dC5maWx0ZXJzXTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlUm9vdENvZGVnZW4ocm9vdCwgY29udGV4dCkge1xuICBjb25zdCB7IGhlbHBlciB9ID0gY29udGV4dDtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcm9vdDtcbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IHNpbmdsZUVsZW1lbnRSb290Q2hpbGQgPSBnZXRTaW5nbGVFbGVtZW50Um9vdChyb290KTtcbiAgICBpZiAoc2luZ2xlRWxlbWVudFJvb3RDaGlsZCAmJiBzaW5nbGVFbGVtZW50Um9vdENoaWxkLmNvZGVnZW5Ob2RlKSB7XG4gICAgICBjb25zdCBjb2RlZ2VuTm9kZSA9IHNpbmdsZUVsZW1lbnRSb290Q2hpbGQuY29kZWdlbk5vZGU7XG4gICAgICBpZiAoY29kZWdlbk5vZGUudHlwZSA9PT0gMTMpIHtcbiAgICAgICAgY29udmVydFRvQmxvY2soY29kZWdlbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgICAgcm9vdC5jb2RlZ2VuTm9kZSA9IGNvZGVnZW5Ob2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LmNvZGVnZW5Ob2RlID0gY2hpbGRyZW5bMF07XG4gICAgfVxuICB9IGVsc2UgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgcGF0Y2hGbGFnID0gNjQ7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnR5cGUgIT09IDMpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcGF0Y2hGbGFnIHw9IDIwNDg7XG4gICAgfVxuICAgIHJvb3QuY29kZWdlbk5vZGUgPSBjcmVhdGVWTm9kZUNhbGwoXG4gICAgICBjb250ZXh0LFxuICAgICAgaGVscGVyKEZSQUdNRU5UKSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHJvb3QuY2hpbGRyZW4sXG4gICAgICBwYXRjaEZsYWcsXG4gICAgICB2b2lkIDAsXG4gICAgICB2b2lkIDAsXG4gICAgICB0cnVlLFxuICAgICAgdm9pZCAwLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9IGVsc2UgO1xufVxuZnVuY3Rpb24gdHJhdmVyc2VDaGlsZHJlbihwYXJlbnQsIGNvbnRleHQpIHtcbiAgbGV0IGkgPSAwO1xuICBjb25zdCBub2RlUmVtb3ZlZCA9ICgpID0+IHtcbiAgICBpLS07XG4gIH07XG4gIGZvciAoOyBpIDwgcGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGQgPSBwYXJlbnQuY2hpbGRyZW5baV07XG4gICAgaWYgKGlzU3RyaW5nKGNoaWxkKSkgY29udGludWU7XG4gICAgY29udGV4dC5ncmFuZFBhcmVudCA9IGNvbnRleHQucGFyZW50O1xuICAgIGNvbnRleHQucGFyZW50ID0gcGFyZW50O1xuICAgIGNvbnRleHQuY2hpbGRJbmRleCA9IGk7XG4gICAgY29udGV4dC5vbk5vZGVSZW1vdmVkID0gbm9kZVJlbW92ZWQ7XG4gICAgdHJhdmVyc2VOb2RlKGNoaWxkLCBjb250ZXh0KTtcbiAgfVxufVxuZnVuY3Rpb24gdHJhdmVyc2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29udGV4dC5jdXJyZW50Tm9kZSA9IG5vZGU7XG4gIGNvbnN0IHsgbm9kZVRyYW5zZm9ybXMgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IGV4aXRGbnMgPSBbXTtcbiAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IG5vZGVUcmFuc2Zvcm1zLmxlbmd0aDsgaTIrKykge1xuICAgIGNvbnN0IG9uRXhpdCA9IG5vZGVUcmFuc2Zvcm1zW2kyXShub2RlLCBjb250ZXh0KTtcbiAgICBpZiAob25FeGl0KSB7XG4gICAgICBpZiAoaXNBcnJheShvbkV4aXQpKSB7XG4gICAgICAgIGV4aXRGbnMucHVzaCguLi5vbkV4aXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhpdEZucy5wdXNoKG9uRXhpdCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY29udGV4dC5jdXJyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gY29udGV4dC5jdXJyZW50Tm9kZTtcbiAgICB9XG4gIH1cbiAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICBjYXNlIDM6XG4gICAgICBpZiAoIWNvbnRleHQuc3NyKSB7XG4gICAgICAgIGNvbnRleHQuaGVscGVyKENSRUFURV9DT01NRU5UKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIGlmICghY29udGV4dC5zc3IpIHtcbiAgICAgICAgY29udGV4dC5oZWxwZXIoVE9fRElTUExBWV9TVFJJTkcpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgLy8gZm9yIGNvbnRhaW5lciB0eXBlcywgZnVydGhlciB0cmF2ZXJzZSBkb3dud2FyZHNcbiAgICBjYXNlIDk6XG4gICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgbm9kZS5icmFuY2hlcy5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgdHJhdmVyc2VOb2RlKG5vZGUuYnJhbmNoZXNbaTJdLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTA6XG4gICAgY2FzZSAxMTpcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAwOlxuICAgICAgdHJhdmVyc2VDaGlsZHJlbihub2RlLCBjb250ZXh0KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGNvbnRleHQuY3VycmVudE5vZGUgPSBub2RlO1xuICBsZXQgaSA9IGV4aXRGbnMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgZXhpdEZuc1tpXSgpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmFsRGlyZWN0aXZlVHJhbnNmb3JtKG5hbWUsIGZuKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBpc1N0cmluZyhuYW1lKSA/IChuKSA9PiBuID09PSBuYW1lIDogKG4pID0+IG5hbWUudGVzdChuKTtcbiAgcmV0dXJuIChub2RlLCBjb250ZXh0KSA9PiB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgeyBwcm9wcyB9ID0gbm9kZTtcbiAgICAgIGlmIChub2RlLnRhZ1R5cGUgPT09IDMgJiYgcHJvcHMuc29tZShpc1ZTbG90KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBleGl0Rm5zID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgaWYgKHByb3AudHlwZSA9PT0gNyAmJiBtYXRjaGVzKHByb3AubmFtZSkpIHtcbiAgICAgICAgICBwcm9wcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgaS0tO1xuICAgICAgICAgIGNvbnN0IG9uRXhpdCA9IGZuKG5vZGUsIHByb3AsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChvbkV4aXQpIGV4aXRGbnMucHVzaChvbkV4aXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpdEZucztcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IFBVUkVfQU5OT1RBVElPTiA9IGAvKkBfX1BVUkVfXyovYDtcbmNvbnN0IGFsaWFzSGVscGVyID0gKHMpID0+IGAke2hlbHBlck5hbWVNYXBbc119OiBfJHtoZWxwZXJOYW1lTWFwW3NdfWA7XG5mdW5jdGlvbiBjcmVhdGVDb2RlZ2VuQ29udGV4dChhc3QsIHtcbiAgbW9kZSA9IFwiZnVuY3Rpb25cIixcbiAgcHJlZml4SWRlbnRpZmllcnMgPSBtb2RlID09PSBcIm1vZHVsZVwiLFxuICBzb3VyY2VNYXAgPSBmYWxzZSxcbiAgZmlsZW5hbWUgPSBgdGVtcGxhdGUudnVlLmh0bWxgLFxuICBzY29wZUlkID0gbnVsbCxcbiAgb3B0aW1pemVJbXBvcnRzID0gZmFsc2UsXG4gIHJ1bnRpbWVHbG9iYWxOYW1lID0gYFZ1ZWAsXG4gIHJ1bnRpbWVNb2R1bGVOYW1lID0gYHZ1ZWAsXG4gIHNzclJ1bnRpbWVNb2R1bGVOYW1lID0gXCJ2dWUvc2VydmVyLXJlbmRlcmVyXCIsXG4gIHNzciA9IGZhbHNlLFxuICBpc1RTID0gZmFsc2UsXG4gIGluU1NSID0gZmFsc2Vcbn0pIHtcbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBtb2RlLFxuICAgIHByZWZpeElkZW50aWZpZXJzLFxuICAgIHNvdXJjZU1hcCxcbiAgICBmaWxlbmFtZSxcbiAgICBzY29wZUlkLFxuICAgIG9wdGltaXplSW1wb3J0cyxcbiAgICBydW50aW1lR2xvYmFsTmFtZSxcbiAgICBydW50aW1lTW9kdWxlTmFtZSxcbiAgICBzc3JSdW50aW1lTW9kdWxlTmFtZSxcbiAgICBzc3IsXG4gICAgaXNUUyxcbiAgICBpblNTUixcbiAgICBzb3VyY2U6IGFzdC5zb3VyY2UsXG4gICAgY29kZTogYGAsXG4gICAgY29sdW1uOiAxLFxuICAgIGxpbmU6IDEsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGluZGVudExldmVsOiAwLFxuICAgIHB1cmU6IGZhbHNlLFxuICAgIG1hcDogdm9pZCAwLFxuICAgIGhlbHBlcihrZXkpIHtcbiAgICAgIHJldHVybiBgXyR7aGVscGVyTmFtZU1hcFtrZXldfWA7XG4gICAgfSxcbiAgICBwdXNoKGNvZGUsIG5ld2xpbmVJbmRleCA9IC0yIC8qIE5vbmUgKi8sIG5vZGUpIHtcbiAgICAgIGNvbnRleHQuY29kZSArPSBjb2RlO1xuICAgIH0sXG4gICAgaW5kZW50KCkge1xuICAgICAgbmV3bGluZSgrK2NvbnRleHQuaW5kZW50TGV2ZWwpO1xuICAgIH0sXG4gICAgZGVpbmRlbnQod2l0aG91dE5ld0xpbmUgPSBmYWxzZSkge1xuICAgICAgaWYgKHdpdGhvdXROZXdMaW5lKSB7XG4gICAgICAgIC0tY29udGV4dC5pbmRlbnRMZXZlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld2xpbmUoLS1jb250ZXh0LmluZGVudExldmVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5ld2xpbmUoKSB7XG4gICAgICBuZXdsaW5lKGNvbnRleHQuaW5kZW50TGV2ZWwpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gbmV3bGluZShuKSB7XG4gICAgY29udGV4dC5wdXNoKFwiXFxuXCIgKyBgICBgLnJlcGVhdChuKSwgMCAvKiBTdGFydCAqLyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZShhc3QsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29kZWdlbkNvbnRleHQoYXN0LCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMub25Db250ZXh0Q3JlYXRlZCkgb3B0aW9ucy5vbkNvbnRleHRDcmVhdGVkKGNvbnRleHQpO1xuICBjb25zdCB7XG4gICAgbW9kZSxcbiAgICBwdXNoLFxuICAgIHByZWZpeElkZW50aWZpZXJzLFxuICAgIGluZGVudCxcbiAgICBkZWluZGVudCxcbiAgICBuZXdsaW5lLFxuICAgIHNjb3BlSWQsXG4gICAgc3NyXG4gIH0gPSBjb250ZXh0O1xuICBjb25zdCBoZWxwZXJzID0gQXJyYXkuZnJvbShhc3QuaGVscGVycyk7XG4gIGNvbnN0IGhhc0hlbHBlcnMgPSBoZWxwZXJzLmxlbmd0aCA+IDA7XG4gIGNvbnN0IHVzZVdpdGhCbG9jayA9ICFwcmVmaXhJZGVudGlmaWVycyAmJiBtb2RlICE9PSBcIm1vZHVsZVwiO1xuICBjb25zdCBwcmVhbWJsZUNvbnRleHQgPSBjb250ZXh0O1xuICB7XG4gICAgZ2VuRnVuY3Rpb25QcmVhbWJsZShhc3QsIHByZWFtYmxlQ29udGV4dCk7XG4gIH1cbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gc3NyID8gYHNzclJlbmRlcmAgOiBgcmVuZGVyYDtcbiAgY29uc3QgYXJncyA9IHNzciA/IFtcIl9jdHhcIiwgXCJfcHVzaFwiLCBcIl9wYXJlbnRcIiwgXCJfYXR0cnNcIl0gOiBbXCJfY3R4XCIsIFwiX2NhY2hlXCJdO1xuICBjb25zdCBzaWduYXR1cmUgPSBhcmdzLmpvaW4oXCIsIFwiKTtcbiAge1xuICAgIHB1c2goYGZ1bmN0aW9uICR7ZnVuY3Rpb25OYW1lfSgke3NpZ25hdHVyZX0pIHtgKTtcbiAgfVxuICBpbmRlbnQoKTtcbiAgaWYgKHVzZVdpdGhCbG9jaykge1xuICAgIHB1c2goYHdpdGggKF9jdHgpIHtgKTtcbiAgICBpbmRlbnQoKTtcbiAgICBpZiAoaGFzSGVscGVycykge1xuICAgICAgcHVzaChcbiAgICAgICAgYGNvbnN0IHsgJHtoZWxwZXJzLm1hcChhbGlhc0hlbHBlcikuam9pbihcIiwgXCIpfSB9ID0gX1Z1ZVxuYCxcbiAgICAgICAgLTEgLyogRW5kICovXG4gICAgICApO1xuICAgICAgbmV3bGluZSgpO1xuICAgIH1cbiAgfVxuICBpZiAoYXN0LmNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgZ2VuQXNzZXRzKGFzdC5jb21wb25lbnRzLCBcImNvbXBvbmVudFwiLCBjb250ZXh0KTtcbiAgICBpZiAoYXN0LmRpcmVjdGl2ZXMubGVuZ3RoIHx8IGFzdC50ZW1wcyA+IDApIHtcbiAgICAgIG5ld2xpbmUoKTtcbiAgICB9XG4gIH1cbiAgaWYgKGFzdC5kaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgIGdlbkFzc2V0cyhhc3QuZGlyZWN0aXZlcywgXCJkaXJlY3RpdmVcIiwgY29udGV4dCk7XG4gICAgaWYgKGFzdC50ZW1wcyA+IDApIHtcbiAgICAgIG5ld2xpbmUoKTtcbiAgICB9XG4gIH1cbiAgaWYgKGFzdC5maWx0ZXJzICYmIGFzdC5maWx0ZXJzLmxlbmd0aCkge1xuICAgIG5ld2xpbmUoKTtcbiAgICBnZW5Bc3NldHMoYXN0LmZpbHRlcnMsIFwiZmlsdGVyXCIsIGNvbnRleHQpO1xuICAgIG5ld2xpbmUoKTtcbiAgfVxuICBpZiAoYXN0LnRlbXBzID4gMCkge1xuICAgIHB1c2goYGxldCBgKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzdC50ZW1wczsgaSsrKSB7XG4gICAgICBwdXNoKGAke2kgPiAwID8gYCwgYCA6IGBgfV90ZW1wJHtpfWApO1xuICAgIH1cbiAgfVxuICBpZiAoYXN0LmNvbXBvbmVudHMubGVuZ3RoIHx8IGFzdC5kaXJlY3RpdmVzLmxlbmd0aCB8fCBhc3QudGVtcHMpIHtcbiAgICBwdXNoKGBcbmAsIDAgLyogU3RhcnQgKi8pO1xuICAgIG5ld2xpbmUoKTtcbiAgfVxuICBpZiAoIXNzcikge1xuICAgIHB1c2goYHJldHVybiBgKTtcbiAgfVxuICBpZiAoYXN0LmNvZGVnZW5Ob2RlKSB7XG4gICAgZ2VuTm9kZShhc3QuY29kZWdlbk5vZGUsIGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIHB1c2goYG51bGxgKTtcbiAgfVxuICBpZiAodXNlV2l0aEJsb2NrKSB7XG4gICAgZGVpbmRlbnQoKTtcbiAgICBwdXNoKGB9YCk7XG4gIH1cbiAgZGVpbmRlbnQoKTtcbiAgcHVzaChgfWApO1xuICByZXR1cm4ge1xuICAgIGFzdCxcbiAgICBjb2RlOiBjb250ZXh0LmNvZGUsXG4gICAgcHJlYW1ibGU6IGBgLFxuICAgIG1hcDogY29udGV4dC5tYXAgPyBjb250ZXh0Lm1hcC50b0pTT04oKSA6IHZvaWQgMFxuICB9O1xufVxuZnVuY3Rpb24gZ2VuRnVuY3Rpb25QcmVhbWJsZShhc3QsIGNvbnRleHQpIHtcbiAgY29uc3Qge1xuICAgIHNzcixcbiAgICBwcmVmaXhJZGVudGlmaWVycyxcbiAgICBwdXNoLFxuICAgIG5ld2xpbmUsXG4gICAgcnVudGltZU1vZHVsZU5hbWUsXG4gICAgcnVudGltZUdsb2JhbE5hbWUsXG4gICAgc3NyUnVudGltZU1vZHVsZU5hbWVcbiAgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IFZ1ZUJpbmRpbmcgPSBydW50aW1lR2xvYmFsTmFtZTtcbiAgY29uc3QgaGVscGVycyA9IEFycmF5LmZyb20oYXN0LmhlbHBlcnMpO1xuICBpZiAoaGVscGVycy5sZW5ndGggPiAwKSB7XG4gICAge1xuICAgICAgcHVzaChgY29uc3QgX1Z1ZSA9ICR7VnVlQmluZGluZ31cbmAsIC0xIC8qIEVuZCAqLyk7XG4gICAgICBpZiAoYXN0LmhvaXN0cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSGVscGVycyA9IFtcbiAgICAgICAgICBDUkVBVEVfVk5PREUsXG4gICAgICAgICAgQ1JFQVRFX0VMRU1FTlRfVk5PREUsXG4gICAgICAgICAgQ1JFQVRFX0NPTU1FTlQsXG4gICAgICAgICAgQ1JFQVRFX1RFWFQsXG4gICAgICAgICAgQ1JFQVRFX1NUQVRJQ1xuICAgICAgICBdLmZpbHRlcigoaGVscGVyKSA9PiBoZWxwZXJzLmluY2x1ZGVzKGhlbHBlcikpLm1hcChhbGlhc0hlbHBlcikuam9pbihcIiwgXCIpO1xuICAgICAgICBwdXNoKGBjb25zdCB7ICR7c3RhdGljSGVscGVyc30gfSA9IF9WdWVcbmAsIC0xIC8qIEVuZCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdlbkhvaXN0cyhhc3QuaG9pc3RzLCBjb250ZXh0KTtcbiAgbmV3bGluZSgpO1xuICBwdXNoKGByZXR1cm4gYCk7XG59XG5mdW5jdGlvbiBnZW5Bc3NldHMoYXNzZXRzLCB0eXBlLCB7IGhlbHBlciwgcHVzaCwgbmV3bGluZSwgaXNUUyB9KSB7XG4gIGNvbnN0IHJlc29sdmVyID0gaGVscGVyKFxuICAgIHR5cGUgPT09IFwiZmlsdGVyXCIgPyBSRVNPTFZFX0ZJTFRFUiA6IHR5cGUgPT09IFwiY29tcG9uZW50XCIgPyBSRVNPTFZFX0NPTVBPTkVOVCA6IFJFU09MVkVfRElSRUNUSVZFXG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGlkID0gYXNzZXRzW2ldO1xuICAgIGNvbnN0IG1heWJlU2VsZlJlZmVyZW5jZSA9IGlkLmVuZHNXaXRoKFwiX19zZWxmXCIpO1xuICAgIGlmIChtYXliZVNlbGZSZWZlcmVuY2UpIHtcbiAgICAgIGlkID0gaWQuc2xpY2UoMCwgLTYpO1xuICAgIH1cbiAgICBwdXNoKFxuICAgICAgYGNvbnN0ICR7dG9WYWxpZEFzc2V0SWQoaWQsIHR5cGUpfSA9ICR7cmVzb2x2ZXJ9KCR7SlNPTi5zdHJpbmdpZnkoaWQpfSR7bWF5YmVTZWxmUmVmZXJlbmNlID8gYCwgdHJ1ZWAgOiBgYH0pJHtpc1RTID8gYCFgIDogYGB9YFxuICAgICk7XG4gICAgaWYgKGkgPCBhc3NldHMubGVuZ3RoIC0gMSkge1xuICAgICAgbmV3bGluZSgpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2VuSG9pc3RzKGhvaXN0cywgY29udGV4dCkge1xuICBpZiAoIWhvaXN0cy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29udGV4dC5wdXJlID0gdHJ1ZTtcbiAgY29uc3QgeyBwdXNoLCBuZXdsaW5lIH0gPSBjb250ZXh0O1xuICBuZXdsaW5lKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9pc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZXhwID0gaG9pc3RzW2ldO1xuICAgIGlmIChleHApIHtcbiAgICAgIHB1c2goYGNvbnN0IF9ob2lzdGVkXyR7aSArIDF9ID0gYCk7XG4gICAgICBnZW5Ob2RlKGV4cCwgY29udGV4dCk7XG4gICAgICBuZXdsaW5lKCk7XG4gICAgfVxuICB9XG4gIGNvbnRleHQucHVyZSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gaXNUZXh0KG4pIHtcbiAgcmV0dXJuIGlzU3RyaW5nKG4pIHx8IG4udHlwZSA9PT0gNCB8fCBuLnR5cGUgPT09IDIgfHwgbi50eXBlID09PSA1IHx8IG4udHlwZSA9PT0gODtcbn1cbmZ1bmN0aW9uIGdlbk5vZGVMaXN0QXNBcnJheShub2RlcywgY29udGV4dCkge1xuICBjb25zdCBtdWx0aWxpbmVzID0gbm9kZXMubGVuZ3RoID4gMyB8fCAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIG5vZGVzLnNvbWUoKG4pID0+IGlzQXJyYXkobikgfHwgIWlzVGV4dChuKSk7XG4gIGNvbnRleHQucHVzaChgW2ApO1xuICBtdWx0aWxpbmVzICYmIGNvbnRleHQuaW5kZW50KCk7XG4gIGdlbk5vZGVMaXN0KG5vZGVzLCBjb250ZXh0LCBtdWx0aWxpbmVzKTtcbiAgbXVsdGlsaW5lcyAmJiBjb250ZXh0LmRlaW5kZW50KCk7XG4gIGNvbnRleHQucHVzaChgXWApO1xufVxuZnVuY3Rpb24gZ2VuTm9kZUxpc3Qobm9kZXMsIGNvbnRleHQsIG11bHRpbGluZXMgPSBmYWxzZSwgY29tbWEgPSB0cnVlKSB7XG4gIGNvbnN0IHsgcHVzaCwgbmV3bGluZSB9ID0gY29udGV4dDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICBpZiAoaXNTdHJpbmcobm9kZSkpIHtcbiAgICAgIHB1c2gobm9kZSwgLTMgLyogVW5rbm93biAqLyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBnZW5Ob2RlTGlzdEFzQXJyYXkobm9kZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbk5vZGUobm9kZSwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChpIDwgbm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgaWYgKG11bHRpbGluZXMpIHtcbiAgICAgICAgY29tbWEgJiYgcHVzaChcIixcIik7XG4gICAgICAgIG5ld2xpbmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1hICYmIHB1c2goXCIsIFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdlbk5vZGUobm9kZSwgY29udGV4dCkge1xuICBpZiAoaXNTdHJpbmcobm9kZSkpIHtcbiAgICBjb250ZXh0LnB1c2gobm9kZSwgLTMgLyogVW5rbm93biAqLyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc1N5bWJvbChub2RlKSkge1xuICAgIGNvbnRleHQucHVzaChjb250ZXh0LmhlbHBlcihub2RlKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgY2FzZSAxOlxuICAgIGNhc2UgOTpcbiAgICBjYXNlIDExOlxuICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBhc3NlcnQoXG4gICAgICAgIG5vZGUuY29kZWdlbk5vZGUgIT0gbnVsbCxcbiAgICAgICAgYENvZGVnZW4gbm9kZSBpcyBtaXNzaW5nIGZvciBlbGVtZW50L2lmL2ZvciBub2RlLiBBcHBseSBhcHByb3ByaWF0ZSB0cmFuc2Zvcm1zIGZpcnN0LmBcbiAgICAgICk7XG4gICAgICBnZW5Ob2RlKG5vZGUuY29kZWdlbk5vZGUsIGNvbnRleHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgZ2VuVGV4dChub2RlLCBjb250ZXh0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGdlbkV4cHJlc3Npb24obm9kZSwgY29udGV4dCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBnZW5JbnRlcnBvbGF0aW9uKG5vZGUsIGNvbnRleHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxMjpcbiAgICAgIGdlbk5vZGUobm9kZS5jb2RlZ2VuTm9kZSwgY29udGV4dCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDg6XG4gICAgICBnZW5Db21wb3VuZEV4cHJlc3Npb24obm9kZSwgY29udGV4dCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBnZW5Db21tZW50KG5vZGUsIGNvbnRleHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxMzpcbiAgICAgIGdlblZOb2RlQ2FsbChub2RlLCBjb250ZXh0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTQ6XG4gICAgICBnZW5DYWxsRXhwcmVzc2lvbihub2RlLCBjb250ZXh0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTU6XG4gICAgICBnZW5PYmplY3RFeHByZXNzaW9uKG5vZGUsIGNvbnRleHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxNzpcbiAgICAgIGdlbkFycmF5RXhwcmVzc2lvbihub2RlLCBjb250ZXh0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTg6XG4gICAgICBnZW5GdW5jdGlvbkV4cHJlc3Npb24obm9kZSwgY29udGV4dCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE5OlxuICAgICAgZ2VuQ29uZGl0aW9uYWxFeHByZXNzaW9uKG5vZGUsIGNvbnRleHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMDpcbiAgICAgIGdlbkNhY2hlRXhwcmVzc2lvbihub2RlLCBjb250ZXh0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjE6XG4gICAgICBnZW5Ob2RlTGlzdChub2RlLmJvZHksIGNvbnRleHQsIHRydWUsIGZhbHNlKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFNTUiBvbmx5IHR5cGVzXG4gICAgY2FzZSAyMjpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjM6XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI0OlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyNTpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjY6XG4gICAgICBicmVhaztcbiAgICAvKiB2OCBpZ25vcmUgc3RhcnQgKi9cbiAgICBjYXNlIDEwOlxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIGFzc2VydChmYWxzZSwgYHVuaGFuZGxlZCBjb2RlZ2VuIG5vZGUgdHlwZTogJHtub2RlLnR5cGV9YCk7XG4gICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjayA9IG5vZGU7XG4gICAgICAgIHJldHVybiBleGhhdXN0aXZlQ2hlY2s7XG4gICAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdlblRleHQobm9kZSwgY29udGV4dCkge1xuICBjb250ZXh0LnB1c2goSlNPTi5zdHJpbmdpZnkobm9kZS5jb250ZW50KSwgLTMgLyogVW5rbm93biAqLywgbm9kZSk7XG59XG5mdW5jdGlvbiBnZW5FeHByZXNzaW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb250ZW50LCBpc1N0YXRpYyB9ID0gbm9kZTtcbiAgY29udGV4dC5wdXNoKFxuICAgIGlzU3RhdGljID8gSlNPTi5zdHJpbmdpZnkoY29udGVudCkgOiBjb250ZW50LFxuICAgIC0zIC8qIFVua25vd24gKi8sXG4gICAgbm9kZVxuICApO1xufVxuZnVuY3Rpb24gZ2VuSW50ZXJwb2xhdGlvbihub2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcHVzaCwgaGVscGVyLCBwdXJlIH0gPSBjb250ZXh0O1xuICBpZiAocHVyZSkgcHVzaChQVVJFX0FOTk9UQVRJT04pO1xuICBwdXNoKGAke2hlbHBlcihUT19ESVNQTEFZX1NUUklORyl9KGApO1xuICBnZW5Ob2RlKG5vZGUuY29udGVudCwgY29udGV4dCk7XG4gIHB1c2goYClgKTtcbn1cbmZ1bmN0aW9uIGdlbkNvbXBvdW5kRXhwcmVzc2lvbihub2RlLCBjb250ZXh0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICBpZiAoaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICBjb250ZXh0LnB1c2goY2hpbGQsIC0zIC8qIFVua25vd24gKi8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5Ob2RlKGNoaWxkLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdlbkV4cHJlc3Npb25Bc1Byb3BlcnR5S2V5KG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwdXNoIH0gPSBjb250ZXh0O1xuICBpZiAobm9kZS50eXBlID09PSA4KSB7XG4gICAgcHVzaChgW2ApO1xuICAgIGdlbkNvbXBvdW5kRXhwcmVzc2lvbihub2RlLCBjb250ZXh0KTtcbiAgICBwdXNoKGBdYCk7XG4gIH0gZWxzZSBpZiAobm9kZS5pc1N0YXRpYykge1xuICAgIGNvbnN0IHRleHQgPSBpc1NpbXBsZUlkZW50aWZpZXIobm9kZS5jb250ZW50KSA/IG5vZGUuY29udGVudCA6IEpTT04uc3RyaW5naWZ5KG5vZGUuY29udGVudCk7XG4gICAgcHVzaCh0ZXh0LCAtMiAvKiBOb25lICovLCBub2RlKTtcbiAgfSBlbHNlIHtcbiAgICBwdXNoKGBbJHtub2RlLmNvbnRlbnR9XWAsIC0zIC8qIFVua25vd24gKi8sIG5vZGUpO1xuICB9XG59XG5mdW5jdGlvbiBnZW5Db21tZW50KG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwdXNoLCBoZWxwZXIsIHB1cmUgfSA9IGNvbnRleHQ7XG4gIGlmIChwdXJlKSB7XG4gICAgcHVzaChQVVJFX0FOTk9UQVRJT04pO1xuICB9XG4gIHB1c2goXG4gICAgYCR7aGVscGVyKENSRUFURV9DT01NRU5UKX0oJHtKU09OLnN0cmluZ2lmeShub2RlLmNvbnRlbnQpfSlgLFxuICAgIC0zIC8qIFVua25vd24gKi8sXG4gICAgbm9kZVxuICApO1xufVxuZnVuY3Rpb24gZ2VuVk5vZGVDYWxsKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwdXNoLCBoZWxwZXIsIHB1cmUgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IHtcbiAgICB0YWcsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgcGF0Y2hGbGFnLFxuICAgIGR5bmFtaWNQcm9wcyxcbiAgICBkaXJlY3RpdmVzLFxuICAgIGlzQmxvY2ssXG4gICAgZGlzYWJsZVRyYWNraW5nLFxuICAgIGlzQ29tcG9uZW50XG4gIH0gPSBub2RlO1xuICBsZXQgcGF0Y2hGbGFnU3RyaW5nO1xuICBpZiAocGF0Y2hGbGFnKSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIGlmIChwYXRjaEZsYWcgPCAwKSB7XG4gICAgICAgIHBhdGNoRmxhZ1N0cmluZyA9IHBhdGNoRmxhZyArIGAgLyogJHtQYXRjaEZsYWdOYW1lc1twYXRjaEZsYWddfSAqL2A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmbGFnTmFtZXMgPSBPYmplY3Qua2V5cyhQYXRjaEZsYWdOYW1lcykubWFwKE51bWJlcikuZmlsdGVyKChuKSA9PiBuID4gMCAmJiBwYXRjaEZsYWcgJiBuKS5tYXAoKG4pID0+IFBhdGNoRmxhZ05hbWVzW25dKS5qb2luKGAsIGApO1xuICAgICAgICBwYXRjaEZsYWdTdHJpbmcgPSBwYXRjaEZsYWcgKyBgIC8qICR7ZmxhZ05hbWVzfSAqL2A7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGNoRmxhZ1N0cmluZyA9IFN0cmluZyhwYXRjaEZsYWcpO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aXZlcykge1xuICAgIHB1c2goaGVscGVyKFdJVEhfRElSRUNUSVZFUykgKyBgKGApO1xuICB9XG4gIGlmIChpc0Jsb2NrKSB7XG4gICAgcHVzaChgKCR7aGVscGVyKE9QRU5fQkxPQ0spfSgke2Rpc2FibGVUcmFja2luZyA/IGB0cnVlYCA6IGBgfSksIGApO1xuICB9XG4gIGlmIChwdXJlKSB7XG4gICAgcHVzaChQVVJFX0FOTk9UQVRJT04pO1xuICB9XG4gIGNvbnN0IGNhbGxIZWxwZXIgPSBpc0Jsb2NrID8gZ2V0Vk5vZGVCbG9ja0hlbHBlcihjb250ZXh0LmluU1NSLCBpc0NvbXBvbmVudCkgOiBnZXRWTm9kZUhlbHBlcihjb250ZXh0LmluU1NSLCBpc0NvbXBvbmVudCk7XG4gIHB1c2goaGVscGVyKGNhbGxIZWxwZXIpICsgYChgLCAtMiAvKiBOb25lICovLCBub2RlKTtcbiAgZ2VuTm9kZUxpc3QoXG4gICAgZ2VuTnVsbGFibGVBcmdzKFt0YWcsIHByb3BzLCBjaGlsZHJlbiwgcGF0Y2hGbGFnU3RyaW5nLCBkeW5hbWljUHJvcHNdKSxcbiAgICBjb250ZXh0XG4gICk7XG4gIHB1c2goYClgKTtcbiAgaWYgKGlzQmxvY2spIHtcbiAgICBwdXNoKGApYCk7XG4gIH1cbiAgaWYgKGRpcmVjdGl2ZXMpIHtcbiAgICBwdXNoKGAsIGApO1xuICAgIGdlbk5vZGUoZGlyZWN0aXZlcywgY29udGV4dCk7XG4gICAgcHVzaChgKWApO1xuICB9XG59XG5mdW5jdGlvbiBnZW5OdWxsYWJsZUFyZ3MoYXJncykge1xuICBsZXQgaSA9IGFyZ3MubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKGFyZ3NbaV0gIT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGFyZ3Muc2xpY2UoMCwgaSArIDEpLm1hcCgoYXJnKSA9PiBhcmcgfHwgYG51bGxgKTtcbn1cbmZ1bmN0aW9uIGdlbkNhbGxFeHByZXNzaW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwdXNoLCBoZWxwZXIsIHB1cmUgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IGNhbGxlZSA9IGlzU3RyaW5nKG5vZGUuY2FsbGVlKSA/IG5vZGUuY2FsbGVlIDogaGVscGVyKG5vZGUuY2FsbGVlKTtcbiAgaWYgKHB1cmUpIHtcbiAgICBwdXNoKFBVUkVfQU5OT1RBVElPTik7XG4gIH1cbiAgcHVzaChjYWxsZWUgKyBgKGAsIC0yIC8qIE5vbmUgKi8sIG5vZGUpO1xuICBnZW5Ob2RlTGlzdChub2RlLmFyZ3VtZW50cywgY29udGV4dCk7XG4gIHB1c2goYClgKTtcbn1cbmZ1bmN0aW9uIGdlbk9iamVjdEV4cHJlc3Npb24obm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IHB1c2gsIGluZGVudCwgZGVpbmRlbnQsIG5ld2xpbmUgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gbm9kZTtcbiAgaWYgKCFwcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgIHB1c2goYHt9YCwgLTIgLyogTm9uZSAqLywgbm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG11bHRpbGluZXMgPSBwcm9wZXJ0aWVzLmxlbmd0aCA+IDEgfHwgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBwcm9wZXJ0aWVzLnNvbWUoKHApID0+IHAudmFsdWUudHlwZSAhPT0gNCk7XG4gIHB1c2gobXVsdGlsaW5lcyA/IGB7YCA6IGB7IGApO1xuICBtdWx0aWxpbmVzICYmIGluZGVudCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHByb3BlcnRpZXNbaV07XG4gICAgZ2VuRXhwcmVzc2lvbkFzUHJvcGVydHlLZXkoa2V5LCBjb250ZXh0KTtcbiAgICBwdXNoKGA6IGApO1xuICAgIGdlbk5vZGUodmFsdWUsIGNvbnRleHQpO1xuICAgIGlmIChpIDwgcHJvcGVydGllcy5sZW5ndGggLSAxKSB7XG4gICAgICBwdXNoKGAsYCk7XG4gICAgICBuZXdsaW5lKCk7XG4gICAgfVxuICB9XG4gIG11bHRpbGluZXMgJiYgZGVpbmRlbnQoKTtcbiAgcHVzaChtdWx0aWxpbmVzID8gYH1gIDogYCB9YCk7XG59XG5mdW5jdGlvbiBnZW5BcnJheUV4cHJlc3Npb24obm9kZSwgY29udGV4dCkge1xuICBnZW5Ob2RlTGlzdEFzQXJyYXkobm9kZS5lbGVtZW50cywgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZW5GdW5jdGlvbkV4cHJlc3Npb24obm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IHB1c2gsIGluZGVudCwgZGVpbmRlbnQgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IHsgcGFyYW1zLCByZXR1cm5zLCBib2R5LCBuZXdsaW5lLCBpc1Nsb3QgfSA9IG5vZGU7XG4gIGlmIChpc1Nsb3QpIHtcbiAgICBwdXNoKGBfJHtoZWxwZXJOYW1lTWFwW1dJVEhfQ1RYXX0oYCk7XG4gIH1cbiAgcHVzaChgKGAsIC0yIC8qIE5vbmUgKi8sIG5vZGUpO1xuICBpZiAoaXNBcnJheShwYXJhbXMpKSB7XG4gICAgZ2VuTm9kZUxpc3QocGFyYW1zLCBjb250ZXh0KTtcbiAgfSBlbHNlIGlmIChwYXJhbXMpIHtcbiAgICBnZW5Ob2RlKHBhcmFtcywgY29udGV4dCk7XG4gIH1cbiAgcHVzaChgKSA9PiBgKTtcbiAgaWYgKG5ld2xpbmUgfHwgYm9keSkge1xuICAgIHB1c2goYHtgKTtcbiAgICBpbmRlbnQoKTtcbiAgfVxuICBpZiAocmV0dXJucykge1xuICAgIGlmIChuZXdsaW5lKSB7XG4gICAgICBwdXNoKGByZXR1cm4gYCk7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KHJldHVybnMpKSB7XG4gICAgICBnZW5Ob2RlTGlzdEFzQXJyYXkocmV0dXJucywgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbk5vZGUocmV0dXJucywgY29udGV4dCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGJvZHkpIHtcbiAgICBnZW5Ob2RlKGJvZHksIGNvbnRleHQpO1xuICB9XG4gIGlmIChuZXdsaW5lIHx8IGJvZHkpIHtcbiAgICBkZWluZGVudCgpO1xuICAgIHB1c2goYH1gKTtcbiAgfVxuICBpZiAoaXNTbG90KSB7XG4gICAgaWYgKG5vZGUuaXNOb25TY29wZWRTbG90KSB7XG4gICAgICBwdXNoKGAsIHVuZGVmaW5lZCwgdHJ1ZWApO1xuICAgIH1cbiAgICBwdXNoKGApYCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdlbkNvbmRpdGlvbmFsRXhwcmVzc2lvbihub2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdGVzdCwgY29uc2VxdWVudCwgYWx0ZXJuYXRlLCBuZXdsaW5lOiBuZWVkTmV3bGluZSB9ID0gbm9kZTtcbiAgY29uc3QgeyBwdXNoLCBpbmRlbnQsIGRlaW5kZW50LCBuZXdsaW5lIH0gPSBjb250ZXh0O1xuICBpZiAodGVzdC50eXBlID09PSA0KSB7XG4gICAgY29uc3QgbmVlZHNQYXJlbnMgPSAhaXNTaW1wbGVJZGVudGlmaWVyKHRlc3QuY29udGVudCk7XG4gICAgbmVlZHNQYXJlbnMgJiYgcHVzaChgKGApO1xuICAgIGdlbkV4cHJlc3Npb24odGVzdCwgY29udGV4dCk7XG4gICAgbmVlZHNQYXJlbnMgJiYgcHVzaChgKWApO1xuICB9IGVsc2Uge1xuICAgIHB1c2goYChgKTtcbiAgICBnZW5Ob2RlKHRlc3QsIGNvbnRleHQpO1xuICAgIHB1c2goYClgKTtcbiAgfVxuICBuZWVkTmV3bGluZSAmJiBpbmRlbnQoKTtcbiAgY29udGV4dC5pbmRlbnRMZXZlbCsrO1xuICBuZWVkTmV3bGluZSB8fCBwdXNoKGAgYCk7XG4gIHB1c2goYD8gYCk7XG4gIGdlbk5vZGUoY29uc2VxdWVudCwgY29udGV4dCk7XG4gIGNvbnRleHQuaW5kZW50TGV2ZWwtLTtcbiAgbmVlZE5ld2xpbmUgJiYgbmV3bGluZSgpO1xuICBuZWVkTmV3bGluZSB8fCBwdXNoKGAgYCk7XG4gIHB1c2goYDogYCk7XG4gIGNvbnN0IGlzTmVzdGVkID0gYWx0ZXJuYXRlLnR5cGUgPT09IDE5O1xuICBpZiAoIWlzTmVzdGVkKSB7XG4gICAgY29udGV4dC5pbmRlbnRMZXZlbCsrO1xuICB9XG4gIGdlbk5vZGUoYWx0ZXJuYXRlLCBjb250ZXh0KTtcbiAgaWYgKCFpc05lc3RlZCkge1xuICAgIGNvbnRleHQuaW5kZW50TGV2ZWwtLTtcbiAgfVxuICBuZWVkTmV3bGluZSAmJiBkZWluZGVudChcbiAgICB0cnVlXG4gICAgLyogd2l0aG91dCBuZXdsaW5lICovXG4gICk7XG59XG5mdW5jdGlvbiBnZW5DYWNoZUV4cHJlc3Npb24obm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IHB1c2gsIGhlbHBlciwgaW5kZW50LCBkZWluZGVudCwgbmV3bGluZSB9ID0gY29udGV4dDtcbiAgY29uc3QgeyBuZWVkUGF1c2VUcmFja2luZywgbmVlZEFycmF5U3ByZWFkIH0gPSBub2RlO1xuICBpZiAobmVlZEFycmF5U3ByZWFkKSB7XG4gICAgcHVzaChgWy4uLihgKTtcbiAgfVxuICBwdXNoKGBfY2FjaGVbJHtub2RlLmluZGV4fV0gfHwgKGApO1xuICBpZiAobmVlZFBhdXNlVHJhY2tpbmcpIHtcbiAgICBpbmRlbnQoKTtcbiAgICBwdXNoKGAke2hlbHBlcihTRVRfQkxPQ0tfVFJBQ0tJTkcpfSgtMWApO1xuICAgIGlmIChub2RlLmluVk9uY2UpIHB1c2goYCwgdHJ1ZWApO1xuICAgIHB1c2goYCksYCk7XG4gICAgbmV3bGluZSgpO1xuICAgIHB1c2goYChgKTtcbiAgfVxuICBwdXNoKGBfY2FjaGVbJHtub2RlLmluZGV4fV0gPSBgKTtcbiAgZ2VuTm9kZShub2RlLnZhbHVlLCBjb250ZXh0KTtcbiAgaWYgKG5lZWRQYXVzZVRyYWNraW5nKSB7XG4gICAgcHVzaChgKS5jYWNoZUluZGV4ID0gJHtub2RlLmluZGV4fSxgKTtcbiAgICBuZXdsaW5lKCk7XG4gICAgcHVzaChgJHtoZWxwZXIoU0VUX0JMT0NLX1RSQUNLSU5HKX0oMSksYCk7XG4gICAgbmV3bGluZSgpO1xuICAgIHB1c2goYF9jYWNoZVske25vZGUuaW5kZXh9XWApO1xuICAgIGRlaW5kZW50KCk7XG4gIH1cbiAgcHVzaChgKWApO1xuICBpZiAobmVlZEFycmF5U3ByZWFkKSB7XG4gICAgcHVzaChgKV1gKTtcbiAgfVxufVxuXG5jb25zdCBwcm9oaWJpdGVkS2V5d29yZFJFID0gbmV3IFJlZ0V4cChcbiAgXCJcXFxcYlwiICsgXCJhcmd1bWVudHMsYXdhaXQsYnJlYWssY2FzZSxjYXRjaCxjbGFzcyxjb25zdCxjb250aW51ZSxkZWJ1Z2dlcixkZWZhdWx0LGRlbGV0ZSxkbyxlbHNlLGV4cG9ydCxleHRlbmRzLGZpbmFsbHksZm9yLGZ1bmN0aW9uLGlmLGltcG9ydCxsZXQsbmV3LHJldHVybixzdXBlcixzd2l0Y2gsdGhyb3csdHJ5LHZhcix2b2lkLHdoaWxlLHdpdGgseWllbGRcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxifFxcXFxiXCIpICsgXCJcXFxcYlwiXG4pO1xuY29uc3Qgc3RyaXBTdHJpbmdSRSA9IC8nKD86W14nXFxcXF18XFxcXC4pKid8XCIoPzpbXlwiXFxcXF18XFxcXC4pKlwifGAoPzpbXmBcXFxcXXxcXFxcLikqXFwkXFx7fFxcfSg/OlteYFxcXFxdfFxcXFwuKSpgfGAoPzpbXmBcXFxcXXxcXFxcLikqYC9nO1xuZnVuY3Rpb24gdmFsaWRhdGVCcm93c2VyRXhwcmVzc2lvbihub2RlLCBjb250ZXh0LCBhc1BhcmFtcyA9IGZhbHNlLCBhc1Jhd1N0YXRlbWVudHMgPSBmYWxzZSkge1xuICBjb25zdCBleHAgPSBub2RlLmNvbnRlbnQ7XG4gIGlmICghZXhwLnRyaW0oKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIG5ldyBGdW5jdGlvbihcbiAgICAgIGFzUmF3U3RhdGVtZW50cyA/IGAgJHtleHB9IGAgOiBgcmV0dXJuICR7YXNQYXJhbXMgPyBgKCR7ZXhwfSkgPT4ge31gIDogYCgke2V4cH0pYH1gXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxldCBtZXNzYWdlID0gZS5tZXNzYWdlO1xuICAgIGNvbnN0IGtleXdvcmRNYXRjaCA9IGV4cC5yZXBsYWNlKHN0cmlwU3RyaW5nUkUsIFwiXCIpLm1hdGNoKHByb2hpYml0ZWRLZXl3b3JkUkUpO1xuICAgIGlmIChrZXl3b3JkTWF0Y2gpIHtcbiAgICAgIG1lc3NhZ2UgPSBgYXZvaWQgdXNpbmcgSmF2YVNjcmlwdCBrZXl3b3JkIGFzIHByb3BlcnR5IG5hbWU6IFwiJHtrZXl3b3JkTWF0Y2hbMF19XCJgO1xuICAgIH1cbiAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICBjcmVhdGVDb21waWxlckVycm9yKFxuICAgICAgICA0NSxcbiAgICAgICAgbm9kZS5sb2MsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgbWVzc2FnZVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdHJhbnNmb3JtRXhwcmVzc2lvbiA9IChub2RlLCBjb250ZXh0KSA9PiB7XG4gIGlmIChub2RlLnR5cGUgPT09IDUpIHtcbiAgICBub2RlLmNvbnRlbnQgPSBwcm9jZXNzRXhwcmVzc2lvbihcbiAgICAgIG5vZGUuY29udGVudCxcbiAgICAgIGNvbnRleHRcbiAgICApO1xuICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gMSkge1xuICAgIGNvbnN0IG1lbW8gPSBmaW5kRGlyKG5vZGUsIFwibWVtb1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUucHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpciA9IG5vZGUucHJvcHNbaV07XG4gICAgICBpZiAoZGlyLnR5cGUgPT09IDcgJiYgZGlyLm5hbWUgIT09IFwiZm9yXCIpIHtcbiAgICAgICAgY29uc3QgZXhwID0gZGlyLmV4cDtcbiAgICAgICAgY29uc3QgYXJnID0gZGlyLmFyZztcbiAgICAgICAgaWYgKGV4cCAmJiBleHAudHlwZSA9PT0gNCAmJiAhKGRpci5uYW1lID09PSBcIm9uXCIgJiYgYXJnKSAmJiAvLyBrZXkgaGFzIGJlZW4gcHJvY2Vzc2VkIGluIHRyYW5zZm9ybUZvcih2TWVtbyArIHZGb3IpXG4gICAgICAgICEobWVtbyAmJiBhcmcgJiYgYXJnLnR5cGUgPT09IDQgJiYgYXJnLmNvbnRlbnQgPT09IFwia2V5XCIpKSB7XG4gICAgICAgICAgZGlyLmV4cCA9IHByb2Nlc3NFeHByZXNzaW9uKFxuICAgICAgICAgICAgZXhwLFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIC8vIHNsb3QgYXJncyBtdXN0IGJlIHByb2Nlc3NlZCBhcyBmdW5jdGlvbiBwYXJhbXNcbiAgICAgICAgICAgIGRpci5uYW1lID09PSBcInNsb3RcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZyAmJiBhcmcudHlwZSA9PT0gNCAmJiAhYXJnLmlzU3RhdGljKSB7XG4gICAgICAgICAgZGlyLmFyZyA9IHByb2Nlc3NFeHByZXNzaW9uKGFyZywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBwcm9jZXNzRXhwcmVzc2lvbihub2RlLCBjb250ZXh0LCBhc1BhcmFtcyA9IGZhbHNlLCBhc1Jhd1N0YXRlbWVudHMgPSBmYWxzZSwgbG9jYWxWYXJzID0gT2JqZWN0LmNyZWF0ZShjb250ZXh0LmlkZW50aWZpZXJzKSkge1xuICB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHZhbGlkYXRlQnJvd3NlckV4cHJlc3Npb24obm9kZSwgY29udGV4dCwgYXNQYXJhbXMsIGFzUmF3U3RhdGVtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlFeHByZXNzaW9uKGV4cCkge1xuICBpZiAoaXNTdHJpbmcoZXhwKSkge1xuICAgIHJldHVybiBleHA7XG4gIH0gZWxzZSBpZiAoZXhwLnR5cGUgPT09IDQpIHtcbiAgICByZXR1cm4gZXhwLmNvbnRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cC5jaGlsZHJlbi5tYXAoc3RyaW5naWZ5RXhwcmVzc2lvbikuam9pbihcIlwiKTtcbiAgfVxufVxuXG5jb25zdCB0cmFuc2Zvcm1JZiA9IGNyZWF0ZVN0cnVjdHVyYWxEaXJlY3RpdmVUcmFuc2Zvcm0oXG4gIC9eKGlmfGVsc2V8ZWxzZS1pZikkLyxcbiAgKG5vZGUsIGRpciwgY29udGV4dCkgPT4ge1xuICAgIHJldHVybiBwcm9jZXNzSWYobm9kZSwgZGlyLCBjb250ZXh0LCAoaWZOb2RlLCBicmFuY2gsIGlzUm9vdCkgPT4ge1xuICAgICAgY29uc3Qgc2libGluZ3MgPSBjb250ZXh0LnBhcmVudC5jaGlsZHJlbjtcbiAgICAgIGxldCBpID0gc2libGluZ3MuaW5kZXhPZihpZk5vZGUpO1xuICAgICAgbGV0IGtleSA9IDA7XG4gICAgICB3aGlsZSAoaS0tID49IDApIHtcbiAgICAgICAgY29uc3Qgc2libGluZyA9IHNpYmxpbmdzW2ldO1xuICAgICAgICBpZiAoc2libGluZyAmJiBzaWJsaW5nLnR5cGUgPT09IDkpIHtcbiAgICAgICAgICBrZXkgKz0gc2libGluZy5icmFuY2hlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICBpZk5vZGUuY29kZWdlbk5vZGUgPSBjcmVhdGVDb2RlZ2VuTm9kZUZvckJyYW5jaChcbiAgICAgICAgICAgIGJyYW5jaCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcmVudENvbmRpdGlvbiA9IGdldFBhcmVudENvbmRpdGlvbihpZk5vZGUuY29kZWdlbk5vZGUpO1xuICAgICAgICAgIHBhcmVudENvbmRpdGlvbi5hbHRlcm5hdGUgPSBjcmVhdGVDb2RlZ2VuTm9kZUZvckJyYW5jaChcbiAgICAgICAgICAgIGJyYW5jaCxcbiAgICAgICAgICAgIGtleSArIGlmTm9kZS5icmFuY2hlcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbik7XG5mdW5jdGlvbiBwcm9jZXNzSWYobm9kZSwgZGlyLCBjb250ZXh0LCBwcm9jZXNzQ29kZWdlbikge1xuICBpZiAoZGlyLm5hbWUgIT09IFwiZWxzZVwiICYmICghZGlyLmV4cCB8fCAhZGlyLmV4cC5jb250ZW50LnRyaW0oKSkpIHtcbiAgICBjb25zdCBsb2MgPSBkaXIuZXhwID8gZGlyLmV4cC5sb2MgOiBub2RlLmxvYztcbiAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICBjcmVhdGVDb21waWxlckVycm9yKDI4LCBkaXIubG9jKVxuICAgICk7XG4gICAgZGlyLmV4cCA9IGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oYHRydWVgLCBmYWxzZSwgbG9jKTtcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB0cnVlICYmIGRpci5leHApIHtcbiAgICB2YWxpZGF0ZUJyb3dzZXJFeHByZXNzaW9uKGRpci5leHAsIGNvbnRleHQpO1xuICB9XG4gIGlmIChkaXIubmFtZSA9PT0gXCJpZlwiKSB7XG4gICAgY29uc3QgYnJhbmNoID0gY3JlYXRlSWZCcmFuY2gobm9kZSwgZGlyKTtcbiAgICBjb25zdCBpZk5vZGUgPSB7XG4gICAgICB0eXBlOiA5LFxuICAgICAgbG9jOiBjbG9uZUxvYyhub2RlLmxvYyksXG4gICAgICBicmFuY2hlczogW2JyYW5jaF1cbiAgICB9O1xuICAgIGNvbnRleHQucmVwbGFjZU5vZGUoaWZOb2RlKTtcbiAgICBpZiAocHJvY2Vzc0NvZGVnZW4pIHtcbiAgICAgIHJldHVybiBwcm9jZXNzQ29kZWdlbihpZk5vZGUsIGJyYW5jaCwgdHJ1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNpYmxpbmdzID0gY29udGV4dC5wYXJlbnQuY2hpbGRyZW47XG4gICAgY29uc3QgY29tbWVudHMgPSBbXTtcbiAgICBsZXQgaSA9IHNpYmxpbmdzLmluZGV4T2Yobm9kZSk7XG4gICAgd2hpbGUgKGktLSA+PSAtMSkge1xuICAgICAgY29uc3Qgc2libGluZyA9IHNpYmxpbmdzW2ldO1xuICAgICAgaWYgKHNpYmxpbmcgJiYgc2libGluZy50eXBlID09PSAzKSB7XG4gICAgICAgIGNvbnRleHQucmVtb3ZlTm9kZShzaWJsaW5nKTtcbiAgICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjb21tZW50cy51bnNoaWZ0KHNpYmxpbmcpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaWJsaW5nICYmIHNpYmxpbmcudHlwZSA9PT0gMiAmJiAhc2libGluZy5jb250ZW50LnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgICAgY29udGV4dC5yZW1vdmVOb2RlKHNpYmxpbmcpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaWJsaW5nICYmIHNpYmxpbmcudHlwZSA9PT0gOSkge1xuICAgICAgICBpZiAoZGlyLm5hbWUgPT09IFwiZWxzZS1pZlwiICYmIHNpYmxpbmcuYnJhbmNoZXNbc2libGluZy5icmFuY2hlcy5sZW5ndGggLSAxXS5jb25kaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoMzAsIG5vZGUubG9jKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5yZW1vdmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGNyZWF0ZUlmQnJhbmNoKG5vZGUsIGRpcik7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNvbW1lbnRzLmxlbmd0aCAmJiAvLyAjMzYxOSBpZ25vcmUgY29tbWVudHMgaWYgdGhlIHYtaWYgaXMgZGlyZWN0IGNoaWxkIG9mIDx0cmFuc2l0aW9uPlxuICAgICAgICAhKGNvbnRleHQucGFyZW50ICYmIGNvbnRleHQucGFyZW50LnR5cGUgPT09IDEgJiYgKGNvbnRleHQucGFyZW50LnRhZyA9PT0gXCJ0cmFuc2l0aW9uXCIgfHwgY29udGV4dC5wYXJlbnQudGFnID09PSBcIlRyYW5zaXRpb25cIikpKSB7XG4gICAgICAgICAgYnJhbmNoLmNoaWxkcmVuID0gWy4uLmNvbW1lbnRzLCAuLi5icmFuY2guY2hpbGRyZW5dO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYnJhbmNoLnVzZXJLZXk7XG4gICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgc2libGluZy5icmFuY2hlcy5mb3JFYWNoKCh7IHVzZXJLZXkgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNTYW1lS2V5KHVzZXJLZXksIGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICAgICAgICAgICAgICBjcmVhdGVDb21waWxlckVycm9yKFxuICAgICAgICAgICAgICAgICAgICAyOSxcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLnVzZXJLZXkubG9jXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNpYmxpbmcuYnJhbmNoZXMucHVzaChicmFuY2gpO1xuICAgICAgICBjb25zdCBvbkV4aXQgPSBwcm9jZXNzQ29kZWdlbiAmJiBwcm9jZXNzQ29kZWdlbihzaWJsaW5nLCBicmFuY2gsIGZhbHNlKTtcbiAgICAgICAgdHJhdmVyc2VOb2RlKGJyYW5jaCwgY29udGV4dCk7XG4gICAgICAgIGlmIChvbkV4aXQpIG9uRXhpdCgpO1xuICAgICAgICBjb250ZXh0LmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgICBjcmVhdGVDb21waWxlckVycm9yKDMwLCBub2RlLmxvYylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlSWZCcmFuY2gobm9kZSwgZGlyKSB7XG4gIGNvbnN0IGlzVGVtcGxhdGVJZiA9IG5vZGUudGFnVHlwZSA9PT0gMztcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAxMCxcbiAgICBsb2M6IG5vZGUubG9jLFxuICAgIGNvbmRpdGlvbjogZGlyLm5hbWUgPT09IFwiZWxzZVwiID8gdm9pZCAwIDogZGlyLmV4cCxcbiAgICBjaGlsZHJlbjogaXNUZW1wbGF0ZUlmICYmICFmaW5kRGlyKG5vZGUsIFwiZm9yXCIpID8gbm9kZS5jaGlsZHJlbiA6IFtub2RlXSxcbiAgICB1c2VyS2V5OiBmaW5kUHJvcChub2RlLCBga2V5YCksXG4gICAgaXNUZW1wbGF0ZUlmXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVDb2RlZ2VuTm9kZUZvckJyYW5jaChicmFuY2gsIGtleUluZGV4LCBjb250ZXh0KSB7XG4gIGlmIChicmFuY2guY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbmRpdGlvbmFsRXhwcmVzc2lvbihcbiAgICAgIGJyYW5jaC5jb25kaXRpb24sXG4gICAgICBjcmVhdGVDaGlsZHJlbkNvZGVnZW5Ob2RlKGJyYW5jaCwga2V5SW5kZXgsIGNvbnRleHQpLFxuICAgICAgLy8gbWFrZSBzdXJlIHRvIHBhc3MgaW4gYXNCbG9jazogdHJ1ZSBzbyB0aGF0IHRoZSBjb21tZW50IG5vZGUgY2FsbFxuICAgICAgLy8gY2xvc2VzIHRoZSBjdXJyZW50IGJsb2NrLlxuICAgICAgY3JlYXRlQ2FsbEV4cHJlc3Npb24oY29udGV4dC5oZWxwZXIoQ1JFQVRFX0NPTU1FTlQpLCBbXG4gICAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyAnXCJ2LWlmXCInIDogJ1wiXCInLFxuICAgICAgICBcInRydWVcIlxuICAgICAgXSlcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVDaGlsZHJlbkNvZGVnZW5Ob2RlKGJyYW5jaCwga2V5SW5kZXgsIGNvbnRleHQpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVDaGlsZHJlbkNvZGVnZW5Ob2RlKGJyYW5jaCwga2V5SW5kZXgsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBoZWxwZXIgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IGtleVByb3BlcnR5ID0gY3JlYXRlT2JqZWN0UHJvcGVydHkoXG4gICAgYGtleWAsXG4gICAgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcbiAgICAgIGAke2tleUluZGV4fWAsXG4gICAgICBmYWxzZSxcbiAgICAgIGxvY1N0dWIsXG4gICAgICAyXG4gICAgKVxuICApO1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBicmFuY2g7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBjaGlsZHJlblswXTtcbiAgY29uc3QgbmVlZEZyYWdtZW50V3JhcHBlciA9IGNoaWxkcmVuLmxlbmd0aCAhPT0gMSB8fCBmaXJzdENoaWxkLnR5cGUgIT09IDE7XG4gIGlmIChuZWVkRnJhZ21lbnRXcmFwcGVyKSB7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBmaXJzdENoaWxkLnR5cGUgPT09IDExKSB7XG4gICAgICBjb25zdCB2bm9kZUNhbGwgPSBmaXJzdENoaWxkLmNvZGVnZW5Ob2RlO1xuICAgICAgaW5qZWN0UHJvcCh2bm9kZUNhbGwsIGtleVByb3BlcnR5LCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB2bm9kZUNhbGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRjaEZsYWcgPSA2NDtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFicmFuY2guaXNUZW1wbGF0ZUlmICYmIGNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy50eXBlICE9PSAzKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcGF0Y2hGbGFnIHw9IDIwNDg7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlVk5vZGVDYWxsKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBoZWxwZXIoRlJBR01FTlQpLFxuICAgICAgICBjcmVhdGVPYmplY3RFeHByZXNzaW9uKFtrZXlQcm9wZXJ0eV0pLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgcGF0Y2hGbGFnLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBicmFuY2gubG9jXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXQgPSBmaXJzdENoaWxkLmNvZGVnZW5Ob2RlO1xuICAgIGNvbnN0IHZub2RlQ2FsbCA9IGdldE1lbW9lZFZOb2RlQ2FsbChyZXQpO1xuICAgIGlmICh2bm9kZUNhbGwudHlwZSA9PT0gMTMpIHtcbiAgICAgIGNvbnZlcnRUb0Jsb2NrKHZub2RlQ2FsbCwgY29udGV4dCk7XG4gICAgfVxuICAgIGluamVjdFByb3Aodm5vZGVDYWxsLCBrZXlQcm9wZXJ0eSwgY29udGV4dCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuZnVuY3Rpb24gaXNTYW1lS2V5KGEsIGIpIHtcbiAgaWYgKCFhIHx8IGEudHlwZSAhPT0gYi50eXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhLnR5cGUgPT09IDYpIHtcbiAgICBpZiAoYS52YWx1ZS5jb250ZW50ICE9PSBiLnZhbHVlLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZXhwID0gYS5leHA7XG4gICAgY29uc3QgYnJhbmNoRXhwID0gYi5leHA7XG4gICAgaWYgKGV4cC50eXBlICE9PSBicmFuY2hFeHAudHlwZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZXhwLnR5cGUgIT09IDQgfHwgZXhwLmlzU3RhdGljICE9PSBicmFuY2hFeHAuaXNTdGF0aWMgfHwgZXhwLmNvbnRlbnQgIT09IGJyYW5jaEV4cC5jb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50Q29uZGl0aW9uKG5vZGUpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAxOSkge1xuICAgICAgaWYgKG5vZGUuYWx0ZXJuYXRlLnR5cGUgPT09IDE5KSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmFsdGVybmF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAyMCkge1xuICAgICAgbm9kZSA9IG5vZGUudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybUJpbmQgPSAoZGlyLCBfbm9kZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IG1vZGlmaWVycywgbG9jIH0gPSBkaXI7XG4gIGNvbnN0IGFyZyA9IGRpci5hcmc7XG4gIGxldCB7IGV4cCB9ID0gZGlyO1xuICBpZiAoZXhwICYmIGV4cC50eXBlID09PSA0ICYmICFleHAuY29udGVudC50cmltKCkpIHtcbiAgICB7XG4gICAgICBleHAgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGlmICghZXhwKSB7XG4gICAgaWYgKGFyZy50eXBlICE9PSA0IHx8ICFhcmcuaXNTdGF0aWMpIHtcbiAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgY3JlYXRlQ29tcGlsZXJFcnJvcihcbiAgICAgICAgICA1MixcbiAgICAgICAgICBhcmcubG9jXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogW1xuICAgICAgICAgIGNyZWF0ZU9iamVjdFByb3BlcnR5KGFyZywgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcIlwiLCB0cnVlLCBsb2MpKVxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH1cbiAgICB0cmFuc2Zvcm1CaW5kU2hvcnRoYW5kKGRpcik7XG4gICAgZXhwID0gZGlyLmV4cDtcbiAgfVxuICBpZiAoYXJnLnR5cGUgIT09IDQpIHtcbiAgICBhcmcuY2hpbGRyZW4udW5zaGlmdChgKGApO1xuICAgIGFyZy5jaGlsZHJlbi5wdXNoKGApIHx8IFwiXCJgKTtcbiAgfSBlbHNlIGlmICghYXJnLmlzU3RhdGljKSB7XG4gICAgYXJnLmNvbnRlbnQgPSBhcmcuY29udGVudCA/IGAke2FyZy5jb250ZW50fSB8fCBcIlwiYCA6IGBcIlwiYDtcbiAgfVxuICBpZiAobW9kaWZpZXJzLnNvbWUoKG1vZCkgPT4gbW9kLmNvbnRlbnQgPT09IFwiY2FtZWxcIikpIHtcbiAgICBpZiAoYXJnLnR5cGUgPT09IDQpIHtcbiAgICAgIGlmIChhcmcuaXNTdGF0aWMpIHtcbiAgICAgICAgYXJnLmNvbnRlbnQgPSBjYW1lbGl6ZShhcmcuY29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmcuY29udGVudCA9IGAke2NvbnRleHQuaGVscGVyU3RyaW5nKENBTUVMSVpFKX0oJHthcmcuY29udGVudH0pYDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJnLmNoaWxkcmVuLnVuc2hpZnQoYCR7Y29udGV4dC5oZWxwZXJTdHJpbmcoQ0FNRUxJWkUpfShgKTtcbiAgICAgIGFyZy5jaGlsZHJlbi5wdXNoKGApYCk7XG4gICAgfVxuICB9XG4gIGlmICghY29udGV4dC5pblNTUikge1xuICAgIGlmIChtb2RpZmllcnMuc29tZSgobW9kKSA9PiBtb2QuY29udGVudCA9PT0gXCJwcm9wXCIpKSB7XG4gICAgICBpbmplY3RQcmVmaXgoYXJnLCBcIi5cIik7XG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMuc29tZSgobW9kKSA9PiBtb2QuY29udGVudCA9PT0gXCJhdHRyXCIpKSB7XG4gICAgICBpbmplY3RQcmVmaXgoYXJnLCBcIl5cIik7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IFtjcmVhdGVPYmplY3RQcm9wZXJ0eShhcmcsIGV4cCldXG4gIH07XG59O1xuY29uc3QgdHJhbnNmb3JtQmluZFNob3J0aGFuZCA9IChkaXIsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgYXJnID0gZGlyLmFyZztcbiAgY29uc3QgcHJvcE5hbWUgPSBjYW1lbGl6ZShhcmcuY29udGVudCk7XG4gIGRpci5leHAgPSBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKHByb3BOYW1lLCBmYWxzZSwgYXJnLmxvYyk7XG59O1xuY29uc3QgaW5qZWN0UHJlZml4ID0gKGFyZywgcHJlZml4KSA9PiB7XG4gIGlmIChhcmcudHlwZSA9PT0gNCkge1xuICAgIGlmIChhcmcuaXNTdGF0aWMpIHtcbiAgICAgIGFyZy5jb250ZW50ID0gcHJlZml4ICsgYXJnLmNvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZy5jb250ZW50ID0gYFxcYCR7cHJlZml4fVxcJHske2FyZy5jb250ZW50fX1cXGBgO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhcmcuY2hpbGRyZW4udW5zaGlmdChgJyR7cHJlZml4fScgKyAoYCk7XG4gICAgYXJnLmNoaWxkcmVuLnB1c2goYClgKTtcbiAgfVxufTtcblxuY29uc3QgdHJhbnNmb3JtRm9yID0gY3JlYXRlU3RydWN0dXJhbERpcmVjdGl2ZVRyYW5zZm9ybShcbiAgXCJmb3JcIixcbiAgKG5vZGUsIGRpciwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgaGVscGVyLCByZW1vdmVIZWxwZXIgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIHByb2Nlc3NGb3Iobm9kZSwgZGlyLCBjb250ZXh0LCAoZm9yTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcmVuZGVyRXhwID0gY3JlYXRlQ2FsbEV4cHJlc3Npb24oaGVscGVyKFJFTkRFUl9MSVNUKSwgW1xuICAgICAgICBmb3JOb2RlLnNvdXJjZVxuICAgICAgXSk7XG4gICAgICBjb25zdCBpc1RlbXBsYXRlID0gaXNUZW1wbGF0ZU5vZGUobm9kZSk7XG4gICAgICBjb25zdCBtZW1vID0gZmluZERpcihub2RlLCBcIm1lbW9cIik7XG4gICAgICBjb25zdCBrZXlQcm9wID0gZmluZFByb3Aobm9kZSwgYGtleWAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIGNvbnN0IGlzRGlyS2V5ID0ga2V5UHJvcCAmJiBrZXlQcm9wLnR5cGUgPT09IDc7XG4gICAgICBpZiAoaXNEaXJLZXkgJiYgIWtleVByb3AuZXhwKSB7XG4gICAgICAgIHRyYW5zZm9ybUJpbmRTaG9ydGhhbmQoa2V5UHJvcCk7XG4gICAgICB9XG4gICAgICBsZXQga2V5RXhwID0ga2V5UHJvcCAmJiAoa2V5UHJvcC50eXBlID09PSA2ID8ga2V5UHJvcC52YWx1ZSA/IGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oa2V5UHJvcC52YWx1ZS5jb250ZW50LCB0cnVlKSA6IHZvaWQgMCA6IGtleVByb3AuZXhwKTtcbiAgICAgIGNvbnN0IGtleVByb3BlcnR5ID0ga2V5UHJvcCAmJiBrZXlFeHAgPyBjcmVhdGVPYmplY3RQcm9wZXJ0eShga2V5YCwga2V5RXhwKSA6IG51bGw7XG4gICAgICBjb25zdCBpc1N0YWJsZUZyYWdtZW50ID0gZm9yTm9kZS5zb3VyY2UudHlwZSA9PT0gNCAmJiBmb3JOb2RlLnNvdXJjZS5jb25zdFR5cGUgPiAwO1xuICAgICAgY29uc3QgZnJhZ21lbnRGbGFnID0gaXNTdGFibGVGcmFnbWVudCA/IDY0IDoga2V5UHJvcCA/IDEyOCA6IDI1NjtcbiAgICAgIGZvck5vZGUuY29kZWdlbk5vZGUgPSBjcmVhdGVWTm9kZUNhbGwoXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGhlbHBlcihGUkFHTUVOVCksXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgcmVuZGVyRXhwLFxuICAgICAgICBmcmFnbWVudEZsYWcsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB0cnVlLFxuICAgICAgICAhaXNTdGFibGVGcmFnbWVudCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIG5vZGUubG9jXG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbGV0IGNoaWxkQmxvY2s7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGZvck5vZGU7XG4gICAgICAgIGlmICgoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkgJiYgaXNUZW1wbGF0ZSkge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4uc29tZSgoYykgPT4ge1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBmaW5kUHJvcChjLCBcImtleVwiKTtcbiAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIDMzLFxuICAgICAgICAgICAgICAgICAgICBrZXkubG9jXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5lZWRGcmFnbWVudFdyYXBwZXIgPSBjaGlsZHJlbi5sZW5ndGggIT09IDEgfHwgY2hpbGRyZW5bMF0udHlwZSAhPT0gMTtcbiAgICAgICAgY29uc3Qgc2xvdE91dGxldCA9IGlzU2xvdE91dGxldChub2RlKSA/IG5vZGUgOiBpc1RlbXBsYXRlICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGlzU2xvdE91dGxldChub2RlLmNoaWxkcmVuWzBdKSA/IG5vZGUuY2hpbGRyZW5bMF0gOiBudWxsO1xuICAgICAgICBpZiAoc2xvdE91dGxldCkge1xuICAgICAgICAgIGNoaWxkQmxvY2sgPSBzbG90T3V0bGV0LmNvZGVnZW5Ob2RlO1xuICAgICAgICAgIGlmIChpc1RlbXBsYXRlICYmIGtleVByb3BlcnR5KSB7XG4gICAgICAgICAgICBpbmplY3RQcm9wKGNoaWxkQmxvY2ssIGtleVByb3BlcnR5LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmVlZEZyYWdtZW50V3JhcHBlcikge1xuICAgICAgICAgIGNoaWxkQmxvY2sgPSBjcmVhdGVWTm9kZUNhbGwoXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgaGVscGVyKEZSQUdNRU5UKSxcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID8gY3JlYXRlT2JqZWN0RXhwcmVzc2lvbihba2V5UHJvcGVydHldKSA6IHZvaWQgMCxcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4sXG4gICAgICAgICAgICA2NCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRCbG9jayA9IGNoaWxkcmVuWzBdLmNvZGVnZW5Ob2RlO1xuICAgICAgICAgIGlmIChpc1RlbXBsYXRlICYmIGtleVByb3BlcnR5KSB7XG4gICAgICAgICAgICBpbmplY3RQcm9wKGNoaWxkQmxvY2ssIGtleVByb3BlcnR5LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNoaWxkQmxvY2suaXNCbG9jayAhPT0gIWlzU3RhYmxlRnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZEJsb2NrLmlzQmxvY2spIHtcbiAgICAgICAgICAgICAgcmVtb3ZlSGVscGVyKE9QRU5fQkxPQ0spO1xuICAgICAgICAgICAgICByZW1vdmVIZWxwZXIoXG4gICAgICAgICAgICAgICAgZ2V0Vk5vZGVCbG9ja0hlbHBlcihjb250ZXh0LmluU1NSLCBjaGlsZEJsb2NrLmlzQ29tcG9uZW50KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVtb3ZlSGVscGVyKFxuICAgICAgICAgICAgICAgIGdldFZOb2RlSGVscGVyKGNvbnRleHQuaW5TU1IsIGNoaWxkQmxvY2suaXNDb21wb25lbnQpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoaWxkQmxvY2suaXNCbG9jayA9ICFpc1N0YWJsZUZyYWdtZW50O1xuICAgICAgICAgIGlmIChjaGlsZEJsb2NrLmlzQmxvY2spIHtcbiAgICAgICAgICAgIGhlbHBlcihPUEVOX0JMT0NLKTtcbiAgICAgICAgICAgIGhlbHBlcihnZXRWTm9kZUJsb2NrSGVscGVyKGNvbnRleHQuaW5TU1IsIGNoaWxkQmxvY2suaXNDb21wb25lbnQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVscGVyKGdldFZOb2RlSGVscGVyKGNvbnRleHQuaW5TU1IsIGNoaWxkQmxvY2suaXNDb21wb25lbnQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lbW8pIHtcbiAgICAgICAgICBjb25zdCBsb29wID0gY3JlYXRlRnVuY3Rpb25FeHByZXNzaW9uKFxuICAgICAgICAgICAgY3JlYXRlRm9yTG9vcFBhcmFtcyhmb3JOb2RlLnBhcnNlUmVzdWx0LCBbXG4gICAgICAgICAgICAgIGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oYF9jYWNoZWRgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGxvb3AuYm9keSA9IGNyZWF0ZUJsb2NrU3RhdGVtZW50KFtcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvdW5kRXhwcmVzc2lvbihbYGNvbnN0IF9tZW1vID0gKGAsIG1lbW8uZXhwLCBgKWBdKSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBvdW5kRXhwcmVzc2lvbihbXG4gICAgICAgICAgICAgIGBpZiAoX2NhY2hlZGAsXG4gICAgICAgICAgICAgIC4uLmtleUV4cCA/IFtgICYmIF9jYWNoZWQua2V5ID09PSBgLCBrZXlFeHBdIDogW10sXG4gICAgICAgICAgICAgIGAgJiYgJHtjb250ZXh0LmhlbHBlclN0cmluZyhcbiAgICAgICAgICAgICAgICBJU19NRU1PX1NBTUVcbiAgICAgICAgICAgICAgKX0oX2NhY2hlZCwgX21lbW8pKSByZXR1cm4gX2NhY2hlZGBcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgY3JlYXRlQ29tcG91bmRFeHByZXNzaW9uKFtgY29uc3QgX2l0ZW0gPSBgLCBjaGlsZEJsb2NrXSksXG4gICAgICAgICAgICBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGBfaXRlbS5tZW1vID0gX21lbW9gKSxcbiAgICAgICAgICAgIGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oYHJldHVybiBfaXRlbWApXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgcmVuZGVyRXhwLmFyZ3VtZW50cy5wdXNoKFxuICAgICAgICAgICAgbG9vcCxcbiAgICAgICAgICAgIGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oYF9jYWNoZWApLFxuICAgICAgICAgICAgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihTdHJpbmcoY29udGV4dC5jYWNoZWQubGVuZ3RoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnRleHQuY2FjaGVkLnB1c2gobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVuZGVyRXhwLmFyZ3VtZW50cy5wdXNoKFxuICAgICAgICAgICAgY3JlYXRlRnVuY3Rpb25FeHByZXNzaW9uKFxuICAgICAgICAgICAgICBjcmVhdGVGb3JMb29wUGFyYW1zKGZvck5vZGUucGFyc2VSZXN1bHQpLFxuICAgICAgICAgICAgICBjaGlsZEJsb2NrLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuKTtcbmZ1bmN0aW9uIHByb2Nlc3NGb3Iobm9kZSwgZGlyLCBjb250ZXh0LCBwcm9jZXNzQ29kZWdlbikge1xuICBpZiAoIWRpci5leHApIHtcbiAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICBjcmVhdGVDb21waWxlckVycm9yKDMxLCBkaXIubG9jKVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcnNlUmVzdWx0ID0gZGlyLmZvclBhcnNlUmVzdWx0O1xuICBpZiAoIXBhcnNlUmVzdWx0KSB7XG4gICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgY3JlYXRlQ29tcGlsZXJFcnJvcigzMiwgZGlyLmxvYylcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICBmaW5hbGl6ZUZvclBhcnNlUmVzdWx0KHBhcnNlUmVzdWx0LCBjb250ZXh0KTtcbiAgY29uc3QgeyBhZGRJZGVudGlmaWVycywgcmVtb3ZlSWRlbnRpZmllcnMsIHNjb3BlcyB9ID0gY29udGV4dDtcbiAgY29uc3QgeyBzb3VyY2UsIHZhbHVlLCBrZXksIGluZGV4IH0gPSBwYXJzZVJlc3VsdDtcbiAgY29uc3QgZm9yTm9kZSA9IHtcbiAgICB0eXBlOiAxMSxcbiAgICBsb2M6IGRpci5sb2MsXG4gICAgc291cmNlLFxuICAgIHZhbHVlQWxpYXM6IHZhbHVlLFxuICAgIGtleUFsaWFzOiBrZXksXG4gICAgb2JqZWN0SW5kZXhBbGlhczogaW5kZXgsXG4gICAgcGFyc2VSZXN1bHQsXG4gICAgY2hpbGRyZW46IGlzVGVtcGxhdGVOb2RlKG5vZGUpID8gbm9kZS5jaGlsZHJlbiA6IFtub2RlXVxuICB9O1xuICBjb250ZXh0LnJlcGxhY2VOb2RlKGZvck5vZGUpO1xuICBzY29wZXMudkZvcisrO1xuICBjb25zdCBvbkV4aXQgPSBwcm9jZXNzQ29kZWdlbiAmJiBwcm9jZXNzQ29kZWdlbihmb3JOb2RlKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBzY29wZXMudkZvci0tO1xuICAgIGlmIChvbkV4aXQpIG9uRXhpdCgpO1xuICB9O1xufVxuZnVuY3Rpb24gZmluYWxpemVGb3JQYXJzZVJlc3VsdChyZXN1bHQsIGNvbnRleHQpIHtcbiAgaWYgKHJlc3VsdC5maW5hbGl6ZWQpIHJldHVybjtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgdHJ1ZSkge1xuICAgIHZhbGlkYXRlQnJvd3NlckV4cHJlc3Npb24ocmVzdWx0LnNvdXJjZSwgY29udGV4dCk7XG4gICAgaWYgKHJlc3VsdC5rZXkpIHtcbiAgICAgIHZhbGlkYXRlQnJvd3NlckV4cHJlc3Npb24oXG4gICAgICAgIHJlc3VsdC5rZXksXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQuaW5kZXgpIHtcbiAgICAgIHZhbGlkYXRlQnJvd3NlckV4cHJlc3Npb24oXG4gICAgICAgIHJlc3VsdC5pbmRleCxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgdmFsaWRhdGVCcm93c2VyRXhwcmVzc2lvbihcbiAgICAgICAgcmVzdWx0LnZhbHVlLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXN1bHQuZmluYWxpemVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvckxvb3BQYXJhbXMoeyB2YWx1ZSwga2V5LCBpbmRleCB9LCBtZW1vQXJncyA9IFtdKSB7XG4gIHJldHVybiBjcmVhdGVQYXJhbXNMaXN0KFt2YWx1ZSwga2V5LCBpbmRleCwgLi4ubWVtb0FyZ3NdKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFtc0xpc3QoYXJncykge1xuICBsZXQgaSA9IGFyZ3MubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKGFyZ3NbaV0pIGJyZWFrO1xuICB9XG4gIHJldHVybiBhcmdzLnNsaWNlKDAsIGkgKyAxKS5tYXAoKGFyZywgaTIpID0+IGFyZyB8fCBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGBfYC5yZXBlYXQoaTIgKyAxKSwgZmFsc2UpKTtcbn1cblxuY29uc3QgZGVmYXVsdEZhbGxiYWNrID0gY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihgdW5kZWZpbmVkYCwgZmFsc2UpO1xuY29uc3QgdHJhY2tTbG90U2NvcGVzID0gKG5vZGUsIGNvbnRleHQpID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiAobm9kZS50YWdUeXBlID09PSAxIHx8IG5vZGUudGFnVHlwZSA9PT0gMykpIHtcbiAgICBjb25zdCB2U2xvdCA9IGZpbmREaXIobm9kZSwgXCJzbG90XCIpO1xuICAgIGlmICh2U2xvdCkge1xuICAgICAgdlNsb3QuZXhwO1xuICAgICAgY29udGV4dC5zY29wZXMudlNsb3QrKztcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuc2NvcGVzLnZTbG90LS07XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IHRyYWNrVkZvclNsb3RTY29wZXMgPSAobm9kZSwgY29udGV4dCkgPT4ge1xuICBsZXQgdkZvcjtcbiAgaWYgKGlzVGVtcGxhdGVOb2RlKG5vZGUpICYmIG5vZGUucHJvcHMuc29tZShpc1ZTbG90KSAmJiAodkZvciA9IGZpbmREaXIobm9kZSwgXCJmb3JcIikpKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdkZvci5mb3JQYXJzZVJlc3VsdDtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaW5hbGl6ZUZvclBhcnNlUmVzdWx0KHJlc3VsdCwgY29udGV4dCk7XG4gICAgICBjb25zdCB7IHZhbHVlLCBrZXksIGluZGV4IH0gPSByZXN1bHQ7XG4gICAgICBjb25zdCB7IGFkZElkZW50aWZpZXJzLCByZW1vdmVJZGVudGlmaWVycyB9ID0gY29udGV4dDtcbiAgICAgIHZhbHVlICYmIGFkZElkZW50aWZpZXJzKHZhbHVlKTtcbiAgICAgIGtleSAmJiBhZGRJZGVudGlmaWVycyhrZXkpO1xuICAgICAgaW5kZXggJiYgYWRkSWRlbnRpZmllcnMoaW5kZXgpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdmFsdWUgJiYgcmVtb3ZlSWRlbnRpZmllcnModmFsdWUpO1xuICAgICAgICBrZXkgJiYgcmVtb3ZlSWRlbnRpZmllcnMoa2V5KTtcbiAgICAgICAgaW5kZXggJiYgcmVtb3ZlSWRlbnRpZmllcnMoaW5kZXgpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBidWlsZENsaWVudFNsb3RGbiA9IChwcm9wcywgX3ZGb3JFeHAsIGNoaWxkcmVuLCBsb2MpID0+IGNyZWF0ZUZ1bmN0aW9uRXhwcmVzc2lvbihcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBmYWxzZSxcbiAgdHJ1ZSxcbiAgY2hpbGRyZW4ubGVuZ3RoID8gY2hpbGRyZW5bMF0ubG9jIDogbG9jXG4pO1xuZnVuY3Rpb24gYnVpbGRTbG90cyhub2RlLCBjb250ZXh0LCBidWlsZFNsb3RGbiA9IGJ1aWxkQ2xpZW50U2xvdEZuKSB7XG4gIGNvbnRleHQuaGVscGVyKFdJVEhfQ1RYKTtcbiAgY29uc3QgeyBjaGlsZHJlbiwgbG9jIH0gPSBub2RlO1xuICBjb25zdCBzbG90c1Byb3BlcnRpZXMgPSBbXTtcbiAgY29uc3QgZHluYW1pY1Nsb3RzID0gW107XG4gIGxldCBoYXNEeW5hbWljU2xvdHMgPSBjb250ZXh0LnNjb3Blcy52U2xvdCA+IDAgfHwgY29udGV4dC5zY29wZXMudkZvciA+IDA7XG4gIGNvbnN0IG9uQ29tcG9uZW50U2xvdCA9IGZpbmREaXIobm9kZSwgXCJzbG90XCIsIHRydWUpO1xuICBpZiAob25Db21wb25lbnRTbG90KSB7XG4gICAgY29uc3QgeyBhcmcsIGV4cCB9ID0gb25Db21wb25lbnRTbG90O1xuICAgIGlmIChhcmcgJiYgIWlzU3RhdGljRXhwKGFyZykpIHtcbiAgICAgIGhhc0R5bmFtaWNTbG90cyA9IHRydWU7XG4gICAgfVxuICAgIHNsb3RzUHJvcGVydGllcy5wdXNoKFxuICAgICAgY3JlYXRlT2JqZWN0UHJvcGVydHkoXG4gICAgICAgIGFyZyB8fCBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKFwiZGVmYXVsdFwiLCB0cnVlKSxcbiAgICAgICAgYnVpbGRTbG90Rm4oZXhwLCB2b2lkIDAsIGNoaWxkcmVuLCBsb2MpXG4gICAgICApXG4gICAgKTtcbiAgfVxuICBsZXQgaGFzVGVtcGxhdGVTbG90cyA9IGZhbHNlO1xuICBsZXQgaGFzTmFtZWREZWZhdWx0U2xvdCA9IGZhbHNlO1xuICBjb25zdCBpbXBsaWNpdERlZmF1bHRDaGlsZHJlbiA9IFtdO1xuICBjb25zdCBzZWVuU2xvdE5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgbGV0IGNvbmRpdGlvbmFsQnJhbmNoSW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2xvdEVsZW1lbnQgPSBjaGlsZHJlbltpXTtcbiAgICBsZXQgc2xvdERpcjtcbiAgICBpZiAoIWlzVGVtcGxhdGVOb2RlKHNsb3RFbGVtZW50KSB8fCAhKHNsb3REaXIgPSBmaW5kRGlyKHNsb3RFbGVtZW50LCBcInNsb3RcIiwgdHJ1ZSkpKSB7XG4gICAgICBpZiAoc2xvdEVsZW1lbnQudHlwZSAhPT0gMykge1xuICAgICAgICBpbXBsaWNpdERlZmF1bHRDaGlsZHJlbi5wdXNoKHNsb3RFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAob25Db21wb25lbnRTbG90KSB7XG4gICAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoMzcsIHNsb3REaXIubG9jKVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBoYXNUZW1wbGF0ZVNsb3RzID0gdHJ1ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuOiBzbG90Q2hpbGRyZW4sIGxvYzogc2xvdExvYyB9ID0gc2xvdEVsZW1lbnQ7XG4gICAgY29uc3Qge1xuICAgICAgYXJnOiBzbG90TmFtZSA9IGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oYGRlZmF1bHRgLCB0cnVlKSxcbiAgICAgIGV4cDogc2xvdFByb3BzLFxuICAgICAgbG9jOiBkaXJMb2NcbiAgICB9ID0gc2xvdERpcjtcbiAgICBsZXQgc3RhdGljU2xvdE5hbWU7XG4gICAgaWYgKGlzU3RhdGljRXhwKHNsb3ROYW1lKSkge1xuICAgICAgc3RhdGljU2xvdE5hbWUgPSBzbG90TmFtZSA/IHNsb3ROYW1lLmNvbnRlbnQgOiBgZGVmYXVsdGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc0R5bmFtaWNTbG90cyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZGb3IgPSBmaW5kRGlyKHNsb3RFbGVtZW50LCBcImZvclwiKTtcbiAgICBjb25zdCBzbG90RnVuY3Rpb24gPSBidWlsZFNsb3RGbihzbG90UHJvcHMsIHZGb3IsIHNsb3RDaGlsZHJlbiwgc2xvdExvYyk7XG4gICAgbGV0IHZJZjtcbiAgICBsZXQgdkVsc2U7XG4gICAgaWYgKHZJZiA9IGZpbmREaXIoc2xvdEVsZW1lbnQsIFwiaWZcIikpIHtcbiAgICAgIGhhc0R5bmFtaWNTbG90cyA9IHRydWU7XG4gICAgICBkeW5hbWljU2xvdHMucHVzaChcbiAgICAgICAgY3JlYXRlQ29uZGl0aW9uYWxFeHByZXNzaW9uKFxuICAgICAgICAgIHZJZi5leHAsXG4gICAgICAgICAgYnVpbGREeW5hbWljU2xvdChzbG90TmFtZSwgc2xvdEZ1bmN0aW9uLCBjb25kaXRpb25hbEJyYW5jaEluZGV4KyspLFxuICAgICAgICAgIGRlZmF1bHRGYWxsYmFja1xuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodkVsc2UgPSBmaW5kRGlyKFxuICAgICAgc2xvdEVsZW1lbnQsXG4gICAgICAvXmVsc2UoLWlmKT8kLyxcbiAgICAgIHRydWVcbiAgICAgIC8qIGFsbG93RW1wdHkgKi9cbiAgICApKSB7XG4gICAgICBsZXQgaiA9IGk7XG4gICAgICBsZXQgcHJldjtcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgcHJldiA9IGNoaWxkcmVuW2pdO1xuICAgICAgICBpZiAocHJldi50eXBlICE9PSAzICYmIGlzTm9uV2hpdGVzcGFjZUNvbnRlbnQocHJldikpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByZXYgJiYgaXNUZW1wbGF0ZU5vZGUocHJldikgJiYgZmluZERpcihwcmV2LCAvXihlbHNlLSk/aWYkLykpIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbmFsID0gZHluYW1pY1Nsb3RzW2R5bmFtaWNTbG90cy5sZW5ndGggLSAxXTtcbiAgICAgICAgd2hpbGUgKGNvbmRpdGlvbmFsLmFsdGVybmF0ZS50eXBlID09PSAxOSkge1xuICAgICAgICAgIGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuYWx0ZXJuYXRlO1xuICAgICAgICB9XG4gICAgICAgIGNvbmRpdGlvbmFsLmFsdGVybmF0ZSA9IHZFbHNlLmV4cCA/IGNyZWF0ZUNvbmRpdGlvbmFsRXhwcmVzc2lvbihcbiAgICAgICAgICB2RWxzZS5leHAsXG4gICAgICAgICAgYnVpbGREeW5hbWljU2xvdChcbiAgICAgICAgICAgIHNsb3ROYW1lLFxuICAgICAgICAgICAgc2xvdEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29uZGl0aW9uYWxCcmFuY2hJbmRleCsrXG4gICAgICAgICAgKSxcbiAgICAgICAgICBkZWZhdWx0RmFsbGJhY2tcbiAgICAgICAgKSA6IGJ1aWxkRHluYW1pY1Nsb3Qoc2xvdE5hbWUsIHNsb3RGdW5jdGlvbiwgY29uZGl0aW9uYWxCcmFuY2hJbmRleCsrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgICBjcmVhdGVDb21waWxlckVycm9yKDMwLCB2RWxzZS5sb2MpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2Rm9yKSB7XG4gICAgICBoYXNEeW5hbWljU2xvdHMgPSB0cnVlO1xuICAgICAgY29uc3QgcGFyc2VSZXN1bHQgPSB2Rm9yLmZvclBhcnNlUmVzdWx0O1xuICAgICAgaWYgKHBhcnNlUmVzdWx0KSB7XG4gICAgICAgIGZpbmFsaXplRm9yUGFyc2VSZXN1bHQocGFyc2VSZXN1bHQsIGNvbnRleHQpO1xuICAgICAgICBkeW5hbWljU2xvdHMucHVzaChcbiAgICAgICAgICBjcmVhdGVDYWxsRXhwcmVzc2lvbihjb250ZXh0LmhlbHBlcihSRU5ERVJfTElTVCksIFtcbiAgICAgICAgICAgIHBhcnNlUmVzdWx0LnNvdXJjZSxcbiAgICAgICAgICAgIGNyZWF0ZUZ1bmN0aW9uRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgY3JlYXRlRm9yTG9vcFBhcmFtcyhwYXJzZVJlc3VsdCksXG4gICAgICAgICAgICAgIGJ1aWxkRHluYW1pY1Nsb3Qoc2xvdE5hbWUsIHNsb3RGdW5jdGlvbiksXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoXG4gICAgICAgICAgICAzMixcbiAgICAgICAgICAgIHZGb3IubG9jXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RhdGljU2xvdE5hbWUpIHtcbiAgICAgICAgaWYgKHNlZW5TbG90TmFtZXMuaGFzKHN0YXRpY1Nsb3ROYW1lKSkge1xuICAgICAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoXG4gICAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgICBkaXJMb2NcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHNlZW5TbG90TmFtZXMuYWRkKHN0YXRpY1Nsb3ROYW1lKTtcbiAgICAgICAgaWYgKHN0YXRpY1Nsb3ROYW1lID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICAgIGhhc05hbWVkRGVmYXVsdFNsb3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzbG90c1Byb3BlcnRpZXMucHVzaChjcmVhdGVPYmplY3RQcm9wZXJ0eShzbG90TmFtZSwgc2xvdEZ1bmN0aW9uKSk7XG4gICAgfVxuICB9XG4gIGlmICghb25Db21wb25lbnRTbG90KSB7XG4gICAgY29uc3QgYnVpbGREZWZhdWx0U2xvdFByb3BlcnR5ID0gKHByb3BzLCBjaGlsZHJlbjIpID0+IHtcbiAgICAgIGNvbnN0IGZuID0gYnVpbGRTbG90Rm4ocHJvcHMsIHZvaWQgMCwgY2hpbGRyZW4yLCBsb2MpO1xuICAgICAgaWYgKGNvbnRleHQuY29tcGF0Q29uZmlnKSB7XG4gICAgICAgIGZuLmlzTm9uU2NvcGVkU2xvdCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlT2JqZWN0UHJvcGVydHkoYGRlZmF1bHRgLCBmbik7XG4gICAgfTtcbiAgICBpZiAoIWhhc1RlbXBsYXRlU2xvdHMpIHtcbiAgICAgIHNsb3RzUHJvcGVydGllcy5wdXNoKGJ1aWxkRGVmYXVsdFNsb3RQcm9wZXJ0eSh2b2lkIDAsIGNoaWxkcmVuKSk7XG4gICAgfSBlbHNlIGlmIChpbXBsaWNpdERlZmF1bHRDaGlsZHJlbi5sZW5ndGggJiYgLy8gIzM3NjZcbiAgICAvLyB3aXRoIHdoaXRlc3BhY2U6ICdwcmVzZXJ2ZScsIHdoaXRlc3BhY2VzIGJldHdlZW4gc2xvdHMgd2lsbCBlbmQgdXAgaW5cbiAgICAvLyBpbXBsaWNpdERlZmF1bHRDaGlsZHJlbi4gSWdub3JlIGlmIGFsbCBpbXBsaWNpdCBjaGlsZHJlbiBhcmUgd2hpdGVzcGFjZXMuXG4gICAgaW1wbGljaXREZWZhdWx0Q2hpbGRyZW4uc29tZSgobm9kZTIpID0+IGlzTm9uV2hpdGVzcGFjZUNvbnRlbnQobm9kZTIpKSkge1xuICAgICAgaWYgKGhhc05hbWVkRGVmYXVsdFNsb3QpIHtcbiAgICAgICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoXG4gICAgICAgICAgICAzOSxcbiAgICAgICAgICAgIGltcGxpY2l0RGVmYXVsdENoaWxkcmVuWzBdLmxvY1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3RzUHJvcGVydGllcy5wdXNoKFxuICAgICAgICAgIGJ1aWxkRGVmYXVsdFNsb3RQcm9wZXJ0eSh2b2lkIDAsIGltcGxpY2l0RGVmYXVsdENoaWxkcmVuKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBzbG90RmxhZyA9IGhhc0R5bmFtaWNTbG90cyA/IDIgOiBoYXNGb3J3YXJkZWRTbG90cyhub2RlLmNoaWxkcmVuKSA/IDMgOiAxO1xuICBsZXQgc2xvdHMgPSBjcmVhdGVPYmplY3RFeHByZXNzaW9uKFxuICAgIHNsb3RzUHJvcGVydGllcy5jb25jYXQoXG4gICAgICBjcmVhdGVPYmplY3RQcm9wZXJ0eShcbiAgICAgICAgYF9gLFxuICAgICAgICAvLyAyID0gY29tcGlsZWQgYnV0IGR5bmFtaWMgPSBjYW4gc2tpcCBub3JtYWxpemF0aW9uLCBidXQgbXVzdCBydW4gZGlmZlxuICAgICAgICAvLyAxID0gY29tcGlsZWQgYW5kIHN0YXRpYyA9IGNhbiBza2lwIG5vcm1hbGl6YXRpb24gQU5EIGRpZmYgYXMgb3B0aW1pemVkXG4gICAgICAgIGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oXG4gICAgICAgICAgc2xvdEZsYWcgKyAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGAgLyogJHtzbG90RmxhZ3NUZXh0W3Nsb3RGbGFnXX0gKi9gIDogYGApLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApLFxuICAgIGxvY1xuICApO1xuICBpZiAoZHluYW1pY1Nsb3RzLmxlbmd0aCkge1xuICAgIHNsb3RzID0gY3JlYXRlQ2FsbEV4cHJlc3Npb24oY29udGV4dC5oZWxwZXIoQ1JFQVRFX1NMT1RTKSwgW1xuICAgICAgc2xvdHMsXG4gICAgICBjcmVhdGVBcnJheUV4cHJlc3Npb24oZHluYW1pY1Nsb3RzKVxuICAgIF0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2xvdHMsXG4gICAgaGFzRHluYW1pY1Nsb3RzXG4gIH07XG59XG5mdW5jdGlvbiBidWlsZER5bmFtaWNTbG90KG5hbWUsIGZuLCBpbmRleCkge1xuICBjb25zdCBwcm9wcyA9IFtcbiAgICBjcmVhdGVPYmplY3RQcm9wZXJ0eShgbmFtZWAsIG5hbWUpLFxuICAgIGNyZWF0ZU9iamVjdFByb3BlcnR5KGBmbmAsIGZuKVxuICBdO1xuICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgIHByb3BzLnB1c2goXG4gICAgICBjcmVhdGVPYmplY3RQcm9wZXJ0eShga2V5YCwgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihTdHJpbmcoaW5kZXgpLCB0cnVlKSlcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGVPYmplY3RFeHByZXNzaW9uKHByb3BzKTtcbn1cbmZ1bmN0aW9uIGhhc0ZvcndhcmRlZFNsb3RzKGNoaWxkcmVuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIHN3aXRjaCAoY2hpbGQudHlwZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZiAoY2hpbGQudGFnVHlwZSA9PT0gMiB8fCBoYXNGb3J3YXJkZWRTbG90cyhjaGlsZC5jaGlsZHJlbikpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaWYgKGhhc0ZvcndhcmRlZFNsb3RzKGNoaWxkLmJyYW5jaGVzKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGlmIChoYXNGb3J3YXJkZWRTbG90cyhjaGlsZC5jaGlsZHJlbikpIHJldHVybiB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNOb25XaGl0ZXNwYWNlQ29udGVudChub2RlKSB7XG4gIGlmIChub2RlLnR5cGUgIT09IDIgJiYgbm9kZS50eXBlICE9PSAxMilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gMiA/ICEhbm9kZS5jb250ZW50LnRyaW0oKSA6IGlzTm9uV2hpdGVzcGFjZUNvbnRlbnQobm9kZS5jb250ZW50KTtcbn1cblxuY29uc3QgZGlyZWN0aXZlSW1wb3J0TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1FbGVtZW50ID0gKG5vZGUsIGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1FbGVtZW50KCkge1xuICAgIG5vZGUgPSBjb250ZXh0LmN1cnJlbnROb2RlO1xuICAgIGlmICghKG5vZGUudHlwZSA9PT0gMSAmJiAobm9kZS50YWdUeXBlID09PSAwIHx8IG5vZGUudGFnVHlwZSA9PT0gMSkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgdGFnLCBwcm9wcyB9ID0gbm9kZTtcbiAgICBjb25zdCBpc0NvbXBvbmVudCA9IG5vZGUudGFnVHlwZSA9PT0gMTtcbiAgICBsZXQgdm5vZGVUYWcgPSBpc0NvbXBvbmVudCA/IHJlc29sdmVDb21wb25lbnRUeXBlKG5vZGUsIGNvbnRleHQpIDogYFwiJHt0YWd9XCJgO1xuICAgIGNvbnN0IGlzRHluYW1pY0NvbXBvbmVudCA9IGlzT2JqZWN0KHZub2RlVGFnKSAmJiB2bm9kZVRhZy5jYWxsZWUgPT09IFJFU09MVkVfRFlOQU1JQ19DT01QT05FTlQ7XG4gICAgbGV0IHZub2RlUHJvcHM7XG4gICAgbGV0IHZub2RlQ2hpbGRyZW47XG4gICAgbGV0IHBhdGNoRmxhZyA9IDA7XG4gICAgbGV0IHZub2RlRHluYW1pY1Byb3BzO1xuICAgIGxldCBkeW5hbWljUHJvcE5hbWVzO1xuICAgIGxldCB2bm9kZURpcmVjdGl2ZXM7XG4gICAgbGV0IHNob3VsZFVzZUJsb2NrID0gKFxuICAgICAgLy8gZHluYW1pYyBjb21wb25lbnQgbWF5IHJlc29sdmUgdG8gcGxhaW4gZWxlbWVudHNcbiAgICAgIGlzRHluYW1pY0NvbXBvbmVudCB8fCB2bm9kZVRhZyA9PT0gVEVMRVBPUlQgfHwgdm5vZGVUYWcgPT09IFNVU1BFTlNFIHx8ICFpc0NvbXBvbmVudCAmJiAvLyA8c3ZnPiBhbmQgPGZvcmVpZ25PYmplY3Q+IG11c3QgYmUgZm9yY2VkIGludG8gYmxvY2tzIHNvIHRoYXQgYmxvY2tcbiAgICAgIC8vIHVwZGF0ZXMgaW5zaWRlIGdldCBwcm9wZXIgaXNTVkcgZmxhZyBhdCBydW50aW1lLiAoIzYzOSwgIzY0MylcbiAgICAgIC8vIFRoaXMgaXMgdGVjaG5pY2FsbHkgd2ViLXNwZWNpZmljLCBidXQgc3BsaXR0aW5nIHRoZSBsb2dpYyBvdXQgb2YgY29yZVxuICAgICAgLy8gbGVhZHMgdG8gdG9vIG11Y2ggdW5uZWNlc3NhcnkgY29tcGxleGl0eS5cbiAgICAgICh0YWcgPT09IFwic3ZnXCIgfHwgdGFnID09PSBcImZvcmVpZ25PYmplY3RcIiB8fCB0YWcgPT09IFwibWF0aFwiKVxuICAgICk7XG4gICAgaWYgKHByb3BzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHByb3BzQnVpbGRSZXN1bHQgPSBidWlsZFByb3BzKFxuICAgICAgICBub2RlLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIGlzQ29tcG9uZW50LFxuICAgICAgICBpc0R5bmFtaWNDb21wb25lbnRcbiAgICAgICk7XG4gICAgICB2bm9kZVByb3BzID0gcHJvcHNCdWlsZFJlc3VsdC5wcm9wcztcbiAgICAgIHBhdGNoRmxhZyA9IHByb3BzQnVpbGRSZXN1bHQucGF0Y2hGbGFnO1xuICAgICAgZHluYW1pY1Byb3BOYW1lcyA9IHByb3BzQnVpbGRSZXN1bHQuZHluYW1pY1Byb3BOYW1lcztcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwcm9wc0J1aWxkUmVzdWx0LmRpcmVjdGl2ZXM7XG4gICAgICB2bm9kZURpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzICYmIGRpcmVjdGl2ZXMubGVuZ3RoID8gY3JlYXRlQXJyYXlFeHByZXNzaW9uKFxuICAgICAgICBkaXJlY3RpdmVzLm1hcCgoZGlyKSA9PiBidWlsZERpcmVjdGl2ZUFyZ3MoZGlyLCBjb250ZXh0KSlcbiAgICAgICkgOiB2b2lkIDA7XG4gICAgICBpZiAocHJvcHNCdWlsZFJlc3VsdC5zaG91bGRVc2VCbG9jaykge1xuICAgICAgICBzaG91bGRVc2VCbG9jayA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh2bm9kZVRhZyA9PT0gS0VFUF9BTElWRSkge1xuICAgICAgICBzaG91bGRVc2VCbG9jayA9IHRydWU7XG4gICAgICAgIHBhdGNoRmxhZyB8PSAxMDI0O1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICAgICAgICBjcmVhdGVDb21waWxlckVycm9yKDQ2LCB7XG4gICAgICAgICAgICAgIHN0YXJ0OiBub2RlLmNoaWxkcmVuWzBdLmxvYy5zdGFydCxcbiAgICAgICAgICAgICAgZW5kOiBub2RlLmNoaWxkcmVuW25vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMV0ubG9jLmVuZCxcbiAgICAgICAgICAgICAgc291cmNlOiBcIlwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3VsZEJ1aWxkQXNTbG90cyA9IGlzQ29tcG9uZW50ICYmIC8vIFRlbGVwb3J0IGlzIG5vdCBhIHJlYWwgY29tcG9uZW50IGFuZCBoYXMgZGVkaWNhdGVkIHJ1bnRpbWUgaGFuZGxpbmdcbiAgICAgIHZub2RlVGFnICE9PSBURUxFUE9SVCAmJiAvLyBleHBsYWluZWQgYWJvdmUuXG4gICAgICB2bm9kZVRhZyAhPT0gS0VFUF9BTElWRTtcbiAgICAgIGlmIChzaG91bGRCdWlsZEFzU2xvdHMpIHtcbiAgICAgICAgY29uc3QgeyBzbG90cywgaGFzRHluYW1pY1Nsb3RzIH0gPSBidWlsZFNsb3RzKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICB2bm9kZUNoaWxkcmVuID0gc2xvdHM7XG4gICAgICAgIGlmIChoYXNEeW5hbWljU2xvdHMpIHtcbiAgICAgICAgICBwYXRjaEZsYWcgfD0gMTAyNDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiB2bm9kZVRhZyAhPT0gVEVMRVBPUlQpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICBjb25zdCB0eXBlID0gY2hpbGQudHlwZTtcbiAgICAgICAgY29uc3QgaGFzRHluYW1pY1RleHRDaGlsZCA9IHR5cGUgPT09IDUgfHwgdHlwZSA9PT0gODtcbiAgICAgICAgaWYgKGhhc0R5bmFtaWNUZXh0Q2hpbGQgJiYgZ2V0Q29uc3RhbnRUeXBlKGNoaWxkLCBjb250ZXh0KSA9PT0gMCkge1xuICAgICAgICAgIHBhdGNoRmxhZyB8PSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNEeW5hbWljVGV4dENoaWxkIHx8IHR5cGUgPT09IDIpIHtcbiAgICAgICAgICB2bm9kZUNoaWxkcmVuID0gY2hpbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm5vZGVDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlQ2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZHluYW1pY1Byb3BOYW1lcyAmJiBkeW5hbWljUHJvcE5hbWVzLmxlbmd0aCkge1xuICAgICAgdm5vZGVEeW5hbWljUHJvcHMgPSBzdHJpbmdpZnlEeW5hbWljUHJvcE5hbWVzKGR5bmFtaWNQcm9wTmFtZXMpO1xuICAgIH1cbiAgICBub2RlLmNvZGVnZW5Ob2RlID0gY3JlYXRlVk5vZGVDYWxsKFxuICAgICAgY29udGV4dCxcbiAgICAgIHZub2RlVGFnLFxuICAgICAgdm5vZGVQcm9wcyxcbiAgICAgIHZub2RlQ2hpbGRyZW4sXG4gICAgICBwYXRjaEZsYWcgPT09IDAgPyB2b2lkIDAgOiBwYXRjaEZsYWcsXG4gICAgICB2bm9kZUR5bmFtaWNQcm9wcyxcbiAgICAgIHZub2RlRGlyZWN0aXZlcyxcbiAgICAgICEhc2hvdWxkVXNlQmxvY2ssXG4gICAgICBmYWxzZSxcbiAgICAgIGlzQ29tcG9uZW50LFxuICAgICAgbm9kZS5sb2NcbiAgICApO1xuICB9O1xufTtcbmZ1bmN0aW9uIHJlc29sdmVDb21wb25lbnRUeXBlKG5vZGUsIGNvbnRleHQsIHNzciA9IGZhbHNlKSB7XG4gIGxldCB7IHRhZyB9ID0gbm9kZTtcbiAgY29uc3QgaXNFeHBsaWNpdER5bmFtaWMgPSBpc0NvbXBvbmVudFRhZyh0YWcpO1xuICBjb25zdCBpc1Byb3AgPSBmaW5kUHJvcChcbiAgICBub2RlLFxuICAgIFwiaXNcIixcbiAgICBmYWxzZSxcbiAgICB0cnVlXG4gICAgLyogYWxsb3cgZW1wdHkgKi9cbiAgKTtcbiAgaWYgKGlzUHJvcCkge1xuICAgIGlmIChpc0V4cGxpY2l0RHluYW1pYyB8fCBpc0NvbXBhdEVuYWJsZWQoXG4gICAgICBcIkNPTVBJTEVSX0lTX09OX0VMRU1FTlRcIixcbiAgICAgIGNvbnRleHRcbiAgICApKSB7XG4gICAgICBsZXQgZXhwO1xuICAgICAgaWYgKGlzUHJvcC50eXBlID09PSA2KSB7XG4gICAgICAgIGV4cCA9IGlzUHJvcC52YWx1ZSAmJiBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGlzUHJvcC52YWx1ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cCA9IGlzUHJvcC5leHA7XG4gICAgICAgIGlmICghZXhwKSB7XG4gICAgICAgICAgZXhwID0gY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihgaXNgLCBmYWxzZSwgaXNQcm9wLmFyZy5sb2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXhwKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVDYWxsRXhwcmVzc2lvbihjb250ZXh0LmhlbHBlcihSRVNPTFZFX0RZTkFNSUNfQ09NUE9ORU5UKSwgW1xuICAgICAgICAgIGV4cFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJvcC50eXBlID09PSA2ICYmIGlzUHJvcC52YWx1ZS5jb250ZW50LnN0YXJ0c1dpdGgoXCJ2dWU6XCIpKSB7XG4gICAgICB0YWcgPSBpc1Byb3AudmFsdWUuY29udGVudC5zbGljZSg0KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYnVpbHRJbiA9IGlzQ29yZUNvbXBvbmVudCh0YWcpIHx8IGNvbnRleHQuaXNCdWlsdEluQ29tcG9uZW50KHRhZyk7XG4gIGlmIChidWlsdEluKSB7XG4gICAgaWYgKCFzc3IpIGNvbnRleHQuaGVscGVyKGJ1aWx0SW4pO1xuICAgIHJldHVybiBidWlsdEluO1xuICB9XG4gIGNvbnRleHQuaGVscGVyKFJFU09MVkVfQ09NUE9ORU5UKTtcbiAgY29udGV4dC5jb21wb25lbnRzLmFkZCh0YWcpO1xuICByZXR1cm4gdG9WYWxpZEFzc2V0SWQodGFnLCBgY29tcG9uZW50YCk7XG59XG5mdW5jdGlvbiBidWlsZFByb3BzKG5vZGUsIGNvbnRleHQsIHByb3BzID0gbm9kZS5wcm9wcywgaXNDb21wb25lbnQsIGlzRHluYW1pY0NvbXBvbmVudCwgc3NyID0gZmFsc2UpIHtcbiAgY29uc3QgeyB0YWcsIGxvYzogZWxlbWVudExvYywgY2hpbGRyZW4gfSA9IG5vZGU7XG4gIGxldCBwcm9wZXJ0aWVzID0gW107XG4gIGNvbnN0IG1lcmdlQXJncyA9IFtdO1xuICBjb25zdCBydW50aW1lRGlyZWN0aXZlcyA9IFtdO1xuICBjb25zdCBoYXNDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIGxldCBzaG91bGRVc2VCbG9jayA9IGZhbHNlO1xuICBsZXQgcGF0Y2hGbGFnID0gMDtcbiAgbGV0IGhhc1JlZiA9IGZhbHNlO1xuICBsZXQgaGFzQ2xhc3NCaW5kaW5nID0gZmFsc2U7XG4gIGxldCBoYXNTdHlsZUJpbmRpbmcgPSBmYWxzZTtcbiAgbGV0IGhhc0h5ZHJhdGlvbkV2ZW50QmluZGluZyA9IGZhbHNlO1xuICBsZXQgaGFzRHluYW1pY0tleXMgPSBmYWxzZTtcbiAgbGV0IGhhc1Zub2RlSG9vayA9IGZhbHNlO1xuICBjb25zdCBkeW5hbWljUHJvcE5hbWVzID0gW107XG4gIGNvbnN0IHB1c2hNZXJnZUFyZyA9IChhcmcpID0+IHtcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlQXJncy5wdXNoKFxuICAgICAgICBjcmVhdGVPYmplY3RFeHByZXNzaW9uKGRlZHVwZVByb3BlcnRpZXMocHJvcGVydGllcyksIGVsZW1lbnRMb2MpXG4gICAgICApO1xuICAgICAgcHJvcGVydGllcyA9IFtdO1xuICAgIH1cbiAgICBpZiAoYXJnKSBtZXJnZUFyZ3MucHVzaChhcmcpO1xuICB9O1xuICBjb25zdCBwdXNoUmVmVkZvck1hcmtlciA9ICgpID0+IHtcbiAgICBpZiAoY29udGV4dC5zY29wZXMudkZvciA+IDApIHtcbiAgICAgIHByb3BlcnRpZXMucHVzaChcbiAgICAgICAgY3JlYXRlT2JqZWN0UHJvcGVydHkoXG4gICAgICAgICAgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcInJlZl9mb3JcIiwgdHJ1ZSksXG4gICAgICAgICAgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcInRydWVcIilcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFuYWx5emVQYXRjaEZsYWcgPSAoeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICBpZiAoaXNTdGF0aWNFeHAoa2V5KSkge1xuICAgICAgY29uc3QgbmFtZSA9IGtleS5jb250ZW50O1xuICAgICAgY29uc3QgaXNFdmVudEhhbmRsZXIgPSBpc09uKG5hbWUpO1xuICAgICAgaWYgKGlzRXZlbnRIYW5kbGVyICYmICghaXNDb21wb25lbnQgfHwgaXNEeW5hbWljQ29tcG9uZW50KSAmJiAvLyBvbWl0IHRoZSBmbGFnIGZvciBjbGljayBoYW5kbGVycyBiZWNhdXNlIGh5ZHJhdGlvbiBnaXZlcyBjbGlja1xuICAgICAgLy8gZGVkaWNhdGVkIGZhc3QgcGF0aC5cbiAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvbmNsaWNrXCIgJiYgLy8gb21pdCB2LW1vZGVsIGhhbmRsZXJzXG4gICAgICBuYW1lICE9PSBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIiAmJiAvLyBvbWl0IG9uVm5vZGVYWFggaG9va3NcbiAgICAgICFpc1Jlc2VydmVkUHJvcChuYW1lKSkge1xuICAgICAgICBoYXNIeWRyYXRpb25FdmVudEJpbmRpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzRXZlbnRIYW5kbGVyICYmIGlzUmVzZXJ2ZWRQcm9wKG5hbWUpKSB7XG4gICAgICAgIGhhc1Zub2RlSG9vayA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNFdmVudEhhbmRsZXIgJiYgdmFsdWUudHlwZSA9PT0gMTQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5hcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUudHlwZSA9PT0gMjAgfHwgKHZhbHVlLnR5cGUgPT09IDQgfHwgdmFsdWUudHlwZSA9PT0gOCkgJiYgZ2V0Q29uc3RhbnRUeXBlKHZhbHVlLCBjb250ZXh0KSA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09IFwicmVmXCIpIHtcbiAgICAgICAgaGFzUmVmID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgIGhhc0NsYXNzQmluZGluZyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICBoYXNTdHlsZUJpbmRpbmcgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChuYW1lICE9PSBcImtleVwiICYmICFkeW5hbWljUHJvcE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIGR5bmFtaWNQcm9wTmFtZXMucHVzaChuYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0NvbXBvbmVudCAmJiAobmFtZSA9PT0gXCJjbGFzc1wiIHx8IG5hbWUgPT09IFwic3R5bGVcIikgJiYgIWR5bmFtaWNQcm9wTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgZHluYW1pY1Byb3BOYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoYXNEeW5hbWljS2V5cyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvcCA9IHByb3BzW2ldO1xuICAgIGlmIChwcm9wLnR5cGUgPT09IDYpIHtcbiAgICAgIGNvbnN0IHsgbG9jLCBuYW1lLCBuYW1lTG9jLCB2YWx1ZSB9ID0gcHJvcDtcbiAgICAgIGxldCBpc1N0YXRpYyA9IHRydWU7XG4gICAgICBpZiAobmFtZSA9PT0gXCJyZWZcIikge1xuICAgICAgICBoYXNSZWYgPSB0cnVlO1xuICAgICAgICBwdXNoUmVmVkZvck1hcmtlcigpO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09IFwiaXNcIiAmJiAoaXNDb21wb25lbnRUYWcodGFnKSB8fCB2YWx1ZSAmJiB2YWx1ZS5jb250ZW50LnN0YXJ0c1dpdGgoXCJ2dWU6XCIpIHx8IGlzQ29tcGF0RW5hYmxlZChcbiAgICAgICAgXCJDT01QSUxFUl9JU19PTl9FTEVNRU5UXCIsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcHJvcGVydGllcy5wdXNoKFxuICAgICAgICBjcmVhdGVPYmplY3RQcm9wZXJ0eShcbiAgICAgICAgICBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKG5hbWUsIHRydWUsIG5hbWVMb2MpLFxuICAgICAgICAgIGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oXG4gICAgICAgICAgICB2YWx1ZSA/IHZhbHVlLmNvbnRlbnQgOiBcIlwiLFxuICAgICAgICAgICAgaXNTdGF0aWMsXG4gICAgICAgICAgICB2YWx1ZSA/IHZhbHVlLmxvYyA6IGxvY1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBuYW1lLCBhcmcsIGV4cCwgbG9jLCBtb2RpZmllcnMgfSA9IHByb3A7XG4gICAgICBjb25zdCBpc1ZCaW5kID0gbmFtZSA9PT0gXCJiaW5kXCI7XG4gICAgICBjb25zdCBpc1ZPbiA9IG5hbWUgPT09IFwib25cIjtcbiAgICAgIGlmIChuYW1lID09PSBcInNsb3RcIikge1xuICAgICAgICBpZiAoIWlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgICAgICAgY3JlYXRlQ29tcGlsZXJFcnJvcig0MCwgbG9jKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gXCJvbmNlXCIgfHwgbmFtZSA9PT0gXCJtZW1vXCIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gXCJpc1wiIHx8IGlzVkJpbmQgJiYgaXNTdGF0aWNBcmdPZihhcmcsIFwiaXNcIikgJiYgKGlzQ29tcG9uZW50VGFnKHRhZykgfHwgaXNDb21wYXRFbmFibGVkKFxuICAgICAgICBcIkNPTVBJTEVSX0lTX09OX0VMRU1FTlRcIixcbiAgICAgICAgY29udGV4dFxuICAgICAgKSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNWT24gJiYgc3NyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAvLyAjOTM4OiBlbGVtZW50cyB3aXRoIGR5bmFtaWMga2V5cyBzaG91bGQgYmUgZm9yY2VkIGludG8gYmxvY2tzXG4gICAgICAgIGlzVkJpbmQgJiYgaXNTdGF0aWNBcmdPZihhcmcsIFwia2V5XCIpIHx8IC8vIGlubGluZSBiZWZvcmUtdXBkYXRlIGhvb2tzIG5lZWQgdG8gZm9yY2UgYmxvY2sgc28gdGhhdCBpdCBpcyBpbnZva2VkXG4gICAgICAgIC8vIGJlZm9yZSBjaGlsZHJlblxuICAgICAgICBpc1ZPbiAmJiBoYXNDaGlsZHJlbiAmJiBpc1N0YXRpY0FyZ09mKGFyZywgXCJ2dWU6YmVmb3JlLXVwZGF0ZVwiKVxuICAgICAgKSB7XG4gICAgICAgIHNob3VsZFVzZUJsb2NrID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1ZCaW5kICYmIGlzU3RhdGljQXJnT2YoYXJnLCBcInJlZlwiKSkge1xuICAgICAgICBwdXNoUmVmVkZvck1hcmtlcigpO1xuICAgICAgfVxuICAgICAgaWYgKCFhcmcgJiYgKGlzVkJpbmQgfHwgaXNWT24pKSB7XG4gICAgICAgIGhhc0R5bmFtaWNLZXlzID0gdHJ1ZTtcbiAgICAgICAgaWYgKGV4cCkge1xuICAgICAgICAgIGlmIChpc1ZCaW5kKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHB1c2hNZXJnZUFyZygpO1xuICAgICAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc092ZXJyaWRhYmxlS2V5cyA9IG1lcmdlQXJncy5zb21lKChhcmcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJnMi50eXBlID09PSAxNSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnMi5wcm9wZXJ0aWVzLnNvbWUoKHsga2V5IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnR5cGUgIT09IDQgfHwgIWtleS5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkuY29udGVudCAhPT0gXCJjbGFzc1wiICYmIGtleS5jb250ZW50ICE9PSBcInN0eWxlXCIgJiYgIWlzT24oa2V5LmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChoYXNPdmVycmlkYWJsZUtleXMpIHtcbiAgICAgICAgICAgICAgICAgIGNoZWNrQ29tcGF0RW5hYmxlZChcbiAgICAgICAgICAgICAgICAgICAgXCJDT01QSUxFUl9WX0JJTkRfT0JKRUNUX09SREVSXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGxvY1xuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0RW5hYmxlZChcbiAgICAgICAgICAgICAgICBcIkNPTVBJTEVSX1ZfQklORF9PQkpFQ1RfT1JERVJcIixcbiAgICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZUFyZ3MudW5zaGlmdChleHApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwdXNoUmVmVkZvck1hcmtlcigpO1xuICAgICAgICAgICAgcHVzaE1lcmdlQXJnKCk7XG4gICAgICAgICAgICBtZXJnZUFyZ3MucHVzaChleHApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoTWVyZ2VBcmcoe1xuICAgICAgICAgICAgICB0eXBlOiAxNCxcbiAgICAgICAgICAgICAgbG9jLFxuICAgICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQuaGVscGVyKFRPX0hBTkRMRVJTKSxcbiAgICAgICAgICAgICAgYXJndW1lbnRzOiBpc0NvbXBvbmVudCA/IFtleHBdIDogW2V4cCwgYHRydWVgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoXG4gICAgICAgICAgICAgIGlzVkJpbmQgPyAzNCA6IDM1LFxuICAgICAgICAgICAgICBsb2NcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzVkJpbmQgJiYgbW9kaWZpZXJzLnNvbWUoKG1vZCkgPT4gbW9kLmNvbnRlbnQgPT09IFwicHJvcFwiKSkge1xuICAgICAgICBwYXRjaEZsYWcgfD0gMzI7XG4gICAgICB9XG4gICAgICBjb25zdCBkaXJlY3RpdmVUcmFuc2Zvcm0gPSBjb250ZXh0LmRpcmVjdGl2ZVRyYW5zZm9ybXNbbmFtZV07XG4gICAgICBpZiAoZGlyZWN0aXZlVHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvcHM6IHByb3BzMiwgbmVlZFJ1bnRpbWUgfSA9IGRpcmVjdGl2ZVRyYW5zZm9ybShwcm9wLCBub2RlLCBjb250ZXh0KTtcbiAgICAgICAgIXNzciAmJiBwcm9wczIuZm9yRWFjaChhbmFseXplUGF0Y2hGbGFnKTtcbiAgICAgICAgaWYgKGlzVk9uICYmIGFyZyAmJiAhaXNTdGF0aWNFeHAoYXJnKSkge1xuICAgICAgICAgIHB1c2hNZXJnZUFyZyhjcmVhdGVPYmplY3RFeHByZXNzaW9uKHByb3BzMiwgZWxlbWVudExvYykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BlcnRpZXMucHVzaCguLi5wcm9wczIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZWVkUnVudGltZSkge1xuICAgICAgICAgIHJ1bnRpbWVEaXJlY3RpdmVzLnB1c2gocHJvcCk7XG4gICAgICAgICAgaWYgKGlzU3ltYm9sKG5lZWRSdW50aW1lKSkge1xuICAgICAgICAgICAgZGlyZWN0aXZlSW1wb3J0TWFwLnNldChwcm9wLCBuZWVkUnVudGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc0J1aWx0SW5EaXJlY3RpdmUobmFtZSkpIHtcbiAgICAgICAgcnVudGltZURpcmVjdGl2ZXMucHVzaChwcm9wKTtcbiAgICAgICAgaWYgKGhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgc2hvdWxkVXNlQmxvY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBwcm9wc0V4cHJlc3Npb24gPSB2b2lkIDA7XG4gIGlmIChtZXJnZUFyZ3MubGVuZ3RoKSB7XG4gICAgcHVzaE1lcmdlQXJnKCk7XG4gICAgaWYgKG1lcmdlQXJncy5sZW5ndGggPiAxKSB7XG4gICAgICBwcm9wc0V4cHJlc3Npb24gPSBjcmVhdGVDYWxsRXhwcmVzc2lvbihcbiAgICAgICAgY29udGV4dC5oZWxwZXIoTUVSR0VfUFJPUFMpLFxuICAgICAgICBtZXJnZUFyZ3MsXG4gICAgICAgIGVsZW1lbnRMb2NcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzRXhwcmVzc2lvbiA9IG1lcmdlQXJnc1swXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICBwcm9wc0V4cHJlc3Npb24gPSBjcmVhdGVPYmplY3RFeHByZXNzaW9uKFxuICAgICAgZGVkdXBlUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgIGVsZW1lbnRMb2NcbiAgICApO1xuICB9XG4gIGlmIChoYXNEeW5hbWljS2V5cykge1xuICAgIHBhdGNoRmxhZyB8PSAxNjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaGFzQ2xhc3NCaW5kaW5nICYmICFpc0NvbXBvbmVudCkge1xuICAgICAgcGF0Y2hGbGFnIHw9IDI7XG4gICAgfVxuICAgIGlmIChoYXNTdHlsZUJpbmRpbmcgJiYgIWlzQ29tcG9uZW50KSB7XG4gICAgICBwYXRjaEZsYWcgfD0gNDtcbiAgICB9XG4gICAgaWYgKGR5bmFtaWNQcm9wTmFtZXMubGVuZ3RoKSB7XG4gICAgICBwYXRjaEZsYWcgfD0gODtcbiAgICB9XG4gICAgaWYgKGhhc0h5ZHJhdGlvbkV2ZW50QmluZGluZykge1xuICAgICAgcGF0Y2hGbGFnIHw9IDMyO1xuICAgIH1cbiAgfVxuICBpZiAoIXNob3VsZFVzZUJsb2NrICYmIChwYXRjaEZsYWcgPT09IDAgfHwgcGF0Y2hGbGFnID09PSAzMikgJiYgKGhhc1JlZiB8fCBoYXNWbm9kZUhvb2sgfHwgcnVudGltZURpcmVjdGl2ZXMubGVuZ3RoID4gMCkpIHtcbiAgICBwYXRjaEZsYWcgfD0gNTEyO1xuICB9XG4gIGlmICghY29udGV4dC5pblNTUiAmJiBwcm9wc0V4cHJlc3Npb24pIHtcbiAgICBzd2l0Y2ggKHByb3BzRXhwcmVzc2lvbi50eXBlKSB7XG4gICAgICBjYXNlIDE1OlxuICAgICAgICBsZXQgY2xhc3NLZXlJbmRleCA9IC0xO1xuICAgICAgICBsZXQgc3R5bGVLZXlJbmRleCA9IC0xO1xuICAgICAgICBsZXQgaGFzRHluYW1pY0tleSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzRXhwcmVzc2lvbi5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gcHJvcHNFeHByZXNzaW9uLnByb3BlcnRpZXNbaV0ua2V5O1xuICAgICAgICAgIGlmIChpc1N0YXRpY0V4cChrZXkpKSB7XG4gICAgICAgICAgICBpZiAoa2V5LmNvbnRlbnQgPT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgICBjbGFzc0tleUluZGV4ID0gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5LmNvbnRlbnQgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICAgICBzdHlsZUtleUluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFrZXkuaXNIYW5kbGVyS2V5KSB7XG4gICAgICAgICAgICBoYXNEeW5hbWljS2V5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NQcm9wID0gcHJvcHNFeHByZXNzaW9uLnByb3BlcnRpZXNbY2xhc3NLZXlJbmRleF07XG4gICAgICAgIGNvbnN0IHN0eWxlUHJvcCA9IHByb3BzRXhwcmVzc2lvbi5wcm9wZXJ0aWVzW3N0eWxlS2V5SW5kZXhdO1xuICAgICAgICBpZiAoIWhhc0R5bmFtaWNLZXkpIHtcbiAgICAgICAgICBpZiAoY2xhc3NQcm9wICYmICFpc1N0YXRpY0V4cChjbGFzc1Byb3AudmFsdWUpKSB7XG4gICAgICAgICAgICBjbGFzc1Byb3AudmFsdWUgPSBjcmVhdGVDYWxsRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgY29udGV4dC5oZWxwZXIoTk9STUFMSVpFX0NMQVNTKSxcbiAgICAgICAgICAgICAgW2NsYXNzUHJvcC52YWx1ZV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdHlsZVByb3AgJiYgLy8gdGhlIHN0YXRpYyBzdHlsZSBpcyBjb21waWxlZCBpbnRvIGFuIG9iamVjdCxcbiAgICAgICAgICAvLyBzbyB1c2UgYGhhc1N0eWxlQmluZGluZ2AgdG8gZW5zdXJlIHRoYXQgaXQgaXMgYSBkeW5hbWljIHN0eWxlIGJpbmRpbmdcbiAgICAgICAgICAoaGFzU3R5bGVCaW5kaW5nIHx8IHN0eWxlUHJvcC52YWx1ZS50eXBlID09PSA0ICYmIHN0eWxlUHJvcC52YWx1ZS5jb250ZW50LnRyaW0oKVswXSA9PT0gYFtgIHx8IC8vIHYtYmluZDpzdHlsZSBhbmQgc3R5bGUgYm90aCBleGlzdCxcbiAgICAgICAgICAvLyB2LWJpbmQ6c3R5bGUgd2l0aCBzdGF0aWMgbGl0ZXJhbCBvYmplY3RcbiAgICAgICAgICBzdHlsZVByb3AudmFsdWUudHlwZSA9PT0gMTcpKSB7XG4gICAgICAgICAgICBzdHlsZVByb3AudmFsdWUgPSBjcmVhdGVDYWxsRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgY29udGV4dC5oZWxwZXIoTk9STUFMSVpFX1NUWUxFKSxcbiAgICAgICAgICAgICAgW3N0eWxlUHJvcC52YWx1ZV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzRXhwcmVzc2lvbiA9IGNyZWF0ZUNhbGxFeHByZXNzaW9uKFxuICAgICAgICAgICAgY29udGV4dC5oZWxwZXIoTk9STUFMSVpFX1BST1BTKSxcbiAgICAgICAgICAgIFtwcm9wc0V4cHJlc3Npb25dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcHJvcHNFeHByZXNzaW9uID0gY3JlYXRlQ2FsbEV4cHJlc3Npb24oXG4gICAgICAgICAgY29udGV4dC5oZWxwZXIoTk9STUFMSVpFX1BST1BTKSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBjcmVhdGVDYWxsRXhwcmVzc2lvbihjb250ZXh0LmhlbHBlcihHVUFSRF9SRUFDVElWRV9QUk9QUyksIFtcbiAgICAgICAgICAgICAgcHJvcHNFeHByZXNzaW9uXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHByb3BzRXhwcmVzc2lvbixcbiAgICBkaXJlY3RpdmVzOiBydW50aW1lRGlyZWN0aXZlcyxcbiAgICBwYXRjaEZsYWcsXG4gICAgZHluYW1pY1Byb3BOYW1lcyxcbiAgICBzaG91bGRVc2VCbG9ja1xuICB9O1xufVxuZnVuY3Rpb24gZGVkdXBlUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGtub3duUHJvcHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBjb25zdCBkZWR1cGVkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3AgPSBwcm9wZXJ0aWVzW2ldO1xuICAgIGlmIChwcm9wLmtleS50eXBlID09PSA4IHx8ICFwcm9wLmtleS5pc1N0YXRpYykge1xuICAgICAgZGVkdXBlZC5wdXNoKHByb3ApO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBwcm9wLmtleS5jb250ZW50O1xuICAgIGNvbnN0IGV4aXN0aW5nID0ga25vd25Qcm9wcy5nZXQobmFtZSk7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBpZiAobmFtZSA9PT0gXCJzdHlsZVwiIHx8IG5hbWUgPT09IFwiY2xhc3NcIiB8fCBpc09uKG5hbWUpKSB7XG4gICAgICAgIG1lcmdlQXNBcnJheShleGlzdGluZywgcHJvcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtub3duUHJvcHMuc2V0KG5hbWUsIHByb3ApO1xuICAgICAgZGVkdXBlZC5wdXNoKHByb3ApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVkdXBlZDtcbn1cbmZ1bmN0aW9uIG1lcmdlQXNBcnJheShleGlzdGluZywgaW5jb21pbmcpIHtcbiAgaWYgKGV4aXN0aW5nLnZhbHVlLnR5cGUgPT09IDE3KSB7XG4gICAgZXhpc3RpbmcudmFsdWUuZWxlbWVudHMucHVzaChpbmNvbWluZy52YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZXhpc3RpbmcudmFsdWUgPSBjcmVhdGVBcnJheUV4cHJlc3Npb24oXG4gICAgICBbZXhpc3RpbmcudmFsdWUsIGluY29taW5nLnZhbHVlXSxcbiAgICAgIGV4aXN0aW5nLmxvY1xuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkRGlyZWN0aXZlQXJncyhkaXIsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlyQXJncyA9IFtdO1xuICBjb25zdCBydW50aW1lID0gZGlyZWN0aXZlSW1wb3J0TWFwLmdldChkaXIpO1xuICBpZiAocnVudGltZSkge1xuICAgIGRpckFyZ3MucHVzaChjb250ZXh0LmhlbHBlclN0cmluZyhydW50aW1lKSk7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgY29udGV4dC5oZWxwZXIoUkVTT0xWRV9ESVJFQ1RJVkUpO1xuICAgICAgY29udGV4dC5kaXJlY3RpdmVzLmFkZChkaXIubmFtZSk7XG4gICAgICBkaXJBcmdzLnB1c2godG9WYWxpZEFzc2V0SWQoZGlyLm5hbWUsIGBkaXJlY3RpdmVgKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHsgbG9jIH0gPSBkaXI7XG4gIGlmIChkaXIuZXhwKSBkaXJBcmdzLnB1c2goZGlyLmV4cCk7XG4gIGlmIChkaXIuYXJnKSB7XG4gICAgaWYgKCFkaXIuZXhwKSB7XG4gICAgICBkaXJBcmdzLnB1c2goYHZvaWQgMGApO1xuICAgIH1cbiAgICBkaXJBcmdzLnB1c2goZGlyLmFyZyk7XG4gIH1cbiAgaWYgKE9iamVjdC5rZXlzKGRpci5tb2RpZmllcnMpLmxlbmd0aCkge1xuICAgIGlmICghZGlyLmFyZykge1xuICAgICAgaWYgKCFkaXIuZXhwKSB7XG4gICAgICAgIGRpckFyZ3MucHVzaChgdm9pZCAwYCk7XG4gICAgICB9XG4gICAgICBkaXJBcmdzLnB1c2goYHZvaWQgMGApO1xuICAgIH1cbiAgICBjb25zdCB0cnVlRXhwcmVzc2lvbiA9IGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oYHRydWVgLCBmYWxzZSwgbG9jKTtcbiAgICBkaXJBcmdzLnB1c2goXG4gICAgICBjcmVhdGVPYmplY3RFeHByZXNzaW9uKFxuICAgICAgICBkaXIubW9kaWZpZXJzLm1hcChcbiAgICAgICAgICAobW9kaWZpZXIpID0+IGNyZWF0ZU9iamVjdFByb3BlcnR5KG1vZGlmaWVyLCB0cnVlRXhwcmVzc2lvbilcbiAgICAgICAgKSxcbiAgICAgICAgbG9jXG4gICAgICApXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQXJyYXlFeHByZXNzaW9uKGRpckFyZ3MsIGRpci5sb2MpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5RHluYW1pY1Byb3BOYW1lcyhwcm9wcykge1xuICBsZXQgcHJvcHNOYW1lc1N0cmluZyA9IGBbYDtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBwcm9wc05hbWVzU3RyaW5nICs9IEpTT04uc3RyaW5naWZ5KHByb3BzW2ldKTtcbiAgICBpZiAoaSA8IGwgLSAxKSBwcm9wc05hbWVzU3RyaW5nICs9IFwiLCBcIjtcbiAgfVxuICByZXR1cm4gcHJvcHNOYW1lc1N0cmluZyArIGBdYDtcbn1cbmZ1bmN0aW9uIGlzQ29tcG9uZW50VGFnKHRhZykge1xuICByZXR1cm4gdGFnID09PSBcImNvbXBvbmVudFwiIHx8IHRhZyA9PT0gXCJDb21wb25lbnRcIjtcbn1cblxuY29uc3QgdHJhbnNmb3JtU2xvdE91dGxldCA9IChub2RlLCBjb250ZXh0KSA9PiB7XG4gIGlmIChpc1Nsb3RPdXRsZXQobm9kZSkpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsb2MgfSA9IG5vZGU7XG4gICAgY29uc3QgeyBzbG90TmFtZSwgc2xvdFByb3BzIH0gPSBwcm9jZXNzU2xvdE91dGxldChub2RlLCBjb250ZXh0KTtcbiAgICBjb25zdCBzbG90QXJncyA9IFtcbiAgICAgIGNvbnRleHQucHJlZml4SWRlbnRpZmllcnMgPyBgX2N0eC4kc2xvdHNgIDogYCRzbG90c2AsXG4gICAgICBzbG90TmFtZSxcbiAgICAgIFwie31cIixcbiAgICAgIFwidW5kZWZpbmVkXCIsXG4gICAgICBcInRydWVcIlxuICAgIF07XG4gICAgbGV0IGV4cGVjdGVkTGVuID0gMjtcbiAgICBpZiAoc2xvdFByb3BzKSB7XG4gICAgICBzbG90QXJnc1syXSA9IHNsb3RQcm9wcztcbiAgICAgIGV4cGVjdGVkTGVuID0gMztcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgc2xvdEFyZ3NbM10gPSBjcmVhdGVGdW5jdGlvbkV4cHJlc3Npb24oW10sIGNoaWxkcmVuLCBmYWxzZSwgZmFsc2UsIGxvYyk7XG4gICAgICBleHBlY3RlZExlbiA9IDQ7XG4gICAgfVxuICAgIGlmIChjb250ZXh0LnNjb3BlSWQgJiYgIWNvbnRleHQuc2xvdHRlZCkge1xuICAgICAgZXhwZWN0ZWRMZW4gPSA1O1xuICAgIH1cbiAgICBzbG90QXJncy5zcGxpY2UoZXhwZWN0ZWRMZW4pO1xuICAgIG5vZGUuY29kZWdlbk5vZGUgPSBjcmVhdGVDYWxsRXhwcmVzc2lvbihcbiAgICAgIGNvbnRleHQuaGVscGVyKFJFTkRFUl9TTE9UKSxcbiAgICAgIHNsb3RBcmdzLFxuICAgICAgbG9jXG4gICAgKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHByb2Nlc3NTbG90T3V0bGV0KG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNsb3ROYW1lID0gYFwiZGVmYXVsdFwiYDtcbiAgbGV0IHNsb3RQcm9wcyA9IHZvaWQgMDtcbiAgY29uc3Qgbm9uTmFtZVByb3BzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBub2RlLnByb3BzW2ldO1xuICAgIGlmIChwLnR5cGUgPT09IDYpIHtcbiAgICAgIGlmIChwLnZhbHVlKSB7XG4gICAgICAgIGlmIChwLm5hbWUgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgc2xvdE5hbWUgPSBKU09OLnN0cmluZ2lmeShwLnZhbHVlLmNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHAubmFtZSA9IGNhbWVsaXplKHAubmFtZSk7XG4gICAgICAgICAgbm9uTmFtZVByb3BzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHAubmFtZSA9PT0gXCJiaW5kXCIgJiYgaXNTdGF0aWNBcmdPZihwLmFyZywgXCJuYW1lXCIpKSB7XG4gICAgICAgIGlmIChwLmV4cCkge1xuICAgICAgICAgIHNsb3ROYW1lID0gcC5leHA7XG4gICAgICAgIH0gZWxzZSBpZiAocC5hcmcgJiYgcC5hcmcudHlwZSA9PT0gNCkge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBjYW1lbGl6ZShwLmFyZy5jb250ZW50KTtcbiAgICAgICAgICBzbG90TmFtZSA9IHAuZXhwID0gY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihuYW1lLCBmYWxzZSwgcC5hcmcubG9jKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHAubmFtZSA9PT0gXCJiaW5kXCIgJiYgcC5hcmcgJiYgaXNTdGF0aWNFeHAocC5hcmcpKSB7XG4gICAgICAgICAgcC5hcmcuY29udGVudCA9IGNhbWVsaXplKHAuYXJnLmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIG5vbk5hbWVQcm9wcy5wdXNoKHApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAobm9uTmFtZVByb3BzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB7IHByb3BzLCBkaXJlY3RpdmVzIH0gPSBidWlsZFByb3BzKFxuICAgICAgbm9kZSxcbiAgICAgIGNvbnRleHQsXG4gICAgICBub25OYW1lUHJvcHMsXG4gICAgICBmYWxzZSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBzbG90UHJvcHMgPSBwcm9wcztcbiAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgY3JlYXRlQ29tcGlsZXJFcnJvcihcbiAgICAgICAgICAzNixcbiAgICAgICAgICBkaXJlY3RpdmVzWzBdLmxvY1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHNsb3ROYW1lLFxuICAgIHNsb3RQcm9wc1xuICB9O1xufVxuXG5jb25zdCB0cmFuc2Zvcm1PbiA9IChkaXIsIG5vZGUsIGNvbnRleHQsIGF1Z21lbnRvcikgPT4ge1xuICBjb25zdCB7IGxvYywgbW9kaWZpZXJzLCBhcmcgfSA9IGRpcjtcbiAgaWYgKCFkaXIuZXhwICYmICFtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgY29udGV4dC5vbkVycm9yKGNyZWF0ZUNvbXBpbGVyRXJyb3IoMzUsIGxvYykpO1xuICB9XG4gIGxldCBldmVudE5hbWU7XG4gIGlmIChhcmcudHlwZSA9PT0gNCkge1xuICAgIGlmIChhcmcuaXNTdGF0aWMpIHtcbiAgICAgIGxldCByYXdOYW1lID0gYXJnLmNvbnRlbnQ7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiByYXdOYW1lLnN0YXJ0c1dpdGgoXCJ2bm9kZVwiKSkge1xuICAgICAgICBjb250ZXh0Lm9uRXJyb3IoY3JlYXRlQ29tcGlsZXJFcnJvcig1MSwgYXJnLmxvYykpO1xuICAgICAgfVxuICAgICAgaWYgKHJhd05hbWUuc3RhcnRzV2l0aChcInZ1ZTpcIikpIHtcbiAgICAgICAgcmF3TmFtZSA9IGB2bm9kZS0ke3Jhd05hbWUuc2xpY2UoNCl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV2ZW50U3RyaW5nID0gbm9kZS50YWdUeXBlICE9PSAwIHx8IHJhd05hbWUuc3RhcnRzV2l0aChcInZub2RlXCIpIHx8ICEvW0EtWl0vLnRlc3QocmF3TmFtZSkgPyAoXG4gICAgICAgIC8vIGZvciBub24tZWxlbWVudCBhbmQgdm5vZGUgbGlmZWN5Y2xlIGV2ZW50IGxpc3RlbmVycywgYXV0byBjb252ZXJ0XG4gICAgICAgIC8vIGl0IHRvIGNhbWVsQ2FzZS4gU2VlIGlzc3VlICMyMjQ5XG4gICAgICAgIHRvSGFuZGxlcktleShjYW1lbGl6ZShyYXdOYW1lKSlcbiAgICAgICkgOiAoXG4gICAgICAgIC8vIHByZXNlcnZlIGNhc2UgZm9yIHBsYWluIGVsZW1lbnQgbGlzdGVuZXJzIHRoYXQgaGF2ZSB1cHBlcmNhc2VcbiAgICAgICAgLy8gbGV0dGVycywgYXMgdGhlc2UgbWF5IGJlIGN1c3RvbSBlbGVtZW50cycgY3VzdG9tIGV2ZW50c1xuICAgICAgICBgb246JHtyYXdOYW1lfWBcbiAgICAgICk7XG4gICAgICBldmVudE5hbWUgPSBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGV2ZW50U3RyaW5nLCB0cnVlLCBhcmcubG9jKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnROYW1lID0gY3JlYXRlQ29tcG91bmRFeHByZXNzaW9uKFtcbiAgICAgICAgYCR7Y29udGV4dC5oZWxwZXJTdHJpbmcoVE9fSEFORExFUl9LRVkpfShgLFxuICAgICAgICBhcmcsXG4gICAgICAgIGApYFxuICAgICAgXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGV2ZW50TmFtZSA9IGFyZztcbiAgICBldmVudE5hbWUuY2hpbGRyZW4udW5zaGlmdChgJHtjb250ZXh0LmhlbHBlclN0cmluZyhUT19IQU5ETEVSX0tFWSl9KGApO1xuICAgIGV2ZW50TmFtZS5jaGlsZHJlbi5wdXNoKGApYCk7XG4gIH1cbiAgbGV0IGV4cCA9IGRpci5leHA7XG4gIGlmIChleHAgJiYgIWV4cC5jb250ZW50LnRyaW0oKSkge1xuICAgIGV4cCA9IHZvaWQgMDtcbiAgfVxuICBsZXQgc2hvdWxkQ2FjaGUgPSBjb250ZXh0LmNhY2hlSGFuZGxlcnMgJiYgIWV4cCAmJiAhY29udGV4dC5pblZPbmNlO1xuICBpZiAoZXhwKSB7XG4gICAgY29uc3QgaXNNZW1iZXJFeHAgPSBpc01lbWJlckV4cHJlc3Npb24oZXhwKTtcbiAgICBjb25zdCBpc0lubGluZVN0YXRlbWVudCA9ICEoaXNNZW1iZXJFeHAgfHwgaXNGbkV4cHJlc3Npb24oZXhwKSk7XG4gICAgY29uc3QgaGFzTXVsdGlwbGVTdGF0ZW1lbnRzID0gZXhwLmNvbnRlbnQuaW5jbHVkZXMoYDtgKTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB0cnVlKSB7XG4gICAgICB2YWxpZGF0ZUJyb3dzZXJFeHByZXNzaW9uKFxuICAgICAgICBleHAsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBoYXNNdWx0aXBsZVN0YXRlbWVudHNcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpc0lubGluZVN0YXRlbWVudCB8fCBzaG91bGRDYWNoZSAmJiBpc01lbWJlckV4cCkge1xuICAgICAgZXhwID0gY3JlYXRlQ29tcG91bmRFeHByZXNzaW9uKFtcbiAgICAgICAgYCR7aXNJbmxpbmVTdGF0ZW1lbnQgPyBgJGV2ZW50YCA6IGAke2BgfSguLi5hcmdzKWB9ID0+ICR7aGFzTXVsdGlwbGVTdGF0ZW1lbnRzID8gYHtgIDogYChgfWAsXG4gICAgICAgIGV4cCxcbiAgICAgICAgaGFzTXVsdGlwbGVTdGF0ZW1lbnRzID8gYH1gIDogYClgXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbiAgbGV0IHJldCA9IHtcbiAgICBwcm9wczogW1xuICAgICAgY3JlYXRlT2JqZWN0UHJvcGVydHkoXG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgZXhwIHx8IGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oYCgpID0+IHt9YCwgZmFsc2UsIGxvYylcbiAgICAgIClcbiAgICBdXG4gIH07XG4gIGlmIChhdWdtZW50b3IpIHtcbiAgICByZXQgPSBhdWdtZW50b3IocmV0KTtcbiAgfVxuICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICByZXQucHJvcHNbMF0udmFsdWUgPSBjb250ZXh0LmNhY2hlKHJldC5wcm9wc1swXS52YWx1ZSk7XG4gIH1cbiAgcmV0LnByb3BzLmZvckVhY2goKHApID0+IHAua2V5LmlzSGFuZGxlcktleSA9IHRydWUpO1xuICByZXR1cm4gcmV0O1xufTtcblxuY29uc3QgdHJhbnNmb3JtVGV4dCA9IChub2RlLCBjb250ZXh0KSA9PiB7XG4gIGlmIChub2RlLnR5cGUgPT09IDAgfHwgbm9kZS50eXBlID09PSAxIHx8IG5vZGUudHlwZSA9PT0gMTEgfHwgbm9kZS50eXBlID09PSAxMCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICBsZXQgY3VycmVudENvbnRhaW5lciA9IHZvaWQgMDtcbiAgICAgIGxldCBoYXNUZXh0ID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIGlmIChpc1RleHQkMShjaGlsZCkpIHtcbiAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgaWYgKGlzVGV4dCQxKG5leHQpKSB7XG4gICAgICAgICAgICAgIGlmICghY3VycmVudENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250YWluZXIgPSBjaGlsZHJlbltpXSA9IGNyZWF0ZUNvbXBvdW5kRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIFtjaGlsZF0sXG4gICAgICAgICAgICAgICAgICBjaGlsZC5sb2NcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGN1cnJlbnRDb250YWluZXIuY2hpbGRyZW4ucHVzaChgICsgYCwgbmV4dCk7XG4gICAgICAgICAgICAgIGNoaWxkcmVuLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3VycmVudENvbnRhaW5lciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWhhc1RleHQgfHwgLy8gaWYgdGhpcyBpcyBhIHBsYWluIGVsZW1lbnQgd2l0aCBhIHNpbmdsZSB0ZXh0IGNoaWxkLCBsZWF2ZSBpdFxuICAgICAgLy8gYXMtaXMgc2luY2UgdGhlIHJ1bnRpbWUgaGFzIGRlZGljYXRlZCBmYXN0IHBhdGggZm9yIHRoaXMgYnkgZGlyZWN0bHlcbiAgICAgIC8vIHNldHRpbmcgdGV4dENvbnRlbnQgb2YgdGhlIGVsZW1lbnQuXG4gICAgICAvLyBmb3IgY29tcG9uZW50IHJvb3QgaXQncyBhbHdheXMgbm9ybWFsaXplZCBhbnl3YXkuXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgKG5vZGUudHlwZSA9PT0gMCB8fCBub2RlLnR5cGUgPT09IDEgJiYgbm9kZS50YWdUeXBlID09PSAwICYmIC8vICMzNzU2XG4gICAgICAvLyBjdXN0b20gZGlyZWN0aXZlcyBjYW4gcG90ZW50aWFsbHkgYWRkIERPTSBlbGVtZW50cyBhcmJpdHJhcmlseSxcbiAgICAgIC8vIHdlIG5lZWQgdG8gYXZvaWQgc2V0dGluZyB0ZXh0Q29udGVudCBvZiB0aGUgZWxlbWVudCBhdCBydW50aW1lXG4gICAgICAvLyB0byBhdm9pZCBhY2NpZGVudGFsbHkgb3ZlcndyaXRpbmcgdGhlIERPTSBlbGVtZW50cyBhZGRlZFxuICAgICAgLy8gYnkgdGhlIHVzZXIgdGhyb3VnaCBjdXN0b20gZGlyZWN0aXZlcy5cbiAgICAgICFub2RlLnByb3BzLmZpbmQoXG4gICAgICAgIChwKSA9PiBwLnR5cGUgPT09IDcgJiYgIWNvbnRleHQuZGlyZWN0aXZlVHJhbnNmb3Jtc1twLm5hbWVdXG4gICAgICApICYmIC8vIGluIGNvbXBhdCBtb2RlLCA8dGVtcGxhdGU+IHRhZ3Mgd2l0aCBubyBzcGVjaWFsIGRpcmVjdGl2ZXNcbiAgICAgIC8vIHdpbGwgYmUgcmVuZGVyZWQgYXMgYSBmcmFnbWVudCBzbyBpdHMgY2hpbGRyZW4gbXVzdCBiZVxuICAgICAgLy8gY29udmVydGVkIGludG8gdm5vZGVzLlxuICAgICAgIShub2RlLnRhZyA9PT0gXCJ0ZW1wbGF0ZVwiKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoaXNUZXh0JDEoY2hpbGQpIHx8IGNoaWxkLnR5cGUgPT09IDgpIHtcbiAgICAgICAgICBjb25zdCBjYWxsQXJncyA9IFtdO1xuICAgICAgICAgIGlmIChjaGlsZC50eXBlICE9PSAyIHx8IGNoaWxkLmNvbnRlbnQgIT09IFwiIFwiKSB7XG4gICAgICAgICAgICBjYWxsQXJncy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjb250ZXh0LnNzciAmJiBnZXRDb25zdGFudFR5cGUoY2hpbGQsIGNvbnRleHQpID09PSAwKSB7XG4gICAgICAgICAgICBjYWxsQXJncy5wdXNoKFxuICAgICAgICAgICAgICAxICsgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgIC8qICR7UGF0Y2hGbGFnTmFtZXNbMV19ICovYCA6IGBgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW5baV0gPSB7XG4gICAgICAgICAgICB0eXBlOiAxMixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNoaWxkLFxuICAgICAgICAgICAgbG9jOiBjaGlsZC5sb2MsXG4gICAgICAgICAgICBjb2RlZ2VuTm9kZTogY3JlYXRlQ2FsbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgIGNvbnRleHQuaGVscGVyKENSRUFURV9URVhUKSxcbiAgICAgICAgICAgICAgY2FsbEFyZ3NcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuY29uc3Qgc2VlbiQxID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5jb25zdCB0cmFuc2Zvcm1PbmNlID0gKG5vZGUsIGNvbnRleHQpID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBmaW5kRGlyKG5vZGUsIFwib25jZVwiLCB0cnVlKSkge1xuICAgIGlmIChzZWVuJDEuaGFzKG5vZGUpIHx8IGNvbnRleHQuaW5WT25jZSB8fCBjb250ZXh0LmluU1NSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlZW4kMS5hZGQobm9kZSk7XG4gICAgY29udGV4dC5pblZPbmNlID0gdHJ1ZTtcbiAgICBjb250ZXh0LmhlbHBlcihTRVRfQkxPQ0tfVFJBQ0tJTkcpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb250ZXh0LmluVk9uY2UgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGN1ciA9IGNvbnRleHQuY3VycmVudE5vZGU7XG4gICAgICBpZiAoY3VyLmNvZGVnZW5Ob2RlKSB7XG4gICAgICAgIGN1ci5jb2RlZ2VuTm9kZSA9IGNvbnRleHQuY2FjaGUoXG4gICAgICAgICAgY3VyLmNvZGVnZW5Ob2RlLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zZm9ybU1vZGVsID0gKGRpciwgbm9kZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGV4cCwgYXJnIH0gPSBkaXI7XG4gIGlmICghZXhwKSB7XG4gICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgY3JlYXRlQ29tcGlsZXJFcnJvcig0MSwgZGlyLmxvYylcbiAgICApO1xuICAgIHJldHVybiBjcmVhdGVUcmFuc2Zvcm1Qcm9wcygpO1xuICB9XG4gIGNvbnN0IHJhd0V4cCA9IGV4cC5sb2Muc291cmNlLnRyaW0oKTtcbiAgY29uc3QgZXhwU3RyaW5nID0gZXhwLnR5cGUgPT09IDQgPyBleHAuY29udGVudCA6IHJhd0V4cDtcbiAgY29uc3QgYmluZGluZ1R5cGUgPSBjb250ZXh0LmJpbmRpbmdNZXRhZGF0YVtyYXdFeHBdO1xuICBpZiAoYmluZGluZ1R5cGUgPT09IFwicHJvcHNcIiB8fCBiaW5kaW5nVHlwZSA9PT0gXCJwcm9wcy1hbGlhc2VkXCIpIHtcbiAgICBjb250ZXh0Lm9uRXJyb3IoY3JlYXRlQ29tcGlsZXJFcnJvcig0NCwgZXhwLmxvYykpO1xuICAgIHJldHVybiBjcmVhdGVUcmFuc2Zvcm1Qcm9wcygpO1xuICB9XG4gIGlmICghZXhwU3RyaW5nLnRyaW0oKSB8fCAhaXNNZW1iZXJFeHByZXNzaW9uKGV4cCkgJiYgdHJ1ZSkge1xuICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgIGNyZWF0ZUNvbXBpbGVyRXJyb3IoNDIsIGV4cC5sb2MpXG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlVHJhbnNmb3JtUHJvcHMoKTtcbiAgfVxuICBjb25zdCBwcm9wTmFtZSA9IGFyZyA/IGFyZyA6IGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24oXCJtb2RlbFZhbHVlXCIsIHRydWUpO1xuICBjb25zdCBldmVudE5hbWUgPSBhcmcgPyBpc1N0YXRpY0V4cChhcmcpID8gYG9uVXBkYXRlOiR7Y2FtZWxpemUoYXJnLmNvbnRlbnQpfWAgOiBjcmVhdGVDb21wb3VuZEV4cHJlc3Npb24oWydcIm9uVXBkYXRlOlwiICsgJywgYXJnXSkgOiBgb25VcGRhdGU6bW9kZWxWYWx1ZWA7XG4gIGxldCBhc3NpZ25tZW50RXhwO1xuICBjb25zdCBldmVudEFyZyA9IGNvbnRleHQuaXNUUyA/IGAoJGV2ZW50OiBhbnkpYCA6IGAkZXZlbnRgO1xuICB7XG4gICAgYXNzaWdubWVudEV4cCA9IGNyZWF0ZUNvbXBvdW5kRXhwcmVzc2lvbihbXG4gICAgICBgJHtldmVudEFyZ30gPT4gKChgLFxuICAgICAgZXhwLFxuICAgICAgYCkgPSAkZXZlbnQpYFxuICAgIF0pO1xuICB9XG4gIGNvbnN0IHByb3BzID0gW1xuICAgIC8vIG1vZGVsVmFsdWU6IGZvb1xuICAgIGNyZWF0ZU9iamVjdFByb3BlcnR5KHByb3BOYW1lLCBkaXIuZXhwKSxcbiAgICAvLyBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogJGV2ZW50ID0+IChmb28gPSAkZXZlbnQpXG4gICAgY3JlYXRlT2JqZWN0UHJvcGVydHkoZXZlbnROYW1lLCBhc3NpZ25tZW50RXhwKVxuICBdO1xuICBpZiAoZGlyLm1vZGlmaWVycy5sZW5ndGggJiYgbm9kZS50YWdUeXBlID09PSAxKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gZGlyLm1vZGlmaWVycy5tYXAoKG0pID0+IG0uY29udGVudCkubWFwKChtKSA9PiAoaXNTaW1wbGVJZGVudGlmaWVyKG0pID8gbSA6IEpTT04uc3RyaW5naWZ5KG0pKSArIGA6IHRydWVgKS5qb2luKGAsIGApO1xuICAgIGNvbnN0IG1vZGlmaWVyc0tleSA9IGFyZyA/IGlzU3RhdGljRXhwKGFyZykgPyBgJHthcmcuY29udGVudH1Nb2RpZmllcnNgIDogY3JlYXRlQ29tcG91bmRFeHByZXNzaW9uKFthcmcsICcgKyBcIk1vZGlmaWVyc1wiJ10pIDogYG1vZGVsTW9kaWZpZXJzYDtcbiAgICBwcm9wcy5wdXNoKFxuICAgICAgY3JlYXRlT2JqZWN0UHJvcGVydHkoXG4gICAgICAgIG1vZGlmaWVyc0tleSxcbiAgICAgICAgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcbiAgICAgICAgICBgeyAke21vZGlmaWVyc30gfWAsXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgZGlyLmxvYyxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGVUcmFuc2Zvcm1Qcm9wcyhwcm9wcyk7XG59O1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtUHJvcHMocHJvcHMgPSBbXSkge1xuICByZXR1cm4geyBwcm9wcyB9O1xufVxuXG5jb25zdCB2YWxpZERpdmlzaW9uQ2hhclJFID0gL1tcXHcpLitcXC1fJFxcXV0vO1xuY29uc3QgdHJhbnNmb3JtRmlsdGVyID0gKG5vZGUsIGNvbnRleHQpID0+IHtcbiAgaWYgKCFpc0NvbXBhdEVuYWJsZWQoXCJDT01QSUxFUl9GSUxURVJTXCIsIGNvbnRleHQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChub2RlLnR5cGUgPT09IDUpIHtcbiAgICByZXdyaXRlRmlsdGVyKG5vZGUuY29udGVudCwgY29udGV4dCk7XG4gIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgbm9kZS5wcm9wcy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBpZiAocHJvcC50eXBlID09PSA3ICYmIHByb3AubmFtZSAhPT0gXCJmb3JcIiAmJiBwcm9wLmV4cCkge1xuICAgICAgICByZXdyaXRlRmlsdGVyKHByb3AuZXhwLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbmZ1bmN0aW9uIHJld3JpdGVGaWx0ZXIobm9kZSwgY29udGV4dCkge1xuICBpZiAobm9kZS50eXBlID09PSA0KSB7XG4gICAgcGFyc2VGaWx0ZXIobm9kZSwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAodHlwZW9mIGNoaWxkICE9PSBcIm9iamVjdFwiKSBjb250aW51ZTtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSA0KSB7XG4gICAgICAgIHBhcnNlRmlsdGVyKGNoaWxkLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gOCkge1xuICAgICAgICByZXdyaXRlRmlsdGVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09PSA1KSB7XG4gICAgICAgIHJld3JpdGVGaWx0ZXIoY2hpbGQuY29udGVudCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwYXJzZUZpbHRlcihub2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cCA9IG5vZGUuY29udGVudDtcbiAgbGV0IGluU2luZ2xlID0gZmFsc2U7XG4gIGxldCBpbkRvdWJsZSA9IGZhbHNlO1xuICBsZXQgaW5UZW1wbGF0ZVN0cmluZyA9IGZhbHNlO1xuICBsZXQgaW5SZWdleCA9IGZhbHNlO1xuICBsZXQgY3VybHkgPSAwO1xuICBsZXQgc3F1YXJlID0gMDtcbiAgbGV0IHBhcmVuID0gMDtcbiAgbGV0IGxhc3RGaWx0ZXJJbmRleCA9IDA7XG4gIGxldCBjLCBwcmV2LCBpLCBleHByZXNzaW9uLCBmaWx0ZXJzID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCBleHAubGVuZ3RoOyBpKyspIHtcbiAgICBwcmV2ID0gYztcbiAgICBjID0gZXhwLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGluU2luZ2xlKSB7XG4gICAgICBpZiAoYyA9PT0gMzkgJiYgcHJldiAhPT0gOTIpIGluU2luZ2xlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbkRvdWJsZSkge1xuICAgICAgaWYgKGMgPT09IDM0ICYmIHByZXYgIT09IDkyKSBpbkRvdWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5UZW1wbGF0ZVN0cmluZykge1xuICAgICAgaWYgKGMgPT09IDk2ICYmIHByZXYgIT09IDkyKSBpblRlbXBsYXRlU3RyaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpblJlZ2V4KSB7XG4gICAgICBpZiAoYyA9PT0gNDcgJiYgcHJldiAhPT0gOTIpIGluUmVnZXggPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDEyNCAmJiAvLyBwaXBlXG4gICAgZXhwLmNoYXJDb2RlQXQoaSArIDEpICE9PSAxMjQgJiYgZXhwLmNoYXJDb2RlQXQoaSAtIDEpICE9PSAxMjQgJiYgIWN1cmx5ICYmICFzcXVhcmUgJiYgIXBhcmVuKSB7XG4gICAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxO1xuICAgICAgICBleHByZXNzaW9uID0gZXhwLnNsaWNlKDAsIGkpLnRyaW0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHB1c2hGaWx0ZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgaW5Eb3VibGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBcIlxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGluU2luZ2xlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gJ1xuICAgICAgICBjYXNlIDk2OlxuICAgICAgICAgIGluVGVtcGxhdGVTdHJpbmcgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBgXG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgcGFyZW4rKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gKFxuICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgIHBhcmVuLS07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIClcbiAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICBzcXVhcmUrKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gW1xuICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgIHNxdWFyZS0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBdXG4gICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgIGN1cmx5Kys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIHtcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY3VybHktLTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjID09PSA0Nykge1xuICAgICAgICBsZXQgaiA9IGkgLSAxO1xuICAgICAgICBsZXQgcDtcbiAgICAgICAgZm9yICg7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgcCA9IGV4cC5jaGFyQXQoaik7XG4gICAgICAgICAgaWYgKHAgIT09IFwiIFwiKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXAgfHwgIXZhbGlkRGl2aXNpb25DaGFyUkUudGVzdChwKSkge1xuICAgICAgICAgIGluUmVnZXggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChleHByZXNzaW9uID09PSB2b2lkIDApIHtcbiAgICBleHByZXNzaW9uID0gZXhwLnNsaWNlKDAsIGkpLnRyaW0oKTtcbiAgfSBlbHNlIGlmIChsYXN0RmlsdGVySW5kZXggIT09IDApIHtcbiAgICBwdXNoRmlsdGVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaEZpbHRlcigpIHtcbiAgICBmaWx0ZXJzLnB1c2goZXhwLnNsaWNlKGxhc3RGaWx0ZXJJbmRleCwgaSkudHJpbSgpKTtcbiAgICBsYXN0RmlsdGVySW5kZXggPSBpICsgMTtcbiAgfVxuICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcbiAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIFwiQ09NUElMRVJfRklMVEVSU1wiLFxuICAgICAgY29udGV4dCxcbiAgICAgIG5vZGUubG9jXG4gICAgKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZXhwcmVzc2lvbiA9IHdyYXBGaWx0ZXIoZXhwcmVzc2lvbiwgZmlsdGVyc1tpXSwgY29udGV4dCk7XG4gICAgfVxuICAgIG5vZGUuY29udGVudCA9IGV4cHJlc3Npb247XG4gICAgbm9kZS5hc3QgPSB2b2lkIDA7XG4gIH1cbn1cbmZ1bmN0aW9uIHdyYXBGaWx0ZXIoZXhwLCBmaWx0ZXIsIGNvbnRleHQpIHtcbiAgY29udGV4dC5oZWxwZXIoUkVTT0xWRV9GSUxURVIpO1xuICBjb25zdCBpID0gZmlsdGVyLmluZGV4T2YoXCIoXCIpO1xuICBpZiAoaSA8IDApIHtcbiAgICBjb250ZXh0LmZpbHRlcnMuYWRkKGZpbHRlcik7XG4gICAgcmV0dXJuIGAke3RvVmFsaWRBc3NldElkKGZpbHRlciwgXCJmaWx0ZXJcIil9KCR7ZXhwfSlgO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5hbWUgPSBmaWx0ZXIuc2xpY2UoMCwgaSk7XG4gICAgY29uc3QgYXJncyA9IGZpbHRlci5zbGljZShpICsgMSk7XG4gICAgY29udGV4dC5maWx0ZXJzLmFkZChuYW1lKTtcbiAgICByZXR1cm4gYCR7dG9WYWxpZEFzc2V0SWQobmFtZSwgXCJmaWx0ZXJcIil9KCR7ZXhwfSR7YXJncyAhPT0gXCIpXCIgPyBcIixcIiArIGFyZ3MgOiBhcmdzfWA7XG4gIH1cbn1cblxuY29uc3Qgc2VlbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuY29uc3QgdHJhbnNmb3JtTWVtbyA9IChub2RlLCBjb250ZXh0KSA9PiB7XG4gIGlmIChub2RlLnR5cGUgPT09IDEpIHtcbiAgICBjb25zdCBkaXIgPSBmaW5kRGlyKG5vZGUsIFwibWVtb1wiKTtcbiAgICBpZiAoIWRpciB8fCBzZWVuLmhhcyhub2RlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWVuLmFkZChub2RlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29kZWdlbk5vZGUgPSBub2RlLmNvZGVnZW5Ob2RlIHx8IGNvbnRleHQuY3VycmVudE5vZGUuY29kZWdlbk5vZGU7XG4gICAgICBpZiAoY29kZWdlbk5vZGUgJiYgY29kZWdlbk5vZGUudHlwZSA9PT0gMTMpIHtcbiAgICAgICAgaWYgKG5vZGUudGFnVHlwZSAhPT0gMSkge1xuICAgICAgICAgIGNvbnZlcnRUb0Jsb2NrKGNvZGVnZW5Ob2RlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmNvZGVnZW5Ob2RlID0gY3JlYXRlQ2FsbEV4cHJlc3Npb24oY29udGV4dC5oZWxwZXIoV0lUSF9NRU1PKSwgW1xuICAgICAgICAgIGRpci5leHAsXG4gICAgICAgICAgY3JlYXRlRnVuY3Rpb25FeHByZXNzaW9uKHZvaWQgMCwgY29kZWdlbk5vZGUpLFxuICAgICAgICAgIGBfY2FjaGVgLFxuICAgICAgICAgIFN0cmluZyhjb250ZXh0LmNhY2hlZC5sZW5ndGgpXG4gICAgICAgIF0pO1xuICAgICAgICBjb250ZXh0LmNhY2hlZC5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldEJhc2VUcmFuc2Zvcm1QcmVzZXQocHJlZml4SWRlbnRpZmllcnMpIHtcbiAgcmV0dXJuIFtcbiAgICBbXG4gICAgICB0cmFuc2Zvcm1PbmNlLFxuICAgICAgdHJhbnNmb3JtSWYsXG4gICAgICB0cmFuc2Zvcm1NZW1vLFxuICAgICAgdHJhbnNmb3JtRm9yLFxuICAgICAgLi4uW3RyYW5zZm9ybUZpbHRlcl0gLFxuICAgICAgLi4uISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IFt0cmFuc2Zvcm1FeHByZXNzaW9uXSA6IFtdLFxuICAgICAgdHJhbnNmb3JtU2xvdE91dGxldCxcbiAgICAgIHRyYW5zZm9ybUVsZW1lbnQsXG4gICAgICB0cmFja1Nsb3RTY29wZXMsXG4gICAgICB0cmFuc2Zvcm1UZXh0XG4gICAgXSxcbiAgICB7XG4gICAgICBvbjogdHJhbnNmb3JtT24sXG4gICAgICBiaW5kOiB0cmFuc2Zvcm1CaW5kLFxuICAgICAgbW9kZWw6IHRyYW5zZm9ybU1vZGVsXG4gICAgfVxuICBdO1xufVxuZnVuY3Rpb24gYmFzZUNvbXBpbGUoc291cmNlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgb25FcnJvciA9IG9wdGlvbnMub25FcnJvciB8fCBkZWZhdWx0T25FcnJvcjtcbiAgY29uc3QgaXNNb2R1bGVNb2RlID0gb3B0aW9ucy5tb2RlID09PSBcIm1vZHVsZVwiO1xuICB7XG4gICAgaWYgKG9wdGlvbnMucHJlZml4SWRlbnRpZmllcnMgPT09IHRydWUpIHtcbiAgICAgIG9uRXJyb3IoY3JlYXRlQ29tcGlsZXJFcnJvcig0NykpO1xuICAgIH0gZWxzZSBpZiAoaXNNb2R1bGVNb2RlKSB7XG4gICAgICBvbkVycm9yKGNyZWF0ZUNvbXBpbGVyRXJyb3IoNDgpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcHJlZml4SWRlbnRpZmllcnMgPSBmYWxzZTtcbiAgaWYgKG9wdGlvbnMuY2FjaGVIYW5kbGVycykge1xuICAgIG9uRXJyb3IoY3JlYXRlQ29tcGlsZXJFcnJvcig0OSkpO1xuICB9XG4gIGlmIChvcHRpb25zLnNjb3BlSWQgJiYgIWlzTW9kdWxlTW9kZSkge1xuICAgIG9uRXJyb3IoY3JlYXRlQ29tcGlsZXJFcnJvcig1MCkpO1xuICB9XG4gIGNvbnN0IHJlc29sdmVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgIHByZWZpeElkZW50aWZpZXJzXG4gIH0pO1xuICBjb25zdCBhc3QgPSBpc1N0cmluZyhzb3VyY2UpID8gYmFzZVBhcnNlKHNvdXJjZSwgcmVzb2x2ZWRPcHRpb25zKSA6IHNvdXJjZTtcbiAgY29uc3QgW25vZGVUcmFuc2Zvcm1zLCBkaXJlY3RpdmVUcmFuc2Zvcm1zXSA9IGdldEJhc2VUcmFuc2Zvcm1QcmVzZXQoKTtcbiAgdHJhbnNmb3JtKFxuICAgIGFzdCxcbiAgICBleHRlbmQoe30sIHJlc29sdmVkT3B0aW9ucywge1xuICAgICAgbm9kZVRyYW5zZm9ybXM6IFtcbiAgICAgICAgLi4ubm9kZVRyYW5zZm9ybXMsXG4gICAgICAgIC4uLm9wdGlvbnMubm9kZVRyYW5zZm9ybXMgfHwgW11cbiAgICAgICAgLy8gdXNlciB0cmFuc2Zvcm1zXG4gICAgICBdLFxuICAgICAgZGlyZWN0aXZlVHJhbnNmb3JtczogZXh0ZW5kKFxuICAgICAgICB7fSxcbiAgICAgICAgZGlyZWN0aXZlVHJhbnNmb3JtcyxcbiAgICAgICAgb3B0aW9ucy5kaXJlY3RpdmVUcmFuc2Zvcm1zIHx8IHt9XG4gICAgICAgIC8vIHVzZXIgdHJhbnNmb3Jtc1xuICAgICAgKVxuICAgIH0pXG4gICk7XG4gIHJldHVybiBnZW5lcmF0ZShhc3QsIHJlc29sdmVkT3B0aW9ucyk7XG59XG5cbmNvbnN0IEJpbmRpbmdUeXBlcyA9IHtcbiAgXCJEQVRBXCI6IFwiZGF0YVwiLFxuICBcIlBST1BTXCI6IFwicHJvcHNcIixcbiAgXCJQUk9QU19BTElBU0VEXCI6IFwicHJvcHMtYWxpYXNlZFwiLFxuICBcIlNFVFVQX0xFVFwiOiBcInNldHVwLWxldFwiLFxuICBcIlNFVFVQX0NPTlNUXCI6IFwic2V0dXAtY29uc3RcIixcbiAgXCJTRVRVUF9SRUFDVElWRV9DT05TVFwiOiBcInNldHVwLXJlYWN0aXZlLWNvbnN0XCIsXG4gIFwiU0VUVVBfTUFZQkVfUkVGXCI6IFwic2V0dXAtbWF5YmUtcmVmXCIsXG4gIFwiU0VUVVBfUkVGXCI6IFwic2V0dXAtcmVmXCIsXG4gIFwiT1BUSU9OU1wiOiBcIm9wdGlvbnNcIixcbiAgXCJMSVRFUkFMX0NPTlNUXCI6IFwibGl0ZXJhbC1jb25zdFwiXG59O1xuXG5jb25zdCBub29wRGlyZWN0aXZlVHJhbnNmb3JtID0gKCkgPT4gKHsgcHJvcHM6IFtdIH0pO1xuXG5leHBvcnQgeyBCQVNFX1RSQU5TSVRJT04sIEJpbmRpbmdUeXBlcywgQ0FNRUxJWkUsIENBUElUQUxJWkUsIENSRUFURV9CTE9DSywgQ1JFQVRFX0NPTU1FTlQsIENSRUFURV9FTEVNRU5UX0JMT0NLLCBDUkVBVEVfRUxFTUVOVF9WTk9ERSwgQ1JFQVRFX1NMT1RTLCBDUkVBVEVfU1RBVElDLCBDUkVBVEVfVEVYVCwgQ1JFQVRFX1ZOT0RFLCBDb21waWxlckRlcHJlY2F0aW9uVHlwZXMsIENvbnN0YW50VHlwZXMsIEVsZW1lbnRUeXBlcywgRXJyb3JDb2RlcywgRlJBR01FTlQsIEdVQVJEX1JFQUNUSVZFX1BST1BTLCBJU19NRU1PX1NBTUUsIElTX1JFRiwgS0VFUF9BTElWRSwgTUVSR0VfUFJPUFMsIE5PUk1BTElaRV9DTEFTUywgTk9STUFMSVpFX1BST1BTLCBOT1JNQUxJWkVfU1RZTEUsIE5hbWVzcGFjZXMsIE5vZGVUeXBlcywgT1BFTl9CTE9DSywgUE9QX1NDT1BFX0lELCBQVVNIX1NDT1BFX0lELCBSRU5ERVJfTElTVCwgUkVOREVSX1NMT1QsIFJFU09MVkVfQ09NUE9ORU5ULCBSRVNPTFZFX0RJUkVDVElWRSwgUkVTT0xWRV9EWU5BTUlDX0NPTVBPTkVOVCwgUkVTT0xWRV9GSUxURVIsIFNFVF9CTE9DS19UUkFDS0lORywgU1VTUEVOU0UsIFRFTEVQT1JULCBUT19ESVNQTEFZX1NUUklORywgVE9fSEFORExFUlMsIFRPX0hBTkRMRVJfS0VZLCBUU19OT0RFX1RZUEVTLCBVTlJFRiwgV0lUSF9DVFgsIFdJVEhfRElSRUNUSVZFUywgV0lUSF9NRU1PLCBhZHZhbmNlUG9zaXRpb25XaXRoQ2xvbmUsIGFkdmFuY2VQb3NpdGlvbldpdGhNdXRhdGlvbiwgYXNzZXJ0LCBiYXNlQ29tcGlsZSwgYmFzZVBhcnNlLCBidWlsZERpcmVjdGl2ZUFyZ3MsIGJ1aWxkUHJvcHMsIGJ1aWxkU2xvdHMsIGNoZWNrQ29tcGF0RW5hYmxlZCwgY29udmVydFRvQmxvY2ssIGNyZWF0ZUFycmF5RXhwcmVzc2lvbiwgY3JlYXRlQXNzaWdubWVudEV4cHJlc3Npb24sIGNyZWF0ZUJsb2NrU3RhdGVtZW50LCBjcmVhdGVDYWNoZUV4cHJlc3Npb24sIGNyZWF0ZUNhbGxFeHByZXNzaW9uLCBjcmVhdGVDb21waWxlckVycm9yLCBjcmVhdGVDb21wb3VuZEV4cHJlc3Npb24sIGNyZWF0ZUNvbmRpdGlvbmFsRXhwcmVzc2lvbiwgY3JlYXRlRm9yTG9vcFBhcmFtcywgY3JlYXRlRnVuY3Rpb25FeHByZXNzaW9uLCBjcmVhdGVJZlN0YXRlbWVudCwgY3JlYXRlSW50ZXJwb2xhdGlvbiwgY3JlYXRlT2JqZWN0RXhwcmVzc2lvbiwgY3JlYXRlT2JqZWN0UHJvcGVydHksIGNyZWF0ZVJldHVyblN0YXRlbWVudCwgY3JlYXRlUm9vdCwgY3JlYXRlU2VxdWVuY2VFeHByZXNzaW9uLCBjcmVhdGVTaW1wbGVFeHByZXNzaW9uLCBjcmVhdGVTdHJ1Y3R1cmFsRGlyZWN0aXZlVHJhbnNmb3JtLCBjcmVhdGVUZW1wbGF0ZUxpdGVyYWwsIGNyZWF0ZVRyYW5zZm9ybUNvbnRleHQsIGNyZWF0ZVZOb2RlQ2FsbCwgZXJyb3JNZXNzYWdlcywgZXh0cmFjdElkZW50aWZpZXJzLCBmaW5kRGlyLCBmaW5kUHJvcCwgZm9yQWxpYXNSRSwgZ2VuZXJhdGUsIGdldEJhc2VUcmFuc2Zvcm1QcmVzZXQsIGdldENvbnN0YW50VHlwZSwgZ2V0TWVtb2VkVk5vZGVDYWxsLCBnZXRWTm9kZUJsb2NrSGVscGVyLCBnZXRWTm9kZUhlbHBlciwgaGFzRHluYW1pY0tleVZCaW5kLCBoYXNTY29wZVJlZiwgaGVscGVyTmFtZU1hcCwgaW5qZWN0UHJvcCwgaXNDb3JlQ29tcG9uZW50LCBpc0ZuRXhwcmVzc2lvbiwgaXNGbkV4cHJlc3Npb25Ccm93c2VyLCBpc0ZuRXhwcmVzc2lvbk5vZGUsIGlzRnVuY3Rpb25UeXBlLCBpc0luRGVzdHJ1Y3R1cmVBc3NpZ25tZW50LCBpc0luTmV3RXhwcmVzc2lvbiwgaXNNZW1iZXJFeHByZXNzaW9uLCBpc01lbWJlckV4cHJlc3Npb25Ccm93c2VyLCBpc01lbWJlckV4cHJlc3Npb25Ob2RlLCBpc1JlZmVyZW5jZWRJZGVudGlmaWVyLCBpc1NpbXBsZUlkZW50aWZpZXIsIGlzU2xvdE91dGxldCwgaXNTdGF0aWNBcmdPZiwgaXNTdGF0aWNFeHAsIGlzU3RhdGljUHJvcGVydHksIGlzU3RhdGljUHJvcGVydHlLZXksIGlzVGVtcGxhdGVOb2RlLCBpc1RleHQkMSBhcyBpc1RleHQsIGlzVlByZSwgaXNWU2xvdCwgbG9jU3R1Yiwgbm9vcERpcmVjdGl2ZVRyYW5zZm9ybSwgcHJvY2Vzc0V4cHJlc3Npb24sIHByb2Nlc3NGb3IsIHByb2Nlc3NJZiwgcHJvY2Vzc1Nsb3RPdXRsZXQsIHJlZ2lzdGVyUnVudGltZUhlbHBlcnMsIHJlc29sdmVDb21wb25lbnRUeXBlLCBzdHJpbmdpZnlFeHByZXNzaW9uLCB0b1ZhbGlkQXNzZXRJZCwgdHJhY2tTbG90U2NvcGVzLCB0cmFja1ZGb3JTbG90U2NvcGVzLCB0cmFuc2Zvcm0sIHRyYW5zZm9ybUJpbmQsIHRyYW5zZm9ybUVsZW1lbnQsIHRyYW5zZm9ybUV4cHJlc3Npb24sIHRyYW5zZm9ybU1vZGVsLCB0cmFuc2Zvcm1PbiwgdHJhdmVyc2VOb2RlLCB1bndyYXBUU05vZGUsIHdhbGtCbG9ja0RlY2xhcmF0aW9ucywgd2Fsa0Z1bmN0aW9uUGFyYW1zLCB3YWxrSWRlbnRpZmllcnMsIHdhcm5EZXByZWNhdGlvbiB9O1xuIiwiLyoqXG4qIEB2dWUvY29tcGlsZXItZG9tIHYzLjUuMThcbiogKGMpIDIwMTgtcHJlc2VudCBZdXhpIChFdmFuKSBZb3UgYW5kIFZ1ZSBjb250cmlidXRvcnNcbiogQGxpY2Vuc2UgTUlUXG4qKi9cbmltcG9ydCB7IHJlZ2lzdGVyUnVudGltZUhlbHBlcnMsIGNyZWF0ZVNpbXBsZUV4cHJlc3Npb24sIGNyZWF0ZUNvbXBpbGVyRXJyb3IsIGNyZWF0ZU9iamVjdFByb3BlcnR5LCBjcmVhdGVDYWxsRXhwcmVzc2lvbiwgZ2V0Q29uc3RhbnRUeXBlLCBUT19ESVNQTEFZX1NUUklORywgdHJhbnNmb3JtTW9kZWwgYXMgdHJhbnNmb3JtTW9kZWwkMSwgZmluZFByb3AsIGhhc0R5bmFtaWNLZXlWQmluZCwgZmluZERpciwgaXNTdGF0aWNBcmdPZiwgdHJhbnNmb3JtT24gYXMgdHJhbnNmb3JtT24kMSwgaXNTdGF0aWNFeHAsIGNyZWF0ZUNvbXBvdW5kRXhwcmVzc2lvbiwgY2hlY2tDb21wYXRFbmFibGVkLCBub29wRGlyZWN0aXZlVHJhbnNmb3JtLCBiYXNlQ29tcGlsZSwgYmFzZVBhcnNlIH0gZnJvbSAnQHZ1ZS9jb21waWxlci1jb3JlJztcbmV4cG9ydCAqIGZyb20gJ0B2dWUvY29tcGlsZXItY29yZSc7XG5pbXBvcnQgeyBpc0hUTUxUYWcsIGlzU1ZHVGFnLCBpc01hdGhNTFRhZywgaXNWb2lkVGFnLCBwYXJzZVN0cmluZ1N0eWxlLCBtYWtlTWFwLCBjYXBpdGFsaXplLCBleHRlbmQgfSBmcm9tICdAdnVlL3NoYXJlZCc7XG5cbmNvbnN0IFZfTU9ERUxfUkFESU8gPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGB2TW9kZWxSYWRpb2AgOiBgYCk7XG5jb25zdCBWX01PREVMX0NIRUNLQk9YID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYHZNb2RlbENoZWNrYm94YCA6IGBgXG4pO1xuY29uc3QgVl9NT0RFTF9URVhUID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgdk1vZGVsVGV4dGAgOiBgYCk7XG5jb25zdCBWX01PREVMX1NFTEVDVCA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGB2TW9kZWxTZWxlY3RgIDogYGBcbik7XG5jb25zdCBWX01PREVMX0RZTkFNSUMgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgdk1vZGVsRHluYW1pY2AgOiBgYFxuKTtcbmNvbnN0IFZfT05fV0lUSF9NT0RJRklFUlMgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgdk9uTW9kaWZpZXJzR3VhcmRgIDogYGBcbik7XG5jb25zdCBWX09OX1dJVEhfS0VZUyA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGB2T25LZXlzR3VhcmRgIDogYGBcbik7XG5jb25zdCBWX1NIT1cgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGB2U2hvd2AgOiBgYCk7XG5jb25zdCBUUkFOU0lUSU9OID0gU3ltYm9sKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBgVHJhbnNpdGlvbmAgOiBgYCk7XG5jb25zdCBUUkFOU0lUSU9OX0dST1VQID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gYFRyYW5zaXRpb25Hcm91cGAgOiBgYFxuKTtcbnJlZ2lzdGVyUnVudGltZUhlbHBlcnMoe1xuICBbVl9NT0RFTF9SQURJT106IGB2TW9kZWxSYWRpb2AsXG4gIFtWX01PREVMX0NIRUNLQk9YXTogYHZNb2RlbENoZWNrYm94YCxcbiAgW1ZfTU9ERUxfVEVYVF06IGB2TW9kZWxUZXh0YCxcbiAgW1ZfTU9ERUxfU0VMRUNUXTogYHZNb2RlbFNlbGVjdGAsXG4gIFtWX01PREVMX0RZTkFNSUNdOiBgdk1vZGVsRHluYW1pY2AsXG4gIFtWX09OX1dJVEhfTU9ESUZJRVJTXTogYHdpdGhNb2RpZmllcnNgLFxuICBbVl9PTl9XSVRIX0tFWVNdOiBgd2l0aEtleXNgLFxuICBbVl9TSE9XXTogYHZTaG93YCxcbiAgW1RSQU5TSVRJT05dOiBgVHJhbnNpdGlvbmAsXG4gIFtUUkFOU0lUSU9OX0dST1VQXTogYFRyYW5zaXRpb25Hcm91cGBcbn0pO1xuXG5sZXQgZGVjb2RlcjtcbmZ1bmN0aW9uIGRlY29kZUh0bWxCcm93c2VyKHJhdywgYXNBdHRyID0gZmFsc2UpIHtcbiAgaWYgKCFkZWNvZGVyKSB7XG4gICAgZGVjb2RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIH1cbiAgaWYgKGFzQXR0cikge1xuICAgIGRlY29kZXIuaW5uZXJIVE1MID0gYDxkaXYgZm9vPVwiJHtyYXcucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIil9XCI+YDtcbiAgICByZXR1cm4gZGVjb2Rlci5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJmb29cIik7XG4gIH0gZWxzZSB7XG4gICAgZGVjb2Rlci5pbm5lckhUTUwgPSByYXc7XG4gICAgcmV0dXJuIGRlY29kZXIudGV4dENvbnRlbnQ7XG4gIH1cbn1cblxuY29uc3QgcGFyc2VyT3B0aW9ucyA9IHtcbiAgcGFyc2VNb2RlOiBcImh0bWxcIixcbiAgaXNWb2lkVGFnLFxuICBpc05hdGl2ZVRhZzogKHRhZykgPT4gaXNIVE1MVGFnKHRhZykgfHwgaXNTVkdUYWcodGFnKSB8fCBpc01hdGhNTFRhZyh0YWcpLFxuICBpc1ByZVRhZzogKHRhZykgPT4gdGFnID09PSBcInByZVwiLFxuICBpc0lnbm9yZU5ld2xpbmVUYWc6ICh0YWcpID0+IHRhZyA9PT0gXCJwcmVcIiB8fCB0YWcgPT09IFwidGV4dGFyZWFcIixcbiAgZGVjb2RlRW50aXRpZXM6IGRlY29kZUh0bWxCcm93c2VyICxcbiAgaXNCdWlsdEluQ29tcG9uZW50OiAodGFnKSA9PiB7XG4gICAgaWYgKHRhZyA9PT0gXCJUcmFuc2l0aW9uXCIgfHwgdGFnID09PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgcmV0dXJuIFRSQU5TSVRJT047XG4gICAgfSBlbHNlIGlmICh0YWcgPT09IFwiVHJhbnNpdGlvbkdyb3VwXCIgfHwgdGFnID09PSBcInRyYW5zaXRpb24tZ3JvdXBcIikge1xuICAgICAgcmV0dXJuIFRSQU5TSVRJT05fR1JPVVA7XG4gICAgfVxuICB9LFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9wYXJzaW5nLmh0bWwjdHJlZS1jb25zdHJ1Y3Rpb24tZGlzcGF0Y2hlclxuICBnZXROYW1lc3BhY2UodGFnLCBwYXJlbnQsIHJvb3ROYW1lc3BhY2UpIHtcbiAgICBsZXQgbnMgPSBwYXJlbnQgPyBwYXJlbnQubnMgOiByb290TmFtZXNwYWNlO1xuICAgIGlmIChwYXJlbnQgJiYgbnMgPT09IDIpIHtcbiAgICAgIGlmIChwYXJlbnQudGFnID09PSBcImFubm90YXRpb24teG1sXCIpIHtcbiAgICAgICAgaWYgKHRhZyA9PT0gXCJzdmdcIikge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQucHJvcHMuc29tZShcbiAgICAgICAgICAoYSkgPT4gYS50eXBlID09PSA2ICYmIGEubmFtZSA9PT0gXCJlbmNvZGluZ1wiICYmIGEudmFsdWUgIT0gbnVsbCAmJiAoYS52YWx1ZS5jb250ZW50ID09PSBcInRleHQvaHRtbFwiIHx8IGEudmFsdWUuY29udGVudCA9PT0gXCJhcHBsaWNhdGlvbi94aHRtbCt4bWxcIilcbiAgICAgICAgKSkge1xuICAgICAgICAgIG5zID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgvXm0oPzpbaW9uc118dGV4dCkkLy50ZXN0KHBhcmVudC50YWcpICYmIHRhZyAhPT0gXCJtZ2x5cGhcIiAmJiB0YWcgIT09IFwibWFsaWdubWFya1wiKSB7XG4gICAgICAgIG5zID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmVudCAmJiBucyA9PT0gMSkge1xuICAgICAgaWYgKHBhcmVudC50YWcgPT09IFwiZm9yZWlnbk9iamVjdFwiIHx8IHBhcmVudC50YWcgPT09IFwiZGVzY1wiIHx8IHBhcmVudC50YWcgPT09IFwidGl0bGVcIikge1xuICAgICAgICBucyA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChucyA9PT0gMCkge1xuICAgICAgaWYgKHRhZyA9PT0gXCJzdmdcIikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWcgPT09IFwibWF0aFwiKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnM7XG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zZm9ybVN0eWxlID0gKG5vZGUpID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gMSkge1xuICAgIG5vZGUucHJvcHMuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgICAgaWYgKHAudHlwZSA9PT0gNiAmJiBwLm5hbWUgPT09IFwic3R5bGVcIiAmJiBwLnZhbHVlKSB7XG4gICAgICAgIG5vZGUucHJvcHNbaV0gPSB7XG4gICAgICAgICAgdHlwZTogNyxcbiAgICAgICAgICBuYW1lOiBgYmluZGAsXG4gICAgICAgICAgYXJnOiBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGBzdHlsZWAsIHRydWUsIHAubG9jKSxcbiAgICAgICAgICBleHA6IHBhcnNlSW5saW5lQ1NTKHAudmFsdWUuY29udGVudCwgcC5sb2MpLFxuICAgICAgICAgIG1vZGlmaWVyczogW10sXG4gICAgICAgICAgbG9jOiBwLmxvY1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuY29uc3QgcGFyc2VJbmxpbmVDU1MgPSAoY3NzVGV4dCwgbG9jKSA9PiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBwYXJzZVN0cmluZ1N0eWxlKGNzc1RleHQpO1xuICByZXR1cm4gY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcbiAgICBKU09OLnN0cmluZ2lmeShub3JtYWxpemVkKSxcbiAgICBmYWxzZSxcbiAgICBsb2MsXG4gICAgM1xuICApO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NQ29tcGlsZXJFcnJvcihjb2RlLCBsb2MpIHtcbiAgcmV0dXJuIGNyZWF0ZUNvbXBpbGVyRXJyb3IoXG4gICAgY29kZSxcbiAgICBsb2MsXG4gICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSA/IERPTUVycm9yTWVzc2FnZXMgOiB2b2lkIDBcbiAgKTtcbn1cbmNvbnN0IERPTUVycm9yQ29kZXMgPSB7XG4gIFwiWF9WX0hUTUxfTk9fRVhQUkVTU0lPTlwiOiA1MyxcbiAgXCI1M1wiOiBcIlhfVl9IVE1MX05PX0VYUFJFU1NJT05cIixcbiAgXCJYX1ZfSFRNTF9XSVRIX0NISUxEUkVOXCI6IDU0LFxuICBcIjU0XCI6IFwiWF9WX0hUTUxfV0lUSF9DSElMRFJFTlwiLFxuICBcIlhfVl9URVhUX05PX0VYUFJFU1NJT05cIjogNTUsXG4gIFwiNTVcIjogXCJYX1ZfVEVYVF9OT19FWFBSRVNTSU9OXCIsXG4gIFwiWF9WX1RFWFRfV0lUSF9DSElMRFJFTlwiOiA1NixcbiAgXCI1NlwiOiBcIlhfVl9URVhUX1dJVEhfQ0hJTERSRU5cIixcbiAgXCJYX1ZfTU9ERUxfT05fSU5WQUxJRF9FTEVNRU5UXCI6IDU3LFxuICBcIjU3XCI6IFwiWF9WX01PREVMX09OX0lOVkFMSURfRUxFTUVOVFwiLFxuICBcIlhfVl9NT0RFTF9BUkdfT05fRUxFTUVOVFwiOiA1OCxcbiAgXCI1OFwiOiBcIlhfVl9NT0RFTF9BUkdfT05fRUxFTUVOVFwiLFxuICBcIlhfVl9NT0RFTF9PTl9GSUxFX0lOUFVUX0VMRU1FTlRcIjogNTksXG4gIFwiNTlcIjogXCJYX1ZfTU9ERUxfT05fRklMRV9JTlBVVF9FTEVNRU5UXCIsXG4gIFwiWF9WX01PREVMX1VOTkVDRVNTQVJZX1ZBTFVFXCI6IDYwLFxuICBcIjYwXCI6IFwiWF9WX01PREVMX1VOTkVDRVNTQVJZX1ZBTFVFXCIsXG4gIFwiWF9WX1NIT1dfTk9fRVhQUkVTU0lPTlwiOiA2MSxcbiAgXCI2MVwiOiBcIlhfVl9TSE9XX05PX0VYUFJFU1NJT05cIixcbiAgXCJYX1RSQU5TSVRJT05fSU5WQUxJRF9DSElMRFJFTlwiOiA2MixcbiAgXCI2MlwiOiBcIlhfVFJBTlNJVElPTl9JTlZBTElEX0NISUxEUkVOXCIsXG4gIFwiWF9JR05PUkVEX1NJREVfRUZGRUNUX1RBR1wiOiA2MyxcbiAgXCI2M1wiOiBcIlhfSUdOT1JFRF9TSURFX0VGRkVDVF9UQUdcIixcbiAgXCJfX0VYVEVORF9QT0lOVF9fXCI6IDY0LFxuICBcIjY0XCI6IFwiX19FWFRFTkRfUE9JTlRfX1wiXG59O1xuY29uc3QgRE9NRXJyb3JNZXNzYWdlcyA9IHtcbiAgWzUzXTogYHYtaHRtbCBpcyBtaXNzaW5nIGV4cHJlc3Npb24uYCxcbiAgWzU0XTogYHYtaHRtbCB3aWxsIG92ZXJyaWRlIGVsZW1lbnQgY2hpbGRyZW4uYCxcbiAgWzU1XTogYHYtdGV4dCBpcyBtaXNzaW5nIGV4cHJlc3Npb24uYCxcbiAgWzU2XTogYHYtdGV4dCB3aWxsIG92ZXJyaWRlIGVsZW1lbnQgY2hpbGRyZW4uYCxcbiAgWzU3XTogYHYtbW9kZWwgY2FuIG9ubHkgYmUgdXNlZCBvbiA8aW5wdXQ+LCA8dGV4dGFyZWE+IGFuZCA8c2VsZWN0PiBlbGVtZW50cy5gLFxuICBbNThdOiBgdi1tb2RlbCBhcmd1bWVudCBpcyBub3Qgc3VwcG9ydGVkIG9uIHBsYWluIGVsZW1lbnRzLmAsXG4gIFs1OV06IGB2LW1vZGVsIGNhbm5vdCBiZSB1c2VkIG9uIGZpbGUgaW5wdXRzIHNpbmNlIHRoZXkgYXJlIHJlYWQtb25seS4gVXNlIGEgdi1vbjpjaGFuZ2UgbGlzdGVuZXIgaW5zdGVhZC5gLFxuICBbNjBdOiBgVW5uZWNlc3NhcnkgdmFsdWUgYmluZGluZyB1c2VkIGFsb25nc2lkZSB2LW1vZGVsLiBJdCB3aWxsIGludGVyZmVyZSB3aXRoIHYtbW9kZWwncyBiZWhhdmlvci5gLFxuICBbNjFdOiBgdi1zaG93IGlzIG1pc3NpbmcgZXhwcmVzc2lvbi5gLFxuICBbNjJdOiBgPFRyYW5zaXRpb24+IGV4cGVjdHMgZXhhY3RseSBvbmUgY2hpbGQgZWxlbWVudCBvciBjb21wb25lbnQuYCxcbiAgWzYzXTogYFRhZ3Mgd2l0aCBzaWRlIGVmZmVjdCAoPHNjcmlwdD4gYW5kIDxzdHlsZT4pIGFyZSBpZ25vcmVkIGluIGNsaWVudCBjb21wb25lbnQgdGVtcGxhdGVzLmBcbn07XG5cbmNvbnN0IHRyYW5zZm9ybVZIdG1sID0gKGRpciwgbm9kZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGV4cCwgbG9jIH0gPSBkaXI7XG4gIGlmICghZXhwKSB7XG4gICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgY3JlYXRlRE9NQ29tcGlsZXJFcnJvcig1MywgbG9jKVxuICAgICk7XG4gIH1cbiAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgY3JlYXRlRE9NQ29tcGlsZXJFcnJvcig1NCwgbG9jKVxuICAgICk7XG4gICAgbm9kZS5jaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IFtcbiAgICAgIGNyZWF0ZU9iamVjdFByb3BlcnR5KFxuICAgICAgICBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGBpbm5lckhUTUxgLCB0cnVlLCBsb2MpLFxuICAgICAgICBleHAgfHwgY3JlYXRlU2ltcGxlRXhwcmVzc2lvbihcIlwiLCB0cnVlKVxuICAgICAgKVxuICAgIF1cbiAgfTtcbn07XG5cbmNvbnN0IHRyYW5zZm9ybVZUZXh0ID0gKGRpciwgbm9kZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGV4cCwgbG9jIH0gPSBkaXI7XG4gIGlmICghZXhwKSB7XG4gICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgY3JlYXRlRE9NQ29tcGlsZXJFcnJvcig1NSwgbG9jKVxuICAgICk7XG4gIH1cbiAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY29udGV4dC5vbkVycm9yKFxuICAgICAgY3JlYXRlRE9NQ29tcGlsZXJFcnJvcig1NiwgbG9jKVxuICAgICk7XG4gICAgbm9kZS5jaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IFtcbiAgICAgIGNyZWF0ZU9iamVjdFByb3BlcnR5KFxuICAgICAgICBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGB0ZXh0Q29udGVudGAsIHRydWUpLFxuICAgICAgICBleHAgPyBnZXRDb25zdGFudFR5cGUoZXhwLCBjb250ZXh0KSA+IDAgPyBleHAgOiBjcmVhdGVDYWxsRXhwcmVzc2lvbihcbiAgICAgICAgICBjb250ZXh0LmhlbHBlclN0cmluZyhUT19ESVNQTEFZX1NUUklORyksXG4gICAgICAgICAgW2V4cF0sXG4gICAgICAgICAgbG9jXG4gICAgICAgICkgOiBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKFwiXCIsIHRydWUpXG4gICAgICApXG4gICAgXVxuICB9O1xufTtcblxuY29uc3QgdHJhbnNmb3JtTW9kZWwgPSAoZGlyLCBub2RlLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IGJhc2VSZXN1bHQgPSB0cmFuc2Zvcm1Nb2RlbCQxKGRpciwgbm9kZSwgY29udGV4dCk7XG4gIGlmICghYmFzZVJlc3VsdC5wcm9wcy5sZW5ndGggfHwgbm9kZS50YWdUeXBlID09PSAxKSB7XG4gICAgcmV0dXJuIGJhc2VSZXN1bHQ7XG4gIH1cbiAgaWYgKGRpci5hcmcpIHtcbiAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICBjcmVhdGVET01Db21waWxlckVycm9yKFxuICAgICAgICA1OCxcbiAgICAgICAgZGlyLmFyZy5sb2NcbiAgICAgIClcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlZFZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gZmluZERpcihub2RlLCBcImJpbmRcIik7XG4gICAgaWYgKHZhbHVlICYmIGlzU3RhdGljQXJnT2YodmFsdWUuYXJnLCBcInZhbHVlXCIpKSB7XG4gICAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICAgIGNyZWF0ZURPTUNvbXBpbGVyRXJyb3IoXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgdmFsdWUubG9jXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHsgdGFnIH0gPSBub2RlO1xuICBjb25zdCBpc0N1c3RvbUVsZW1lbnQgPSBjb250ZXh0LmlzQ3VzdG9tRWxlbWVudCh0YWcpO1xuICBpZiAodGFnID09PSBcImlucHV0XCIgfHwgdGFnID09PSBcInRleHRhcmVhXCIgfHwgdGFnID09PSBcInNlbGVjdFwiIHx8IGlzQ3VzdG9tRWxlbWVudCkge1xuICAgIGxldCBkaXJlY3RpdmVUb1VzZSA9IFZfTU9ERUxfVEVYVDtcbiAgICBsZXQgaXNJbnZhbGlkVHlwZSA9IGZhbHNlO1xuICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIiB8fCBpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaW5kUHJvcChub2RlLCBgdHlwZWApO1xuICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUudHlwZSA9PT0gNykge1xuICAgICAgICAgIGRpcmVjdGl2ZVRvVXNlID0gVl9NT0RFTF9EWU5BTUlDO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUudmFsdWUpIHtcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUudmFsdWUuY29udGVudCkge1xuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZVRvVXNlID0gVl9NT0RFTF9SQURJTztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgICAgICAgZGlyZWN0aXZlVG9Vc2UgPSBWX01PREVMX0NIRUNLQk9YO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmaWxlXCI6XG4gICAgICAgICAgICAgIGlzSW52YWxpZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICAgICAgICAgICAgY3JlYXRlRE9NQ29tcGlsZXJFcnJvcihcbiAgICAgICAgICAgICAgICAgIDU5LFxuICAgICAgICAgICAgICAgICAgZGlyLmxvY1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrRHVwbGljYXRlZFZhbHVlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYXNEeW5hbWljS2V5VkJpbmQobm9kZSkpIHtcbiAgICAgICAgZGlyZWN0aXZlVG9Vc2UgPSBWX01PREVMX0RZTkFNSUM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrRHVwbGljYXRlZFZhbHVlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YWcgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgIGRpcmVjdGl2ZVRvVXNlID0gVl9NT0RFTF9TRUxFQ1Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgY2hlY2tEdXBsaWNhdGVkVmFsdWUoKTtcbiAgICB9XG4gICAgaWYgKCFpc0ludmFsaWRUeXBlKSB7XG4gICAgICBiYXNlUmVzdWx0Lm5lZWRSdW50aW1lID0gY29udGV4dC5oZWxwZXIoZGlyZWN0aXZlVG9Vc2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0Lm9uRXJyb3IoXG4gICAgICBjcmVhdGVET01Db21waWxlckVycm9yKFxuICAgICAgICA1NyxcbiAgICAgICAgZGlyLmxvY1xuICAgICAgKVxuICAgICk7XG4gIH1cbiAgYmFzZVJlc3VsdC5wcm9wcyA9IGJhc2VSZXN1bHQucHJvcHMuZmlsdGVyKFxuICAgIChwKSA9PiAhKHAua2V5LnR5cGUgPT09IDQgJiYgcC5rZXkuY29udGVudCA9PT0gXCJtb2RlbFZhbHVlXCIpXG4gICk7XG4gIHJldHVybiBiYXNlUmVzdWx0O1xufTtcblxuY29uc3QgaXNFdmVudE9wdGlvbk1vZGlmaWVyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoYHBhc3NpdmUsb25jZSxjYXB0dXJlYCk7XG5jb25zdCBpc05vbktleU1vZGlmaWVyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIC8vIGV2ZW50IHByb3BhZ2F0aW9uIG1hbmFnZW1lbnRcbiAgYHN0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QsbWlkZGxlYFxuKTtcbmNvbnN0IG1heWJlS2V5TW9kaWZpZXIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcImxlZnQscmlnaHRcIik7XG5jb25zdCBpc0tleWJvYXJkRXZlbnQgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChgb25rZXl1cCxvbmtleWRvd24sb25rZXlwcmVzc2ApO1xuY29uc3QgcmVzb2x2ZU1vZGlmaWVycyA9IChrZXksIG1vZGlmaWVycywgY29udGV4dCwgbG9jKSA9PiB7XG4gIGNvbnN0IGtleU1vZGlmaWVycyA9IFtdO1xuICBjb25zdCBub25LZXlNb2RpZmllcnMgPSBbXTtcbiAgY29uc3QgZXZlbnRPcHRpb25Nb2RpZmllcnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtb2RpZmllciA9IG1vZGlmaWVyc1tpXS5jb250ZW50O1xuICAgIGlmIChtb2RpZmllciA9PT0gXCJuYXRpdmVcIiAmJiBjaGVja0NvbXBhdEVuYWJsZWQoXG4gICAgICBcIkNPTVBJTEVSX1ZfT05fTkFUSVZFXCIsXG4gICAgICBjb250ZXh0LFxuICAgICAgbG9jXG4gICAgKSkge1xuICAgICAgZXZlbnRPcHRpb25Nb2RpZmllcnMucHVzaChtb2RpZmllcik7XG4gICAgfSBlbHNlIGlmIChpc0V2ZW50T3B0aW9uTW9kaWZpZXIobW9kaWZpZXIpKSB7XG4gICAgICBldmVudE9wdGlvbk1vZGlmaWVycy5wdXNoKG1vZGlmaWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1heWJlS2V5TW9kaWZpZXIobW9kaWZpZXIpKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0V4cChrZXkpKSB7XG4gICAgICAgICAgaWYgKGlzS2V5Ym9hcmRFdmVudChrZXkuY29udGVudC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAga2V5TW9kaWZpZXJzLnB1c2gobW9kaWZpZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25LZXlNb2RpZmllcnMucHVzaChtb2RpZmllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleU1vZGlmaWVycy5wdXNoKG1vZGlmaWVyKTtcbiAgICAgICAgICBub25LZXlNb2RpZmllcnMucHVzaChtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc05vbktleU1vZGlmaWVyKG1vZGlmaWVyKSkge1xuICAgICAgICAgIG5vbktleU1vZGlmaWVycy5wdXNoKG1vZGlmaWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrZXlNb2RpZmllcnMucHVzaChtb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXlNb2RpZmllcnMsXG4gICAgbm9uS2V5TW9kaWZpZXJzLFxuICAgIGV2ZW50T3B0aW9uTW9kaWZpZXJzXG4gIH07XG59O1xuY29uc3QgdHJhbnNmb3JtQ2xpY2sgPSAoa2V5LCBldmVudCkgPT4ge1xuICBjb25zdCBpc1N0YXRpY0NsaWNrID0gaXNTdGF0aWNFeHAoa2V5KSAmJiBrZXkuY29udGVudC50b0xvd2VyQ2FzZSgpID09PSBcIm9uY2xpY2tcIjtcbiAgcmV0dXJuIGlzU3RhdGljQ2xpY2sgPyBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGV2ZW50LCB0cnVlKSA6IGtleS50eXBlICE9PSA0ID8gY3JlYXRlQ29tcG91bmRFeHByZXNzaW9uKFtcbiAgICBgKGAsXG4gICAga2V5LFxuICAgIGApID09PSBcIm9uQ2xpY2tcIiA/IFwiJHtldmVudH1cIiA6IChgLFxuICAgIGtleSxcbiAgICBgKWBcbiAgXSkgOiBrZXk7XG59O1xuY29uc3QgdHJhbnNmb3JtT24gPSAoZGlyLCBub2RlLCBjb250ZXh0KSA9PiB7XG4gIHJldHVybiB0cmFuc2Zvcm1PbiQxKGRpciwgbm9kZSwgY29udGV4dCwgKGJhc2VSZXN1bHQpID0+IHtcbiAgICBjb25zdCB7IG1vZGlmaWVycyB9ID0gZGlyO1xuICAgIGlmICghbW9kaWZpZXJzLmxlbmd0aCkgcmV0dXJuIGJhc2VSZXN1bHQ7XG4gICAgbGV0IHsga2V5LCB2YWx1ZTogaGFuZGxlckV4cCB9ID0gYmFzZVJlc3VsdC5wcm9wc1swXTtcbiAgICBjb25zdCB7IGtleU1vZGlmaWVycywgbm9uS2V5TW9kaWZpZXJzLCBldmVudE9wdGlvbk1vZGlmaWVycyB9ID0gcmVzb2x2ZU1vZGlmaWVycyhrZXksIG1vZGlmaWVycywgY29udGV4dCwgZGlyLmxvYyk7XG4gICAgaWYgKG5vbktleU1vZGlmaWVycy5pbmNsdWRlcyhcInJpZ2h0XCIpKSB7XG4gICAgICBrZXkgPSB0cmFuc2Zvcm1DbGljayhrZXksIGBvbkNvbnRleHRtZW51YCk7XG4gICAgfVxuICAgIGlmIChub25LZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJtaWRkbGVcIikpIHtcbiAgICAgIGtleSA9IHRyYW5zZm9ybUNsaWNrKGtleSwgYG9uTW91c2V1cGApO1xuICAgIH1cbiAgICBpZiAobm9uS2V5TW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgaGFuZGxlckV4cCA9IGNyZWF0ZUNhbGxFeHByZXNzaW9uKGNvbnRleHQuaGVscGVyKFZfT05fV0lUSF9NT0RJRklFUlMpLCBbXG4gICAgICAgIGhhbmRsZXJFeHAsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG5vbktleU1vZGlmaWVycylcbiAgICAgIF0pO1xuICAgIH1cbiAgICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCAmJiAvLyBpZiBldmVudCBuYW1lIGlzIGR5bmFtaWMsIGFsd2F5cyB3cmFwIHdpdGgga2V5cyBndWFyZFxuICAgICghaXNTdGF0aWNFeHAoa2V5KSB8fCBpc0tleWJvYXJkRXZlbnQoa2V5LmNvbnRlbnQudG9Mb3dlckNhc2UoKSkpKSB7XG4gICAgICBoYW5kbGVyRXhwID0gY3JlYXRlQ2FsbEV4cHJlc3Npb24oY29udGV4dC5oZWxwZXIoVl9PTl9XSVRIX0tFWVMpLCBbXG4gICAgICAgIGhhbmRsZXJFeHAsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGtleU1vZGlmaWVycylcbiAgICAgIF0pO1xuICAgIH1cbiAgICBpZiAoZXZlbnRPcHRpb25Nb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBtb2RpZmllclBvc3RmaXggPSBldmVudE9wdGlvbk1vZGlmaWVycy5tYXAoY2FwaXRhbGl6ZSkuam9pbihcIlwiKTtcbiAgICAgIGtleSA9IGlzU3RhdGljRXhwKGtleSkgPyBjcmVhdGVTaW1wbGVFeHByZXNzaW9uKGAke2tleS5jb250ZW50fSR7bW9kaWZpZXJQb3N0Zml4fWAsIHRydWUpIDogY3JlYXRlQ29tcG91bmRFeHByZXNzaW9uKFtgKGAsIGtleSwgYCkgKyBcIiR7bW9kaWZpZXJQb3N0Zml4fVwiYF0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IFtjcmVhdGVPYmplY3RQcm9wZXJ0eShrZXksIGhhbmRsZXJFeHApXVxuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgdHJhbnNmb3JtU2hvdyA9IChkaXIsIG5vZGUsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBleHAsIGxvYyB9ID0gZGlyO1xuICBpZiAoIWV4cCkge1xuICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgIGNyZWF0ZURPTUNvbXBpbGVyRXJyb3IoNjEsIGxvYylcbiAgICApO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IFtdLFxuICAgIG5lZWRSdW50aW1lOiBjb250ZXh0LmhlbHBlcihWX1NIT1cpXG4gIH07XG59O1xuXG5jb25zdCB0cmFuc2Zvcm1UcmFuc2l0aW9uID0gKG5vZGUsIGNvbnRleHQpID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLnRhZ1R5cGUgPT09IDEpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjb250ZXh0LmlzQnVpbHRJbkNvbXBvbmVudChub2RlLnRhZyk7XG4gICAgaWYgKGNvbXBvbmVudCA9PT0gVFJBTlNJVElPTikge1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCFub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzTXVsdGlwbGVDaGlsZHJlbihub2RlKSkge1xuICAgICAgICAgIGNvbnRleHQub25FcnJvcihcbiAgICAgICAgICAgIGNyZWF0ZURPTUNvbXBpbGVyRXJyb3IoXG4gICAgICAgICAgICAgIDYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5vZGUuY2hpbGRyZW5bMF0ubG9jLnN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDogbm9kZS5jaGlsZHJlbltub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmxvYy5lbmQsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IDEpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgY2hpbGQucHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwLnR5cGUgPT09IDcgJiYgcC5uYW1lID09PSBcInNob3dcIikge1xuICAgICAgICAgICAgICBub2RlLnByb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IDYsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwZXJzaXN0ZWRcIixcbiAgICAgICAgICAgICAgICBuYW1lTG9jOiBub2RlLmxvYyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGxvYzogbm9kZS5sb2NcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIGhhc011bHRpcGxlQ2hpbGRyZW4obm9kZSkge1xuICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLmZpbHRlcihcbiAgICAoYykgPT4gYy50eXBlICE9PSAzICYmICEoYy50eXBlID09PSAyICYmICFjLmNvbnRlbnQudHJpbSgpKVxuICApO1xuICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuWzBdO1xuICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoICE9PSAxIHx8IGNoaWxkLnR5cGUgPT09IDExIHx8IGNoaWxkLnR5cGUgPT09IDkgJiYgY2hpbGQuYnJhbmNoZXMuc29tZShoYXNNdWx0aXBsZUNoaWxkcmVuKTtcbn1cblxuY29uc3QgaWdub3JlU2lkZUVmZmVjdFRhZ3MgPSAobm9kZSwgY29udGV4dCkgPT4ge1xuICBpZiAobm9kZS50eXBlID09PSAxICYmIG5vZGUudGFnVHlwZSA9PT0gMCAmJiAobm9kZS50YWcgPT09IFwic2NyaXB0XCIgfHwgbm9kZS50YWcgPT09IFwic3R5bGVcIikpIHtcbiAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNvbnRleHQub25FcnJvcihcbiAgICAgIGNyZWF0ZURPTUNvbXBpbGVyRXJyb3IoXG4gICAgICAgIDYzLFxuICAgICAgICBub2RlLmxvY1xuICAgICAgKVxuICAgICk7XG4gICAgY29udGV4dC5yZW1vdmVOb2RlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWRIVE1MTmVzdGluZyhwYXJlbnQsIGNoaWxkKSB7XG4gIGlmIChwYXJlbnQgPT09IFwidGVtcGxhdGVcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChwYXJlbnQgaW4gb25seVZhbGlkQ2hpbGRyZW4pIHtcbiAgICByZXR1cm4gb25seVZhbGlkQ2hpbGRyZW5bcGFyZW50XS5oYXMoY2hpbGQpO1xuICB9XG4gIGlmIChjaGlsZCBpbiBvbmx5VmFsaWRQYXJlbnRzKSB7XG4gICAgcmV0dXJuIG9ubHlWYWxpZFBhcmVudHNbY2hpbGRdLmhhcyhwYXJlbnQpO1xuICB9XG4gIGlmIChwYXJlbnQgaW4ga25vd25JbnZhbGlkQ2hpbGRyZW4pIHtcbiAgICBpZiAoa25vd25JbnZhbGlkQ2hpbGRyZW5bcGFyZW50XS5oYXMoY2hpbGQpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGNoaWxkIGluIGtub3duSW52YWxpZFBhcmVudHMpIHtcbiAgICBpZiAoa25vd25JbnZhbGlkUGFyZW50c1tjaGlsZF0uaGFzKHBhcmVudCkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmNvbnN0IGhlYWRpbmdzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCJdKTtcbmNvbnN0IGVtcHR5U2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW10pO1xuY29uc3Qgb25seVZhbGlkQ2hpbGRyZW4gPSB7XG4gIGhlYWQ6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgICBcImJhc2VcIixcbiAgICBcImJhc2Vmcm9udFwiLFxuICAgIFwiYmdzb3VuZFwiLFxuICAgIFwibGlua1wiLFxuICAgIFwibWV0YVwiLFxuICAgIFwidGl0bGVcIixcbiAgICBcIm5vc2NyaXB0XCIsXG4gICAgXCJub2ZyYW1lc1wiLFxuICAgIFwic3R5bGVcIixcbiAgICBcInNjcmlwdFwiLFxuICAgIFwidGVtcGxhdGVcIlxuICBdKSxcbiAgb3B0Z3JvdXA6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcIm9wdGlvblwiXSksXG4gIHNlbGVjdDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wib3B0Z3JvdXBcIiwgXCJvcHRpb25cIiwgXCJoclwiXSksXG4gIC8vIHRhYmxlXG4gIHRhYmxlOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJjYXB0aW9uXCIsIFwiY29sZ3JvdXBcIiwgXCJ0Ym9keVwiLCBcInRmb290XCIsIFwidGhlYWRcIl0pLFxuICB0cjogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widGRcIiwgXCJ0aFwiXSksXG4gIGNvbGdyb3VwOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJjb2xcIl0pLFxuICB0Ym9keTogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widHJcIl0pLFxuICB0aGVhZDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widHJcIl0pLFxuICB0Zm9vdDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widHJcIl0pLFxuICAvLyB0aGVzZSBlbGVtZW50cyBjYW4gbm90IGhhdmUgYW55IGNoaWxkcmVuIGVsZW1lbnRzXG4gIHNjcmlwdDogZW1wdHlTZXQsXG4gIGlmcmFtZTogZW1wdHlTZXQsXG4gIG9wdGlvbjogZW1wdHlTZXQsXG4gIHRleHRhcmVhOiBlbXB0eVNldCxcbiAgc3R5bGU6IGVtcHR5U2V0LFxuICB0aXRsZTogZW1wdHlTZXRcbn07XG5jb25zdCBvbmx5VmFsaWRQYXJlbnRzID0ge1xuICAvLyBzZWN0aW9uc1xuICBodG1sOiBlbXB0eVNldCxcbiAgYm9keTogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiaHRtbFwiXSksXG4gIGhlYWQ6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcImh0bWxcIl0pLFxuICAvLyB0YWJsZVxuICB0ZDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widHJcIl0pLFxuICBjb2xncm91cDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widGFibGVcIl0pLFxuICBjYXB0aW9uOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJ0YWJsZVwiXSksXG4gIHRib2R5OiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJ0YWJsZVwiXSksXG4gIHRmb290OiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJ0YWJsZVwiXSksXG4gIGNvbDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiY29sZ3JvdXBcIl0pLFxuICB0aDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widHJcIl0pLFxuICB0aGVhZDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widGFibGVcIl0pLFxuICB0cjogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1widGJvZHlcIiwgXCJ0aGVhZFwiLCBcInRmb290XCJdKSxcbiAgLy8gZGF0YSBsaXN0XG4gIGRkOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJkbFwiLCBcImRpdlwiXSksXG4gIGR0OiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJkbFwiLCBcImRpdlwiXSksXG4gIC8vIG90aGVyXG4gIGZpZ2NhcHRpb246IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcImZpZ3VyZVwiXSksXG4gIC8vIGxpOiBuZXcgU2V0KFtcInVsXCIsIFwib2xcIl0pLFxuICBzdW1tYXJ5OiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJkZXRhaWxzXCJdKSxcbiAgYXJlYTogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wibWFwXCJdKVxufTtcbmNvbnN0IGtub3duSW52YWxpZENoaWxkcmVuID0ge1xuICBwOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXG4gICAgXCJhZGRyZXNzXCIsXG4gICAgXCJhcnRpY2xlXCIsXG4gICAgXCJhc2lkZVwiLFxuICAgIFwiYmxvY2txdW90ZVwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJkZXRhaWxzXCIsXG4gICAgXCJkaWFsb2dcIixcbiAgICBcImRpclwiLFxuICAgIFwiZGl2XCIsXG4gICAgXCJkbFwiLFxuICAgIFwiZmllbGRzZXRcIixcbiAgICBcImZpZ3VyZVwiLFxuICAgIFwiZm9vdGVyXCIsXG4gICAgXCJmb3JtXCIsXG4gICAgXCJoMVwiLFxuICAgIFwiaDJcIixcbiAgICBcImgzXCIsXG4gICAgXCJoNFwiLFxuICAgIFwiaDVcIixcbiAgICBcImg2XCIsXG4gICAgXCJoZWFkZXJcIixcbiAgICBcImhncm91cFwiLFxuICAgIFwiaHJcIixcbiAgICBcImxpXCIsXG4gICAgXCJtYWluXCIsXG4gICAgXCJuYXZcIixcbiAgICBcIm1lbnVcIixcbiAgICBcIm9sXCIsXG4gICAgXCJwXCIsXG4gICAgXCJwcmVcIixcbiAgICBcInNlY3Rpb25cIixcbiAgICBcInRhYmxlXCIsXG4gICAgXCJ1bFwiXG4gIF0pLFxuICBzdmc6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgICBcImJcIixcbiAgICBcImJsb2NrcXVvdGVcIixcbiAgICBcImJyXCIsXG4gICAgXCJjb2RlXCIsXG4gICAgXCJkZFwiLFxuICAgIFwiZGl2XCIsXG4gICAgXCJkbFwiLFxuICAgIFwiZHRcIixcbiAgICBcImVtXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiaDFcIixcbiAgICBcImgyXCIsXG4gICAgXCJoM1wiLFxuICAgIFwiaDRcIixcbiAgICBcImg1XCIsXG4gICAgXCJoNlwiLFxuICAgIFwiaHJcIixcbiAgICBcImlcIixcbiAgICBcImltZ1wiLFxuICAgIFwibGlcIixcbiAgICBcIm1lbnVcIixcbiAgICBcIm1ldGFcIixcbiAgICBcIm9sXCIsXG4gICAgXCJwXCIsXG4gICAgXCJwcmVcIixcbiAgICBcInJ1YnlcIixcbiAgICBcInNcIixcbiAgICBcInNtYWxsXCIsXG4gICAgXCJzcGFuXCIsXG4gICAgXCJzdHJvbmdcIixcbiAgICBcInN1YlwiLFxuICAgIFwic3VwXCIsXG4gICAgXCJ0YWJsZVwiLFxuICAgIFwidVwiLFxuICAgIFwidWxcIixcbiAgICBcInZhclwiXG4gIF0pXG59O1xuY29uc3Qga25vd25JbnZhbGlkUGFyZW50cyA9IHtcbiAgYTogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiYVwiXSksXG4gIGJ1dHRvbjogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiYnV0dG9uXCJdKSxcbiAgZGQ6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcImRkXCIsIFwiZHRcIl0pLFxuICBkdDogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiZGRcIiwgXCJkdFwiXSksXG4gIGZvcm06IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcImZvcm1cIl0pLFxuICBsaTogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wibGlcIl0pLFxuICBoMTogaGVhZGluZ3MsXG4gIGgyOiBoZWFkaW5ncyxcbiAgaDM6IGhlYWRpbmdzLFxuICBoNDogaGVhZGluZ3MsXG4gIGg1OiBoZWFkaW5ncyxcbiAgaDY6IGhlYWRpbmdzXG59O1xuXG5jb25zdCB2YWxpZGF0ZUh0bWxOZXN0aW5nID0gKG5vZGUsIGNvbnRleHQpID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLnRhZ1R5cGUgPT09IDAgJiYgY29udGV4dC5wYXJlbnQgJiYgY29udGV4dC5wYXJlbnQudHlwZSA9PT0gMSAmJiBjb250ZXh0LnBhcmVudC50YWdUeXBlID09PSAwICYmICFpc1ZhbGlkSFRNTE5lc3RpbmcoY29udGV4dC5wYXJlbnQudGFnLCBub2RlLnRhZykpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBTeW50YXhFcnJvcihcbiAgICAgIGA8JHtub2RlLnRhZ30+IGNhbm5vdCBiZSBjaGlsZCBvZiA8JHtjb250ZXh0LnBhcmVudC50YWd9PiwgYWNjb3JkaW5nIHRvIEhUTUwgc3BlY2lmaWNhdGlvbnMuIFRoaXMgY2FuIGNhdXNlIGh5ZHJhdGlvbiBlcnJvcnMgb3IgcG90ZW50aWFsbHkgZGlzcnVwdCBmdXR1cmUgZnVuY3Rpb25hbGl0eS5gXG4gICAgKTtcbiAgICBlcnJvci5sb2MgPSBub2RlLmxvYztcbiAgICBjb250ZXh0Lm9uV2FybihlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IERPTU5vZGVUcmFuc2Zvcm1zID0gW1xuICB0cmFuc2Zvcm1TdHlsZSxcbiAgLi4uISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IFt0cmFuc2Zvcm1UcmFuc2l0aW9uLCB2YWxpZGF0ZUh0bWxOZXN0aW5nXSA6IFtdXG5dO1xuY29uc3QgRE9NRGlyZWN0aXZlVHJhbnNmb3JtcyA9IHtcbiAgY2xvYWs6IG5vb3BEaXJlY3RpdmVUcmFuc2Zvcm0sXG4gIGh0bWw6IHRyYW5zZm9ybVZIdG1sLFxuICB0ZXh0OiB0cmFuc2Zvcm1WVGV4dCxcbiAgbW9kZWw6IHRyYW5zZm9ybU1vZGVsLFxuICAvLyBvdmVycmlkZSBjb21waWxlci1jb3JlXG4gIG9uOiB0cmFuc2Zvcm1PbixcbiAgLy8gb3ZlcnJpZGUgY29tcGlsZXItY29yZVxuICBzaG93OiB0cmFuc2Zvcm1TaG93XG59O1xuZnVuY3Rpb24gY29tcGlsZShzcmMsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gYmFzZUNvbXBpbGUoXG4gICAgc3JjLFxuICAgIGV4dGVuZCh7fSwgcGFyc2VyT3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgbm9kZVRyYW5zZm9ybXM6IFtcbiAgICAgICAgLy8gaWdub3JlIDxzY3JpcHQ+IGFuZCA8dGFnPlxuICAgICAgICAvLyB0aGlzIGlzIG5vdCBwdXQgaW5zaWRlIERPTU5vZGVUcmFuc2Zvcm1zIGJlY2F1c2UgdGhhdCBsaXN0IGlzIHVzZWRcbiAgICAgICAgLy8gYnkgY29tcGlsZXItc3NyIHRvIGdlbmVyYXRlIHZub2RlIGZhbGxiYWNrIGJyYW5jaGVzXG4gICAgICAgIGlnbm9yZVNpZGVFZmZlY3RUYWdzLFxuICAgICAgICAuLi5ET01Ob2RlVHJhbnNmb3JtcyxcbiAgICAgICAgLi4ub3B0aW9ucy5ub2RlVHJhbnNmb3JtcyB8fCBbXVxuICAgICAgXSxcbiAgICAgIGRpcmVjdGl2ZVRyYW5zZm9ybXM6IGV4dGVuZChcbiAgICAgICAge30sXG4gICAgICAgIERPTURpcmVjdGl2ZVRyYW5zZm9ybXMsXG4gICAgICAgIG9wdGlvbnMuZGlyZWN0aXZlVHJhbnNmb3JtcyB8fCB7fVxuICAgICAgKSxcbiAgICAgIHRyYW5zZm9ybUhvaXN0OiBudWxsIFxuICAgIH0pXG4gICk7XG59XG5mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBiYXNlUGFyc2UodGVtcGxhdGUsIGV4dGVuZCh7fSwgcGFyc2VyT3B0aW9ucywgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgeyBET01EaXJlY3RpdmVUcmFuc2Zvcm1zLCBET01FcnJvckNvZGVzLCBET01FcnJvck1lc3NhZ2VzLCBET01Ob2RlVHJhbnNmb3JtcywgVFJBTlNJVElPTiwgVFJBTlNJVElPTl9HUk9VUCwgVl9NT0RFTF9DSEVDS0JPWCwgVl9NT0RFTF9EWU5BTUlDLCBWX01PREVMX1JBRElPLCBWX01PREVMX1NFTEVDVCwgVl9NT0RFTF9URVhULCBWX09OX1dJVEhfS0VZUywgVl9PTl9XSVRIX01PRElGSUVSUywgVl9TSE9XLCBjb21waWxlLCBjcmVhdGVET01Db21waWxlckVycm9yLCBwYXJzZSwgcGFyc2VyT3B0aW9ucywgdHJhbnNmb3JtU3R5bGUgfTtcbiIsIi8qKlxuKiB2dWUgdjMuNS4xOFxuKiAoYykgMjAxOC1wcmVzZW50IFl1eGkgKEV2YW4pIFlvdSBhbmQgVnVlIGNvbnRyaWJ1dG9yc1xuKiBAbGljZW5zZSBNSVRcbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29tcGlsZXJEb20gPSByZXF1aXJlKCdAdnVlL2NvbXBpbGVyLWRvbScpO1xudmFyIHJ1bnRpbWVEb20gPSByZXF1aXJlKCdAdnVlL3J1bnRpbWUtZG9tJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnQHZ1ZS9zaGFyZWQnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BOYW1lc3BhY2VEZWZhdWx0KGUpIHtcbiAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoZSkge1xuICAgIGZvciAodmFyIGsgaW4gZSkge1xuICAgICAgbltrXSA9IGVba107XG4gICAgfVxuICB9XG4gIG4uZGVmYXVsdCA9IGU7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxuXG52YXIgcnVudGltZURvbV9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlRGVmYXVsdChydW50aW1lRG9tKTtcblxuY29uc3QgY29tcGlsZUNhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBjb21waWxlVG9GdW5jdGlvbih0ZW1wbGF0ZSwgb3B0aW9ucykge1xuICBpZiAoIXNoYXJlZC5pc1N0cmluZyh0ZW1wbGF0ZSkpIHtcbiAgICBpZiAodGVtcGxhdGUubm9kZVR5cGUpIHtcbiAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2hhcmVkLk5PT1A7XG4gICAgfVxuICB9XG4gIGNvbnN0IGtleSA9IHNoYXJlZC5nZW5DYWNoZUtleSh0ZW1wbGF0ZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGNhY2hlZCA9IGNvbXBpbGVDYWNoZVtrZXldO1xuICBpZiAoY2FjaGVkKSB7XG4gICAgcmV0dXJuIGNhY2hlZDtcbiAgfVxuICBpZiAodGVtcGxhdGVbMF0gPT09IFwiI1wiKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRlbXBsYXRlKTtcbiAgICB0ZW1wbGF0ZSA9IGVsID8gZWwuaW5uZXJIVE1MIDogYGA7XG4gIH1cbiAgY29uc3Qgb3B0cyA9IHNoYXJlZC5leHRlbmQoXG4gICAge1xuICAgICAgaG9pc3RTdGF0aWM6IHRydWUsXG4gICAgICBvbkVycm9yOiB2b2lkIDAsXG4gICAgICBvbldhcm46IHNoYXJlZC5OT09QXG4gICAgfSxcbiAgICBvcHRpb25zXG4gICk7XG4gIGlmICghb3B0cy5pc0N1c3RvbUVsZW1lbnQgJiYgdHlwZW9mIGN1c3RvbUVsZW1lbnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgb3B0cy5pc0N1c3RvbUVsZW1lbnQgPSAodGFnKSA9PiAhIWN1c3RvbUVsZW1lbnRzLmdldCh0YWcpO1xuICB9XG4gIGNvbnN0IHsgY29kZSB9ID0gY29tcGlsZXJEb20uY29tcGlsZSh0ZW1wbGF0ZSwgb3B0cyk7XG4gIGNvbnN0IHJlbmRlciA9IG5ldyBGdW5jdGlvbihcIlZ1ZVwiLCBjb2RlKShydW50aW1lRG9tX19uYW1lc3BhY2UpO1xuICByZW5kZXIuX3JjID0gdHJ1ZTtcbiAgcmV0dXJuIGNvbXBpbGVDYWNoZVtrZXldID0gcmVuZGVyO1xufVxucnVudGltZURvbS5yZWdpc3RlclJ1bnRpbWVDb21waWxlcihjb21waWxlVG9GdW5jdGlvbik7XG5cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGVUb0Z1bmN0aW9uO1xuT2JqZWN0LmtleXMocnVudGltZURvbSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSBydW50aW1lRG9tW2tdO1xufSk7XG4iLCIndXNlIHN0cmljdCdcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvdnVlLmNqcy5wcm9kLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3Z1ZS5janMuanMnKVxufVxuIiwiLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDc0NDpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgX193ZWJwYWNrX3VudXNlZF9leHBvcnRfXztcblxuX193ZWJwYWNrX3VudXNlZF9leHBvcnRfXyA9ICh7IHZhbHVlOiB0cnVlIH0pO1xuLy8gcnVudGltZSBoZWxwZXIgZm9yIHNldHRpbmcgcHJvcGVydGllcyBvbiBjb21wb25lbnRzXG4vLyBpbiBhIHRyZWUtc2hha2FibGUgd2F5XG5leHBvcnRzLlogPSAoc2ZjLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHNmYy5fX3ZjY09wdHMgfHwgc2ZjO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBwcm9wcykge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfVxuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaXNvbGF0ZWQgYWdhaW5zdCBvdGhlciBtb2R1bGVzIGluIHRoZSBjaHVuay5cbiFmdW5jdGlvbigpIHtcbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBGaXR0eTogZnVuY3Rpb24oKSB7IHJldHVybiAvKiByZWV4cG9ydCAqLyBGaXR0eTsgfSxcbiAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBlbnRyeV9saWI7IH1cbn0pO1xuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9saWIvY29tbWFuZHMvYnVpbGQvc2V0UHVibGljUGF0aC5qc1xuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG4vLyBUaGlzIGZpbGUgaXMgaW1wb3J0ZWQgaW50byBsaWIvd2MgY2xpZW50IGJ1bmRsZXMuXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgY3VycmVudFNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0XG4gIGlmIChmYWxzZSkgeyB2YXIgZ2V0Q3VycmVudFNjcmlwdDsgfVxuXG4gIHZhciBzcmMgPSBjdXJyZW50U2NyaXB0ICYmIGN1cnJlbnRTY3JpcHQuc3JjLm1hdGNoKC8oLitcXC8pW14vXStcXC5qcyhcXD8uKik/JC8pXG4gIGlmIChzcmMpIHtcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzcmNbMV0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG59XG5cbi8vIEluZGljYXRlIHRvIHdlYnBhY2sgdGhhdCB0aGlzIGZpbGUgY2FuIGJlIGNvbmNhdGVuYXRlZFxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2V0UHVibGljUGF0aCA9IChudWxsKTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ2dWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJyb290XCI6XCJWdWVcIn1cbnZhciBleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV9uYW1lc3BhY2VPYmplY3QgPSByZXF1aXJlKFwidnVlXCIpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDEudXNlWzJdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vc3JjL2NvbXBvbmVudHMvRml0dHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1Y2Y3Zjc2JnNjb3BlZD10cnVlJnRzPXRydWVcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTg1Y2Y3Zjc2XCIpLCBuID0gbigpLCBfcG9wU2NvcGVJZCgpLCBuKTtcbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJpZFwiXTtcbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuICgwLGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX25hbWVzcGFjZU9iamVjdC5vcGVuQmxvY2spKCksICgwLGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX25hbWVzcGFjZU9iamVjdC5jcmVhdGVFbGVtZW50QmxvY2spKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJtYWlud3JhcFwiLFxuICAgIGlkOiBfY3R4LmNvbnRlbnRJRFxuICB9LCBbKDAsZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfbmFtZXNwYWNlT2JqZWN0LnJlbmRlclNsb3QpKF9jdHguJHNsb3RzLCBcImNvbnRlbnRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSksICgwLGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX25hbWVzcGFjZU9iamVjdC5yZW5kZXJTbG90KShfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXSwgOCwgX2hvaXN0ZWRfMSk7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9GaXR0eS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVjZjdmNzYmc2NvcGVkPXRydWUmdHM9dHJ1ZVxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvZml0dHkvZGlzdC9maXR0eS5tb2R1bGUuanNcbi8qKlxuICogZml0dHkgdjIuMy43IC0gU251Z2x5IHJlc2l6ZXMgdGV4dCB0byBmaXQgaXRzIHBhcmVudCBjb250YWluZXJcbiAqIENvcHlyaWdodCAoYykgMjAyMyBSaWsgU2NoZW5uaW5rIDxyaWtAcHFpbmEubmw+IChodHRwczovL3BxaW5hLm5sLylcbiAqL1xuXG52YXIgZT1mdW5jdGlvbihlKXtpZihlKXt2YXIgdD1mdW5jdGlvbihlKXtyZXR1cm5bXS5zbGljZS5jYWxsKGUpfSxuPTAsaT0xLHI9MixvPTMsYT1bXSxsPW51bGwsdT1cInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gZT9mdW5jdGlvbigpe2UuY2FuY2VsQW5pbWF0aW9uRnJhbWUobCksbD1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXR1cm4gcyhhLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGlydHkmJmUuYWN0aXZlfSkpKX0pKX06ZnVuY3Rpb24oKXt9LGM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7YS5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gdC5kaXJ0eT1lfSkpLHUoKX19LHM9ZnVuY3Rpb24oZSl7ZS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiFlLnN0eWxlQ29tcHV0ZWR9KSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5zdHlsZUNvbXB1dGVkPW0oZSl9KSksZS5maWx0ZXIoeSkuZm9yRWFjaCh2KTt2YXIgdD1lLmZpbHRlcihwKTt0LmZvckVhY2goZCksdC5mb3JFYWNoKChmdW5jdGlvbihlKXt2KGUpLGYoZSl9KSksdC5mb3JFYWNoKFMpfSxmPWZ1bmN0aW9uKGUpe3JldHVybiBlLmRpcnR5PW59LGQ9ZnVuY3Rpb24oZSl7ZS5hdmFpbGFibGVXaWR0aD1lLmVsZW1lbnQucGFyZW50Tm9kZS5jbGllbnRXaWR0aCxlLmN1cnJlbnRXaWR0aD1lLmVsZW1lbnQuc2Nyb2xsV2lkdGgsZS5wcmV2aW91c0ZvbnRTaXplPWUuY3VycmVudEZvbnRTaXplLGUuY3VycmVudEZvbnRTaXplPU1hdGgubWluKE1hdGgubWF4KGUubWluU2l6ZSxlLmF2YWlsYWJsZVdpZHRoL2UuY3VycmVudFdpZHRoKmUucHJldmlvdXNGb250U2l6ZSksZS5tYXhTaXplKSxlLndoaXRlU3BhY2U9ZS5tdWx0aUxpbmUmJmUuY3VycmVudEZvbnRTaXplPT09ZS5taW5TaXplP1wibm9ybWFsXCI6XCJub3dyYXBcIn0scD1mdW5jdGlvbihlKXtyZXR1cm4gZS5kaXJ0eSE9PXJ8fGUuZGlydHk9PT1yJiZlLmVsZW1lbnQucGFyZW50Tm9kZS5jbGllbnRXaWR0aCE9PWUuYXZhaWxhYmxlV2lkdGh9LG09ZnVuY3Rpb24odCl7dmFyIG49ZS5nZXRDb21wdXRlZFN0eWxlKHQuZWxlbWVudCxudWxsKTtyZXR1cm4gdC5jdXJyZW50Rm9udFNpemU9cGFyc2VGbG9hdChuLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikpLHQuZGlzcGxheT1uLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpLHQud2hpdGVTcGFjZT1uLmdldFByb3BlcnR5VmFsdWUoXCJ3aGl0ZS1zcGFjZVwiKSwhMH0seT1mdW5jdGlvbihlKXt2YXIgdD0hMTtyZXR1cm4hZS5wcmVTdHlsZVRlc3RDb21wbGV0ZWQmJigvaW5saW5lLS8udGVzdChlLmRpc3BsYXkpfHwodD0hMCxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiksXCJub3dyYXBcIiE9PWUud2hpdGVTcGFjZSYmKHQ9ITAsZS53aGl0ZVNwYWNlPVwibm93cmFwXCIpLGUucHJlU3R5bGVUZXN0Q29tcGxldGVkPSEwLHQpfSx2PWZ1bmN0aW9uKGUpe2UuZWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlPWUud2hpdGVTcGFjZSxlLmVsZW1lbnQuc3R5bGUuZGlzcGxheT1lLmRpc3BsYXksZS5lbGVtZW50LnN0eWxlLmZvbnRTaXplPWUuY3VycmVudEZvbnRTaXplK1wicHhcIn0sUz1mdW5jdGlvbihlKXtlLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJmaXRcIix7ZGV0YWlsOntvbGRWYWx1ZTplLnByZXZpb3VzRm9udFNpemUsbmV3VmFsdWU6ZS5jdXJyZW50Rm9udFNpemUsc2NhbGVGYWN0b3I6ZS5jdXJyZW50Rm9udFNpemUvZS5wcmV2aW91c0ZvbnRTaXplfX0pKX0saD1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuZGlydHk9dCxlLmFjdGl2ZSYmdSgpfX0sdz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXthPWEuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5lbGVtZW50IT09ZS5lbGVtZW50fSkpLGUub2JzZXJ2ZU11dGF0aW9ucyYmZS5vYnNlcnZlci5kaXNjb25uZWN0KCksZS5lbGVtZW50LnN0eWxlLndoaXRlU3BhY2U9ZS5vcmlnaW5hbFN0eWxlLndoaXRlU3BhY2UsZS5lbGVtZW50LnN0eWxlLmRpc3BsYXk9ZS5vcmlnaW5hbFN0eWxlLmRpc3BsYXksZS5lbGVtZW50LnN0eWxlLmZvbnRTaXplPWUub3JpZ2luYWxTdHlsZS5mb250U2l6ZX19LGI9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hY3RpdmV8fChlLmFjdGl2ZT0hMCx1KCkpfX0sej1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5hY3RpdmU9ITF9fSxGPWZ1bmN0aW9uKGUpe2Uub2JzZXJ2ZU11dGF0aW9ucyYmKGUub2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoaChlLGkpKSxlLm9ic2VydmVyLm9ic2VydmUoZS5lbGVtZW50LGUub2JzZXJ2ZU11dGF0aW9ucykpfSxnPXttaW5TaXplOjE2LG1heFNpemU6NTEyLG11bHRpTGluZTohMCxvYnNlcnZlTXV0YXRpb25zOlwiTXV0YXRpb25PYnNlcnZlclwiaW4gZSYme3N1YnRyZWU6ITAsY2hpbGRMaXN0OiEwLGNoYXJhY3RlckRhdGE6ITB9fSxXPW51bGwsRT1mdW5jdGlvbigpe2UuY2xlYXJUaW1lb3V0KFcpLFc9ZS5zZXRUaW1lb3V0KGMocikseC5vYnNlcnZlV2luZG93RGVsYXkpfSxNPVtcInJlc2l6ZVwiLFwib3JpZW50YXRpb25jaGFuZ2VcIl07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh4LFwib2JzZXJ2ZVdpbmRvd1wiLHtzZXQ6ZnVuY3Rpb24odCl7dmFyIG49XCJcIi5jb25jYXQodD9cImFkZFwiOlwicmVtb3ZlXCIsXCJFdmVudExpc3RlbmVyXCIpO00uZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVtuXSh0LEUpfSkpfX0pLHgub2JzZXJ2ZVdpbmRvdz0hMCx4Lm9ic2VydmVXaW5kb3dEZWxheT0xMDAseC5maXRBbGw9YyhvKSx4fWZ1bmN0aW9uIEMoZSx0KXt2YXIgbj1PYmplY3QuYXNzaWduKHt9LGcsdCksaT1lLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSxuLHtlbGVtZW50OmUsYWN0aXZlOiEwfSk7cmV0dXJuIGZ1bmN0aW9uKGUpe2Uub3JpZ2luYWxTdHlsZT17d2hpdGVTcGFjZTplLmVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSxkaXNwbGF5OmUuZWxlbWVudC5zdHlsZS5kaXNwbGF5LGZvbnRTaXplOmUuZWxlbWVudC5zdHlsZS5mb250U2l6ZX0sRihlKSxlLm5ld2JpZT0hMCxlLmRpcnR5PSEwLGEucHVzaChlKX0odCkse2VsZW1lbnQ6ZSxmaXQ6aCh0LG8pLHVuZnJlZXplOmIodCksZnJlZXplOnoodCksdW5zdWJzY3JpYmU6dyh0KX19KSk7cmV0dXJuIHUoKSxpfWZ1bmN0aW9uIHgoZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP0ModChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpKSxuKTpDKFtlXSxuKVswXX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3c/bnVsbDp3aW5kb3cpOy8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGZpdHR5X21vZHVsZSA9IChlKTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanNcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlc21fYnJvd3Nlcl9uYXRpdmUgPSAoe1xuICByYW5kb21VVUlEXG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzXG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanNcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlc21fYnJvd3Nlcl9zdHJpbmdpZnkgPSAoKC8qIHVudXNlZCBwdXJlIGV4cHJlc3Npb24gb3Igc3VwZXIgKi8gbnVsbCAmJiAoc3RyaW5naWZ5KSkpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qc1xuXG5cblxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoZXNtX2Jyb3dzZXJfbmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBlc21fYnJvd3Nlcl9uYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlc21fYnJvd3Nlcl92NCA9ICh2NCk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MS51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0ZpdHR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1xuXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgRml0dHl2dWVfdHlwZV9zY3JpcHRfbGFuZ190cyA9ICgoMCxleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV9uYW1lc3BhY2VPYmplY3QuZGVmaW5lQ29tcG9uZW50KSh7XG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGNvbnRlbnRJRCA9IFwiZml0dHktXCIgKyBlc21fYnJvd3Nlcl92NCgpO1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50SURcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZpdHR5X21vZHVsZShcIiNcIiArIHRoaXMuY29udGVudElELCB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9LFxuICBuYW1lOiBcImx1bWVucGluay1maXR0eVwiLFxuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IE9iamVjdFxuICB9XG59KSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9GaXR0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcbiBcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMF0hLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0ZpdHR5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1Y2Y3Zjc2JnNjb3BlZD10cnVlJmxhbmc9Y3NzXG4vLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvRml0dHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODVjZjdmNzYmc2NvcGVkPXRydWUmbGFuZz1jc3NcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXG52YXIgZXhwb3J0SGVscGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NDQpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvRml0dHkudnVlXG5cblxuXG5cbjtcblxuXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi8oMCxleHBvcnRIZWxwZXIvKiBkZWZhdWx0ICovLlopKEZpdHR5dnVlX3R5cGVfc2NyaXB0X2xhbmdfdHMsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtODVjZjdmNzZcIl1dKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBGaXR0eSA9IChfX2V4cG9ydHNfXyk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9pbmRleC50c1xuXG5jb25zdCBjb21wb25lbnRzX3BsdWdpbiA9IHtcbiAgaW5zdGFsbChhcHApIHtcbiAgICBhcHAuY29tcG9uZW50KEZpdHR5Lm5hbWUsIEZpdHR5KTtcbiAgfVxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50cyA9IChjb21wb25lbnRzX3BsdWdpbik7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9saWIvY29tbWFuZHMvYnVpbGQvZW50cnktbGliLmpzXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZW50cnlfbGliID0gKGNvbXBvbmVudHMpO1xuXG5cbn0oKTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZTMtZml0dHkuY29tbW9uLmpzLm1hcCIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJzaG93QXZhdGFyXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxpbWcgOnNyYz1cImF2YXRhclVybFwiIC8+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuY29uc3Qgc2hvd0F2YXRhciA9IGRlZmluZU1vZGVsPGJvb2xlYW4+KCk7XG5kZWZpbmVQcm9wczx7IGF2YXRhclVybDogc3RyaW5nIH0+KCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZD5cbiAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBzZWxmLWNlbnRlclwiPlxuICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICB2LWlmPVwibWVtYmVyLmF2YXRhclVybFwiXG4gICAgICAgICAgc2l6ZT1cIjY0cHhcIlxuICAgICAgICAgIDp1cmw9XCJtZW1iZXIuYXZhdGFyVXJsXCJcbiAgICAgICAgICA6bmFtZT1cIm1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgQGNsaWNrPVwic2hvd0F2YXRhciA9ICEhbWVtYmVyLmF2YXRhclVybFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcS1tbC1tZCBzZWxmLWNlbnRlclwiPlxuICAgICAgICA8Zml0dHkgc3R5bGU9XCJsaW5lLWhlaWdodDogMTAwJVwiIDpvcHRpb25zPVwieyBtYXhTaXplOiAxMDAgfVwiPlxuICAgICAgICAgIHt7IG1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgICA8L2ZpdHR5PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8aW1nIHYtaWY9XCJtZW1iZXIuYmFubmVyVXJsXCIgOnNyYz1cIm1lbWJlci5iYW5uZXJVcmxcIiAvPlxuICAgIDxxLWNhcmQtYWN0aW9uc1xuICAgICAgdi1pZj1cInBvcHVwXCJcbiAgICAgIGNsYXNzPVwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgIDpzdHlsZT1cIlxuICAgICAgICBsb29rdXAuY29sb3JBY2NlbnRcbiAgICAgICAgICA/IGBtaW4taGVpZ2h0OiA1MnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjJHttZW1iZXIuY29sb3J9ICFpbXBvcnRhbnQ7YFxuICAgICAgICAgIDogJydcbiAgICAgIFwiXG4gICAgPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHYtaWY9XCIhc3lzdGVtUGFnZVwiXG4gICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgIGxhYmVsPVwiVmlldyBTeXN0ZW1cIlxuICAgICAgICA6dG89XCJgL2xvb2t1cC9zeXN0ZW0vJHtzeXN0ZW0uaWR9YFwiXG4gICAgICAvPlxuICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPHEtY2FyZC1zZWN0aW9uIHYtaWY9XCJkZXRhaWxzXCI+XG4gICAgICA8cS1tYXJrdXAtdGFibGUgZmxhdCBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgPHRkPnt7IG1lbWJlci5mb3JtYXRJZChpZE9wdHMpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciB2LWlmPVwibWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKVwiPlxuICAgICAgICAgICAgPHRkPlByb25vdW5zPC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBtZW1iZXIuZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5TeXN0ZW08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHN5c3RlbS5nZXROYW1lKGRldGVjdFByb25vdW5zKSB9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgdi1pZj1cIm1lbWJlci5tZXNzYWdlQ291bnRcIj5cbiAgICAgICAgICAgIDx0ZD5NZXNzYWdlcyBTZW50PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBtZW1iZXIubWVzc2FnZUNvdW50LnRvTG9jYWxlU3RyaW5nKCkgfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJtZW1iZXIubGFzdE1lc3NhZ2VBdFwiPlxuICAgICAgICAgICAgPHRkPkxhc3QgTWVzc2FnZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+PHJlbGF0aXZlLXRpbWUtZGlzcGxheSA6dGltZT1cIm1lbWJlci5sYXN0TWVzc2FnZUF0XCIgLz48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJtZW1iZXIuYmlydGhkYXlcIj5cbiAgICAgICAgICAgIDx0ZD5CaXJ0aGRheTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgbWVtYmVyLmdldEZvcm1hdHRlZEJpcnRoZGF5KCkgfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJtZW1iZXIuY29sb3JcIj5cbiAgICAgICAgICAgIDx0ZD5Db2xvcjwvdGQ+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgICAgICAgIGNvbG9yOiBgIyR7bWVtYmVyLmNvbG9yfWAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICc0OHB4JyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICAgICAgICAgICAgdGV4dEluZGVudDogJy00cHgnLFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJmJ1bGw7XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJtZW1iZXIuY3JlYXRlZEF0XCI+XG4gICAgICAgICAgICA8dGQ+Q3JlYXRlZCBBdDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgbWVtYmVyLmNyZWF0ZWRBdC5mb3JtYXQoJ1lZWVktTU0tREQnKSB9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvcS1tYXJrdXAtdGFibGU+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8cS1jYXJkLXNlY3Rpb24gdi1pZj1cIiEhbWVtYmVyLmRlc2NyaXB0aW9uPy5sZW5ndGhcIj5cbiAgICAgIDwhLS0gZXNsaW50LWRpc2FibGUgdnVlL25vLXYtaHRtbCAtLSBuZWVkZWQgZm9yIHJlbmRlcmluZyAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIHYtaHRtbD1cInJlbmRlclBrRGVzY3JpcHRpb24obWVtYmVyLmRlc2NyaXB0aW9uKVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBlc2xpbnQtZW5hYmxlIHZ1ZS9uby12LWh0bWwgLS0+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8YXZhdGFyLWRpYWxvZ1xuICAgICAgdi1pZj1cIm1lbWJlci5hdmF0YXJVcmxcIlxuICAgICAgdi1tb2RlbD1cInNob3dBdmF0YXJcIlxuICAgICAgOmF2YXRhci11cmw9XCJtZW1iZXIuYXZhdGFyVXJsXCJcbiAgICAvPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBGaXR0eSB9IGZyb20gJ0BsdW1lbnBpbmsvdnVlMy1maXR0eSc7XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuXG5pbXBvcnQgSW5pdGlhbEZhbGxiYWNrQXZhdGFyIGZyb20gJ3NyYy9jb21wb25lbnRzL0luaXRpYWxGYWxsYmFja0F2YXRhci52dWUnO1xuaW1wb3J0IFJlbGF0aXZlVGltZURpc3BsYXkgZnJvbSAnc3JjL2NvbXBvbmVudHMvUmVsYXRpdmVUaW1lRGlzcGxheS52dWUnO1xuaW1wb3J0IEF2YXRhckRpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9DYXJkL0F2YXRhckRpYWxvZy52dWUnO1xuXG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdzcmMvbW9kZWxzL01lbWJlcic7XG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5pbXBvcnQgeyByZW5kZXJQa0Rlc2NyaXB0aW9uIH0gZnJvbSAnc3JjL3V0aWwnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuY29uc3Qgc2V0dGluZ3MgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCB7IGRldGVjdFByb25vdW5zLCBsb29rdXAsIGlkOiBpZE9wdHMgfSA9IHN0b3JlVG9SZWZzKHNldHRpbmdzKTtcbmNvbnN0IHNob3dBdmF0YXIgPSByZWYoZmFsc2UpO1xuXG53aXRoRGVmYXVsdHMoXG4gIGRlZmluZVByb3BzPHtcbiAgICBtZW1iZXI6IE1lbWJlcjtcbiAgICBzeXN0ZW06IFN5c3RlbTtcbiAgICBkZXRhaWxzPzogYm9vbGVhbjtcbiAgICBwb3B1cD86IGJvb2xlYW47XG4gIH0+KCksXG4gIHsgZGV0YWlsczogdHJ1ZSwgcG9wdXA6IGZhbHNlIH0sXG4pO1xuXG5jb25zdCBzeXN0ZW1QYWdlID0gY29tcHV0ZWQoKCkgPT5cbiAgdXNlUm91dGUoKS5uYW1lPy50b1N0cmluZygpLnN0YXJ0c1dpdGgoJ2xvb2t1cC1zeXN0ZW0nKSxcbik7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwiY3NzXCI+XG50ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxudGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiaXNDb21wb25lbnQiLCJzdGFjayIsInRyYW5zZm9ybU9uIiwidHJhbnNmb3JtTW9kZWwiLCJ2dWVNb2R1bGUiLCJyZXF1aXJlJCQwIiwibW9kdWxlIiwiX2hvaXN0ZWRfMSIsImUiLCJ0IiwibiIsImkiLCJfdXNlTW9kZWwiLCJfd2l0aEN0eCIsIl9jcmVhdGVWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLE1BQU0sV0FBVyxPQUFnRSxFQUFFO0FBQ25GLE1BQU0sV0FBVyxPQUFnRSxFQUFFO0FBQ25GLE1BQU0sV0FBVyxPQUFnRSxFQUFFO0FBQ25GLE1BQU0sYUFBYSxPQUFpRSxFQUFFO0FBQ3RGLE1BQU0sa0JBQWtCO0FBQUEsRUFDeUM7QUFDakU7QUFDQSxNQUFNLGFBQWEsT0FBaUUsRUFBRTtBQUN0RixNQUFNLGVBQWUsT0FBbUUsRUFBRTtBQUMxRixNQUFNLHVCQUF1QjtBQUFBLEVBQ3dDO0FBQ3JFO0FBQ0EsTUFBTSxlQUFlLE9BQW1FLEVBQUU7QUFDMUYsTUFBTSx1QkFBdUI7QUFBQSxFQUN3QztBQUNyRTtBQUNBLE1BQU0saUJBQWlCO0FBQUEsRUFDOEM7QUFDckU7QUFDQSxNQUFNLGNBQWM7QUFBQSxFQUM4QztBQUNsRTtBQUNBLE1BQU0sZ0JBQWdCO0FBQUEsRUFDOEM7QUFDcEU7QUFDQSxNQUFNLG9CQUFvQjtBQUFBLEVBQ3lDO0FBQ25FO0FBQ0EsTUFBTSw0QkFBNEI7QUFBQSxFQUN3QztBQUMxRTtBQUNBLE1BQU0sb0JBQW9CO0FBQUEsRUFDeUM7QUFDbkU7QUFDQSxNQUFNLGlCQUFpQjtBQUFBLEVBQ3lDO0FBQ2hFO0FBQ0EsTUFBTSxrQkFBa0I7QUFBQSxFQUN5QztBQUNqRTtBQUNBLE1BQU0sY0FBYyxPQUFrRSxFQUFFO0FBQ3hGLE1BQU0sY0FBYyxPQUFrRSxFQUFFO0FBQ3hGLE1BQU0sZUFBZSxPQUFtRSxFQUFFO0FBQzFGLE1BQU0sb0JBQW9CO0FBQUEsRUFDd0M7QUFDbEU7QUFDQSxNQUFNLGNBQWMsT0FBa0UsRUFBRTtBQUN4RixNQUFNLGtCQUFrQjtBQUFBLEVBQ3lDO0FBQ2pFO0FBQ0EsTUFBTSxrQkFBa0I7QUFBQSxFQUN5QztBQUNqRTtBQUNBLE1BQU0sa0JBQWtCO0FBQUEsRUFDeUM7QUFDakU7QUFDQSxNQUFNLHVCQUF1QjtBQUFBLEVBQ3dDO0FBQ3JFO0FBQ0EsTUFBTSxjQUFjLE9BQWtFLEVBQUU7QUFDeEYsTUFBTSxXQUFXLE9BQWdFLEVBQUU7QUFDbkYsTUFBTSxhQUFhLE9BQWtFLEVBQUU7QUFDdkYsTUFBTSxpQkFBaUI7QUFBQSxFQUN3QztBQUMvRDtBQUNBLE1BQU0scUJBQXFCO0FBQUEsRUFDd0M7QUFDbkU7QUFDQSxNQUFNLGdCQUFnQixPQUFtRSxFQUFFO0FBQzNGLE1BQU0sZUFBZSxPQUFrRSxFQUFFO0FBQ3pGLE1BQU0sV0FBVyxPQUErRCxFQUFFO0FBQ2xGLE1BQU0sUUFBUSxPQUE2RCxFQUFFO0FBQzdFLE1BQU0sU0FBUyxPQUE2RCxFQUFFO0FBQzlFLE1BQU0sWUFBWSxPQUFnRSxFQUFFO0FBQ3BGLE1BQU0sZUFBZSxPQUFrRSxFQUFFO0FBQ3pGLE1BQU0sZ0JBQWdCO0FBQUEsRUFDcEIsQ0FBQyxRQUFRLEdBQUc7QUFBQSxFQUNaLENBQUMsUUFBUSxHQUFHO0FBQUEsRUFDWixDQUFDLFFBQVEsR0FBRztBQUFBLEVBQ1osQ0FBQyxVQUFVLEdBQUc7QUFBQSxFQUNkLENBQUMsZUFBZSxHQUFHO0FBQUEsRUFDbkIsQ0FBQyxVQUFVLEdBQUc7QUFBQSxFQUNkLENBQUMsWUFBWSxHQUFHO0FBQUEsRUFDaEIsQ0FBQyxvQkFBb0IsR0FBRztBQUFBLEVBQ3hCLENBQUMsWUFBWSxHQUFHO0FBQUEsRUFDaEIsQ0FBQyxvQkFBb0IsR0FBRztBQUFBLEVBQ3hCLENBQUMsY0FBYyxHQUFHO0FBQUEsRUFDbEIsQ0FBQyxXQUFXLEdBQUc7QUFBQSxFQUNmLENBQUMsYUFBYSxHQUFHO0FBQUEsRUFDakIsQ0FBQyxpQkFBaUIsR0FBRztBQUFBLEVBQ3JCLENBQUMseUJBQXlCLEdBQUc7QUFBQSxFQUM3QixDQUFDLGlCQUFpQixHQUFHO0FBQUEsRUFDckIsQ0FBQyxjQUFjLEdBQUc7QUFBQSxFQUNsQixDQUFDLGVBQWUsR0FBRztBQUFBLEVBQ25CLENBQUMsV0FBVyxHQUFHO0FBQUEsRUFDZixDQUFDLFdBQVcsR0FBRztBQUFBLEVBQ2YsQ0FBQyxZQUFZLEdBQUc7QUFBQSxFQUNoQixDQUFDLGlCQUFpQixHQUFHO0FBQUEsRUFDckIsQ0FBQyxXQUFXLEdBQUc7QUFBQSxFQUNmLENBQUMsZUFBZSxHQUFHO0FBQUEsRUFDbkIsQ0FBQyxlQUFlLEdBQUc7QUFBQSxFQUNuQixDQUFDLGVBQWUsR0FBRztBQUFBLEVBQ25CLENBQUMsb0JBQW9CLEdBQUc7QUFBQSxFQUN4QixDQUFDLFdBQVcsR0FBRztBQUFBLEVBQ2YsQ0FBQyxRQUFRLEdBQUc7QUFBQSxFQUNaLENBQUMsVUFBVSxHQUFHO0FBQUEsRUFDZCxDQUFDLGNBQWMsR0FBRztBQUFBLEVBQ2xCLENBQUMsa0JBQWtCLEdBQUc7QUFBQSxFQUN0QixDQUFDLGFBQWEsR0FBRztBQUFBLEVBQ2pCLENBQUMsWUFBWSxHQUFHO0FBQUEsRUFDaEIsQ0FBQyxRQUFRLEdBQUc7QUFBQSxFQUNaLENBQUMsS0FBSyxHQUFHO0FBQUEsRUFDVCxDQUFDLE1BQU0sR0FBRztBQUFBLEVBQ1YsQ0FBQyxTQUFTLEdBQUc7QUFBQSxFQUNiLENBQUMsWUFBWSxHQUFHO0FBQ2xCO0FBQ0EsU0FBUyx1QkFBdUIsU0FBUztBQUN2QyxTQUFPLHNCQUFzQixPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFDckMsa0JBQUEsQ0FBQyxJQUFJLFFBQVEsQ0FBQztBQUFBLEVBQUEsQ0FDN0I7QUFDSDtBQUVBLE1BQU0sYUFBYTtBQUFBLEVBQ2pCLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLFdBQVc7QUFBQSxFQUNYLEtBQUs7QUFDUDtBQUNBLE1BQU0sWUFBWTtBQUFBLEVBQ2hCLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFdBQVc7QUFBQSxFQUNYLEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFdBQVc7QUFBQSxFQUNYLEtBQUs7QUFBQSxFQUNMLHFCQUFxQjtBQUFBLEVBQ3JCLEtBQUs7QUFBQSxFQUNMLGlCQUFpQjtBQUFBLEVBQ2pCLEtBQUs7QUFBQSxFQUNMLGFBQWE7QUFBQSxFQUNiLEtBQUs7QUFBQSxFQUNMLGFBQWE7QUFBQSxFQUNiLEtBQUs7QUFBQSxFQUNMLHVCQUF1QjtBQUFBLEVBQ3ZCLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxFQUNMLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLGNBQWM7QUFBQSxFQUNkLE1BQU07QUFBQSxFQUNOLHNCQUFzQjtBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUNOLHdCQUF3QjtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLGVBQWU7QUFBQSxFQUNmLE1BQU07QUFBQSxFQUNOLHVCQUF1QjtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLDBCQUEwQjtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLDZCQUE2QjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLHVCQUF1QjtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLHNCQUFzQjtBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUNOLHVCQUF1QjtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLG1CQUFtQjtBQUFBLEVBQ25CLE1BQU07QUFBQSxFQUNOLDRCQUE0QjtBQUFBLEVBQzVCLE1BQU07QUFBQSxFQUNOLDBCQUEwQjtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLHVCQUF1QjtBQUFBLEVBQ3ZCLE1BQU07QUFDUjtBQUNBLE1BQU0sZUFBZTtBQUFBLEVBQ25CLFdBQVc7QUFBQSxFQUNYLEtBQUs7QUFBQSxFQUNMLGFBQWE7QUFBQSxFQUNiLEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFlBQVk7QUFBQSxFQUNaLEtBQUs7QUFDUDtBQUNBLE1BQU0sZ0JBQWdCO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsS0FBSztBQUFBLEVBQ0wsa0JBQWtCO0FBQUEsRUFDbEIsS0FBSztBQUFBLEVBQ0wsYUFBYTtBQUFBLEVBQ2IsS0FBSztBQUFBLEVBQ0wsaUJBQWlCO0FBQUEsRUFDakIsS0FBSztBQUNQO0FBQ0EsTUFBTSxVQUFVO0FBQUEsRUFDZCxPQUFPLEVBQUUsTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRLEVBQUU7QUFBQSxFQUN2QyxLQUFLLEVBQUUsTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRLEVBQUU7QUFBQSxFQUNyQyxRQUFRO0FBQ1Y7QUFDQSxTQUFTLFdBQVcsVUFBVSxTQUFTLElBQUk7QUFDbEMsU0FBQTtBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQSw2QkFBNkIsSUFBSTtBQUFBLElBQ2pDLFlBQVksQ0FBQztBQUFBLElBQ2IsWUFBWSxDQUFDO0FBQUEsSUFDYixRQUFRLENBQUM7QUFBQSxJQUNULFNBQVMsQ0FBQztBQUFBLElBQ1YsUUFBUSxDQUFDO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsRUFDUDtBQUNGO0FBQ0EsU0FBUyxnQkFBZ0IsU0FBUyxLQUFLLE9BQU8sVUFBVSxXQUFXLGNBQWMsWUFBWSxVQUFVLE9BQU8sa0JBQWtCLE9BQU9BLGVBQWMsT0FBTyxNQUFNLFNBQVM7QUFDekssTUFBSSxTQUFTO0FBQ1gsUUFBSSxTQUFTO0FBQ1gsY0FBUSxPQUFPLFVBQVU7QUFDekIsY0FBUSxPQUFPLG9CQUFvQixRQUFRLE9BQU9BLFlBQVcsQ0FBQztBQUFBLElBQUEsT0FDekQ7QUFDTCxjQUFRLE9BQU8sZUFBZSxRQUFRLE9BQU9BLFlBQVcsQ0FBQztBQUFBLElBQUE7QUFFM0QsUUFBSSxZQUFZO0FBQ2QsY0FBUSxPQUFPLGVBQWU7QUFBQSxJQUFBO0FBQUEsRUFDaEM7QUFFSyxTQUFBO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLGFBQUFBO0FBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxTQUFTLHNCQUFzQixVQUFVLE1BQU0sU0FBUztBQUMvQyxTQUFBO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxTQUFTLHVCQUF1QixZQUFZLE1BQU0sU0FBUztBQUNsRCxTQUFBO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxTQUFTLHFCQUFxQixLQUFLLE9BQU87QUFDakMsU0FBQTtBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsS0FBSyxTQUFTLEdBQUcsSUFBSSx1QkFBdUIsS0FBSyxJQUFJLElBQUk7QUFBQSxJQUN6RDtBQUFBLEVBQ0Y7QUFDRjtBQUNBLFNBQVMsdUJBQXVCLFNBQVMsV0FBVyxPQUFPLE1BQU0sU0FBUyxZQUFZLEdBQUc7QUFDaEYsU0FBQTtBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsV0FBVyxXQUFXLElBQUk7QUFBQSxFQUM1QjtBQUNGO0FBQ0EsU0FBUyxvQkFBb0IsU0FBUyxLQUFLO0FBQ2xDLFNBQUE7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOO0FBQUEsSUFDQSxTQUFTLFNBQVMsT0FBTyxJQUFJLHVCQUF1QixTQUFTLE9BQU8sR0FBRyxJQUFJO0FBQUEsRUFDN0U7QUFDRjtBQUNBLFNBQVMseUJBQXlCLFVBQVUsTUFBTSxTQUFTO0FBQ2xELFNBQUE7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjtBQUNBLFNBQVMscUJBQXFCLFFBQVEsT0FBTyxDQUFBLEdBQUksTUFBTSxTQUFTO0FBQ3ZELFNBQUE7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOO0FBQUEsSUFDQTtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7QUFDRjtBQUNBLFNBQVMseUJBQXlCLFFBQVEsVUFBVSxRQUFRLFVBQVUsT0FBTyxTQUFTLE9BQU8sTUFBTSxTQUFTO0FBQ25HLFNBQUE7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjtBQUNBLFNBQVMsNEJBQTRCLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTTtBQUN6RSxTQUFBO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsS0FBSztBQUFBLEVBQ1A7QUFDRjtBQUNBLFNBQVMsc0JBQXNCLE9BQU8sT0FBTyxvQkFBb0IsT0FBTyxVQUFVLE9BQU87QUFDaEYsU0FBQTtBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLElBQ2pCLEtBQUs7QUFBQSxFQUNQO0FBQ0Y7QUFDQSxTQUFTLHFCQUFxQixNQUFNO0FBQzNCLFNBQUE7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOO0FBQUEsSUFDQSxLQUFLO0FBQUEsRUFDUDtBQUNGO0FBQ0EsU0FBUyxzQkFBc0IsVUFBVTtBQUNoQyxTQUFBO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0EsS0FBSztBQUFBLEVBQ1A7QUFDRjtBQUNBLFNBQVMsa0JBQWtCLE1BQU0sWUFBWSxXQUFXO0FBQy9DLFNBQUE7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLEtBQUs7QUFBQSxFQUNQO0FBQ0Y7QUFDQSxTQUFTLDJCQUEyQixNQUFNLE9BQU87QUFDeEMsU0FBQTtBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQSxLQUFLO0FBQUEsRUFDUDtBQUNGO0FBQ0EsU0FBUyx5QkFBeUIsYUFBYTtBQUN0QyxTQUFBO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0EsS0FBSztBQUFBLEVBQ1A7QUFDRjtBQUNBLFNBQVMsc0JBQXNCLFNBQVM7QUFDL0IsU0FBQTtBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ047QUFBQSxJQUNBLEtBQUs7QUFBQSxFQUNQO0FBQ0Y7QUFDQSxTQUFTLGVBQWUsS0FBS0EsY0FBYTtBQUNqQyxTQUFBLE9BQU9BLGVBQWMsZUFBZTtBQUM3QztBQUNBLFNBQVMsb0JBQW9CLEtBQUtBLGNBQWE7QUFDdEMsU0FBQSxPQUFPQSxlQUFjLGVBQWU7QUFDN0M7QUFDQSxTQUFTLGVBQWUsTUFBTSxFQUFFLFFBQVEsY0FBYyxTQUFTO0FBQ3pELE1BQUEsQ0FBQyxLQUFLLFNBQVM7QUFDakIsU0FBSyxVQUFVO0FBQ2YsaUJBQWEsZUFBZSxPQUFPLEtBQUssV0FBVyxDQUFDO0FBQ3BELFdBQU8sVUFBVTtBQUNqQixXQUFPLG9CQUFvQixPQUFPLEtBQUssV0FBVyxDQUFDO0FBQUEsRUFBQTtBQUV2RDtBQUVBLE1BQU0sd0JBQXdCLElBQUksV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDO0FBQ3ZELE1BQU0seUJBQXlCLElBQUksV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDO0FBQ3hELFNBQVMsZUFBZSxHQUFHO0FBQ3pCLFNBQU8sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLE1BQU0sS0FBSztBQUNoRDtBQUNBLFNBQVMsYUFBYSxHQUFHO0FBQ2hCLFNBQUEsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLE1BQU07QUFDOUQ7QUFDQSxTQUFTLGtCQUFrQixHQUFHO0FBQzVCLFNBQU8sTUFBTSxNQUFNLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFDL0M7QUFDQSxTQUFTLFlBQVksS0FBSztBQUN4QixRQUFNLE1BQU0sSUFBSSxXQUFXLElBQUksTUFBTTtBQUNyQyxXQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ25DLFFBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDO0FBQUEsRUFBQTtBQUVwQixTQUFBO0FBQ1Q7QUFDQSxNQUFNLFlBQVk7QUFBQSxFQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7QUFBQTtBQUFBLEVBRTlDLFVBQVUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUFBO0FBQUEsRUFFckMsWUFBWSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQUE7QUFBQSxFQUV2QyxXQUFXLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssR0FBRyxDQUFDO0FBQUE7QUFBQSxFQUUvRCxVQUFVLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBO0FBQUEsRUFFMUQsVUFBVSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLENBQUM7QUFBQTtBQUFBLEVBRTFELGFBQWEsSUFBSSxXQUFXO0FBQUEsSUFDMUI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNELENBQUE7QUFBQTtBQUVIO0FBQ0EsTUFBTSxVQUFVO0FBQUEsRUFDZCxZQUFZQyxRQUFPLEtBQUs7QUFDdEIsU0FBSyxRQUFRQTtBQUNiLFNBQUssTUFBTTtBQUVYLFNBQUssUUFBUTtBQUViLFNBQUssU0FBUztBQUVkLFNBQUssZUFBZTtBQUVwQixTQUFLLFFBQVE7QUFFYixTQUFLLGNBQWM7QUFFbkIsU0FBSyxZQUFZO0FBRWpCLFNBQUssV0FBVztBQUVoQixTQUFLLFFBQVE7QUFFYixTQUFLLFNBQVM7QUFFZCxTQUFLLFdBQVcsQ0FBQztBQUNqQixTQUFLLE9BQU87QUFDWixTQUFLLGdCQUFnQjtBQUNyQixTQUFLLGlCQUFpQjtBQUN0QixTQUFLLGlCQUFpQjtBQUN0QixTQUFLLGtCQUFrQjtBQUN2QixTQUFLLGdCQUFnQjtBQUFBLEVBQUE7QUFBQSxFQUV2QixJQUFJLFlBQVk7QUFDZCxXQUFPLEtBQUssU0FBUyxLQUFLLEtBQUssTUFBTSxXQUFXO0FBQUEsRUFBQTtBQUFBLEVBRWxELFFBQVE7QUFDTixTQUFLLFFBQVE7QUFDYixTQUFLLE9BQU87QUFDWixTQUFLLFNBQVM7QUFDZCxTQUFLLGVBQWU7QUFDcEIsU0FBSyxRQUFRO0FBQ2IsU0FBSyxZQUFZO0FBQ2pCLFNBQUssV0FBVztBQUNoQixTQUFLLGtCQUFrQjtBQUN2QixTQUFLLFNBQVMsU0FBUztBQUN2QixTQUFLLGdCQUFnQjtBQUNyQixTQUFLLGlCQUFpQjtBQUFBLEVBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVF4QixPQUFPLE9BQU87QUFDWixRQUFJLE9BQU87QUFDWCxRQUFJLFNBQVMsUUFBUTtBQUNyQixhQUFTLElBQUksS0FBSyxTQUFTLFNBQVMsR0FBRyxLQUFLLEdBQUcsS0FBSztBQUM1QyxZQUFBLGVBQWUsS0FBSyxTQUFTLENBQUM7QUFDcEMsVUFBSSxRQUFRLGNBQWM7QUFDeEIsZUFBTyxJQUFJO0FBQ1gsaUJBQVMsUUFBUTtBQUNqQjtBQUFBLE1BQUE7QUFBQSxJQUNGO0FBRUssV0FBQTtBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQUE7QUFBQSxFQUVGLE9BQU87QUFDTCxXQUFPLEtBQUssT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDO0FBQUEsRUFBQTtBQUFBLEVBRTlDLFVBQVUsR0FBRztBQUNYLFFBQUksTUFBTSxJQUFJO0FBQ1IsVUFBQSxLQUFLLFFBQVEsS0FBSyxjQUFjO0FBQ2xDLGFBQUssSUFBSSxPQUFPLEtBQUssY0FBYyxLQUFLLEtBQUs7QUFBQSxNQUFBO0FBRS9DLFdBQUssUUFBUTtBQUNiLFdBQUssZUFBZSxLQUFLO0FBQUEsSUFBQSxXQUNoQixDQUFDLEtBQUssVUFBVSxNQUFNLEtBQUssY0FBYyxDQUFDLEdBQUc7QUFDdEQsV0FBSyxRQUFRO0FBQ2IsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyx1QkFBdUIsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUMvQjtBQUFBLEVBRUYsdUJBQXVCLEdBQUc7QUFDeEIsUUFBSSxNQUFNLEtBQUssY0FBYyxLQUFLLGNBQWMsR0FBRztBQUNqRCxVQUFJLEtBQUssbUJBQW1CLEtBQUssY0FBYyxTQUFTLEdBQUc7QUFDekQsY0FBTSxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssY0FBYztBQUM5QyxZQUFBLFFBQVEsS0FBSyxjQUFjO0FBQzdCLGVBQUssSUFBSSxPQUFPLEtBQUssY0FBYyxLQUFLO0FBQUEsUUFBQTtBQUUxQyxhQUFLLFFBQVE7QUFDYixhQUFLLGVBQWU7QUFBQSxNQUFBLE9BQ2Y7QUFDQSxhQUFBO0FBQUEsTUFBQTtBQUFBLElBQ1AsV0FDUyxLQUFLLFVBQVU7QUFDeEIsV0FBSyxRQUFRO0FBQ2IsV0FBSyxjQUFjLENBQUM7QUFBQSxJQUFBLE9BQ2Y7QUFDTCxXQUFLLFFBQVE7QUFDYixXQUFLLFVBQVUsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUNsQjtBQUFBLEVBRUYsbUJBQW1CLEdBQUc7QUFDcEIsUUFBSSxNQUFNLEtBQUssZUFBZSxDQUFDLEdBQUc7QUFDaEMsV0FBSyxRQUFRO0FBQ2IsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyx3QkFBd0IsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUNoQztBQUFBLEVBRUYsd0JBQXdCLEdBQUc7QUFDekIsUUFBSSxNQUFNLEtBQUssZUFBZSxLQUFLLGNBQWMsR0FBRztBQUNsRCxVQUFJLEtBQUssbUJBQW1CLEtBQUssZUFBZSxTQUFTLEdBQUc7QUFDMUQsYUFBSyxJQUFJLGdCQUFnQixLQUFLLGNBQWMsS0FBSyxRQUFRLENBQUM7QUFDMUQsWUFBSSxLQUFLLFVBQVU7QUFDakIsZUFBSyxRQUFRO0FBQUEsUUFBQSxPQUNSO0FBQ0wsZUFBSyxRQUFRO0FBQUEsUUFBQTtBQUVWLGFBQUEsZUFBZSxLQUFLLFFBQVE7QUFBQSxNQUFBLE9BQzVCO0FBQ0EsYUFBQTtBQUFBLE1BQUE7QUFBQSxJQUNQLE9BQ0s7QUFDTCxXQUFLLFFBQVE7QUFDYixXQUFLLG1CQUFtQixDQUFDO0FBQUEsSUFBQTtBQUFBLEVBQzNCO0FBQUEsRUFFRiwwQkFBMEIsR0FBRztBQUMzQixVQUFNLFFBQVEsS0FBSyxrQkFBa0IsS0FBSyxnQkFBZ0I7QUFDMUQsVUFBTSxVQUFVO0FBQUE7QUFBQSxNQUVkLGtCQUFrQixDQUFDO0FBQUE7QUFBQTtBQUFBLE9BR2xCLElBQUksUUFBUSxLQUFLLGdCQUFnQixLQUFLLGFBQWE7QUFBQTtBQUV0RCxRQUFJLENBQUMsU0FBUztBQUNaLFdBQUssV0FBVztBQUFBLElBQUEsV0FDUCxDQUFDLE9BQU87QUFDWixXQUFBO0FBQ0w7QUFBQSxJQUFBO0FBRUYsU0FBSyxnQkFBZ0I7QUFDckIsU0FBSyxRQUFRO0FBQ2IsU0FBSyxlQUFlLENBQUM7QUFBQSxFQUFBO0FBQUE7QUFBQSxFQUd2QixjQUFjLEdBQUc7QUFDZixRQUFJLEtBQUssa0JBQWtCLEtBQUssZ0JBQWdCLFFBQVE7QUFDdEQsVUFBSSxNQUFNLE1BQU0sYUFBYSxDQUFDLEdBQUc7QUFDL0IsY0FBTSxZQUFZLEtBQUssUUFBUSxLQUFLLGdCQUFnQjtBQUNoRCxZQUFBLEtBQUssZUFBZSxXQUFXO0FBQ2pDLGdCQUFNLGNBQWMsS0FBSztBQUN6QixlQUFLLFFBQVE7QUFDYixlQUFLLElBQUksT0FBTyxLQUFLLGNBQWMsU0FBUztBQUM1QyxlQUFLLFFBQVE7QUFBQSxRQUFBO0FBRWYsYUFBSyxlQUFlLFlBQVk7QUFDaEMsYUFBSyxzQkFBc0IsQ0FBQztBQUM1QixhQUFLLFdBQVc7QUFDaEI7QUFBQSxNQUFBO0FBRUYsV0FBSyxnQkFBZ0I7QUFBQSxJQUFBO0FBRXZCLFNBQUssSUFBSSxRQUFRLEtBQUssZ0JBQWdCLEtBQUssYUFBYSxHQUFHO0FBQ3pELFdBQUssaUJBQWlCO0FBQUEsSUFBQSxXQUNiLEtBQUssa0JBQWtCLEdBQUc7QUFDL0IsVUFBQSxLQUFLLG9CQUFvQixVQUFVLFlBQVksS0FBSyxvQkFBb0IsVUFBVSxlQUFlLENBQUMsS0FBSyxXQUFXO0FBQ3BILFlBQUksQ0FBQyxLQUFLLFVBQVUsTUFBTSxLQUFLLGNBQWMsQ0FBQyxHQUFHO0FBQy9DLGVBQUssUUFBUTtBQUNiLGVBQUssaUJBQWlCO0FBQ3RCLGVBQUssdUJBQXVCLENBQUM7QUFBQSxRQUFBO0FBQUEsTUFFdEIsV0FBQSxLQUFLLGNBQWMsRUFBRSxHQUFHO0FBQ2pDLGFBQUssZ0JBQWdCO0FBQUEsTUFBQTtBQUFBLElBQ3ZCLE9BQ0s7QUFDQSxXQUFBLGdCQUFnQixPQUFPLE1BQU0sRUFBRTtBQUFBLElBQUE7QUFBQSxFQUN0QztBQUFBLEVBRUYsbUJBQW1CLEdBQUc7QUFDcEIsUUFBSSxNQUFNLFVBQVUsTUFBTSxLQUFLLGFBQWEsR0FBRztBQUM3QyxVQUFJLEVBQUUsS0FBSyxrQkFBa0IsVUFBVSxNQUFNLFFBQVE7QUFDbkQsYUFBSyxRQUFRO0FBQ2IsYUFBSyxrQkFBa0IsVUFBVTtBQUNqQyxhQUFLLGdCQUFnQjtBQUNoQixhQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsTUFBQTtBQUFBLElBQ25DLE9BQ0s7QUFDTCxXQUFLLGdCQUFnQjtBQUNyQixXQUFLLFFBQVE7QUFDYixXQUFLLG1CQUFtQixDQUFDO0FBQUEsSUFBQTtBQUFBLEVBQzNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRRixjQUFjLEdBQUc7QUFDZixXQUFPLEVBQUUsS0FBSyxRQUFRLEtBQUssT0FBTyxRQUFRO0FBQ3hDLFlBQU0sS0FBSyxLQUFLLE9BQU8sV0FBVyxLQUFLLEtBQUs7QUFDNUMsVUFBSSxPQUFPLElBQUk7QUFDUixhQUFBLFNBQVMsS0FBSyxLQUFLLEtBQUs7QUFBQSxNQUFBO0FBRS9CLFVBQUksT0FBTyxHQUFHO0FBQ0wsZUFBQTtBQUFBLE1BQUE7QUFBQSxJQUNUO0FBRUcsU0FBQSxRQUFRLEtBQUssT0FBTyxTQUFTO0FBQzNCLFdBQUE7QUFBQSxFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVVQsbUJBQW1CLEdBQUc7QUFDcEIsUUFBSSxNQUFNLEtBQUssZ0JBQWdCLEtBQUssYUFBYSxHQUFHO0FBQ2xELFVBQUksRUFBRSxLQUFLLGtCQUFrQixLQUFLLGdCQUFnQixRQUFRO0FBQ3BELFlBQUEsS0FBSyxvQkFBb0IsVUFBVSxVQUFVO0FBQy9DLGVBQUssSUFBSSxRQUFRLEtBQUssY0FBYyxLQUFLLFFBQVEsQ0FBQztBQUFBLFFBQUEsT0FDN0M7QUFDTCxlQUFLLElBQUksVUFBVSxLQUFLLGNBQWMsS0FBSyxRQUFRLENBQUM7QUFBQSxRQUFBO0FBRXRELGFBQUssZ0JBQWdCO0FBQ2hCLGFBQUEsZUFBZSxLQUFLLFFBQVE7QUFDakMsYUFBSyxRQUFRO0FBQUEsTUFBQTtBQUFBLElBQ2YsV0FDUyxLQUFLLGtCQUFrQixHQUFHO0FBQ25DLFVBQUksS0FBSyxjQUFjLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxHQUFHO0FBQy9DLGFBQUssZ0JBQWdCO0FBQUEsTUFBQTtBQUFBLElBQ3ZCLFdBQ1MsTUFBTSxLQUFLLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLEdBQUc7QUFDN0QsV0FBSyxnQkFBZ0I7QUFBQSxJQUFBO0FBQUEsRUFDdkI7QUFBQSxFQUVGLGFBQWEsVUFBVSxRQUFRO0FBQ3hCLFNBQUEsWUFBWSxVQUFVLE1BQU07QUFDakMsU0FBSyxRQUFRO0FBQUEsRUFBQTtBQUFBLEVBRWYsWUFBWSxVQUFVLFFBQVE7QUFDNUIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssZ0JBQWdCO0FBQUEsRUFBQTtBQUFBLEVBRXZCLG1CQUFtQixHQUFHO0FBQ3BCLFFBQUksTUFBTSxJQUFJO0FBQ1osV0FBSyxRQUFRO0FBQ1IsV0FBQSxlQUFlLEtBQUssUUFBUTtBQUFBLElBQUEsV0FDeEIsTUFBTSxJQUFJO0FBQ25CLFdBQUssUUFBUTtBQUNSLFdBQUEsZUFBZSxLQUFLLFFBQVE7QUFBQSxJQUFBLFdBQ3hCLGVBQWUsQ0FBQyxHQUFHO0FBQzVCLFdBQUssZUFBZSxLQUFLO0FBQ3JCLFVBQUEsS0FBSyxTQUFTLEdBQUc7QUFDbkIsYUFBSyxRQUFRO0FBQUEsTUFBQSxXQUNKLEtBQUssV0FBVztBQUN6QixhQUFLLFFBQVE7QUFBQSxNQUFBLFdBQ0osQ0FBQyxLQUFLLE9BQU87QUFDdEIsWUFBSSxNQUFNLEtBQUs7QUFDYixlQUFLLFFBQVE7QUFBQSxRQUFBLE9BQ1I7QUFDQSxlQUFBLFFBQVEsTUFBTSxNQUFNLEtBQUs7QUFBQSxRQUFBO0FBQUEsTUFDaEMsT0FDSztBQUNMLGFBQUssUUFBUTtBQUFBLE1BQUE7QUFBQSxJQUNmLFdBQ1MsTUFBTSxJQUFJO0FBQ25CLFdBQUssUUFBUTtBQUFBLElBQUEsT0FDUjtBQUNMLFdBQUssUUFBUTtBQUNiLFdBQUssVUFBVSxDQUFDO0FBQUEsSUFBQTtBQUFBLEVBQ2xCO0FBQUEsRUFFRixlQUFlLEdBQUc7QUFDWixRQUFBLGtCQUFrQixDQUFDLEdBQUc7QUFDeEIsV0FBSyxjQUFjLENBQUM7QUFBQSxJQUFBO0FBQUEsRUFDdEI7QUFBQSxFQUVGLHNCQUFzQixHQUFHO0FBQ25CLFFBQUEsa0JBQWtCLENBQUMsR0FBRztBQUN4QixZQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxjQUFjLEtBQUssS0FBSztBQUMzRCxVQUFJLFFBQVEsWUFBWTtBQUN0QixhQUFLLFlBQVksWUFBWSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFBQTtBQUU3QyxXQUFLLGNBQWMsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUN0QjtBQUFBLEVBRUYsY0FBYyxHQUFHO0FBQ2YsU0FBSyxJQUFJLGNBQWMsS0FBSyxjQUFjLEtBQUssS0FBSztBQUNwRCxTQUFLLGVBQWU7QUFDcEIsU0FBSyxRQUFRO0FBQ2IsU0FBSyxvQkFBb0IsQ0FBQztBQUFBLEVBQUE7QUFBQSxFQUU1QiwwQkFBMEIsR0FBRztBQUN2QixRQUFBLGFBQWEsQ0FBQyxFQUFHO0FBQUEsYUFBVyxNQUFNLElBQUk7QUFJeEMsV0FBSyxRQUFRO0FBQ1IsV0FBQSxlQUFlLEtBQUssUUFBUTtBQUFBLElBQUEsT0FDNUI7QUFDTCxXQUFLLFFBQVEsZUFBZSxDQUFDLElBQUksSUFBSTtBQUNyQyxXQUFLLGVBQWUsS0FBSztBQUFBLElBQUE7QUFBQSxFQUMzQjtBQUFBLEVBRUYsc0JBQXNCLEdBQUc7QUFDdkIsUUFBSSxNQUFNLE1BQU0sYUFBYSxDQUFDLEdBQUc7QUFDL0IsV0FBSyxJQUFJLFdBQVcsS0FBSyxjQUFjLEtBQUssS0FBSztBQUNqRCxXQUFLLGVBQWU7QUFDcEIsV0FBSyxRQUFRO0FBQ2IsV0FBSyx5QkFBeUIsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUNqQztBQUFBLEVBRUYseUJBQXlCLEdBQUc7QUFDMUIsUUFBSSxNQUFNLElBQUk7QUFDWixXQUFLLFFBQVE7QUFDUixXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQTtBQUFBLEVBQ25DO0FBQUEsRUFFRixvQkFBb0IsR0FBRztBQUNyQixRQUFJLE1BQU0sSUFBSTtBQUNQLFdBQUEsSUFBSSxhQUFhLEtBQUssS0FBSztBQUNoQyxVQUFJLEtBQUssVUFBVTtBQUNqQixhQUFLLFFBQVE7QUFBQSxNQUFBLE9BQ1I7QUFDTCxhQUFLLFFBQVE7QUFBQSxNQUFBO0FBRVYsV0FBQSxlQUFlLEtBQUssUUFBUTtBQUFBLElBQUEsV0FDeEIsTUFBTSxJQUFJO0FBQ25CLFdBQUssUUFBUTtBQUFBLElBR2IsV0FDUyxNQUFNLE1BQU0sS0FBSyxLQUFBLE1BQVcsSUFBSTtBQUNwQyxXQUFBLElBQUksYUFBYSxLQUFLLEtBQUs7QUFDaEMsV0FBSyxRQUFRO0FBQ2IsV0FBSyxlQUFlLEtBQUs7QUFBQSxJQUFBLFdBQ2hCLENBQUMsYUFBYSxDQUFDLEdBQUc7QUFPM0IsV0FBSyxnQkFBZ0IsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUN4QjtBQUFBLEVBRUYsZ0JBQWdCLEdBQUc7QUFDakIsUUFBSSxNQUFNLE9BQU8sS0FBSyxLQUFBLE1BQVcsSUFBSTtBQUNuQyxXQUFLLFFBQVE7QUFDYixXQUFLLGVBQWUsS0FBSztBQUFBLElBQUEsV0FDaEIsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQ3ZELFdBQUssSUFBSSxVQUFVLEtBQUssT0FBTyxLQUFLLFFBQVEsQ0FBQztBQUM3QyxXQUFLLFFBQVE7QUFDUixXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQSxPQUM1QjtBQUNMLFdBQUssUUFBUTtBQUNiLFdBQUssZUFBZSxLQUFLO0FBQUEsSUFBQTtBQUFBLEVBQzNCO0FBQUEsRUFFRixzQkFBc0IsR0FBRztBQUN2QixRQUFJLE1BQU0sSUFBSTtBQUNQLFdBQUEsSUFBSSxpQkFBaUIsS0FBSyxLQUFLO0FBQ3BDLFdBQUssUUFBUTtBQUNSLFdBQUEsZUFBZSxLQUFLLFFBQVE7QUFDakMsV0FBSyxXQUFXO0FBQUEsSUFBQSxXQUNQLENBQUMsYUFBYSxDQUFDLEdBQUc7QUFDM0IsV0FBSyxRQUFRO0FBQ2IsV0FBSyxvQkFBb0IsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUM1QjtBQUFBLEVBRUYsZ0JBQWdCLEdBQUc7QUFDakIsUUFBSSxNQUFNLE1BQU0sa0JBQWtCLENBQUMsR0FBRztBQUNwQyxXQUFLLElBQUksYUFBYSxLQUFLLGNBQWMsS0FBSyxLQUFLO0FBQ25ELFdBQUssa0JBQWtCLENBQUM7QUFBQSxJQUFBO0FBQUEsRUFNMUI7QUFBQSxFQUVGLGVBQWUsR0FBRztBQUNoQixRQUFJLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQyxHQUFHO0FBQ3BDLFdBQUssSUFBSSxVQUFVLEtBQUssY0FBYyxLQUFLLEtBQUs7QUFDaEQsV0FBSyxrQkFBa0IsQ0FBQztBQUFBLElBQUEsV0FDZixNQUFNLElBQUk7QUFDbkIsV0FBSyxJQUFJLFVBQVUsS0FBSyxjQUFjLEtBQUssS0FBSztBQUNoRCxXQUFLLFFBQVE7QUFDUixXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQSxXQUN4QixNQUFNLElBQUk7QUFDbkIsV0FBSyxJQUFJLFVBQVUsS0FBSyxjQUFjLEtBQUssS0FBSztBQUNoRCxXQUFLLFFBQVE7QUFDUixXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQTtBQUFBLEVBQ25DO0FBQUEsRUFFRixjQUFjLEdBQUc7QUFDZixRQUFJLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQyxHQUFHO0FBQ3BDLFdBQUssSUFBSSxTQUFTLEtBQUssY0FBYyxLQUFLLEtBQUs7QUFDL0MsV0FBSyxrQkFBa0IsQ0FBQztBQUFBLElBQUEsV0FDZixNQUFNLElBQUk7QUFDbkIsV0FBSyxRQUFRO0FBQUEsSUFBQSxXQUNKLE1BQU0sSUFBSTtBQUNuQixXQUFLLElBQUksU0FBUyxLQUFLLGNBQWMsS0FBSyxLQUFLO0FBQy9DLFdBQUssUUFBUTtBQUNSLFdBQUEsZUFBZSxLQUFLLFFBQVE7QUFBQSxJQUFBO0FBQUEsRUFDbkM7QUFBQSxFQUVGLHFCQUFxQixHQUFHO0FBQ3RCLFFBQUksTUFBTSxJQUFJO0FBQ1osV0FBSyxRQUFRO0FBQUEsSUFDSixXQUFBLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQyxHQUFHO0FBQzNDLFdBQUssSUFBSSxTQUFTLEtBQUssY0FBYyxLQUFLLFFBQVEsQ0FBQztBQUNuRCxXQUFLLGtCQUFrQixDQUFDO0FBQUEsSUFNeEI7QUFBQSxFQUNGO0FBQUEsRUFFRixtQkFBbUIsR0FBRztBQUNwQixRQUFJLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQyxHQUFHO0FBQ3BDLFdBQUssSUFBSSxjQUFjLEtBQUssY0FBYyxLQUFLLEtBQUs7QUFDcEQsV0FBSyxrQkFBa0IsQ0FBQztBQUFBLElBQUEsV0FDZixNQUFNLElBQUk7QUFDbkIsV0FBSyxJQUFJLGNBQWMsS0FBSyxjQUFjLEtBQUssS0FBSztBQUMvQyxXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQTtBQUFBLEVBQ25DO0FBQUEsRUFFRixrQkFBa0IsR0FBRztBQUNuQixTQUFLLGVBQWUsS0FBSztBQUN6QixTQUFLLFFBQVE7QUFDUixTQUFBLElBQUksZ0JBQWdCLEtBQUssS0FBSztBQUNuQyxTQUFLLG1CQUFtQixDQUFDO0FBQUEsRUFBQTtBQUFBLEVBRTNCLG1CQUFtQixHQUFHO0FBQ3BCLFFBQUksTUFBTSxJQUFJO0FBQ1osV0FBSyxRQUFRO0FBQUEsSUFDSixXQUFBLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFDL0IsV0FBSyxJQUFJLFlBQVksR0FBRyxLQUFLLFlBQVk7QUFDekMsV0FBSyxlQUFlO0FBQ3BCLFdBQUssUUFBUTtBQUNiLFdBQUssb0JBQW9CLENBQUM7QUFBQSxJQUFBLFdBQ2pCLENBQUMsYUFBYSxDQUFDLEdBQUc7QUFDM0IsV0FBSyxJQUFJLFlBQVksR0FBRyxLQUFLLFlBQVk7QUFDekMsV0FBSyxnQkFBZ0IsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUN4QjtBQUFBLEVBRUYscUJBQXFCLEdBQUc7QUFDdEIsUUFBSSxNQUFNLElBQUk7QUFDWixXQUFLLFFBQVE7QUFDUixXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQSxXQUN4QixNQUFNLElBQUk7QUFDbkIsV0FBSyxRQUFRO0FBQ1IsV0FBQSxlQUFlLEtBQUssUUFBUTtBQUFBLElBQUEsV0FDeEIsQ0FBQyxhQUFhLENBQUMsR0FBRztBQUMzQixXQUFLLGVBQWUsS0FBSztBQUN6QixXQUFLLFFBQVE7QUFDYixXQUFLLHlCQUF5QixDQUFDO0FBQUEsSUFBQTtBQUFBLEVBQ2pDO0FBQUEsRUFFRixrQkFBa0IsR0FBRyxPQUFPO0FBQzFCLFFBQUksTUFBTSxTQUFTLEtBQUssY0FBYyxLQUFLLEdBQUc7QUFDNUMsV0FBSyxJQUFJLGFBQWEsS0FBSyxjQUFjLEtBQUssS0FBSztBQUNuRCxXQUFLLGVBQWU7QUFDcEIsV0FBSyxJQUFJO0FBQUEsUUFDUCxVQUFVLEtBQUssSUFBSTtBQUFBLFFBQ25CLEtBQUssUUFBUTtBQUFBLE1BQ2Y7QUFDQSxXQUFLLFFBQVE7QUFBQSxJQUFBO0FBQUEsRUFDZjtBQUFBLEVBRUYsNkJBQTZCLEdBQUc7QUFDekIsU0FBQSxrQkFBa0IsR0FBRyxFQUFFO0FBQUEsRUFBQTtBQUFBLEVBRTlCLDZCQUE2QixHQUFHO0FBQ3pCLFNBQUEsa0JBQWtCLEdBQUcsRUFBRTtBQUFBLEVBQUE7QUFBQSxFQUU5Qix5QkFBeUIsR0FBRztBQUMxQixRQUFJLGFBQWEsQ0FBQyxLQUFLLE1BQU0sSUFBSTtBQUMvQixXQUFLLElBQUksYUFBYSxLQUFLLGNBQWMsS0FBSyxLQUFLO0FBQ25ELFdBQUssZUFBZTtBQUNwQixXQUFLLElBQUksWUFBWSxHQUFHLEtBQUssS0FBSztBQUNsQyxXQUFLLFFBQVE7QUFDYixXQUFLLG9CQUFvQixDQUFDO0FBQUEsSUFBQSxXQUNtRCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFDM0gsV0FBSyxJQUFJO0FBQUEsUUFDUDtBQUFBLFFBQ0EsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUFBLE1BQ0s7QUFBQSxFQUFBO0FBQUEsRUFFVCx1QkFBdUIsR0FBRztBQUN4QixRQUFJLE1BQU0sSUFBSTtBQUNaLFdBQUssUUFBUTtBQUNiLFdBQUssZ0JBQWdCO0FBQUEsSUFBQSxPQUNoQjtBQUNBLFdBQUEsUUFBUSxNQUFNLEtBQUssS0FBSztBQUFBLElBQUE7QUFBQSxFQUMvQjtBQUFBLEVBRUYsbUJBQW1CLEdBQUc7QUFDcEIsUUFBSSxNQUFNLE1BQU0sS0FBSyxjQUFjLEVBQUUsR0FBRztBQUN0QyxXQUFLLFFBQVE7QUFDUixXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQTtBQUFBLEVBQ25DO0FBQUEsRUFFRiw2QkFBNkIsR0FBRztBQUM5QixRQUFJLE1BQU0sTUFBTSxLQUFLLGNBQWMsRUFBRSxHQUFHO0FBQ3RDLFdBQUssSUFBSSx3QkFBd0IsS0FBSyxjQUFjLEtBQUssS0FBSztBQUM5RCxXQUFLLFFBQVE7QUFDUixXQUFBLGVBQWUsS0FBSyxRQUFRO0FBQUEsSUFBQTtBQUFBLEVBQ25DO0FBQUEsRUFFRixtQkFBbUIsR0FBRztBQUNwQixRQUFJLE1BQU0sSUFBSTtBQUNaLFdBQUssUUFBUTtBQUNiLFdBQUssa0JBQWtCLFVBQVU7QUFDakMsV0FBSyxnQkFBZ0I7QUFDaEIsV0FBQSxlQUFlLEtBQUssUUFBUTtBQUFBLElBQUEsT0FDNUI7QUFDTCxXQUFLLFFBQVE7QUFBQSxJQUFBO0FBQUEsRUFDZjtBQUFBLEVBRUYsc0JBQXNCLEdBQUc7QUFDdkIsUUFBSSxNQUFNLE1BQU0sS0FBSyxjQUFjLEVBQUUsR0FBRztBQUN0QyxXQUFLLElBQUksVUFBVSxLQUFLLGNBQWMsS0FBSyxLQUFLO0FBQ2hELFdBQUssUUFBUTtBQUNSLFdBQUEsZUFBZSxLQUFLLFFBQVE7QUFBQSxJQUFBO0FBQUEsRUFDbkM7QUFBQSxFQUVGLG9CQUFvQixHQUFHO0FBQ3JCLFFBQUksTUFBTSxVQUFVLFVBQVUsQ0FBQyxHQUFHO0FBQzNCLFdBQUEsYUFBYSxVQUFVLFdBQVcsQ0FBQztBQUFBLElBQy9CLFdBQUEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFHO0FBQ2pDLFdBQUEsYUFBYSxVQUFVLFVBQVUsQ0FBQztBQUFBLElBQUEsT0FDbEM7QUFDTCxXQUFLLFFBQVE7QUFDYixXQUFLLGVBQWUsQ0FBQztBQUFBLElBQUE7QUFBQSxFQUN2QjtBQUFBLEVBRUYsb0JBQW9CLEdBQUc7QUFDckIsUUFBSSxNQUFNLFVBQVUsU0FBUyxDQUFDLEdBQUc7QUFDMUIsV0FBQSxhQUFhLFVBQVUsVUFBVSxDQUFDO0FBQUEsSUFDOUIsV0FBQSxNQUFNLFVBQVUsWUFBWSxDQUFDLEdBQUc7QUFDcEMsV0FBQSxhQUFhLFVBQVUsYUFBYSxDQUFDO0FBQUEsSUFBQSxPQUNyQztBQUNMLFdBQUssUUFBUTtBQUNiLFdBQUssZUFBZSxDQUFDO0FBQUEsSUFBQTtBQUFBLEVBQ3ZCO0FBQUEsRUFFRixjQUFjO0FBQUEsRUFBQTtBQUFBLEVBRWQsZ0JBQWdCO0FBQUEsRUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9oQixNQUFNLE9BQU87QUFDWCxTQUFLLFNBQVM7QUFDZCxXQUFPLEtBQUssUUFBUSxLQUFLLE9BQU8sUUFBUTtBQUN0QyxZQUFNLElBQUksS0FBSyxPQUFPLFdBQVcsS0FBSyxLQUFLO0FBQzNDLFVBQUksTUFBTSxNQUFNLEtBQUssVUFBVSxJQUFJO0FBQzVCLGFBQUEsU0FBUyxLQUFLLEtBQUssS0FBSztBQUFBLE1BQUE7QUFFL0IsY0FBUSxLQUFLLE9BQU87QUFBQSxRQUNsQixLQUFLLEdBQUc7QUFDTixlQUFLLFVBQVUsQ0FBQztBQUNoQjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssR0FBRztBQUNOLGVBQUssdUJBQXVCLENBQUM7QUFDN0I7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLEdBQUc7QUFDTixlQUFLLG1CQUFtQixDQUFDO0FBQ3pCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxHQUFHO0FBQ04sZUFBSyx3QkFBd0IsQ0FBQztBQUM5QjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUssMEJBQTBCLENBQUM7QUFDaEM7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLElBQUk7QUFDUCxlQUFLLGNBQWMsQ0FBQztBQUNwQjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUssbUJBQW1CLENBQUM7QUFDekI7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLElBQUk7QUFDUCxlQUFLLDZCQUE2QixDQUFDO0FBQ25DO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxnQkFBZ0IsQ0FBQztBQUN0QjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUssZUFBZSxDQUFDO0FBQ3JCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxjQUFjLENBQUM7QUFDcEI7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLElBQUk7QUFDUCxlQUFLLHFCQUFxQixDQUFDO0FBQzNCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxtQkFBbUIsQ0FBQztBQUN6QjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUssbUJBQW1CLENBQUM7QUFDekI7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLElBQUk7QUFDUCxlQUFLLHNCQUFzQixDQUFDO0FBQzVCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxvQkFBb0IsQ0FBQztBQUMxQjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssR0FBRztBQUNOLGVBQUssZUFBZSxDQUFDO0FBQ3JCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxzQkFBc0IsQ0FBQztBQUM1QjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssR0FBRztBQUNOLGVBQUssc0JBQXNCLENBQUM7QUFDNUI7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLEdBQUc7QUFDTixlQUFLLG1CQUFtQixDQUFDO0FBQ3pCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxtQkFBbUIsQ0FBQztBQUN6QjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUssNkJBQTZCLENBQUM7QUFDbkM7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLElBQUk7QUFDUCxlQUFLLHFCQUFxQixDQUFDO0FBQzNCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxHQUFHO0FBQ04sZUFBSywwQkFBMEIsQ0FBQztBQUNoQztBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUsseUJBQXlCLENBQUM7QUFDL0I7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLElBQUk7QUFDUCxlQUFLLG9CQUFvQixDQUFDO0FBQzFCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxvQkFBb0IsQ0FBQztBQUMxQjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUsseUJBQXlCLENBQUM7QUFDL0I7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLEdBQUc7QUFDTixlQUFLLHNCQUFzQixDQUFDO0FBQzVCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyxtQkFBbUIsQ0FBQztBQUN6QjtBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUssdUJBQXVCLENBQUM7QUFDN0I7QUFBQSxRQUFBO0FBQUEsUUFFRixLQUFLLElBQUk7QUFDUCxlQUFLLG1CQUFtQixDQUFDO0FBQ3pCO0FBQUEsUUFBQTtBQUFBLFFBRUYsS0FBSyxJQUFJO0FBQ1AsZUFBSyw2QkFBNkIsQ0FBQztBQUNuQztBQUFBLFFBQUE7QUFBQSxRQUVGLEtBQUssSUFBSTtBQUNQLGVBQUssY0FBYztBQUNuQjtBQUFBLFFBQUE7QUFBQSxNQUNGO0FBRUcsV0FBQTtBQUFBLElBQUE7QUFFUCxTQUFLLFFBQVE7QUFDYixTQUFLLE9BQU87QUFBQSxFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLZCxVQUFVO0FBQ0osUUFBQSxLQUFLLGlCQUFpQixLQUFLLE9BQU87QUFDaEMsVUFBQSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLGtCQUFrQixHQUFHO0FBQ3JFLGFBQUssSUFBSSxPQUFPLEtBQUssY0FBYyxLQUFLLEtBQUs7QUFDN0MsYUFBSyxlQUFlLEtBQUs7QUFBQSxNQUFBLFdBQ2hCLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxJQUFJO0FBQ3RFLGFBQUssSUFBSSxhQUFhLEtBQUssY0FBYyxLQUFLLEtBQUs7QUFDbkQsYUFBSyxlQUFlLEtBQUs7QUFBQSxNQUFBO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQUEsRUFFRixTQUFTO0FBQ1AsU0FBSyxtQkFBbUI7QUFDeEIsU0FBSyxJQUFJLE1BQU07QUFBQSxFQUFBO0FBQUE7QUFBQSxFQUdqQixxQkFBcUI7QUFDYixVQUFBLFdBQVcsS0FBSyxPQUFPO0FBQ3pCLFFBQUEsS0FBSyxnQkFBZ0IsVUFBVTtBQUNqQztBQUFBLElBQUE7QUFFRSxRQUFBLEtBQUssVUFBVSxJQUFJO0FBQ2pCLFVBQUEsS0FBSyxvQkFBb0IsVUFBVSxVQUFVO0FBQy9DLGFBQUssSUFBSSxRQUFRLEtBQUssY0FBYyxRQUFRO0FBQUEsTUFBQSxPQUN2QztBQUNMLGFBQUssSUFBSSxVQUFVLEtBQUssY0FBYyxRQUFRO0FBQUEsTUFBQTtBQUFBLElBQ2hELFdBQ1MsS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEVBQUc7QUFBQSxTQUFPO0FBQzdSLFdBQUssSUFBSSxPQUFPLEtBQUssY0FBYyxRQUFRO0FBQUEsSUFBQTtBQUFBLEVBQzdDO0FBQUEsRUFFRixjQUFjLElBQUksVUFBVTtBQUFBLEVBQUE7QUFFOUI7QUFFQSxNQUFNLDJCQUEyQjtBQUFBLEVBQy9CLDBCQUEwQjtBQUFBLEVBQzFCLHdCQUF3QjtBQUFBLEVBQ3hCLGdDQUFnQztBQUFBLEVBQ2hDLHdCQUF3QjtBQUFBLEVBQ3hCLGtDQUFrQztBQUFBLEVBQ2xDLDRCQUE0QjtBQUFBLEVBQzVCLDRCQUE0QjtBQUFBLEVBQzVCLG9CQUFvQjtBQUN0QjtBQUNBLE1BQU0sa0JBQWtCO0FBQUEsRUFDdEIsQ0FBQyx3QkFBd0IsR0FBRztBQUFBLElBQzFCLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxDQUFDLHNCQUFzQixHQUFHO0FBQUEsSUFDeEIsU0FBUyxDQUFDLFFBQVEsMkZBQTJGLEdBQUcsMENBQTBDLEdBQUc7QUFBQSxJQUM3SixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsQ0FBQyw4QkFBOEIsR0FBRztBQUFBLElBQ2hDLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxDQUFDLHNCQUFzQixHQUFHO0FBQUEsSUFDeEIsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLENBQUMsZ0NBQWdDLEdBQUc7QUFBQSxJQUNsQyxTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsQ0FBQywwQkFBMEIsR0FBRztBQUFBLElBQzVCLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxDQUFDLDBCQUEwQixHQUFHO0FBQUEsSUFDNUIsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLENBQUMsa0JBQWtCLEdBQUc7QUFBQSxJQUNwQixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsRUFBQTtBQUVWO0FBQ0EsU0FBUyxlQUFlLEtBQUssRUFBRSxnQkFBZ0I7QUFDdkMsUUFBQSxRQUFRLGdCQUFnQixhQUFhLEdBQUc7QUFDOUMsTUFBSSxRQUFRLFFBQVE7QUFDbEIsV0FBTyxTQUFTO0FBQUEsRUFBQSxPQUNYO0FBQ0UsV0FBQTtBQUFBLEVBQUE7QUFFWDtBQUNBLFNBQVMsZ0JBQWdCLEtBQUssU0FBUztBQUMvQixRQUFBLE9BQU8sZUFBZSxRQUFRLE9BQU87QUFDckMsUUFBQSxRQUFRLGVBQWUsS0FBSyxPQUFPO0FBQ3pDLFNBQU8sU0FBUyxJQUFJLFVBQVUsT0FBTyxVQUFVO0FBQ2pEO0FBQ0EsU0FBUyxtQkFBbUIsS0FBSyxTQUFTLFFBQVEsTUFBTTtBQUNoRCxRQUFBLFVBQVUsZ0JBQWdCLEtBQUssT0FBTztBQUlyQyxTQUFBO0FBQ1Q7QUFDQSxTQUFTLGdCQUFnQixLQUFLLFNBQVMsUUFBUSxNQUFNO0FBQzdDLFFBQUEsTUFBTSxlQUFlLEtBQUssT0FBTztBQUN2QyxNQUFJLFFBQVEsb0JBQW9CO0FBQzlCO0FBQUEsRUFBQTtBQUVGLFFBQU0sRUFBRSxTQUFTLFNBQVMsZ0JBQWdCLEdBQUc7QUFDN0MsUUFBTSxNQUFNLGdCQUFnQixHQUFHLEtBQUssT0FBTyxZQUFZLGFBQWEsUUFBUSxHQUFHLElBQUksSUFBSSxPQUFPLEdBQUcsT0FBTztBQUFBLGFBQzdGLElBQUksS0FBSyxFQUFFO0FBQ2hCLFFBQUEsTUFBTSxJQUFJLFlBQVksR0FBRztBQUMvQixNQUFJLE9BQU87QUFDUCxNQUFBLFNBQVMsTUFBTTtBQUNuQixVQUFRLE9BQU8sR0FBRztBQUNwQjtBQUVBLFNBQVMsZUFBZSxPQUFPO0FBQ3ZCLFFBQUE7QUFDUjtBQUNBLFNBQVMsY0FBYyxLQUFLO0FBRTVCO0FBQ0EsU0FBUyxvQkFBb0IsTUFBTSxLQUFLLFVBQVUsbUJBQW1CO0FBQzdELFFBQUEsTUFBMkgsK0NBQStDLElBQUk7QUFDcEwsUUFBTSxRQUFRLElBQUksWUFBWSxPQUFPLEdBQUcsQ0FBQztBQUN6QyxRQUFNLE9BQU87QUFDYixRQUFNLE1BQU07QUFDTCxTQUFBO0FBQ1Q7QUFDQSxNQUFNLGFBQWE7QUFBQSxFQUNqQixtQ0FBbUM7QUFBQSxFQUNuQyxLQUFLO0FBQUEsRUFDTCx5QkFBeUI7QUFBQSxFQUN6QixLQUFLO0FBQUEsRUFDTCx1QkFBdUI7QUFBQSxFQUN2QixLQUFLO0FBQUEsRUFDTCwyQkFBMkI7QUFBQSxFQUMzQixLQUFLO0FBQUEsRUFDTCxpQ0FBaUM7QUFBQSxFQUNqQyxLQUFLO0FBQUEsRUFDTCx1QkFBdUI7QUFBQSxFQUN2QixLQUFLO0FBQUEsRUFDTCxnQkFBZ0I7QUFBQSxFQUNoQixLQUFLO0FBQUEsRUFDTCxrQkFBa0I7QUFBQSxFQUNsQixLQUFLO0FBQUEsRUFDTCx3Q0FBd0M7QUFBQSxFQUN4QyxLQUFLO0FBQUEsRUFDTCxjQUFjO0FBQUEsRUFDZCxLQUFLO0FBQUEsRUFDTCw4QkFBOEI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTiw4QkFBOEI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTix1Q0FBdUM7QUFBQSxFQUN2QyxNQUFNO0FBQUEsRUFDTiwyQkFBMkI7QUFBQSxFQUMzQixNQUFNO0FBQUEsRUFDTix3QkFBd0I7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTix5Q0FBeUM7QUFBQSxFQUN6QyxNQUFNO0FBQUEsRUFDTixrQkFBa0I7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTiwwQ0FBMEM7QUFBQSxFQUMxQyxNQUFNO0FBQUEsRUFDTixvREFBb0Q7QUFBQSxFQUNwRCxNQUFNO0FBQUEsRUFDTixnREFBZ0Q7QUFBQSxFQUNoRCxNQUFNO0FBQUEsRUFDTiw2QkFBNkI7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixnREFBZ0Q7QUFBQSxFQUNoRCxNQUFNO0FBQUEsRUFDTiw2QkFBNkI7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixxQkFBcUI7QUFBQSxFQUNyQixNQUFNO0FBQUEsRUFDTixxQkFBcUI7QUFBQSxFQUNyQixNQUFNO0FBQUEsRUFDTiwrQkFBK0I7QUFBQSxFQUMvQixNQUFNO0FBQUEsRUFDTiw0QkFBNEI7QUFBQSxFQUM1QixNQUFNO0FBQUEsRUFDTiw0Q0FBNEM7QUFBQSxFQUM1QyxNQUFNO0FBQUEsRUFDTix3QkFBd0I7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixtQkFBbUI7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTiwyQkFBMkI7QUFBQSxFQUMzQixNQUFNO0FBQUEsRUFDTix5QkFBeUI7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixnQ0FBZ0M7QUFBQSxFQUNoQyxNQUFNO0FBQUEsRUFDTixrQ0FBa0M7QUFBQSxFQUNsQyxNQUFNO0FBQUEsRUFDTiwwQkFBMEI7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTix3QkFBd0I7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixnREFBZ0Q7QUFBQSxFQUNoRCxNQUFNO0FBQUEsRUFDTiw2QkFBNkI7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixpQ0FBaUM7QUFBQSxFQUNqQyxNQUFNO0FBQUEsRUFDTiw2Q0FBNkM7QUFBQSxFQUM3QyxNQUFNO0FBQUEsRUFDTixzQkFBc0I7QUFBQSxFQUN0QixNQUFNO0FBQUEsRUFDTiwyQkFBMkI7QUFBQSxFQUMzQixNQUFNO0FBQUEsRUFDTixrQ0FBa0M7QUFBQSxFQUNsQyxNQUFNO0FBQUEsRUFDTiwrQkFBK0I7QUFBQSxFQUMvQixNQUFNO0FBQUEsRUFDTixzQkFBc0I7QUFBQSxFQUN0QixNQUFNO0FBQUEsRUFDTix3QkFBd0I7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixpQ0FBaUM7QUFBQSxFQUNqQyxNQUFNO0FBQUEsRUFDTiw2QkFBNkI7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTiwrQkFBK0I7QUFBQSxFQUMvQixNQUFNO0FBQUEsRUFDTixpQ0FBaUM7QUFBQSxFQUNqQyxNQUFNO0FBQUEsRUFDTiw0QkFBNEI7QUFBQSxFQUM1QixNQUFNO0FBQUEsRUFDTixpQkFBaUI7QUFBQSxFQUNqQixNQUFNO0FBQUEsRUFDTix1Q0FBdUM7QUFBQSxFQUN2QyxNQUFNO0FBQUEsRUFDTixvQkFBb0I7QUFBQSxFQUNwQixNQUFNO0FBQ1I7QUFDQSxNQUFNLGdCQUFnQjtBQUFBO0FBQUEsRUFFcEIsQ0FBQyxDQUFDLEdBQUc7QUFBQSxFQUNMLENBQUMsQ0FBQyxHQUFHO0FBQUEsRUFDTCxDQUFDLENBQUMsR0FBRztBQUFBLEVBQ0wsQ0FBQyxDQUFDLEdBQUc7QUFBQSxFQUNMLENBQUMsQ0FBQyxHQUFHO0FBQUEsRUFDTCxDQUFDLENBQUMsR0FBRztBQUFBLEVBQ0wsQ0FBQyxDQUFDLEdBQUc7QUFBQSxFQUNMLENBQUMsQ0FBQyxHQUFHO0FBQUEsRUFDTCxDQUFDLENBQUMsR0FBRztBQUFBLEVBQ0wsQ0FBQyxDQUFDLEdBQUc7QUFBQSxFQUNMLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUE7QUFBQSxFQUVOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBO0FBQUEsRUFFTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxHQUFHO0FBQUE7QUFBQSxFQUVOLENBQUMsRUFBRSxHQUFHO0FBQUEsRUFDTixDQUFDLEVBQUUsR0FBRztBQUFBLEVBQ04sQ0FBQyxFQUFFLEdBQUc7QUFBQTtBQUFBLEVBRU4sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUNOLENBQUMsRUFBRSxH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QUFBLG9CQUFBQSxnQkFBeEIsTUFBTyxNQUFBO0FBQUEsc0JBQUFGLFlBQUEsT0FBQSxxQkFBQSxHQUFBO0FBQUE7OzttQkFFM0MsS0FBQUksbUJBQUEsUUFBQSxJQUFBO0FBQUEsa0JBQUEsT0FBQSxPQUFBLFlBQUFILGdDQUU4QyxNQUFyQyxZQUFBO0FBQUEsb0JBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFDO0FBQUFBOzs7Ozs7Ozs7Ozs7O21CQUVULEtBQUFFLG1CQUFBLFFBQUEsSUFBQTtBQUFBLGtCQUFBLE9BQUEsT0FBQSxTQUFBSCxVQVdPLEdBQUFJLG1CQUFBLE1BQUEsWUFBQTtBQUFBLG9CQVJHLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBSDtBQUFBQSxzQkFBQTtBQUFBLHNCQUFBO0FBQUEsc0JBQUE7QUFBQSxzQkFBQTtBQUFBO0FBQUEsb0JBQUE7QUFBQSxvQkFBQUE7QUFBQUEsc0JBQTJDO0FBQUEsc0JBQUE7QUFBQSx3QkFBQSxPQUFBSSxlQUFBO0FBQUE7Ozs7Ozs7Ozs7bUJBVXJELEtBQUFGLG1CQUFBLFFBQUEsSUFBQTtBQUFBLGtCQUFBLE9BQUEsT0FBQSxhQUFBSCxnQ0FFc0QsTUFBN0MsWUFBQTtBQUFBLG9CQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBQztBQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUtTLENBQUEsS0FBQUUsbUJBQXhCLFFBT2lCLElBQUE7QUFBQSxRQUFBLENBQUEsR0FBQSxZQUFBLE9BQUEsZ0JBQUEsbUJBTjhDLFdBQTdESCxhQUFBRSxZQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQTtBQUFBLFVBQUEsU0FDQUosUUFHRSxNQUFBO0FBQUEsWUFBQUssbUJBRk0sd0RBQWE7QUFBQSxZQUNYRixnQkFBQSxPQUFBO0FBQUEsY0FBQSxPQUFBO0FBQUEsY0FFVixXQUFvQyxPQUFBLG9CQUFBLE9BQUEsT0FBQSxXQUFBO0FBQUEsWUFBQSxHQUFBLE1BQUEsR0FBQSxXQUFBO0FBQUE7Ozs7UUFHOUIsQ0FBQSxLQUFBRSxtQkFEUixRQUlFLElBQUE7QUFBQSxRQUFBLE9BQUEsT0FBQSxhQUFBSCxVQUFBLEdBRlNFLFlBQVUsT0FBQSxjQUFBLEdBQUE7QUFBQSxVQUFBLEtBQUE7QUFBQSxVQUNsQixZQUFVLE9BQUU7QUFBQSxVQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGFBQUE7QUFBQTs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDRdfQ==
