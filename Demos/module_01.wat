(module
  (type (func (param i32 i32) (result i32 i32)))
  (type (func (param i32 i32 i32 i32) (result i32 i32)))
  (type (func (param i32 i32 i32) (result i32 i32)))
  (type (func (param i32 i32 i32) (result i32)))
  (type (func (param i32) (result i32 i32)))
  (type (func (param i32 i32) (result i32)))

  (table 8 funcref)
  (elem (i32.const 0) 0 1 2 3 4 5 6 7)

  (export "start" (func 0))

  (func $0 (type 2) (param i32 i32 i32) (result i32 i32)
    i32.const 1
    (if (result i32 i32)
      (then
        local.get 0
        local.get 1
        local.get 2
        i32.add
        drop
        call 4
      )
      (else
        local.get 0
        local.get 1
        local.get 2
        drop
        call 7
        i32.const 0
      )
    )
  )

  (func $1 (type 4) (param i32) (result i32 i32)
    local.get 0
    i32.const 0
    i32.const 0
    i32.const 5
    call_indirect (type 2)
  )

  (func $2 (type 4) (param i32) (result i32 i32)
    i32.const 0
    (if (result i32 i32)
      (then
        local.get 0
        i32.const 0
        i32.const 0
        i32.const 0
        call 6
      )
      (else
        local.get 0
        call 4
      )
    )
  )

  (func $3 (type 2) (param i32 i32 i32) (result i32 i32)
    local.get 0
    local.get 1
    local.get 2
    drop
    i32.add
    i32.const 1
    call_indirect (type 4)
  )

  (func $4 (type 4) (param i32) (result i32 i32)
    local.get 0
    call 2
  )

  (func $5 (type 2) (param i32 i32 i32) (result i32 i32)
    i32.const 0
    (if (result i32 i32)
      (then
        local.get 0
        local.get 1
        local.get 2
        drop
        i32.add
        call 4
      )
      (else
        local.get 0
        local.get 1
        local.get 2
        drop
        call 7
        i32.const 0
      )
    )
  )

  (func $6 (type 1) (param i32 i32 i32 i32) (result i32 i32)
    local.get 0
    local.get 1
    local.get 2
    local.get 3
    drop
    i32.const 5
    call_indirect (type 2)
  )

  (func $7 (type 5) (param i32 i32) (result i32)
    local.get 0
    local.get 1
    call 7
  )
)
