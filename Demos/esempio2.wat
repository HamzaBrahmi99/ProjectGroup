(module 
(type (func (param i32 i32) (result i32)))
(type (func (param i32 i32 i32 i32) (result i32 i32)))
(type (func))
(type (func (param i32 i32 i32) (result i32 i32)))
(type (func (param i32 i32 i32) (result i32)))
(table 3 funcref)
(elem (i32.const 0) 0 1 2)
(export "start" (func 1))
(func $0 (type 1) (param i32 i32 i32 i32) (result i32 i32)
(local $var0 i32)
(local $var1 i32)
local.get 0
(if 
(then
local.get 2
i32.const 30
i32.le_s
call 1
local.get 1
call 1
i32.const 1
call_indirect (type 2)
i32.ge_s
call 1
i32.const 1
call_indirect (type 2)
call 1
local.set 2
local.get $var1
local.set 3
)
(else
local.get 2
i32.const 22
i32.ne
call 1
call 1
i32.const 1
call_indirect (type 2)
local.set $var1
local.get $var1
local.get $var0
i32.gt_s
drop
)
)
local.get $var0
drop
local.get 3
drop
i32.const 21
i32.const 1
call_indirect (type 2)
i32.const 42
)
(func $1 (type 2)  
(local $var1 i32)
i32.const 69
(if (result i32 )
(then
i32.const 20
i32.const 1
call_indirect (type 2)
i32.const 23
i32.or
drop
i32.const 90
i32.const 100
i32.add
drop
i32.const 27
)
(else
i32.const 50
call 1
drop
i32.const 1
local.set $var1
i32.const 46
)
)
i32.const 52
(if 
(then
i32.const 79
call 1
drop
i32.const 82
i32.const 45
i32.const 29
local.set $var1
i32.const 1
call_indirect (type 2)
i32.ge_u
call 1
drop
i32.const 64
i32.const 1
call_indirect (type 2)
local.set $var1
i32.const 21
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
call 1
local.set $var1
)
)
i32.const 79
i32.eq
call 1
i32.const 1
call_indirect (type 2)
local.set $var1
)
(func $2 (type 3) (param i32 i32 i32) (result i32 i32)
local.get 0
i32.const 85
i32.rem_u
(if 
(then
i32.const 39
i32.const 95
call 1
call 1
call 1
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
i32.sub
local.set 0
i32.const 44
i32.const 1
call_indirect (type 2)
local.get 0
i32.const 1
call_indirect (type 2)
call 1
drop
i32.const 26
call 1
i32.xor
i32.const 1
call_indirect (type 2)
drop
i32.const 70
drop
local.get 0
local.set 0
i32.const 48
drop
i32.const 30
drop
local.get 1
local.get 0
i32.ge_u
local.set 2
i32.const 63
local.get 2
drop
local.get 2
i32.const 1
call_indirect (type 2)
local.get 1
i32.le_s
i32.lt_s
i32.const 63
call 1
i32.and
local.get 2
i32.const 1
call_indirect (type 2)
i32.le_u
i32.const 1
call_indirect (type 2)
local.get 2
call 1
call 1
i32.eq
drop
i32.const 34
drop
i32.const 55
local.get 2
local.get 1
i32.const 2
call_indirect (type 3)
call 1
i32.xor
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
call 1
local.set 0
i32.const 28
local.set 1
i32.const 41
i32.const 1
call_indirect (type 2)
call 1
drop
i32.const 86
local.get 1
drop
call 1
call 1
local.get 2
i32.ne
i32.const 24
local.set 1
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
local.get 1
local.get 1
i32.ne
call 1
call 1
i32.ge_u
i32.const 1
call_indirect (type 2)
i32.const 56
local.set 2
call 1
drop
)
(else
i32.const 25
drop
i32.const 44
local.set 0
i32.const 73
call 1
local.get 1
local.get 0
i32.sub
local.get 1
call 1
call 1
i32.ge_u
i32.ge_s
call 1
local.set 2
)
)
i32.const 4
(if (result i32 )
(then
i32.const 9
call 1
local.set 2
local.get 2
i32.const 1
call_indirect (type 2)
call 1
local.get 1
i32.const 1
call_indirect (type 2)
call 1
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
i32.add
)
(else
i32.const 98
call 1
call 1
drop
local.get 0
call 1
i32.const 1
call_indirect (type 2)
local.get 0
i32.mul
i32.const 33
call 1
i32.const 1
call_indirect (type 2)
i32.ge_u
call 1
local.get 1
call 1
local.set 2
i32.const 1
call_indirect (type 2)
drop
local.get 1
call 1
call 1
call 1
local.get 1
i32.mul
i32.const 42
i32.ge_s
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
local.get 2
i32.const 1
call_indirect (type 2)
call 1
i32.div_s
call 1
call 1
i32.const 1
call_indirect (type 2)
local.get 2
i32.gt_u
call 1
call 1
drop
local.get 2
)
)
(if 
(then
local.get 2
i32.const 1
call_indirect (type 2)
local.set 1
i32.const 96
i32.const 47
i32.const 1
call_indirect (type 2)
local.set 0
local.get 1
call 1
i32.and
local.set 2
)
(else
i32.const 96
local.get 0
i32.const 58
i32.gt_u
i32.ge_u
local.set 1
local.get 2
i32.const 89
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
i32.const 1
call_indirect (type 2)
i32.add
call 1
i32.const 33
i32.le_s
drop
i32.const 76
drop
i32.const 92
i32.const 1
call_indirect (type 2)
local.set 1
local.get 2
local.set 1
i32.const 88
local.set 2
)
)
i32.const 73
i32.const 31
)
)
