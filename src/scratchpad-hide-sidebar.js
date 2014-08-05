/*  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /**
   * clearInitialText
   * @auther LouCypher
   * @modified 7cc
   * @date 2014/08/05
   * source code is available @
   *   https://github.com/LouCypher/blank-scratchpad/blob/master/src/scratchpad-blank.js
   */
  function clearInitialText() {
    Scratchpad.editor.config.value = "";
  }
  function hideSideBar() {
    Scratchpad.editor.config.extraKeys.Esc = function() {
      this.sidebar.hide() // ignore error massage
    }
  }

  function main() {
    clearInitialText()
    hideSideBar()
  }

  addEventListener("load", main);
  removeEventListener("unload", main);
})()