(module 
(type (func (result i32 i32)))
(type (func (param i32) (result i32)))
(type (func (param i32 i32 i32) (result i32 i32)))
(type (func (param i32 i32)))
(table 15 funcref)
(elem (i32.const 0) 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14)
(export "start" (func 5))
(func $0 (type 1) (param i32) (result i32)
i32.const 97
i32.const 11
i32.const 5
call_indirect (type 3)
i32.const 59
i32.const 21
i32.or
call 1
i32.rem_u
call 3
call 1
i32.ne
)
(func $1 (type 0)  (result i32 i32)
i32.const 0
call 6
i32.const 2
call_indirect (type 0)
i32.const 5
call_indirect (type 3)
i32.const 2
call_indirect (type 0)
i32.mul
i32.div_u
call 1
i32.const 1
call_indirect (type 0)
call 10
i32.xor
call 5
drop
i32.eq
)
(func $2 (type 0)  (result i32 i32)
i32.const 88
drop
i32.const 91
i32.const 40
i32.div_s
drop
i32.const 10
drop
i32.const 60
i32.const 90
)
(func $3 (type 3) (param i32 i32) 
i32.const 6
call 6
i32.const 11
call_indirect (type 1)
i32.const 8
call_indirect (type 0)
i32.le_s
i32.div_u
drop
i32.const 64
i32.const 38
i32.rem_u
i32.const 0
i32.or
i32.const 1
call_indirect (type 0)
i32.lt_u
i32.const 10
call_indirect (type 0)
i32.add
i32.gt_s
call 2
i32.div_u
call 6
call 7
call 6
i32.const 45
call 2
i32.mul
i32.gt_s
i32.le_u
drop
)
(func $4 (type 1) (param i32) (result i32)
i32.const 15
drop
i32.const 63
call 6
i32.const 15
i32.xor
drop
i32.const 26
i32.const 13
i32.gt_s
)
(func $5 (type 3) (param i32 i32) 
call 8
i32.eq
drop
call 1
i32.const 1
call_indirect (type 0)
i32.const 0
call_indirect (type 1)
call 2
i32.lt_u
i32.lt_u
i32.le_s
i32.or
i32.mul
drop
)
(func $6 (type 1) (param i32) (result i32)
i32.const 33
i32.const 2
call_indirect (type 0)
i32.const 10
call_indirect (type 0)
i32.gt_u
call 13
i32.ge_u
call 12
i32.const 32
call 3
i32.const 2
call_indirect (type 0)
i32.div_s
)
(func $7 (type 3) (param i32 i32) 
call 2
call 14
i32.const 1
call_indirect (type 0)
i32.div_s
drop
i32.const 1
call_indirect (type 0)
i32.const 9
call_indirect (type 3)
call 8
i32.ne
drop
)
(func $8 (type 0)  (result i32 i32)
call 1
i32.xor
i32.const 10
call_indirect (type 0)
call 1
i32.add
call 14
i32.or
drop
i32.const 14
call 6
drop
i32.const 75
drop
i32.const 0
drop
i32.const 2
call_indirect (type 0)
)
(func $9 (type 3) (param i32 i32) 
i32.const 74
i32.const 54
i32.add
call 10
call 5
i32.const 33
call 4
i32.gt_u
drop
call 2
i32.gt_u
i32.const 62
i32.eq
drop
)
(func $10 (type 0)  (result i32 i32)
i32.const 24
call 2
i32.ge_s
i32.or
drop
i32.const 10
call_indirect (type 0)
i32.or
i32.const 77
i32.const 0
call_indirect (type 1)
i32.or
i32.const 17
)
(func $11 (type 1) (param i32) (result i32)
i32.const 35
drop
i32.const 27
call 4
i32.const 11
call_indirect (type 1)
i32.const 1
call_indirect (type 0)
i32.eq
call 8
i32.add
call 11
i32.const 45
i32.add
i32.const 9
call_indirect (type 3)
)
(func $12 (type 1) (param i32) (result i32)
i32.const 41
call 11
drop
call 2
i32.add
i32.const 8
call_indirect (type 0)
i32.const 25
i32.and
call 1
i32.const 12
call_indirect (type 1)
call 9
i32.ge_u
i32.or
)
(func $13 (type 3) (param i32 i32) 
i32.const 49
i32.const 97
i32.div_s
call 10
call 1
i32.gt_s
i32.eq
call 1
i32.eq
i32.const 3
call_indirect (type 3)
call 4
call 4
i32.ne
i32.const 12
call_indirect (type 1)
drop
)
(func $14 (type 3) (param i32 i32) 
i32.const 78
i32.const 11
call_indirect (type 1)
i32.const 54
drop
i32.const 32
i32.div_s
i32.const 83
i32.eq
call 10
i32.or
i32.rem_u
i32.const 66
i32.const 10
call_indirect (type 0)
call 4
call 0
i32.sub
call 12
i32.xor
i32.ne
drop
)
)
