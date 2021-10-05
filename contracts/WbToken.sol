// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './StandardToken.sol';

/**
 * @title WbToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 */
contract WbToken is StandardToken {
  using SafeMath for uint256;

  string public constant name = "WbToken"; // solium-disable-line uppercase
  string public constant symbol = "WB"; // solium-disable-line uppercase
  uint8 public constant decimals = 18; // solium-disable-line uppercase

  uint256 public constant INITIAL_SUPPLY = 30000 * (10 ** uint256(decimals));

  constructor() {
    _totalSupply = INITIAL_SUPPLY;
    _balances[msg.sender] = INITIAL_SUPPLY;
    transfer(msg.sender, INITIAL_SUPPLY);
  }
}
