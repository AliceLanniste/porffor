import { enumify } from "../util/enum.js";

export const Section = enumify('custom', 'type', 'import', 'func', 'table', 'memory', 'global', 'export', 'start', 'element', 'code', 'data');
export const ExportDesc = enumify('func', 'table', 'mem', 'global');

export const Mut = enumify('const', 'var');

export const Valtype = {
  i32: 0x7f,
};

export const Blocktype = {
  void: 0x40,
};

export const Opcodes = {
  unreachable: 0x00,
  nop: 0x01,

  block: 0x02,
  loop: 0x03,
  if: 0x04,
  else: 0x05,

  return: 0x0F,
  call: 0x10,
  call_indirect: 0x11,

  end: 0x0b,
  br: 0x0c,
  br_if: 0x0d,
  call: 0x10,

  local_get: 0x20,
  local_set: 0x21,
  local_tee: 0x22, // set and return value (set and get combined)

  global_get: 0x23,
  global_set: 0x24,

  i32_load: 0x28,
  i32_load8_s: 0x2c,
  i32_store: 0x36,
  i32_store8: 0x3a,

  i32_const: 0x41,

  i32_eqz: 0x45,
  i32_eq: 0x46,
  i32_ne: 0x47,

  i32_lt_s: 0x48,
  i32_le_s: 0x4c,
  i32_gt_s: 0x4a,
  i32_ge_s: 0x4e,

  i32_add: 0x6a,
  i32_sub: 0x6b,
  i32_mul: 0x6c,
  i32_div_s: 0x6d,
  i32_rem_s: 0x6f,

  i32_and: 0x71,
  i32_or: 0x72,
  i32_xor: 0x73
};

export const FuncType = 0x60;
export const Empty = 0x00;

export const Magic = [0x00, 0x61, 0x73, 0x6d];
export const ModuleVersion = [0x01, 0x00, 0x00, 0x00];