(module 
(type (func (param i32 i32 i32 i32)))
(type (func (param i32) (result i32)))
(type (func (param i32 i32) (result i32)))
(type (func (param i32 i32 i32) (result i32)))
(type (func (param i32 i32 i32 i32) (result i32)))
(type (func))
(table 3 funcref)
(elem (i32.const 0) 0 1 2)
(export "start" (func 0))
(func $0 (type 3) (param i32 i32 i32) (result i32)
(local $var0 i32)
(local $var1 i32)
i32.const 5
(if 
(then
i32.const 90
local.set 1
local.get 1
drop
i32.const 36
local.get 0
i32.const 1
call_indirect (type 2)
i32.const 17
i32.lt_s
drop
local.get $var1
local.get $var1
drop
i32.const 2
call_indirect (type 5)
local.set 2
local.get 0
i32.const 85
call 1
i32.const 2
call_indirect (type 5)
local.set 1
)
)
i32.const 60
(if 
(then
i32.const 38
i32.const 2
call_indirect (type 5)
call 2
local.get 2
call 2
i32.ge_s
i32.const 89
call 2
i32.gt_u
call 2
call 2
i32.const 74
i32.lt_s
i32.const 2
call_indirect (type 5)
call 2
call 2
local.set 2
i32.const 13
i32.const 2
call_indirect (type 5)
local.get $var1
i32.and
i32.const 2
call_indirect (type 5)
local.get 2
local.get $var0
drop
drop
local.get 2
i32.const 2
call_indirect (type 5)
i32.const 2
call_indirect (type 5)
i32.xor
call 2
i32.const 2
call_indirect (type 5)
i32.const 2
call_indirect (type 5)
i32.const 27
i32.lt_u
local.get $var0
i32.div_u
drop
)
)
i32.const 74
)
(func $1 (type 2) (param i32 i32) (result i32)
(local $var1 i32)
(local $var2 i32)
i32.const 85
(if 
(then
local.get 1
local.set 1
i32.const 45
call 2
call 2
local.set 1
local.get 0
local.get $var2
i32.mul
call 2
i32.const 2
call_indirect (type 5)
local.set $var1
i32.const 13
local.set 1
i32.const 40
i32.const 2
call_indirect (type 5)
drop
local.get $var1
call 2
i32.const 2
call_indirect (type 5)
local.get 0
call 2
i32.lt_u
local.set 0
local.get 0
local.get 1
i32.le_s
drop
i32.const 34
call 2
drop
i32.const 60
drop
)
(else
i32.const 63
i32.const 42
local.set 0
i32.const 2
call_indirect (type 5)
local.get $var2
i32.const 1
call_indirect (type 2)
local.get 0
i32.div_s
drop
local.get 0
i32.const 0
call 1
i32.const 2
call_indirect (type 5)
i32.const 2
call_indirect (type 5)
call 2
i32.const 52
call 1
call 2
i32.const 2
call_indirect (type 5)
i32.const 39
i32.ge_s
local.set $var1
)
)
i32.const 75
(if (result i32 i32 )
(then
i32.const 21
i32.const 1
local.set 1
i32.const 2
call_indirect (type 5)
drop
local.get $var2
i32.const 2
call_indirect (type 5)
drop
local.get 1
drop
i32.const 76
drop
i32.const 98
local.set 1
i32.const 63
call 2
local.get $var2
)
(else
i32.const 35
call 2
i32.const 18
i32.gt_u
local.get $var2
i32.ne
i32.const 77
i32.mul
i32.const 93
)
)
(if 
(then
i32.const 34
i32.const 61
i32.gt_u
i32.const 2
call_indirect (type 5)
i32.const 2
call_indirect (type 5)
local.get 1
i32.mul
local.get $var1
i32.const 1
call_indirect (type 2)
i32.const 4
i32.lt_u
local.set 1
local.get 0
call 2
call 2
local.get $var2
local.get $var2
i32.rem_u
i32.eq
i32.const 2
call_indirect (type 5)
drop
local.get 0
i32.const 2
call_indirect (type 5)
local.get 1
call 2
i32.const 1
call_indirect (type 2)
i32.const 2
call_indirect (type 5)
i32.const 2
call_indirect (type 5)
i32.const 40
i32.ne
drop
)
(else
i32.const 84
local.get 1
i32.const 2
call_indirect (type 5)
call 1
call 2
local.get $var2
i32.rem_u
drop
i32.const 45
local.set 1
)
)
)
(func $2 (type 5)  
(local $var1 i32)
i32.const 35
local.set $var1
i32.const 48
(if (result i32 )
(then
i32.const 87
call 2
i32.const 65
i32.le_u
call 2
i32.const 85
call 2
i32.eq
i32.const 11
i32.xor
call 2
i32.const 2
call_indirect (type 5)
local.set $var1
i32.const 57
call 2
)
(else
i32.const 88
call 2
i32.const 2
call_indirect (type 5)
local.set $var1
i32.const 25
i32.const 2
call_indirect (type 5)
call 2
call 2
local.set $var1
i32.const 73
i32.const 4
i32.rem_u
drop
i32.const 30
call 2
local.set $var1
i32.const 100
local.set $var1
i32.const 33
drop
i32.const 13
call 2
drop
i32.const 76
i32.const 12
i32.const 1
call_indirect (type 2)
)
)
(if (result i32 i32 )
(then
i32.const 88
drop
i32.const 56
drop
i32.const 9
i32.const 26
i32.lt_u
i32.const 78
i32.le_s
drop
i32.const 53
drop
i32.const 48
i32.const 1
i32.div_s
i32.const 10
i32.const 1
call_indirect (type 2)
call 2
drop
i32.const 33
i32.const 2
call_indirect (type 5)
drop
i32.const 27
local.set $var1
i32.const 76
call 2
call 2
drop
i32.const 60
local.set $var1
i32.const 55
i32.const 2
call_indirect (type 5)
local.set $var1
i32.const 1
i32.const 82
i32.div_s
call 2
i32.const 86
call 1
i32.const 69
i32.or
call 2
i32.const 2
call_indirect (type 5)
call 2
i32.const 65
i32.rem_u
call 2
i32.const 35
i32.const 1
call_indirect (type 2)
call 2
drop
i32.const 2
i32.const 2
call_indirect (type 5)
call 2
i32.const 31
call 1
call 2
i32.const 58
call 2
i32.ge_s
local.set $var1
i32.const 3
call 2
i32.const 19
)
(else
i32.const 100
i32.const 2
call_indirect (type 5)
i32.const 7
local.set $var1
drop
i32.const 10
local.set $var1
i32.const 34
i32.const 70
i32.or
i32.const 2
call_indirect (type 5)
i32.const 55
call 2
drop
drop
i32.const 95
i32.const 85
i32.gt_u
local.set $var1
i32.const 9
drop
i32.const 8
call 2
drop
i32.const 33
drop
i32.const 9
local.set $var1
i32.const 87
drop
i32.const 4
local.set $var1
i32.const 68
local.set $var1
i32.const 8
call 2
drop
i32.const 77
drop
i32.const 44
call 2
call 2
i32.const 2
call_indirect (type 5)
drop
i32.const 38
i32.const 32
)
)
(if (result i32 i32 )
(then
i32.const 4
i32.const 2
call_indirect (type 5)
drop
i32.const 49
local.set $var1
i32.const 75
local.set $var1
i32.const 48
local.set $var1
i32.const 81
local.set $var1
i32.const 40
drop
i32.const 26
i32.const 7
i32.sub
i32.const 38
i32.add
call 2
local.set $var1
i32.const 13
call 2
call 2
local.set $var1
i32.const 13
call 2
i32.const 77
)
(else
i32.const 26
i32.const 2
call_indirect (type 5)
i32.const 68
call 1
call 2
call 2
i32.const 42
i32.div_u
i32.const 2
call_indirect (type 5)
call 2
call 2
drop
i32.const 31
drop
i32.const 90
i32.const 2
call_indirect (type 5)
i32.const 2
call_indirect (type 5)
local.set $var1
i32.const 26
i32.const 13
)
)
drop
(if 
(then
i32.const 32
drop
i32.const 30
call 2
call 2
i32.const 31
call 1
local.set $var1
i32.const 100
call 2
call 2
local.set $var1
)
(else
i32.const 68
local.set $var1
i32.const 85
call 2
local.set $var1
i32.const 96
drop
i32.const 50
call 2
drop
)
)
(if 
(then
i32.const 53
local.set $var1
i32.const 41
drop
i32.const 90
call 2
i32.const 91
i32.const 2
call_indirect (type 5)
i32.mul
local.set $var1
i32.const 31
drop
i32.const 1
local.set $var1
i32.const 5
call 2
i32.const 53
i32.div_s
i32.const 35
i32.le_u
drop
)
)
)
)
