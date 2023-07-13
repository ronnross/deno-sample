import { assert } from "https://deno.land/std@0.193.0/testing/asserts.ts";

Deno.test({
  name: "a test case",
  fn() {
    let someCondition = true;
    assert(someCondition);
  },
});
