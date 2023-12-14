(module (
(type (func (param i32 i32)))
(type (func (param i32 i32) (result i32)))
(type (func))
(type (func (param i32) (result i32)))
(type (func (param i32 i32 i32 i32) (result i32 i32)))
(table 15 funcref)
(elem (i32.const 0) 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14)
(export "start" (func 8))
(func $0 (type 1) (param i32 i32) (result i32)
call_indirect (type 0)
if
local.get
local.get
end
if
i32.sub
local.set
i32.const
else
i32.const
i32.div_s
local.get
drop
end
if
local.get
i32.rem
else
local.get
drop
i32.const
i32.div_s
end
call_indirect (type 0)
if
i32.const
i32.div_u
end
if
local.get
i32.div_u
drop
local.get
else
local.get
end
call 0
call 0
if
i32.sub
i32.const
local.get
end
drop

)
(func $1 (type 4) (param i32 i32 i32 i32) (result i32 i32)
i32.const
i32.const
local.set
if
i32.div_u
i32.div_u
local.set
i32.const
end
if
i32.const
else
i32.const
i32.sub
i32.add
local.set
end
local.get
if
i32.const
i32.div_u
else
drop
i32.const
local.set
i32.const
local.get
end
i32.mul
call 1
if
local.get
i32.sub
i32.const
i32.mul
else
i32.const
i32.div_u
drop
i32.const
i32.const
end
i32.mul
if
i32.const
i32.mul
local.get
end
call_indirect (type 0)

)
(func $2 (type 4) (param i32 i32 i32 i32) (result i32 i32)
i32.div_u
if
drop
local.get
end
call_indirect (type 0)
call 2
if
drop
local.get
else
drop
end

)
(func $3 (type 4) (param i32 i32 i32 i32) (result i32 i32)
if
local.get
local.set
i32.const
local.get
i32.div_s
else
local.set
i32.const
i32.const
end
if
i32.div_u
local.get
i32.const
else
i32.sub
i32.sub
i32.const
i32.rem
end
call_indirect (type 2)
if
local.set
local.get
else
local.set
i32.const
local.get
local.get
i32.div_u
end
if
drop
drop
i32.const
i32.const
end
if
drop
local.get
i32.mul
local.set
else
i32.const
local.set
i32.const
i32.const
end
call_indirect (type 2)

)
(func $4 (type 4) (param i32 i32 i32 i32) (result i32 i32)
if
i32.div_u
drop
end
i32.const
if
local.get
end
i32.mul
drop
if
i32.const
i32.const
local.get
i32.div_u
i32.div_s
else
drop
local.get
local.get
end
if
i32.div_u
local.get
end
if
i32.div_s
local.get
drop
local.set
else
i32.const
drop
i32.const
local.set
end
call_indirect (type 4)
if
i32.const
else
local.set
local.get
local.get
i32.const
end

)
(func $5 (type 1) (param i32 i32) (result i32)
i32.rem
call_indirect (type 5)

)
(func $6 (type 4) (param i32 i32 i32 i32) (result i32 i32)
if
drop
local.set
i32.const
end
if
drop
local.get
local.set
i32.const
drop
end
if
i32.const
local.get
local.get
i32.mul
local.set
else
local.set
end
if
local.get
local.set
local.get
end
call_indirect (type 3)
if
i32.const
local.set
end
call 6
if
i32.const
i32.rem
local.set
local.get
i32.const
end
if
local.set
end
call 1
if
drop
local.get
drop
i32.const
end
if
local.get
i32.div_u
local.get
i32.const
end
call_indirect (type 2)
i32.mul

)
(func $7 (type 3) (param i32) (result i32)
if
i32.const
i32.sub
i32.add
i32.const
end
if
i32.div_s
local.get
end
call 4

)
(func $8 (type 0) (param i32 i32) 
call_indirect (type 1)
if
i32.mul
drop
local.get
else
i32.const
i32.const
end
call 6
if
local.get
else
local.set
i32.mul
end
if
i32.sub
i32.const
i32.div_s
i32.const
end
if
i32.const
drop
i32.sub
local.get
local.get
end
call_indirect (type 1)
call_indirect (type 0)
if
drop
end
local.set
local.set

)
(func $9 (type 1) (param i32 i32) (result i32)
if
local.get
i32.const
end
if
i32.mul
drop
end
if
i32.const
end
if
local.get
i32.sub
local.get
i32.div_s
end
call 8
if
local.get
local.get
i32.const
local.set
i32.sub
end
if
drop
end
if
local.get
else
local.set
local.set
local.get
drop
end
if
local.get
else
local.set
local.get
local.set
local.get
drop
end
if
i32.const
i32.const
end
if
i32.rem
drop
local.get
i32.const
end
call_indirect (type 7)
if
i32.rem
local.get
i32.div_u
local.get
else
drop
i32.const
i32.div_u
end

)
(func $10 (type 4) (param i32 i32 i32 i32) (result i32 i32)
if
i32.const
end
if
i32.add
drop
end
local.get
if
local.set
end
if
local.get
local.get
i32.const
i32.sub
else
local.get
local.get
drop
end
local.get
if
i32.mul
drop
i32.div_s
else
local.set
i32.const
i32.const
end
i32.sub
if
drop
local.get
i32.const
i32.add
drop
else
local.get
end
if
i32.const
local.get
i32.div_u
drop
local.set
end
i32.const
call_indirect (type 7)
if
drop
i32.const
i32.const
i32.sub
else
local.get
i32.rem
i32.const
i32.sub
end
call_indirect (type 5)

)
(func $11 (type 1) (param i32 i32) (result i32)
if
i32.const
end
if
drop
i32.const
i32.div_s
drop
end
call_indirect (type 5)
i32.const
if
local.set
else
local.get
i32.const
i32.sub
end
if
local.get
i32.mul
i32.const
local.get
else
i32.const
i32.const
i32.div_s
local.set
local.get
end
if
i32.add
i32.add
i32.mul
local.get
i32.rem
end

)
(func $12 (type 4) (param i32 i32 i32 i32) (result i32 i32)
if
i32.const
i32.rem
drop
else
local.get
local.set
end
if
i32.const
drop
i32.const
i32.const
else
i32.sub
i32.const
i32.mul
local.set
end
local.get
if
local.set
local.get
local.get
i32.const
i32.add
end
if
i32.mul
local.get
local.get
i32.add
else
i32.rem
drop
i32.const
end
if
local.set
else
i32.const
i32.const
i32.div_u
i32.const
local.get
end
if
i32.mul
i32.add
drop
end
call 7

)
(func $13 (type 1) (param i32 i32) (result i32)
if
i32.const
local.get
local.get
i32.add
drop
else
i32.const
i32.sub
end
if
local.set
i32.const
drop
i32.const
else
drop
local.get
end
if
local.get
end
if
local.get
local.get
local.set
drop
end
if
local.get
else
i32.const
i32.mul
local.set
i32.const
end
if
i32.sub
i32.div_u
local.set
end
i32.const
call_indirect (type 0)
if
drop
local.get
drop
i32.const
local.get
end
if
i32.const
i32.div_u
i32.const
i32.sub
else
drop
end

)
(func $14 (type 3) (param i32) (result i32)
if
drop
i32.const
end
if
local.get
drop
else
i32.const
i32.div_s
end
if
local.set
i32.const
else
i32.const
i32.mul
local.get
i32.add
local.get
end
call_indirect (type 2)
if
local.set
drop
else
i32.const
i32.const
drop
drop
local.get
end
i32.const
call 9
call_indirect (type 0)
drop

)
)
