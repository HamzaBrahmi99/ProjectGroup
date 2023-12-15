(module 
(type (func (param i32 i32 i32)))
(type (func (param i32 i32) (result i32 i32)))
(type (func (param i32 i32 i32 i32)))
(type (func (param i32 i32)))
(table 3 funcref)
(elem (i32.const 0) 0 1 2)
(export "start" (func 2))
(func $0 (type 1) (param i32 i32) (result i32 i32)
(local $var0 i32)
i32.const 14
(if (result i32 i32 )
(then
local.get 1
local.set 0
i32.const 24
i32.const 8
(if 
(then
i32.const 93
local.set 0
i32.const 86
drop
local.get $var0
i32.const 50
i32.and
local.set 1
i32.const 61
i32.const 52
i32.le_s
local.get $var0
i32.div_u
local.set $var0
i32.const 14
drop
i32.const 17
i32.const 38
local.set 1
i32.const 5
i32.or
local.get 1
i32.or
local.set 1
)
(else
i32.const 95
i32.const 34
i32.const 1
call_indirect (type 3)
i32.const 33
drop
i32.const 50
i32.const 82
i32.const 1
call_indirect (type 3)
i32.const 86
i32.const 99
i32.gt_u
i32.const 56
i32.const 44
i32.const 74
i32.const 1
call_indirect (type 3)
i32.const 1
call_indirect (type 3)
)
)
(if 
(then
local.get $var0
drop
local.get $var0
local.get 0
call 1
i32.const 36
local.set 1
i32.const 24
i32.const 60
call 1
i32.const 8
i32.const 47
local.set 1
i32.const 36
i32.le_s
i32.const 32
i32.xor
i32.const 43
call 0
call 1
local.get $var0
i32.const 25
i32.ge_s
drop
local.get 0
local.set 0
local.get $var0
drop
local.get 1
local.set 1
i32.const 32
local.set 1
i32.const 1
i32.const 18
drop
local.get $var0
i32.const 1
call_indirect (type 3)
local.get 0
i32.const 20
i32.and
drop
)
)
i32.const 74
(if (result i32 i32 )
(then
i32.const 66
i32.const 51
i32.div_s
i32.const 3
i32.ge_s
local.set 1
i32.const 22
i32.const 9
call 0
local.set 1
i32.const 40
i32.ge_s
local.set 1
local.get 0
local.get 0
)
(else
i32.const 59
i32.const 88
i32.or
i32.const 84
i32.div_u
local.set 0
i32.const 100
drop
local.get 1
i32.const 73
i32.or
local.get 1
call 0
)
)
)
(else
i32.const 11
(if (result i32 i32 )
(then
i32.const 24
i32.const 57
drop
i32.const 23
call 0
i32.eq
i32.const 21
call 0
i32.mul
i32.const 18
call 1
i32.const 31
drop
i32.const 82
i32.const 31
i32.const 0
call_indirect (type 1)
i32.xor
i32.const 69
i32.ge_s
i32.const 85
)
(else
i32.const 62
local.get $var0
drop
i32.const 98
i32.le_u
i32.const 40
i32.rem_u
drop
local.get 1
i32.const 72
)
)
(if 
(then
local.get 1
local.get $var0
i32.const 1
call_indirect (type 3)
local.get 1
local.get 0
call 0
i32.const 0
call_indirect (type 1)
i32.lt_u
i32.const 10
i32.or
local.set 0
i32.const 83
i32.const 81
call 0
local.set $var0
i32.const 22
i32.and
i32.const 71
call 1
i32.const 93
i32.const 54
i32.lt_u
local.set $var0
)
(else
i32.const 8
drop
i32.const 61
i32.const 87
i32.sub
local.get 0
i32.add
local.get 1
local.set 0
local.get 1
i32.add
i32.const 72
i32.eq
drop
local.get 1
drop
)
)
(if (result i32 )
(then
i32.const 94
i32.const 93
call 0
i32.ge_u
i32.const 57
i32.const 1
call_indirect (type 3)
local.get 1
i32.const 76
i32.ge_s
local.get 1
i32.ge_u
drop
local.get $var0
i32.const 46
i32.const 0
call_indirect (type 1)
call 0
local.set 0
i32.const 13
local.get 0
call 1
)
(else
i32.const 47
local.set 1
local.get 1
local.set 1
i32.const 8
local.set 0
i32.const 5
i32.const 64
i32.ge_s
i32.const 29
i32.lt_s
i32.const 74
i32.const 1
call_indirect (type 3)
local.get 1
)
)
(if (result i32 )
(then
i32.const 32
i32.const 52
i32.lt_s
i32.const 79
i32.le_u
i32.const 48
i32.const 1
call_indirect (type 3)
i32.const 97
local.get $var0
call 1
i32.const 14
i32.const 84
i32.ge_u
i32.const 90
i32.lt_u
i32.const 84
i32.add
local.get $var0
call 1
local.get 1
)
(else
i32.const 36
i32.const 57
i32.le_u
i32.const 88
call 0
call 0
call 0
call 1
i32.const 13
local.get 0
i32.eq
)
)
drop
i32.const 53
local.get $var0
)
)
call 1
local.get $var0
i32.const 25
)
(func $1 (type 3) (param i32 i32) 
local.get 1
(if 
(then
i32.const 29
i32.const 62
(if 
(then
i32.const 9
i32.const 14
i32.le_u
i32.const 81
i32.le_u
i32.const 0
i32.ge_u
local.set 0
i32.const 89
i32.const 37
i32.gt_s
i32.const 8
i32.const 0
call_indirect (type 1)
call 1
)
(else
i32.const 3
i32.const 92
call 1
local.get 0
i32.const 4
call 0
i32.sub
i32.const 6
i32.const 1
call_indirect (type 3)
i32.const 50
i32.const 69
i32.ne
local.set 0
i32.const 74
i32.const 50
call 0
call 0
i32.const 0
call_indirect (type 1)
call 0
i32.lt_s
local.get 0
local.set 1
i32.const 11
i32.le_s
i32.const 53
i32.or
i32.const 8
i32.ge_s
i32.const 17
i32.ne
local.set 0
)
)
i32.const 95
(if 
(then
i32.const 82
i32.const 59
i32.const 0
call_indirect (type 1)
call 1
i32.const 42
local.get 1
i32.ge_u
local.get 0
i32.xor
i32.const 90
i32.lt_u
i32.const 97
i32.mul
local.get 1
i32.ge_s
i32.const 27
i32.ne
local.get 0
call 0
i32.lt_u
drop
)
(else
i32.const 51
drop
local.get 0
local.get 0
i32.ne
i32.const 98
call 0
i32.const 0
call_indirect (type 1)
i32.ne
i32.const 73
i32.gt_s
i32.const 83
i32.ge_u
i32.const 11
call 0
call 1
)
)
(if 
(then
i32.const 20
i32.const 75
i32.const 1
call_indirect (type 3)
i32.const 80
i32.const 92
i32.ge_s
local.set 0
i32.const 0
i32.const 7
call 0
i32.gt_u
local.set 1
)
)
)
)
i32.const 84
i32.const 72
drop
(if 
(then
i32.const 64
i32.const 84
(if (result i32 )
(then
local.get 1
i32.const 50
call 1
i32.const 53
local.get 1
i32.mul
i32.const 81
call 1
local.get 0
local.get 1
call 0
i32.le_u
i32.const 100
i32.ne
local.set 0
i32.const 70
i32.const 19
i32.ge_u
drop
i32.const 60
)
(else
i32.const 46
local.get 1
call 1
i32.const 92
drop
i32.const 59
local.set 1
i32.const 24
drop
i32.const 12
)
)
i32.gt_u
i32.const 71
i32.lt_s
drop
)
)
)
(func $2 (type 2) (param i32 i32 i32 i32) 
local.get 2
local.set 1
local.get 0
(if 
(then
i32.const 97
local.set 0
local.get 0
i32.const 51
(if (result i32 )
(then
local.get 2
local.set 2
local.get 3
i32.const 85
call 1
i32.const 67
drop
i32.const 44
drop
i32.const 18
local.set 1
i32.const 89
i32.const 35
local.get 2
i32.eq
call 1
local.get 3
)
(else
local.get 2
local.get 2
i32.const 1
call_indirect (type 3)
i32.const 20
local.set 1
local.get 2
)
)
(if 
(then
i32.const 78
local.set 1
i32.const 57
i32.const 88
i32.const 1
call_indirect (type 3)
)
)
i32.const 80
(if 
(then
i32.const 77
i32.const 89
i32.const 0
call_indirect (type 1)
i32.sub
i32.const 63
i32.ne
drop
i32.const 29
local.set 2
i32.const 89
i32.const 5
i32.sub
i32.const 72
i32.eq
i32.const 62
i32.ge_u
local.get 1
i32.div_s
local.set 1
)
)
i32.const 49
call 0
(if 
(then
i32.const 82
i32.const 84
i32.add
drop
local.get 2
i32.const 68
i32.rem_u
i32.const 51
i32.xor
drop
i32.const 60
i32.const 13
i32.lt_s
i32.const 34
call 1
local.get 1
i32.const 24
call 0
i32.div_u
local.get 2
drop
i32.const 0
i32.ge_u
i32.const 66
i32.xor
i32.const 25
i32.const 0
call_indirect (type 1)
i32.and
i32.const 83
i32.rem_u
i32.const 51
call 1
)
)
(if 
(then
i32.const 84
drop
i32.const 96
local.set 2
i32.const 12
i32.const 90
i32.eq
i32.const 20
drop
local.set 2
i32.const 1
i32.const 26
i32.const 0
call_indirect (type 1)
i32.or
local.set 0
)
)
)
(else
local.get 0
local.get 2
(if 
(then
i32.const 92
i32.const 97
i32.div_s
local.set 3
i32.const 14
drop
local.get 3
i32.const 21
call 0
i32.ge_u
local.set 0
i32.const 90
local.set 1
i32.const 98
local.get 0
i32.rem_u
i32.const 6
call 0
i32.const 1
call_indirect (type 3)
i32.const 76
i32.const 89
call 1
)
)
(if 
(then
i32.const 76
i32.const 81
i32.ge_s
i32.const 63
call 0
i32.rem_u
drop
local.get 3
i32.const 65
i32.ge_s
drop
)
(else
i32.const 5
i32.const 41
i32.const 1
call_indirect (type 3)
i32.const 44
local.set 3
i32.const 20
i32.const 13
call 1
i32.const 82
i32.const 15
i32.gt_u
local.get 1
i32.ne
i32.const 89
call 0
call 1
)
)
i32.const 37
(if (result i32 )
(then
local.get 1
local.set 3
i32.const 59
drop
i32.const 16
local.get 3
i32.const 1
call_indirect (type 3)
i32.const 93
local.set 0
i32.const 10
i32.const 99
local.get 3
i32.rem_u
i32.rem_u
i32.const 91
call 0
i32.const 0
call_indirect (type 1)
i32.lt_u
)
(else
i32.const 27
i32.const 29
call 0
i32.ge_u
drop
i32.const 14
)
)
i32.const 52
i32.const 1
call_indirect (type 3)
)
)
i32.const 88
local.get 1
call 0
i32.div_s
(if 
(then
i32.const 0
i32.const 46
(if 
(then
i32.const 82
local.set 3
local.get 2
i32.const 13
i32.rem_u
drop
local.get 1
i32.const 29
i32.gt_u
i32.const 21
call 0
i32.xor
local.set 2
)
)
local.set 1
i32.const 11
(if 
(then
i32.const 52
i32.const 53
i32.xor
i32.const 80
i32.ne
drop
local.get 2
local.set 3
local.get 1
i32.const 29
local.set 0
local.get 2
i32.ne
i32.const 7
call 1
local.get 1
local.set 1
)
)
)
)
)
)
