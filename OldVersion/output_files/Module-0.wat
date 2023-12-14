(module
(type (func (param i32) (result i32)))
(type (func (param i32 i32 i32 i32) (result i32)))
(type (func (param i32 i32 i32 i32) (result i32 i32)))
(type (func (param i32) (result i32 i32)))
(type (func (param i32 i32) (result i32 i32)))
(type (func (param i32 i32) (result i32)))
(table 5 funcref)
(elem (i32.const 0) 0 1 2 3 4)
(export "start" (func 3))
(func $0 (type 2) (param i32 i32 i32 i32) (result i32 i32)
i32.const 0
(if (result i32 i32)
(then
local.get 0
local.get 1
local.get 2
local.get 3
call 0
)
(else
local.get 0
local.get 1
local.get 2
local.get 3
i32.const 0
call_indirect (type 2)
)
)
)
(func $1 (type 3) (param i32) (result i32 i32)
i32.const 1
(if (result i32 i32)
(then
local.get 0
call 3
)
(else
local.get 0
i32.const 40
i32.const 40
i32.const 41
call 4
i32.const 28
)
)
)
(func $2 (type 1) (param i32 i32 i32 i32) (result i32)
i32.const 0
(if (result i32)
(then
local.get 0
local.get 1
local.get 2
local.get 3
i32.and
i32.shl
i32.or
i32.const 3
call_indirect (type 3)
drop 
)
(else
local.get 0
local.get 1
local.get 2
local.get 3
i32.mul
i32.and
i32.mul
call 1
drop 
)
)
)
(func $3 (type 3) (param i32) (result i32 i32)
local.get 0
i32.const 23
i32.const 18
i32.const 100
call 4
i32.const 4
)
(func $4 (type 1) (param i32 i32 i32 i32) (result i32)
local.get 0
local.get 1
local.get 2
local.get 3
call 2
)
)