(module 
(type (func (param i32 i32 i32 i32) (result i32)))
(type (func (param i32 i32)))
(type (func (result i32)))
(type (func (param i32 i32 i32) (result i32)))
(table 15 funcref)
(elem (i32.const 0) 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14)
(export "start" (func 5))
(func $0 (type 3) (param i32 i32 i32) (result i32)
i32.const 4
i32.const 5
i32.div_s
i32.const 96
i32.rem_u
drop
i32.const 61
i32.const 6
call_indirect (type 2)
i32.rem_u
drop
i32.const 4

)
(func $1 (type 1) (param i32 i32) 
drop
i32.const 3
i32.const 9
call_indirect (type 2)
i32.or
drop
i32.const 19
i32.const 55
i32.and
i32.const 9
call_indirect (type 2)
i32.const 10
call_indirect (type 2)

)
(func $2 (type 0) (param i32 i32 i32 i32) (result i32)
i32.add
i32.rem_u
drop
i32.const 6
call_indirect (type 2)
drop
i32.const 39
drop
i32.const 28
i32.const 51
i32.const 13
call_indirect (type 2)

)
(func $3 (type 1) (param i32 i32) 
i32.or
i32.xor
drop
i32.const 40
i32.const 9
call_indirect (type 2)
i32.div_u
i32.const 72
i32.div_s
drop
i32.const 19

)
(func $4 (type 1) (param i32 i32) 
drop
i32.const 88
i32.const 10
call_indirect (type 2)
i32.rem_u
drop
i32.const 10
call_indirect (type 2)
call 10
i32.div_u
i32.const 36
i32.sub

)
(func $5 (type 0) (param i32 i32 i32 i32) (result i32)
i32.const 8
call_indirect (type 2)
i32.add
i32.const 9
call_indirect (type 2)
i32.or
drop
i32.const 76
i32.const 48
call 3
call 6
i32.const 9
call_indirect (type 2)

)
(func $6 (type 2)  (result i32)
drop
drop
i32.const 100
i32.const 90
i32.const 14
call_indirect (type 1)
call 9
i32.const 8
call_indirect (type 2)
drop
drop
i32.const 9
call_indirect (type 2)

)
(func $7 (type 3) (param i32 i32 i32) (result i32)
drop
i32.const 70
drop
i32.const 17
i32.const 14
i32.or
drop
i32.const 48
i32.const 60
i32.const 4
call_indirect (type 1)
i32.const 45

)
(func $8 (type 2)  (result i32)
i32.const 78
i32.const 10
call_indirect (type 2)
i32.add
i32.and
i32.const 74
i32.add
i32.const 13
call_indirect (type 2)
call 4
i32.const 23
drop
i32.const 10

)
(func $9 (type 2)  (result i32)
i32.const 44
i32.const 9
call_indirect (type 2)
i32.and
drop
call 13
i32.sub
drop
i32.const 51
i32.const 98
i32.sub

)
(func $10 (type 2)  (result i32)
i32.const 13
call_indirect (type 2)
i32.div_u
i32.const 44
i32.and
drop
i32.const 92
drop
i32.const 91
i32.const 9
call_indirect (type 2)
i32.const 14
call_indirect (type 1)
i32.const 72

)
(func $11 (type 0) (param i32 i32 i32 i32) (result i32)
i32.const 98
i32.div_s
i32.const 20
drop
call 10
call 6
i32.rem_u
i32.sub
i32.const 41
i32.mul

)
(func $12 (type 1) (param i32 i32) 
drop
i32.const 14
i32.const 98
drop
drop
i32.const 9
call_indirect (type 2)
i32.const 59
i32.or
i32.const 34
i32.div_s

)
(func $13 (type 2)  (result i32)
i32.const 87
i32.div_u
drop
i32.const 99
drop
call 8
i32.const 29
i32.and
call 8
i32.const 12
call_indirect (type 1)
i32.const 59

)
(func $14 (type 1) (param i32 i32) 
call 10
call 4
i32.const 61
i32.const 10
call_indirect (type 2)
i32.add
i32.const 54
i32.div_u
call 6
i32.div_s
call 10

)
)
