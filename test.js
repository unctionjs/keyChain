/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, no-magic-numbers */
import {test} from "tap"

import keyChain from "./index"

test(({same, end}) => {
  same(
    keyChain(["aaa", "bbb", "ccc"])({aaa: {bbb: {ccc: "1"}}}),
    "1"
  )

  end()
})

test(({same, end}) => {
  same(
    keyChain(["aaa", "ddd", "ccc"])({aaa: {bbb: {ccc: "1"}}}),
    undefined
  )

  end()
})

test(({same, end}) => {
  same(
    keyChain(["aaa", "bbb", "ccc"])(new Map([["aaa", new Map([["bbb", new Map([["ccc", "ccc"]])]])]])),
    "ccc"
  )

  end()
})

test(({same, end}) => {
  same(
    keyChain(["aaa", "ddd", "ccc"])(new Map([["aaa", new Map([["bbb", new Map([["ccc", "ccc"]])]])]])),
    undefined
  )

  end()
})


test(({same, end}) => {
  same(
    keyChain([0, 0, 0])([[["1"]]]),
    "1"
  )

  end()
})

test(({same, end}) => {
  same(
    keyChain([0, 1, 0])([[["1"]]]),
    undefined
  )

  end()
})
