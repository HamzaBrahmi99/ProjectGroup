(module 
(type (func (param i32 i32)))
(type (func (param i32 i32 i32 i32) (result i32 i32)))
(type (func (param i32 i32 i32 i32) (result i32)))
(type (func (param i32) (result i32)))
(type (func (param i32)))
(table 50 funcref)
(elem (i32.const 0) 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49)
(export "start" (func 10))
(func $0 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 6
drop
i32.const 2
drop
i32.const 69
i32.const 1
(if 
(then
i32.const 62
i32.const 38
call_indirect (type 3)
call 32
)
(else
i32.const 79
call 44
)
)
i32.const 0
(if 
(then
i32.const 85
drop
)
(else
i32.const 56
i32.const 47
call_indirect (type 3)
call 20
i32.const 40
i32.const 30
call_indirect (type 4)
i32.const 47
call_indirect (type 3)
i32.const 47
call_indirect (type 3)
i32.const 30
call_indirect (type 4)
)
)
i32.const 6
call_indirect (type 4)
i32.const 19
i32.const 0
(if (result i32 i32 )
(then
i32.const 77
i32.const 0
(if 
(then
i32.const 100
call 44
)
(else
i32.const 45
i32.const 30
call 44
i32.const 6
call_indirect (type 4)
)
)
i32.const 0
(if 
(then
i32.const 53
i32.const 47
call_indirect (type 3)
i32.const 64
call 32
call 32
)
(else
i32.const 19
call 20
call 17
drop
)
)
i32.const 0
(if (result i32 )
(then
i32.const 0
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 52
i32.const 7
call_indirect (type 3)
call 6
)
(else
i32.const 38
i32.const 69
i32.sub
call 20
drop
)
)
i32.const 0
(if 
(then
i32.const 8
drop
)
(else
i32.const 60
call 6
)
)
i32.const 79
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 90
i32.const 40
call_indirect (type 3)
)
(else
i32.const 34
i32.const 66
call 47
call 18
i32.const 68
i32.const 74
i32.le_s
i32.const 53
i32.ge_u
drop
i32.const 67
call 43
i32.const 6
call_indirect (type 4)
i32.const 24
i32.const 6
i32.le_u
)
)
i32.const 14
call_indirect (type 3)
)
)
i32.const 40
i32.xor
)
(else
i32.const 91
drop
i32.const 63
)
)
)
(else
i32.const 6
i32.const 14
call_indirect (type 3)
i32.const 1
(if 
(then
i32.const 54
i32.const 78
i32.const 48
call_indirect (type 0)
)
(else
i32.const 76
i32.const 21
i32.ge_s
i32.const 47
call_indirect (type 3)
drop
)
)
i32.const 1
(if 
(then
i32.const 18
call 17
call 44
)
(else
i32.const 18
i32.const 6
call_indirect (type 4)
)
)
call 47
call 33
i32.const 1
(if 
(then
i32.const 5
drop
)
(else
i32.const 27
i32.const 20
call_indirect (type 3)
i32.const 27
call_indirect (type 3)
drop
)
)
drop
i32.const 70
i32.const 1
(if 
(then
i32.const 82
drop
)
(else
i32.const 94
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 1
(if (result i32 i32 )
(then
i32.const 84
i32.const 38
call_indirect (type 3)
i32.const 0
(if 
(then
i32.const 71
call 32
)
(else
i32.const 66
i32.const 16
i32.const 20
call_indirect (type 3)
call 30
i32.const 14
call 17
i32.gt_s
i32.const 93
drop
i32.const 4
i32.and
drop
)
)
i32.const 5
)
(else
i32.const 47
i32.const 1
(if (result i32 )
(then
i32.const 78
i32.const 64
i32.add
)
(else
i32.const 62
i32.const 68
i32.sub
)
)
)
)
i32.const 8
call_indirect (type 0)
i32.const 1
(if (result i32 )
(then
i32.const 0
(if (result i32 i32 )
(then
i32.const 77
i32.const 65
)
(else
i32.const 64
call 47
call 17
call 33
i32.const 77
i32.const 64
call 17
i32.gt_s
i32.add
i32.const 40
call_indirect (type 3)
drop
i32.const 38
drop
i32.const 20
i32.const 14
call_indirect (type 3)
i32.const 45
)
)
i32.lt_s
)
(else
i32.const 12
call 30
i32.const 1
(if 
(then
i32.const 7
i32.const 28
call 24
)
(else
i32.const 53
i32.const 51
i32.ge_u
i32.const 3
i32.ge_u
call 43
i32.const 74
call 24
)
)
i32.const 0
(if 
(then
i32.const 5
call 17
drop
)
(else
i32.const 1
call 38
i32.const 49
i32.sub
drop
)
)
i32.const 1
(if 
(then
i32.const 90
i32.const 6
i32.const 47
call_indirect (type 3)
i32.le_u
drop
)
(else
i32.const 9
call 33
call 20
call 33
i32.const 40
call_indirect (type 3)
i32.const 69
i32.const 40
call_indirect (type 3)
i32.ge_s
i32.const 32
call_indirect (type 4)
)
)
i32.const 0
(if 
(then
i32.const 40
drop
)
(else
i32.const 23
i32.const 30
call_indirect (type 4)
)
)
i32.const 57
)
)
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 86
drop
)
(else
i32.const 71
i32.const 31
drop
i32.const 35
i32.ge_u
drop
)
)
i32.const 43
)
(else
i32.const 34
drop
i32.const 95
)
)
call 17
)
)
)
)
i32.ge_u
)
(func $1 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 0
(if 
(then
i32.const 27
call 40
call 17
drop
)
(else
i32.const 81
i32.const 99
i32.const 44
call_indirect (type 4)
call 6
)
)
i32.const 72
drop
i32.const 0
(if (result i32 )
(then
i32.const 1
(if (result i32 i32 )
(then
i32.const 35
i32.const 0
(if (result i32 )
(then
i32.const 70
i32.const 20
call 5
i32.const 4
)
(else
i32.const 54
drop
i32.const 1
(if (result i32 i32 )
(then
i32.const 27
i32.const 14
call_indirect (type 3)
i32.const 23
i32.sub
i32.const 82
call 7
i32.add
drop
i32.const 89
call 17
call 27
call 44
i32.const 100
drop
i32.const 26
drop
i32.const 43
drop
i32.const 40
i32.const 17
call_indirect (type 3)
i32.const 91
)
(else
i32.const 3
call 20
call 14
drop
i32.const 70
call 14
drop
i32.const 9
i32.const 69
call 27
i32.and
call 20
i32.const 68
i32.ge_u
drop
i32.const 50
drop
i32.const 67
call 47
i32.const 21
call 20
call 47
call 33
i32.mul
call 33
i32.const 15
call 47
call 48
i32.const 22
i32.const 84
i32.div_s
call 7
drop
i32.const 26
i32.const 7
call_indirect (type 3)
call 44
i32.const 95
drop
i32.const 46
drop
i32.const 51
i32.const 33
i32.div_s
i32.const 59
i32.and
i32.const 47
i32.le_u
i32.const 27
call_indirect (type 3)
i32.const 82
)
)
call 48
i32.const 85
)
)
)
(else
i32.const 16
drop
i32.const 79
i32.const 1
(if (result i32 )
(then
i32.const 0
(if (result i32 )
(then
i32.const 36
call 7
)
(else
i32.const 30
call 38
i32.const 47
call_indirect (type 3)
i32.const 7
call_indirect (type 3)
i32.const 47
i32.const 40
call_indirect (type 3)
i32.const 39
call_indirect (type 0)
i32.const 69
call 33
drop
i32.const 68
call 47
drop
i32.const 93
i32.const 33
call_indirect (type 3)
drop
i32.const 85
drop
i32.const 24
drop
i32.const 81
call 7
drop
i32.const 44
i32.const 63
call 32
)
)
drop
i32.const 1
(if 
(then
i32.const 5
call 20
i32.const 47
call 40
i32.const 24
call_indirect (type 0)
)
(else
i32.const 23
call 30
)
)
i32.const 6
)
(else
i32.const 0
(if (result i32 i32 )
(then
i32.const 22
i32.const 33
call_indirect (type 3)
i32.const 46
i32.le_s
call 47
i32.const 40
call_indirect (type 3)
i32.const 21
call 46
i32.const 29
drop
i32.const 100
i32.const 65
i32.const 18
call_indirect (type 0)
i32.const 25
call 47
drop
i32.const 0
call 17
i32.const 30
call_indirect (type 4)
i32.const 3
i32.const 65
i32.const 24
call_indirect (type 0)
i32.const 17
call 43
drop
i32.const 20
i32.const 17
call_indirect (type 3)
i32.const 56
call 21
i32.const 41
i32.const 83
i32.const 30
call_indirect (type 4)
i32.const 30
call_indirect (type 4)
i32.const 64
call 40
i32.const 87
)
(else
i32.const 80
call 40
i32.const 41
i32.le_u
call 20
i32.const 27
call_indirect (type 3)
call 30
i32.const 23
call 47
i32.const 51
i32.or
drop
i32.const 8
drop
i32.const 73
call 30
i32.const 40
call 43
i32.const 36
)
)
i32.const 8
call_indirect (type 0)
i32.const 1
(if 
(then
i32.const 68
drop
)
(else
i32.const 54
i32.const 6
call_indirect (type 4)
)
)
i32.const 44
)
)
)
)
i32.le_u
)
(else
i32.const 93
i32.const 50
i32.ne
)
)
i32.const 0
i32.le_s
call 47
drop
i32.const 0
(if 
(then
i32.const 32
i32.const 39
i32.const 7
call_indirect (type 3)
i32.const 48
call_indirect (type 0)
)
(else
i32.const 4
drop
)
)
i32.const 0
(if 
(then
i32.const 91
i32.const 27
call_indirect (type 3)
drop
)
(else
i32.const 10
i32.const 15
i32.and
drop
)
)
i32.const 14
)
(func $2 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 66
i32.const 32
call_indirect (type 4)
i32.const 33
i32.const 1
(if 
(then
i32.const 15
call 7
call 6
)
(else
i32.const 70
i32.const 53
call 33
i32.ge_s
i32.const 17
i32.lt_u
i32.const 44
call_indirect (type 4)
)
)
drop
i32.const 30
i32.const 0
(if (result i32 i32 )
(then
i32.const 28
i32.const 1
(if 
(then
i32.const 56
call 38
i32.const 6
i32.lt_u
i32.const 7
call_indirect (type 3)
drop
)
(else
i32.const 28
call 30
)
)
i32.const 0
(if 
(then
i32.const 63
i32.const 40
call 39
)
(else
i32.const 1
i32.const 30
call_indirect (type 4)
)
)
i32.const 1
(if (result i32 )
(then
i32.const 7
i32.const 40
call_indirect (type 3)
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 100
i32.const 32
call_indirect (type 4)
i32.const 1
(if 
(then
i32.const 68
call 33
i32.const 22
i32.const 48
call_indirect (type 0)
)
(else
i32.const 21
call 44
)
)
i32.const 0
(if (result i32 )
(then
i32.const 22
i32.const 64
call 27
i32.ge_u
)
(else
i32.const 92
call 40
)
)
)
(else
i32.const 0
(if 
(then
i32.const 43
drop
)
(else
i32.const 96
i32.const 41
i32.eq
i32.const 40
call_indirect (type 3)
i32.const 99
call 20
i32.div_s
drop
)
)
i32.const 0
(if 
(then
i32.const 79
call 14
i32.const 83
call 6
i32.const 39
i32.const 42
call_indirect (type 0)
)
(else
i32.const 86
drop
)
)
i32.const 31
)
)
i32.const 33
call_indirect (type 3)
)
)
)
(else
i32.const 0
i32.const 1
(if (result i32 )
(then
i32.const 31
drop
i32.const 61
)
(else
i32.const 47
i32.const 32
call_indirect (type 4)
i32.const 0
(if (result i32 i32 )
(then
i32.const 17
i32.const 73
)
(else
i32.const 15
i32.const 84
)
)
i32.div_u
)
)
)
)
i32.const 17
call_indirect (type 3)
i32.eq
i32.const 7
call_indirect (type 3)
)
(func $3 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 43
drop
i32.const 20
i32.const 15
i32.mul
i32.const 1
(if 
(then
i32.const 30
i32.const 30
call_indirect (type 4)
)
(else
i32.const 75
drop
)
)
drop
i32.const 70
i32.const 1
(if (result i32 i32 )
(then
i32.const 49
call 47
i32.const 1
(if 
(then
i32.const 48
i32.const 33
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
)
(else
i32.const 42
i32.const 6
call_indirect (type 4)
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 99
i32.const 0
(if (result i32 )
(then
i32.const 98
i32.const 2
i32.lt_u
)
(else
i32.const 19
drop
i32.const 8
)
)
)
(else
i32.const 29
i32.const 20
call_indirect (type 3)
call 44
i32.const 65
i32.const 0
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 17
i32.const 12
i32.eq
i32.const 47
call_indirect (type 3)
drop
)
(else
i32.const 58
drop
)
)
i32.const 69
)
(else
i32.const 1
(if 
(then
i32.const 88
call 17
drop
)
(else
i32.const 68
drop
)
)
i32.const 61
)
)
)
)
i32.const 46
call_indirect (type 0)
call 6
i32.const 28
i32.const 4
)
(else
i32.const 13
i32.const 0
(if (result i32 )
(then
i32.const 29
call 38
)
(else
i32.const 24
drop
i32.const 54
)
)
)
)
i32.rem_u
)
(func $4 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 89
i32.const 32
call_indirect (type 4)
i32.const 86
call 27
i32.const 16
i32.and
i32.const 74
i32.le_u
call 44
i32.const 1
(if 
(then
i32.const 11
i32.const 64
i32.le_s
i32.const 27
call_indirect (type 3)
drop
)
(else
i32.const 95
i32.const 33
call_indirect (type 3)
i32.const 18
i32.and
i32.const 56
i32.const 32
call_indirect (type 4)
i32.const 33
call_indirect (type 3)
call 27
i32.const 4
i32.sub
call 30
)
)
i32.const 0
(if 
(then
i32.const 74
i32.const 27
call_indirect (type 3)
drop
)
(else
i32.const 7
call 47
drop
)
)
i32.const 1
(if 
(then
i32.const 11
i32.const 7
call_indirect (type 3)
drop
)
(else
i32.const 13
call 44
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 55
call 14
i32.const 1
(if (result i32 i32 )
(then
i32.const 69
i32.const 47
call_indirect (type 3)
i32.const 0
(if 
(then
i32.const 17
drop
)
(else
i32.const 19
i32.const 11
i32.ge_s
call 40
drop
)
)
i32.const 0
(if (result i32 i32 )
(then
i32.const 23
i32.const 0
(if 
(then
i32.const 11
drop
)
(else
i32.const 35
drop
)
)
i32.const 0
(if 
(then
i32.const 6
call 32
)
(else
i32.const 43
i32.const 43
call_indirect (type 3)
call 7
drop
)
)
i32.const 1
(if 
(then
i32.const 32
i32.const 47
call_indirect (type 3)
drop
)
(else
i32.const 73
i32.const 14
call_indirect (type 3)
call 6
)
)
i32.const 1
(if 
(then
i32.const 70
i32.const 30
call_indirect (type 4)
)
(else
i32.const 60
drop
)
)
call 32
i32.const 64
i32.const 1
(if 
(then
i32.const 10
i32.const 27
call_indirect (type 3)
i32.const 52
i32.const 8
call_indirect (type 0)
)
(else
i32.const 64
drop
)
)
drop
i32.const 80
i32.const 1
(if 
(then
i32.const 88
drop
)
(else
i32.const 39
i32.const 98
i32.sub
i32.const 40
call_indirect (type 3)
i32.const 74
i32.and
drop
)
)
i32.const 1
(if 
(then
i32.const 62
drop
)
(else
i32.const 47
i32.const 10
i32.ge_u
drop
)
)
call 32
i32.const 13
i32.const 0
(if (result i32 )
(then
i32.const 53
call 43
)
(else
i32.const 91
call 33
)
)
)
(else
i32.const 90
i32.const 0
(if 
(then
i32.const 11
i32.const 27
call_indirect (type 3)
i32.const 29
i32.or
call 17
call 38
call 30
)
(else
i32.const 12
i32.const 38
call_indirect (type 3)
call 27
drop
)
)
i32.const 37
)
)
i32.rem_u
)
(else
i32.const 31
i32.const 30
call_indirect (type 4)
i32.const 43
call 14
i32.const 0
(if (result i32 )
(then
i32.const 1
(if (result i32 )
(then
i32.const 81
drop
i32.const 94
i32.const 65
call 27
call 33
i32.const 40
call_indirect (type 3)
i32.const 40
call_indirect (type 3)
i32.gt_s
drop
i32.const 95
i32.const 43
call_indirect (type 3)
)
(else
i32.const 84
i32.const 38
call 12
i32.const 95
drop
i32.const 91
drop
i32.const 62
i32.const 6
call_indirect (type 4)
i32.const 52
i32.const 6
call_indirect (type 4)
i32.const 95
call 14
call 17
call 17
call 6
i32.const 52
i32.const 17
i32.ne
)
)
i32.const 52
call 38
i32.ge_u
)
(else
i32.const 60
drop
i32.const 82
)
)
)
)
i32.sub
)
(else
i32.const 1
i32.const 1
(if 
(then
i32.const 46
call 33
drop
)
(else
i32.const 42
call 43
i32.const 15
i32.eq
i32.const 33
call_indirect (type 3)
i32.const 21
call 46
)
)
drop
i32.const 23
i32.const 0
(if 
(then
i32.const 39
i32.const 100
i32.sub
call 14
call 44
)
(else
i32.const 85
i32.const 10
i32.lt_u
drop
)
)
i32.const 1
(if 
(then
i32.const 79
call 43
call 40
call 43
drop
)
(else
i32.const 71
i32.const 7
call_indirect (type 3)
i32.const 30
call_indirect (type 4)
)
)
drop
i32.const 5
i32.const 43
call_indirect (type 3)
i32.const 1
(if 
(then
i32.const 3
call 14
i32.const 14
call_indirect (type 3)
call 7
i32.const 38
call_indirect (type 3)
drop
)
(else
i32.const 31
drop
)
)
i32.const 0
(if 
(then
i32.const 22
drop
)
(else
i32.const 19
call 27
i32.const 10
i32.const 20
call_indirect (type 3)
i32.ge_s
i32.const 7
call_indirect (type 3)
i32.const 32
call_indirect (type 4)
)
)
call 14
i32.const 87
)
)
call 17
i32.le_s
)
(func $5 (type 0) (param i32 i32) 
i32.const 31
drop
i32.const 37
i32.const 14
call_indirect (type 3)
drop
i32.const 11
i32.const 26
drop
drop
i32.const 74
call 6
)
(func $6 (type 4) (param i32) 
i32.const 92
drop
i32.const 16
drop
i32.const 100
i32.const 37
i32.gt_s
i32.const 21
i32.const 62
call 47
call 48
call 43
drop
)
(func $7 (type 3) (param i32) (result i32)
i32.const 1
(if 
(then
i32.const 19
call 33
call 40
i32.const 20
call_indirect (type 3)
call 6
)
(else
i32.const 12
i32.const 37
i32.const 46
call_indirect (type 0)
)
)
i32.const 1
(if 
(then
i32.const 79
i32.const 2
i32.const 33
call_indirect (type 3)
call 39
)
(else
i32.const 11
i32.const 43
call_indirect (type 3)
drop
)
)
i32.const 22
drop
i32.const 39
call 30
i32.const 68
i32.const 30
call_indirect (type 4)
i32.const 1
(if 
(then
i32.const 40
i32.const 43
call_indirect (type 3)
i32.const 47
call_indirect (type 3)
i32.const 60
i32.const 8
call_indirect (type 0)
)
(else
i32.const 0
drop
)
)
i32.const 64
)
(func $8 (type 0) (param i32 i32) 
i32.const 31
call 17
i32.const 84
i32.eq
drop
i32.const 85
i32.const 77
i32.gt_u
drop
i32.const 29
call 38
call 7
i32.const 66
i32.ge_u
drop
)
(func $9 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 0
(if (result i32 )
(then
i32.const 34
i32.const 20
call_indirect (type 3)
)
(else
i32.const 60
i32.const 72
i32.ge_s
)
)
drop
i32.const 24
drop
i32.const 94
drop
i32.const 0
(if 
(then
i32.const 12
i32.const 68
i32.ne
call 7
call 17
i32.const 40
call_indirect (type 3)
i32.const 33
call_indirect (type 3)
i32.const 95
i32.le_s
drop
)
(else
i32.const 7
call 6
)
)
i32.const 1
(if 
(then
i32.const 37
call 27
i32.const 32
call 21
)
(else
i32.const 98
i32.const 40
i32.ne
i32.const 17
call_indirect (type 3)
drop
)
)
i32.const 63
i32.const 40
call_indirect (type 3)
)
(func $10 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 1
(if 
(then
i32.const 62
call 32
)
(else
i32.const 17
i32.const 97
i32.xor
call 6
)
)
i32.const 1
(if 
(then
i32.const 52
i32.const 100
i32.rem_u
call 47
i32.const 46
i32.const 89
call 5
i32.const 90
i32.gt_s
i32.const 56
i32.const 26
i32.div_s
call 48
)
(else
i32.const 26
i32.const 92
i32.le_u
drop
)
)
i32.const 0
(if 
(then
i32.const 98
call 38
i32.const 87
call 30
drop
)
(else
i32.const 6
drop
)
)
i32.const 1
(if 
(then
i32.const 81
drop
)
(else
i32.const 54
call 44
)
)
i32.const 76
i32.const 65
i32.le_s
call 32
i32.const 1
(if 
(then
i32.const 90
drop
)
(else
i32.const 87
call 32
)
)
i32.const 22
)
(func $11 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 26
i32.const 0
(if (result i32 i32 )
(then
i32.const 85
i32.const 0
(if 
(then
i32.const 34
call 33
drop
)
(else
i32.const 85
i32.const 52
i32.or
i32.const 99
call 6
call 30
)
)
drop
i32.const 17
i32.const 1
(if (result i32 i32 )
(then
i32.const 29
i32.const 0
(if (result i32 )
(then
i32.const 42
call 7
)
(else
i32.const 1
(if 
(then
i32.const 24
call 17
drop
)
(else
i32.const 8
call 17
drop
)
)
i32.const 95
)
)
)
(else
i32.const 54
i32.const 1
(if 
(then
i32.const 22
drop
)
(else
i32.const 15
call 38
i32.const 6
call_indirect (type 4)
)
)
i32.const 1
(if 
(then
i32.const 31
call 44
)
(else
i32.const 37
call 40
drop
)
)
i32.const 1
(if 
(then
i32.const 63
drop
)
(else
i32.const 48
i32.const 98
call 18
)
)
drop
i32.const 52
i32.const 20
call_indirect (type 3)
call 30
i32.const 17
i32.const 1
(if (result i32 i32 )
(then
i32.const 97
i32.const 0
(if 
(then
i32.const 14
call 30
)
(else
i32.const 54
drop
)
)
i32.const 0
(if (result i32 i32 )
(then
i32.const 71
i32.const 40
)
(else
i32.const 2
i32.const 33
call_indirect (type 3)
i32.const 91
i32.rem_u
drop
i32.const 18
i32.const 26
i32.rem_u
call 30
i32.const 35
drop
i32.const 71
i32.const 27
call_indirect (type 3)
call 38
drop
i32.const 95
i32.const 32
call_indirect (type 4)
i32.const 41
drop
i32.const 79
i32.const 30
call_indirect (type 4)
i32.const 98
call 6
i32.const 63
i32.const 74
)
)
i32.const 49
call_indirect (type 0)
i32.const 1
(if 
(then
i32.const 91
drop
)
(else
i32.const 34
i32.const 6
call_indirect (type 4)
)
)
i32.const 0
(if 
(then
i32.const 61
i32.const 6
call_indirect (type 4)
)
(else
i32.const 89
call 7
i32.const 32
call_indirect (type 4)
)
)
drop
i32.const 92
call 47
i32.const 45
)
(else
i32.const 73
call 47
i32.const 1
(if (result i32 )
(then
i32.const 73
call 43
call 38
drop
i32.const 35
i32.const 70
i32.const 41
call 36
drop
i32.const 42
i32.const 17
call_indirect (type 3)
)
(else
i32.const 97
i32.const 43
call_indirect (type 3)
)
)
)
)
i32.ge_s
)
)
i32.eq
)
(else
i32.const 47
i32.const 91
)
)
i32.gt_u
call 46
i32.const 90
i32.const 74
call 38
i32.const 46
call_indirect (type 0)
i32.const 98
i32.const 0
(if (result i32 i32 )
(then
i32.const 89
i32.const 5
)
(else
i32.const 28
i32.const 0
(if 
(then
i32.const 57
i32.const 36
i32.ne
call 20
i32.const 19
i32.const 18
call_indirect (type 0)
)
(else
i32.const 89
call 20
call 27
i32.const 17
call_indirect (type 3)
call 38
call 32
)
)
i32.const 1
(if 
(then
i32.const 80
drop
)
(else
i32.const 62
i32.const 49
i32.lt_s
call 32
)
)
i32.const 0
(if 
(then
i32.const 34
call 33
call 40
call 38
call 33
i32.const 7
call_indirect (type 3)
i32.const 14
call_indirect (type 3)
drop
)
(else
i32.const 92
drop
)
)
drop
i32.const 82
i32.const 1
(if 
(then
i32.const 87
i32.const 33
call_indirect (type 3)
i32.const 44
i32.le_s
call 40
call 27
call 33
i32.const 47
call_indirect (type 3)
i32.const 93
i32.lt_u
drop
)
(else
i32.const 71
i32.const 7
i32.lt_u
drop
)
)
i32.const 45
)
)
i32.eq
)
(func $12 (type 0) (param i32 i32) 
i32.const 85
call 44
i32.const 21
call 27
i32.const 95
i32.eq
i32.const 20
call_indirect (type 3)
drop
i32.const 83
drop
)
(func $13 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 32
call 27
i32.const 46
i32.gt_u
drop
i32.const 14
call 47
i32.const 24
i32.add
i32.const 75
call 31
i32.const 80
)
(func $14 (type 3) (param i32) (result i32)
i32.const 16
i32.const 90
i32.mul
drop
i32.const 48
drop
i32.const 49
drop
i32.const 85
i32.const 33
call_indirect (type 3)
)
(func $15 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 58
i32.const 1
(if (result i32 )
(then
i32.const 38
i32.const 32
call_indirect (type 4)
i32.const 1
(if 
(then
i32.const 51
i32.const 43
call 48
)
(else
i32.const 38
i32.const 92
i32.const 36
call_indirect (type 0)
)
)
i32.const 0
(if (result i32 )
(then
i32.const 1
(if (result i32 i32 )
(then
i32.const 23
i32.const 0
(if (result i32 i32 )
(then
i32.const 97
i32.const 70
)
(else
i32.const 80
drop
i32.const 75
drop
i32.const 56
i32.const 55
call 43
i32.or
drop
i32.const 36
i32.const 29
i32.sub
i32.const 27
i32.const 12
call_indirect (type 0)
i32.const 40
call 30
i32.const 41
call 14
drop
i32.const 12
i32.const 47
call_indirect (type 3)
call 38
call 14
i32.const 27
)
)
i32.lt_s
)
(else
i32.const 31
i32.const 0
(if 
(then
i32.const 29
i32.const 47
call 32
i32.const 97
i32.and
drop
)
(else
i32.const 89
call 43
call 30
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 97
i32.const 32
call_indirect (type 4)
i32.const 97
i32.const 47
i32.or
i32.const 87
call 46
i32.const 70
call 32
i32.const 30
i32.const 80
i32.rem_u
drop
i32.const 67
i32.const 20
call_indirect (type 3)
i32.const 30
call_indirect (type 4)
i32.const 10
i32.const 61
i32.const 8
call_indirect (type 0)
i32.const 49
call 30
i32.const 80
i32.const 47
call 38
call 21
i32.const 78
call 43
drop
i32.const 17
i32.const 7
call_indirect (type 3)
i32.const 17
call_indirect (type 3)
i32.const 32
call_indirect (type 4)
i32.const 45
call 20
i32.const 33
call_indirect (type 3)
call 40
i32.const 97
i32.le_s
drop
i32.const 79
i32.const 14
)
(else
i32.const 45
drop
i32.const 41
drop
i32.const 95
drop
i32.const 53
call 38
i32.const 47
call_indirect (type 3)
call 14
drop
i32.const 89
call 44
i32.const 49
call 38
i32.const 5
call 38
i32.lt_s
call 20
i32.const 27
call_indirect (type 3)
call 17
i32.const 40
call_indirect (type 3)
drop
i32.const 89
i32.const 27
call_indirect (type 3)
i32.const 20
call_indirect (type 3)
call 20
i32.const 84
)
)
i32.div_s
)
)
i32.const 20
call_indirect (type 3)
i32.and
)
(else
i32.const 83
i32.const 7
i32.const 39
call_indirect (type 0)
i32.const 0
(if (result i32 i32 )
(then
i32.const 26
i32.const 0
(if 
(then
i32.const 50
call 43
i32.const 7
call_indirect (type 3)
drop
)
(else
i32.const 66
drop
)
)
i32.const 44
call_indirect (type 4)
i32.const 93
i32.const 1
(if (result i32 )
(then
i32.const 50
i32.const 42
i32.sub
call 44
i32.const 10
drop
i32.const 17
drop
i32.const 41
call 33
i32.const 54
call 38
i32.const 47
call_indirect (type 3)
i32.gt_u
)
(else
i32.const 91
i32.const 44
call_indirect (type 4)
i32.const 19
)
)
)
(else
i32.const 94
call 14
drop
i32.const 9
drop
i32.const 30
i32.const 65
)
)
drop
)
)
)
(else
i32.const 14
call 44
i32.const 2
)
)
i32.const 5
call_indirect (type 0)
i32.const 7
drop
i32.const 78
call 6
i32.const 16
drop
i32.const 30
i32.const 51
)
(func $16 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 77
call 32
i32.const 17
i32.const 9
i32.gt_u
i32.const 99
i32.xor
i32.const 43
call_indirect (type 3)
drop
i32.const 64
)
(func $17 (type 3) (param i32) (result i32)
i32.const 9
i32.const 78
i32.div_s
i32.const 95
i32.div_s
i32.const 66
i32.add
i32.const 83
call 24
i32.const 50
)
(func $18 (type 0) (param i32 i32) 
i32.const 55
i32.const 52
i32.and
drop
i32.const 52
i32.const 79
call 46
i32.const 68
call 17
i32.const 44
call_indirect (type 4)
)
(func $19 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 56
i32.const 1
(if 
(then
i32.const 1
drop
)
(else
i32.const 99
drop
)
)
i32.const 1
(if 
(then
i32.const 38
i32.const 27
call_indirect (type 3)
i32.const 87
call 5
)
(else
i32.const 84
call 27
drop
)
)
i32.const 0
(if (result i32 i32 )
(then
i32.const 73
i32.const 1
(if (result i32 i32 )
(then
i32.const 43
i32.const 1
(if (result i32 )
(then
i32.const 3
i32.const 47
i32.ne
)
(else
i32.const 1
(if (result i32 )
(then
i32.const 42
call 6
i32.const 52
call 14
call 32
i32.const 30
call 6
i32.const 29
i32.const 55
i32.lt_s
call 47
i32.const 90
i32.const 8
call_indirect (type 0)
i32.const 73
)
(else
i32.const 55
call 32
i32.const 4
)
)
i32.const 49
call 36
i32.const 0
(if (result i32 i32 )
(then
i32.const 70
call 43
call 17
i32.const 47
call_indirect (type 3)
i32.const 17
call_indirect (type 3)
call 6
i32.const 94
call 43
drop
i32.const 77
i32.const 17
call_indirect (type 3)
i32.const 75
call 6
i32.const 27
call_indirect (type 3)
call 14
i32.const 63
)
(else
i32.const 4
i32.const 33
)
)
i32.lt_s
)
)
)
(else
i32.const 24
i32.const 76
)
)
i32.or
)
(else
i32.const 21
i32.const 0
(if 
(then
i32.const 60
i32.const 47
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
)
(else
i32.const 5
call 17
call 47
call 43
i32.const 27
i32.const 21
call_indirect (type 0)
)
)
drop
i32.const 18
i32.const 1
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 27
i32.const 1
i32.eq
i32.const 40
call_indirect (type 3)
call 33
call 17
i32.const 7
call_indirect (type 3)
drop
)
(else
i32.const 27
i32.const 72
i32.xor
drop
)
)
i32.const 0
(if (result i32 i32 )
(then
i32.const 11
i32.const 0
(if 
(then
i32.const 49
i32.const 27
call_indirect (type 3)
i32.const 84
i32.const 27
call_indirect (type 3)
call 12
)
(else
i32.const 61
drop
)
)
i32.const 33
call_indirect (type 3)
drop
i32.const 56
i32.const 0
(if 
(then
i32.const 27
i32.const 58
call 49
)
(else
i32.const 76
call 32
)
)
i32.const 16
)
(else
i32.const 27
i32.const 0
(if (result i32 i32 )
(then
i32.const 95
i32.const 17
call_indirect (type 3)
i32.const 73
)
(else
i32.const 74
drop
i32.const 32
drop
i32.const 39
i32.const 89
)
)
i32.gt_u
)
)
call 46
i32.const 0
(if (result i32 i32 )
(then
i32.const 79
drop
i32.const 45
i32.const 14
call_indirect (type 3)
i32.const 0
(if (result i32 )
(then
i32.const 0
drop
i32.const 43
call 14
i32.const 85
i32.const 39
call_indirect (type 0)
i32.const 97
drop
i32.const 75
drop
i32.const 37
call 47
i32.const 52
drop
)
(else
i32.const 55
i32.const 32
call_indirect (type 4)
i32.const 94
i32.const 32
call 47
i32.div_u
call 38
i32.const 17
call_indirect (type 3)
call 6
i32.const 53
i32.const 38
call_indirect (type 3)
i32.const 44
call_indirect (type 4)
i32.const 100
call 38
i32.const 7
call_indirect (type 3)
drop
i32.const 29
drop
i32.const 67
i32.const 14
call_indirect (type 3)
i32.const 89
i32.ge_s
)
)
)
(else
i32.const 58
i32.const 1
(if (result i32 )
(then
i32.const 43
call 40
)
(else
i32.const 90
drop
i32.const 59
call 33
drop
i32.const 24
drop
i32.const 7
drop
i32.const 98
call 32
i32.const 71
drop
i32.const 50
i32.const 30
i32.div_u
)
)
)
)
i32.div_u
)
(else
i32.const 25
call 27
)
)
)
)
i32.rem_u
i32.add
call 20
i32.const 47
call_indirect (type 3)
i32.const 38
i32.gt_u
call 17
i32.const 0
(if (result i32 i32 )
(then
i32.const 26
drop
i32.const 64
i32.const 0
(if 
(then
i32.const 29
i32.const 33
call_indirect (type 3)
call 44
)
(else
i32.const 60
i32.const 71
i32.const 23
i32.div_s
i32.const 8
call_indirect (type 0)
)
)
drop
i32.const 19
drop
i32.const 57
i32.const 99
)
(else
i32.const 41
i32.const 0
(if (result i32 )
(then
i32.const 84
i32.const 96
i32.xor
)
(else
i32.const 89
i32.const 0
i32.const 39
call_indirect (type 0)
i32.const 95
)
)
)
)
i32.const 48
call_indirect (type 0)
i32.const 30
call_indirect (type 4)
i32.const 98
i32.const 1
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 84
i32.const 16
call 14
call 43
i32.const 7
call_indirect (type 3)
i32.const 34
i32.add
i32.const 39
call_indirect (type 0)
)
(else
i32.const 48
i32.const 6
call_indirect (type 4)
)
)
i32.const 72
)
(else
i32.const 74
i32.const 27
i32.gt_s
)
)
)
(func $20 (type 3) (param i32) (result i32)
i32.const 1
(if (result i32 i32 )
(then
i32.const 79
i32.const 27
call_indirect (type 3)
i32.const 0
(if (result i32 )
(then
i32.const 77
call 43
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 1
(if (result i32 )
(then
i32.const 92
call 14
)
(else
i32.const 81
i32.const 65
i32.and
i32.const 36
call 5
i32.const 46
call 32
i32.const 98
drop
i32.const 55
call 7
i32.const 54
i32.const 47
call_indirect (type 3)
i32.const 24
call_indirect (type 0)
i32.const 82
)
)
i32.const 33
call_indirect (type 3)
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 90
i32.const 73
i32.ge_u
)
(else
i32.const 52
call 20
drop
i32.const 96
drop
i32.const 92
call 30
i32.const 16
call 14
drop
i32.const 14
i32.const 30
call_indirect (type 4)
i32.const 4
i32.const 93
call 31
i32.const 50
i32.const 40
call 36
i32.const 62
drop
i32.const 28
i32.const 84
call 44
)
)
i32.const 32
call 24
i32.const 0
)
)
call 47
)
)
)
(else
i32.const 14
i32.const 1
(if (result i32 )
(then
i32.const 32
i32.const 13
call 33
i32.const 80
call 18
)
(else
i32.const 77
call 30
i32.const 83
)
)
)
)
i32.le_s
i32.const 40
call_indirect (type 3)
call 6
i32.const 1
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 35
i32.const 17
call_indirect (type 3)
i32.const 43
call_indirect (type 3)
i32.const 28
i32.gt_u
drop
)
(else
i32.const 3
call 32
)
)
i32.const 76
)
(else
i32.const 89
i32.const 30
call_indirect (type 4)
i32.const 0
(if (result i32 )
(then
i32.const 20
call 20
)
(else
i32.const 0
(if 
(then
i32.const 97
drop
)
(else
i32.const 51
i32.const 49
i32.mul
drop
)
)
i32.const 52
)
)
)
)
i32.const 25
i32.const 21
call_indirect (type 0)
i32.const 70
i32.const 17
i32.rem_u
)
(func $21 (type 0) (param i32 i32) 
i32.const 79
call 14
i32.const 20
call_indirect (type 3)
call 47
i32.const 53
call 21
i32.const 64
call 27
drop
i32.const 10
i32.const 22
call 14
i32.xor
i32.const 13
call 7
call 39
)
(func $22 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 64
i32.const 1
(if (result i32 i32 )
(then
i32.const 31
i32.const 1
(if 
(then
i32.const 87
i32.const 66
i32.le_s
i32.const 81
call 40
call 30
i32.const 44
call_indirect (type 4)
)
(else
i32.const 50
call 20
call 14
call 38
call 44
)
)
i32.const 41
)
(else
i32.const 17
i32.const 57
)
)
i32.const 18
call_indirect (type 0)
call 32
i32.const 33
call 20
drop
i32.const 37
i32.const 1
(if 
(then
i32.const 27
i32.const 46
i32.const 33
call_indirect (type 3)
i32.const 49
call_indirect (type 0)
)
(else
i32.const 43
call 27
drop
)
)
i32.const 7
call_indirect (type 3)
drop
i32.const 9
i32.const 31
)
(func $23 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 80
drop
i32.const 0
(if 
(then
i32.const 41
call 14
i32.const 64
i32.const 21
call_indirect (type 0)
)
(else
i32.const 85
drop
)
)
i32.const 38
drop
i32.const 28
i32.const 50
i32.gt_u
call 33
i32.const 43
call_indirect (type 3)
)
(func $24 (type 0) (param i32 i32) 
i32.const 80
drop
i32.const 77
drop
i32.const 34
call 6
i32.const 4
call 43
drop
i32.const 79
call 30
)
(func $25 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 75
i32.const 0
(if (result i32 )
(then
i32.const 14
drop
i32.const 90
)
(else
i32.const 15
call 47
)
)
i32.gt_s
i32.const 0
(if (result i32 i32 )
(then
i32.const 52
drop
i32.const 79
i32.const 1
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 35
call 30
)
(else
i32.const 17
call 27
drop
)
)
i32.const 0
(if 
(then
i32.const 72
call 7
i32.const 90
i32.gt_s
call 44
)
(else
i32.const 36
call 40
i32.const 27
call_indirect (type 3)
i32.const 47
call_indirect (type 3)
i32.const 40
call_indirect (type 3)
call 17
i32.const 80
i32.rem_u
i32.const 30
call_indirect (type 4)
)
)
i32.const 1
(if 
(then
i32.const 4
i32.const 20
call_indirect (type 3)
i32.const 27
call_indirect (type 3)
i32.const 33
call_indirect (type 3)
drop
)
(else
i32.const 85
call 43
i32.const 38
call_indirect (type 3)
i32.const 14
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
)
)
i32.const 0
(if 
(then
i32.const 97
call 44
)
(else
i32.const 27
call 14
i32.const 17
call_indirect (type 3)
call 33
drop
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 27
i32.const 0
(if 
(then
i32.const 12
i32.const 32
call_indirect (type 4)
)
(else
i32.const 1
drop
)
)
drop
i32.const 69
i32.const 1
(if 
(then
i32.const 50
drop
)
(else
i32.const 19
i32.const 28
call 48
)
)
drop
i32.const 57
i32.const 17
call_indirect (type 3)
call 17
i32.const 1
(if 
(then
i32.const 13
i32.const 20
call_indirect (type 3)
call 38
i32.const 5
call 30
call 14
drop
)
(else
i32.const 82
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 32
call 40
)
(else
i32.const 2
i32.const 47
call_indirect (type 3)
drop
i32.const 75
drop
i32.const 43
i32.const 14
call_indirect (type 3)
drop
i32.const 75
call 30
i32.const 7
i32.const 32
call_indirect (type 4)
i32.const 19
i32.const 70
i32.const 57
i32.lt_s
i32.lt_s
)
)
)
(else
i32.const 14
drop
i32.const 32
call 32
i32.const 81
drop
i32.const 23
i32.const 0
(if (result i32 i32 )
(then
i32.const 3
i32.const 40
call_indirect (type 3)
i32.const 27
call_indirect (type 3)
i32.const 72
i32.le_s
i32.const 27
call_indirect (type 3)
drop
i32.const 52
call 20
call 14
call 47
i32.const 17
)
(else
i32.const 47
i32.const 61
i32.add
i32.const 38
call_indirect (type 3)
i32.const 32
call_indirect (type 4)
i32.const 83
drop
i32.const 47
i32.const 14
call_indirect (type 3)
i32.const 14
call_indirect (type 3)
call 27
drop
i32.const 2
i32.const 48
)
)
i32.rem_u
)
)
i32.lt_u
)
(else
i32.const 80
call 43
)
)
)
(else
i32.const 40
i32.const 6
)
)
i32.rem_u
call 24
i32.const 73
call 14
i32.const 1
(if 
(then
i32.const 71
i32.const 34
i32.gt_u
call 43
drop
)
(else
i32.const 30
i32.const 3
i32.add
i32.const 33
call_indirect (type 3)
i32.const 7
call_indirect (type 3)
call 44
)
)
i32.const 33
call_indirect (type 3)
i32.const 1
(if (result i32 i32 )
(then
i32.const 17
call 47
i32.const 0
(if (result i32 i32 )
(then
i32.const 43
i32.const 0
(if 
(then
i32.const 74
drop
)
(else
i32.const 63
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 0
(if (result i32 )
(then
i32.const 99
i32.const 90
i32.sub
call 14
drop
i32.const 71
i32.const 6
call_indirect (type 4)
i32.const 34
call 43
drop
i32.const 28
call 7
i32.const 56
i32.or
)
(else
i32.const 69
drop
i32.const 0
i32.const 58
call 5
i32.const 5
call 40
drop
i32.const 28
i32.const 59
i32.const 40
call_indirect (type 3)
i32.gt_u
call 33
drop
i32.const 98
call 43
drop
i32.const 77
i32.const 32
call 6
)
)
i32.const 40
call_indirect (type 3)
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 4
i32.const 4
i32.const 12
call_indirect (type 0)
i32.const 51
drop
i32.const 92
i32.const 43
call_indirect (type 3)
i32.const 27
call_indirect (type 3)
i32.const 32
call_indirect (type 4)
i32.const 65
i32.const 46
i32.gt_u
)
(else
i32.const 22
i32.const 40
call_indirect (type 3)
)
)
call 32
i32.const 0
(if (result i32 )
(then
i32.const 62
drop
i32.const 44
)
(else
i32.const 84
i32.const 40
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
i32.const 92
i32.const 24
i32.const 30
call_indirect (type 4)
drop
i32.const 17
call 47
drop
i32.const 88
call 47
call 20
drop
i32.const 30
call 27
i32.const 7
call 43
call 47
call 27
i32.const 43
call_indirect (type 3)
i32.const 21
call_indirect (type 0)
i32.const 20
)
)
)
)
)
(else
i32.const 59
i32.const 0
(if 
(then
i32.const 0
i32.const 7
call_indirect (type 3)
i32.const 58
i32.gt_s
call 27
call 43
drop
)
(else
i32.const 55
call 44
)
)
i32.const 11
)
)
i32.const 38
call_indirect (type 3)
i32.const 42
call_indirect (type 0)
call 43
i32.const 1
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 97
i32.const 26
i32.ge_u
i32.const 40
call_indirect (type 3)
drop
)
(else
i32.const 23
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 20
drop
)
(else
i32.const 86
call 20
i32.const 52
i32.and
drop
)
)
i32.const 17
)
(else
i32.const 52
drop
i32.const 1
(if (result i32 i32 )
(then
i32.const 22
call 20
call 14
call 38
call 7
drop
i32.const 35
drop
i32.const 10
call 43
drop
i32.const 92
i32.const 44
call_indirect (type 4)
i32.const 53
drop
i32.const 22
i32.const 94
)
(else
i32.const 83
i32.const 30
call_indirect (type 4)
i32.const 24
i32.const 2
)
)
i32.const 40
call_indirect (type 3)
call 47
i32.rem_u
)
)
)
(else
i32.const 6
i32.const 44
call_indirect (type 4)
i32.const 0
(if (result i32 i32 )
(then
i32.const 27
i32.const 1
(if (result i32 )
(then
i32.const 92
i32.const 97
i32.ge_u
drop
i32.const 48
call 14
call 30
i32.const 13
call 40
i32.const 14
call_indirect (type 3)
call 20
)
(else
i32.const 93
call 30
i32.const 12
)
)
)
(else
i32.const 92
drop
i32.const 98
i32.const 1
(if 
(then
i32.const 82
call 20
drop
)
(else
i32.const 82
call 33
i32.const 5
i32.ge_s
i32.const 32
call_indirect (type 4)
)
)
i32.const 1
(if 
(then
i32.const 26
i32.const 7
call_indirect (type 3)
i32.const 30
call_indirect (type 4)
)
(else
i32.const 22
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 83
i32.const 20
call_indirect (type 3)
drop
i32.const 28
drop
i32.const 80
i32.const 14
call_indirect (type 3)
call 47
drop
i32.const 51
drop
i32.const 75
i32.const 23
i32.const 42
call_indirect (type 0)
i32.const 2
)
(else
i32.const 61
call 47
)
)
)
)
i32.mul
)
)
)
(else
i32.const 14
call 20
i32.const 0
(if 
(then
i32.const 13
i32.const 91
drop
drop
)
(else
i32.const 55
i32.const 4
call 39
)
)
i32.const 0
(if (result i32 i32 )
(then
i32.const 42
i32.const 0
(if 
(then
i32.const 78
i32.const 36
call 40
call 40
call 48
)
(else
i32.const 35
i32.const 25
i32.sub
i32.const 79
i32.const 6
call_indirect (type 4)
i32.const 20
call_indirect (type 3)
call 14
call 38
i32.const 42
i32.const 6
call_indirect (type 4)
i32.const 14
call_indirect (type 3)
i32.const 73
i32.mul
i32.const 86
i32.rem_u
drop
)
)
i32.const 1
(if 
(then
i32.const 36
call 33
drop
)
(else
i32.const 73
i32.const 48
call 46
)
)
i32.const 0
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 53
drop
)
(else
i32.const 76
call 14
call 27
drop
)
)
i32.const 0
(if (result i32 )
(then
i32.const 85
drop
i32.const 25
i32.const 39
i32.const 47
call_indirect (type 3)
i32.const 21
call_indirect (type 0)
i32.const 84
call 30
i32.const 73
i32.const 17
call_indirect (type 3)
call 30
i32.const 58
i32.const 20
call_indirect (type 3)
i32.const 61
i32.const 46
call_indirect (type 0)
i32.const 11
i32.const 47
i32.lt_s
drop
i32.const 68
i32.const 20
call_indirect (type 3)
drop
i32.const 95
i32.const 38
call_indirect (type 3)
i32.const 43
call_indirect (type 3)
)
(else
i32.const 89
call 7
drop
i32.const 36
i32.const 32
i32.ne
i32.const 93
i32.div_s
i32.const 27
call_indirect (type 3)
i32.const 40
call_indirect (type 3)
call 43
)
)
)
(else
i32.const 28
drop
i32.const 88
)
)
)
(else
i32.const 2
i32.const 1
(if 
(then
i32.const 10
call 33
call 47
i32.const 24
i32.const 32
call_indirect (type 4)
call 27
call 6
)
(else
i32.const 66
drop
)
)
i32.const 62
)
)
i32.lt_u
)
)
i32.const 31
call_indirect (type 0)
drop
i32.const 66
call 43
call 33
i32.const 26
)
(func $26 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 44
i32.const 14
call_indirect (type 3)
i32.const 16
i32.lt_s
i32.const 1
(if (result i32 i32 )
(then
i32.const 23
i32.const 1
(if (result i32 i32 )
(then
i32.const 93
i32.const 1
(if (result i32 )
(then
i32.const 12
i32.const 43
call_indirect (type 3)
)
(else
i32.const 1
(if (result i32 i32 )
(then
i32.const 4
drop
i32.const 17
i32.const 1
call 46
i32.const 84
i32.const 27
call_indirect (type 3)
call 38
drop
i32.const 71
i32.const 47
call_indirect (type 3)
i32.const 44
call_indirect (type 4)
i32.const 43
i32.const 66
)
(else
i32.const 18
call 43
call 47
call 43
drop
i32.const 70
i32.const 32
call_indirect (type 4)
i32.const 43
call 17
i32.const 19
i32.const 6
call_indirect (type 4)
drop
i32.const 81
i32.const 50
)
)
i32.const 32
call_indirect (type 4)
)
)
)
(else
i32.const 44
i32.const 20
)
)
i32.mul
)
(else
i32.const 93
i32.const 23
)
)
i32.const 31
call_indirect (type 0)
i32.const 1
(if 
(then
i32.const 96
i32.const 33
call_indirect (type 3)
i32.const 44
call 39
)
(else
i32.const 71
call 30
)
)
i32.const 100
call 42
i32.const 18
i32.const 1
(if 
(then
i32.const 91
i32.const 89
call 49
)
(else
i32.const 82
i32.const 33
i32.lt_u
call 44
)
)
i32.const 78
)
(func $27 (type 3) (param i32) (result i32)
i32.const 29
call 17
drop
i32.const 68
call 20
call 32
i32.const 52
i32.const 35
call 6
i32.const 10
i32.eq
)
(func $28 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 38
i32.const 1
(if (result i32 )
(then
i32.const 36
drop
i32.const 88
)
(else
i32.const 0
(if 
(then
i32.const 81
call 32
)
(else
i32.const 66
call 17
i32.const 38
call_indirect (type 3)
call 6
)
)
i32.const 88
)
)
i32.le_u
call 32
i32.const 40
i32.const 0
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 54
i32.const 38
call_indirect (type 3)
call 47
i32.const 6
call_indirect (type 4)
)
(else
i32.const 3
call 40
i32.const 43
call_indirect (type 3)
i32.const 44
call 47
call 17
i32.ne
i32.const 79
call 44
call 47
call 30
)
)
i32.const 1
(if (result i32 )
(then
i32.const 56
drop
i32.const 35
)
(else
i32.const 1
(if (result i32 )
(then
i32.const 61
drop
i32.const 0
(if (result i32 )
(then
i32.const 99
i32.const 49
i32.const 21
call_indirect (type 0)
i32.const 95
call 30
i32.const 57
i32.const 43
i32.sub
i32.const 43
call_indirect (type 3)
call 14
call 47
call 32
i32.const 75
drop
i32.const 6
call 27
call 17
i32.const 68
i32.mul
)
(else
i32.const 36
drop
i32.const 50
i32.const 95
i32.le_s
i32.const 5
i32.const 5
call_indirect (type 0)
i32.const 73
call 7
i32.const 30
i32.const 8
call_indirect (type 0)
i32.const 60
call 14
)
)
)
(else
i32.const 92
call 27
)
)
call 44
i32.const 1
(if 
(then
i32.const 93
i32.const 7
call_indirect (type 3)
i32.const 96
call 46
)
(else
i32.const 27
call 27
drop
)
)
i32.const 50
)
)
)
(else
i32.const 71
call 32
i32.const 1
(if (result i32 )
(then
i32.const 9
drop
i32.const 20
)
(else
i32.const 1
(if 
(then
i32.const 66
i32.const 92
call 42
)
(else
i32.const 90
drop
)
)
i32.const 88
)
)
)
)
i32.const 14
call_indirect (type 3)
call 18
i32.const 90
drop
i32.const 42
i32.const 1
(if 
(then
i32.const 83
i32.const 32
call_indirect (type 4)
)
(else
i32.const 1
call 27
drop
)
)
i32.const 85
)
(func $29 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 16
i32.const 1
(if 
(then
i32.const 84
i32.const 24
call 24
)
(else
i32.const 11
drop
)
)
drop
i32.const 9
i32.const 0
(if (result i32 i32 )
(then
i32.const 80
drop
i32.const 19
drop
i32.const 14
i32.const 64
)
(else
i32.const 59
i32.const 0
(if (result i32 i32 )
(then
i32.const 51
drop
i32.const 10
drop
i32.const 5
call 27
i32.const 9
)
(else
i32.const 23
i32.const 0
(if (result i32 )
(then
i32.const 0
(if (result i32 )
(then
i32.const 49
call 44
i32.const 30
)
(else
i32.const 61
i32.const 30
call_indirect (type 4)
i32.const 56
)
)
i32.const 6
call_indirect (type 4)
i32.const 27
)
(else
i32.const 48
drop
i32.const 76
)
)
)
)
i32.rem_u
)
)
call 18
i32.const 0
(if (result i32 i32 )
(then
i32.const 20
i32.const 40
call_indirect (type 3)
i32.const 44
call_indirect (type 4)
i32.const 78
drop
i32.const 60
call 47
i32.const 0
(if 
(then
i32.const 36
call 14
call 27
drop
)
(else
i32.const 40
drop
)
)
i32.const 0
(if (result i32 )
(then
i32.const 1
(if (result i32 i32 )
(then
i32.const 2
i32.const 0
(if (result i32 )
(then
i32.const 95
i32.const 12
call 17
i32.ge_s
)
(else
i32.const 67
drop
i32.const 96
)
)
)
(else
i32.const 95
i32.const 1
(if (result i32 )
(then
i32.const 35
i32.const 72
i32.const 33
call_indirect (type 3)
call 18
i32.const 77
)
(else
i32.const 12
i32.const 30
call_indirect (type 4)
i32.const 81
i32.const 76
call 31
i32.const 62
drop
i32.const 89
i32.const 14
call_indirect (type 3)
drop
i32.const 34
drop
i32.const 32
call 27
call 40
call 40
i32.const 2
call 44
)
)
)
)
i32.ge_s
)
(else
i32.const 1
(if (result i32 i32 )
(then
i32.const 4
i32.const 1
(if 
(then
i32.const 49
i32.const 18
call 17
i32.const 17
call_indirect (type 3)
i32.eq
i32.const 43
call_indirect (type 3)
i32.const 14
call_indirect (type 3)
i32.const 91
i32.ge_u
drop
)
(else
i32.const 6
call 40
drop
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 60
i32.const 94
i32.const 30
call_indirect (type 4)
i32.const 30
call_indirect (type 4)
i32.const 56
drop
i32.const 59
drop
i32.const 86
drop
i32.const 32
i32.const 17
call_indirect (type 3)
drop
i32.const 10
drop
i32.const 3
drop
i32.const 3
i32.const 73
)
(else
i32.const 51
drop
i32.const 70
drop
i32.const 83
i32.const 62
i32.rem_u
i32.const 25
i32.gt_s
i32.const 44
call 30
call 7
i32.const 40
)
)
call 32
)
(else
i32.const 39
i32.const 1
(if (result i32 i32 )
(then
i32.const 91
i32.const 40
call_indirect (type 3)
i32.const 44
call_indirect (type 4)
i32.const 73
drop
i32.const 93
call 44
i32.const 98
call 6
i32.const 7
call 30
i32.const 60
call 14
i32.const 14
call_indirect (type 3)
i32.const 40
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
i32.const 69
i32.const 47
call_indirect (type 3)
i32.const 29
i32.gt_s
drop
i32.const 73
i32.const 1
call 48
i32.const 81
call 7
drop
i32.const 62
i32.const 30
i32.add
i32.const 78
i32.div_u
i32.const 62
i32.eq
call 17
call 32
i32.const 68
drop
i32.const 57
drop
i32.const 0
i32.const 44
call_indirect (type 4)
i32.const 11
call 32
i32.const 92
drop
i32.const 34
i32.const 38
call_indirect (type 3)
drop
i32.const 57
call 17
drop
i32.const 33
call 14
i32.const 98
)
(else
i32.const 34
drop
i32.const 48
drop
i32.const 32
i32.const 35
i32.eq
i32.const 40
call_indirect (type 3)
drop
i32.const 42
i32.const 38
call_indirect (type 3)
i32.const 89
i32.ge_u
i32.const 14
)
)
i32.add
)
)
call 38
i32.lt_u
)
)
)
(else
i32.const 34
i32.const 1
(if (result i32 i32 )
(then
i32.const 8
i32.const 6
call_indirect (type 4)
i32.const 3
i32.const 0
(if 
(then
i32.const 97
drop
)
(else
i32.const 35
i32.const 40
call_indirect (type 3)
call 20
drop
)
)
i32.const 0
(if 
(then
i32.const 53
i32.const 15
i32.gt_u
i32.const 16
i32.and
i32.const 95
i32.const 43
call_indirect (type 3)
i32.const 33
call_indirect (type 3)
i32.xor
i32.const 93
call 5
)
(else
i32.const 62
i32.const 80
i32.xor
drop
)
)
i32.const 0
(if 
(then
i32.const 47
drop
)
(else
i32.const 8
i32.const 17
call_indirect (type 3)
i32.const 11
call 12
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 88
drop
i32.const 63
i32.const 1
(if 
(then
i32.const 62
drop
)
(else
i32.const 74
call 44
)
)
i32.const 0
(if (result i32 i32 )
(then
i32.const 17
call 33
i32.const 30
call_indirect (type 4)
i32.const 46
i32.const 7
i32.const 27
call_indirect (type 3)
i32.rem_u
i32.const 7
call_indirect (type 3)
call 20
i32.const 43
call_indirect (type 3)
i32.const 46
i32.const 30
call_indirect (type 4)
i32.const 36
call 33
call 33
i32.div_u
i32.const 14
call_indirect (type 3)
i32.const 43
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
i32.const 61
call 44
i32.const 36
drop
i32.const 52
call 27
call 44
i32.const 86
i32.const 17
call_indirect (type 3)
i32.const 44
call 24
i32.const 42
call 47
call 14
drop
i32.const 67
call 32
i32.const 26
call 43
i32.const 13
i32.const 40
call_indirect (type 3)
i32.const 42
call_indirect (type 0)
i32.const 23
drop
i32.const 60
i32.const 20
call_indirect (type 3)
i32.const 27
call_indirect (type 3)
call 17
call 40
i32.const 35
i32.xor
call 38
i32.const 30
call_indirect (type 4)
i32.const 62
i32.const 34
i32.add
call 32
i32.const 2
i32.const 62
i32.div_u
i32.const 30
call_indirect (type 4)
i32.const 93
drop
i32.const 57
drop
i32.const 79
i32.const 32
i32.eq
drop
i32.const 70
drop
i32.const 34
i32.const 84
i32.div_s
call 14
call 20
call 47
i32.const 45
call 44
i32.const 33
call_indirect (type 3)
call 47
i32.const 47
call_indirect (type 3)
i32.const 13
)
(else
i32.const 28
i32.const 30
call_indirect (type 4)
i32.const 78
i32.const 47
call_indirect (type 3)
call 17
drop
i32.const 55
drop
i32.const 69
call 20
i32.const 43
call_indirect (type 3)
call 6
i32.const 25
call 43
call 14
i32.const 21
)
)
i32.or
)
(else
i32.const 0
drop
i32.const 36
i32.const 33
)
)
call 14
i32.const 40
call_indirect (type 3)
i32.sub
)
(else
i32.const 30
i32.const 56
)
)
i32.mul
)
)
i32.const 38
call_indirect (type 3)
i32.const 46
call_indirect (type 0)
drop
i32.const 59
call 30
i32.const 54
i32.const 58
)
(func $30 (type 4) (param i32) 
i32.const 61
call 6
i32.const 74
i32.const 20
call_indirect (type 3)
i32.const 10
i32.div_u
drop
i32.const 29
i32.const 57
i32.gt_s
drop
)
(func $31 (type 0) (param i32 i32) 
i32.const 98
drop
i32.const 8
drop
i32.const 39
i32.const 54
i32.mul
drop
i32.const 95
drop
)
(func $32 (type 4) (param i32) 
i32.const 40
call 38
i32.const 77
call 17
call 48
i32.const 35
call 40
call 38
call 20
call 30
)
(func $33 (type 3) (param i32) (result i32)
i32.const 89
drop
i32.const 71
i32.const 40
call_indirect (type 3)
drop
i32.const 0
(if 
(then
i32.const 65
call 44
)
(else
i32.const 59
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 54
i32.const 48
i32.gt_u
i32.const 40
call_indirect (type 3)
i32.const 17
call_indirect (type 3)
drop
)
(else
i32.const 8
i32.const 7
call_indirect (type 3)
i32.const 40
call_indirect (type 3)
call 33
call 27
drop
)
)
i32.const 83
)
(else
i32.const 47
call 7
)
)
call 32
i32.const 11
i32.const 16
i32.ne
)
(func $34 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 90
i32.const 27
call_indirect (type 3)
call 33
i32.const 77
i32.xor
call 33
i32.const 32
i32.div_s
drop
i32.const 11
)
(func $35 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 35
i32.const 0
(if (result i32 )
(then
i32.const 2
drop
i32.const 1
(if 
(then
i32.const 20
call 27
drop
)
(else
i32.const 50
i32.const 80
i32.const 30
call_indirect (type 4)
i32.const 9
i32.or
call 17
drop
)
)
i32.const 11
)
(else
i32.const 0
(if (result i32 i32 )
(then
i32.const 21
i32.const 1
(if 
(then
i32.const 31
call 17
i32.const 10
call 42
)
(else
i32.const 85
call 30
)
)
i32.const 0
(if 
(then
i32.const 32
i32.const 8
drop
call 30
)
(else
i32.const 98
i32.const 17
call_indirect (type 3)
i32.const 20
call_indirect (type 3)
i32.const 27
i32.eq
i32.const 41
drop
i32.const 78
i32.add
i32.const 14
call_indirect (type 3)
i32.const 41
i32.or
call 14
drop
)
)
i32.const 1
(if 
(then
i32.const 32
drop
)
(else
i32.const 92
i32.const 19
call 5
)
)
i32.const 32
call_indirect (type 4)
i32.const 57
call 38
i32.const 1
(if 
(then
i32.const 43
call 32
)
(else
i32.const 21
i32.const 44
call_indirect (type 4)
)
)
i32.const 1
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 35
drop
)
(else
i32.const 55
drop
)
)
i32.const 69
)
(else
i32.const 15
i32.const 47
call 32
)
)
)
(else
i32.const 19
i32.const 0
(if (result i32 )
(then
i32.const 62
call 14
)
(else
i32.const 82
drop
i32.const 0
(if 
(then
i32.const 75
drop
)
(else
i32.const 35
call 6
)
)
i32.const 0
(if 
(then
i32.const 21
i32.const 33
call_indirect (type 3)
drop
)
(else
i32.const 65
i32.const 43
call_indirect (type 3)
drop
)
)
i32.const 0
(if 
(then
i32.const 60
i32.const 84
i32.const 49
call_indirect (type 0)
)
(else
i32.const 22
i32.const 61
call 36
)
)
i32.const 1
(if 
(then
i32.const 27
i32.const 43
call_indirect (type 3)
call 47
drop
)
(else
i32.const 36
i32.const 36
i32.ne
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 88
drop
i32.const 34
i32.const 32
call_indirect (type 4)
i32.const 82
i32.const 44
call_indirect (type 4)
i32.const 89
drop
i32.const 43
call 43
drop
i32.const 38
drop
i32.const 31
i32.const 17
call_indirect (type 3)
call 47
i32.const 20
i32.rem_u
)
(else
i32.const 58
drop
i32.const 65
drop
i32.const 39
call 43
call 7
drop
i32.const 40
i32.const 44
call_indirect (type 4)
i32.const 90
i32.const 30
call_indirect (type 4)
i32.const 98
)
)
)
)
)
)
call 33
call 27
call 20
i32.lt_s
)
)
call 46
i32.const 81
i32.const 1
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 20
i32.const 33
i32.ne
call 32
)
(else
i32.const 42
call 38
i32.const 34
i32.const 32
call_indirect (type 4)
i32.const 27
i32.const 62
i32.div_u
i32.div_u
call 17
i32.const 35
i32.rem_u
drop
)
)
i32.const 1
(if 
(then
i32.const 24
i32.const 40
call_indirect (type 3)
i32.const 2
i32.const 43
call_indirect (type 3)
i32.xor
call 30
)
(else
i32.const 26
call 33
i32.const 7
call 17
i32.le_u
call 38
i32.const 6
call_indirect (type 4)
)
)
i32.const 38
)
(else
i32.const 0
(if (result i32 i32 )
(then
i32.const 47
i32.const 0
(if 
(then
i32.const 90
i32.const 20
call_indirect (type 3)
i32.const 47
call_indirect (type 3)
call 6
)
(else
i32.const 62
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 0
(if (result i32 i32 )
(then
i32.const 3
drop
i32.const 0
i32.const 1
i32.rem_u
call 14
call 6
i32.const 73
i32.const 57
call 5
i32.const 50
i32.const 11
)
(else
i32.const 15
i32.const 27
call_indirect (type 3)
call 40
i32.const 82
i32.mul
i32.const 40
call_indirect (type 3)
call 14
call 30
i32.const 90
i32.const 50
i32.div_s
drop
i32.const 63
i32.const 48
)
)
call 14
call 33
i32.const 36
call_indirect (type 0)
i32.const 16
)
(else
i32.const 1
drop
i32.const 0
(if 
(then
i32.const 60
i32.const 6
call_indirect (type 4)
)
(else
i32.const 91
call 44
)
)
i32.const 1
(if 
(then
i32.const 60
i32.const 30
call_indirect (type 4)
)
(else
i32.const 31
call 32
)
)
i32.const 1
(if (result i32 )
(then
i32.const 36
call 20
)
(else
i32.const 31
i32.const 45
call 21
i32.const 98
i32.const 44
call_indirect (type 4)
i32.const 85
i32.const 56
i32.sub
i32.const 16
call 38
i32.xor
)
)
)
)
)
(else
i32.const 12
i32.const 0
(if (result i32 )
(then
i32.const 12
call 38
)
(else
i32.const 6
call 44
i32.const 1
(if 
(then
i32.const 23
drop
)
(else
i32.const 63
i32.const 7
call_indirect (type 3)
i32.const 47
call 24
)
)
i32.const 1
(if 
(then
i32.const 6
i32.const 6
call_indirect (type 4)
)
(else
i32.const 74
drop
)
)
i32.const 1
(if 
(then
i32.const 33
call 40
call 47
i32.const 70
i32.const 12
call_indirect (type 0)
)
(else
i32.const 60
drop
)
)
i32.const 0
(if 
(then
i32.const 26
call 27
call 40
drop
)
(else
i32.const 27
call 30
)
)
i32.const 0
(if (result i32 i32 )
(then
i32.const 34
drop
i32.const 35
i32.const 30
call_indirect (type 4)
i32.const 8
i32.const 33
call_indirect (type 3)
call 30
i32.const 29
drop
i32.const 36
drop
i32.const 44
i32.const 82
i32.rem_u
call 44
i32.const 3
drop
i32.const 78
call 43
i32.const 6
call_indirect (type 4)
i32.const 15
i32.const 25
i32.const 46
call_indirect (type 0)
i32.const 57
i32.const 54
i32.rem_u
drop
i32.const 43
i32.const 44
i32.lt_u
drop
i32.const 28
i32.const 20
call_indirect (type 3)
drop
i32.const 64
i32.const 43
call_indirect (type 3)
i32.const 20
call_indirect (type 3)
i32.const 62
)
(else
i32.const 85
drop
i32.const 39
drop
i32.const 10
i32.const 27
call_indirect (type 3)
i32.const 27
call_indirect (type 3)
i32.const 12
i32.const 14
call_indirect (type 3)
call 43
i32.sub
i32.const 33
call_indirect (type 3)
i32.const 51
)
)
i32.const 36
call_indirect (type 0)
i32.const 1
(if (result i32 )
(then
i32.const 96
drop
i32.const 13
i32.const 27
call_indirect (type 3)
i32.const 52
i32.ge_u
drop
i32.const 42
call 32
i32.const 100
call 33
drop
i32.const 54
call 27
call 44
i32.const 12
call 44
i32.const 65
i32.const 53
i32.le_u
)
(else
i32.const 50
drop
i32.const 1
)
)
)
)
)
)
call 17
i32.div_s
)
)
i32.le_u
i32.const 1
(if (result i32 )
(then
i32.const 54
drop
i32.const 0
(if 
(then
i32.const 69
drop
)
(else
i32.const 53
i32.const 30
i32.ge_u
i32.const 95
drop
drop
)
)
i32.const 60
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 83
call 40
)
(else
i32.const 90
call 47
)
)
i32.const 74
i32.const 48
call_indirect (type 0)
i32.const 86
)
)
i32.const 39
call_indirect (type 0)
i32.const 38
i32.const 1
(if (result i32 )
(then
i32.const 15
i32.const 7
call_indirect (type 3)
)
(else
i32.const 6
drop
i32.const 39
)
)
)
(func $36 (type 0) (param i32 i32) 
i32.const 9
call 7
i32.const 43
call_indirect (type 3)
drop
i32.const 18
drop
i32.const 37
i32.const 67
i32.div_u
i32.const 57
i32.div_u
drop
)
(func $37 (type 2) (param i32 i32 i32 i32) (result i32)
i32.const 1
(if 
(then
i32.const 78
i32.const 6
call_indirect (type 4)
)
(else
i32.const 46
i32.const 33
call_indirect (type 3)
drop
)
)
i32.const 33
i32.const 96
call 48
i32.const 0
(if (result i32 i32 )
(then
i32.const 64
i32.const 74
)
(else
i32.const 62
drop
i32.const 54
drop
i32.const 79
drop
i32.const 16
drop
i32.const 11
i32.const 36
)
)
i32.gt_s
i32.const 43
call_indirect (type 3)
drop
i32.const 4
i32.const 97
i32.div_u
)
(func $38 (type 3) (param i32) (result i32)
i32.const 1
(if 
(then
i32.const 44
call 43
i32.const 32
call_indirect (type 4)
)
(else
i32.const 84
drop
)
)
i32.const 56
call 44
i32.const 0
(if (result i32 i32 )
(then
i32.const 38
drop
i32.const 19
i32.const 89
)
(else
i32.const 74
i32.const 0
(if 
(then
i32.const 68
i32.const 7
call_indirect (type 3)
i32.const 20
call_indirect (type 3)
i32.const 52
i32.const 46
call_indirect (type 0)
)
(else
i32.const 2
i32.const 33
call_indirect (type 3)
i32.const 26
i32.xor
i32.const 38
call_indirect (type 3)
i32.const 14
call_indirect (type 3)
i32.const 65
i32.gt_s
i32.const 27
call_indirect (type 3)
call 30
)
)
i32.const 53
)
)
i32.xor
call 20
i32.const 98
i32.ge_u
i32.const 38
call 17
i32.const 8
call_indirect (type 0)
i32.const 14
)
(func $39 (type 0) (param i32 i32) 
i32.const 15
drop
i32.const 54
i32.const 80
i32.const 24
call_indirect (type 0)
i32.const 9
call 32
i32.const 66
call 47
call 47
i32.const 14
call_indirect (type 3)
i32.const 14
i32.or
i32.const 14
call_indirect (type 3)
i32.const 59
call 33
i32.const 43
call_indirect (type 3)
call 43
call 8
)
(func $40 (type 3) (param i32) (result i32)
i32.const 0
(if 
(then
i32.const 13
i32.const 63
i32.const 24
call_indirect (type 0)
)
(else
i32.const 96
call 33
i32.const 88
call 32
i32.const 12
drop
i32.const 30
call_indirect (type 4)
)
)
i32.const 71
i32.const 6
call_indirect (type 4)
i32.const 47
i32.const 13
i32.ge_u
drop
i32.const 0
(if (result i32 i32 )
(then
i32.const 83
i32.const 1
(if (result i32 i32 )
(then
i32.const 73
i32.const 0
(if 
(then
i32.const 9
drop
)
(else
i32.const 14
i32.const 7
call_indirect (type 3)
i32.const 17
call_indirect (type 3)
call 32
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 3
i32.const 30
call_indirect (type 4)
i32.const 71
i32.const 1
(if 
(then
i32.const 100
drop
)
(else
i32.const 16
i32.const 15
i32.const 51
i32.const 30
call_indirect (type 4)
i32.gt_s
i32.const 17
call_indirect (type 3)
call 47
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 64
drop
i32.const 90
i32.const 12
call 40
i32.const 30
call_indirect (type 4)
i32.const 27
call_indirect (type 3)
call 43
call 6
i32.const 31
call 6
i32.const 52
drop
i32.const 95
drop
i32.const 30
i32.const 43
call_indirect (type 3)
i32.const 49
i32.sub
)
(else
i32.const 66
drop
i32.const 59
)
)
)
(else
i32.const 48
call 40
i32.const 0
(if 
(then
i32.const 86
i32.const 17
call_indirect (type 3)
call 44
)
(else
i32.const 8
drop
)
)
i32.const 15
)
)
call 6
)
(else
i32.const 44
i32.const 1
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 28
call 44
)
(else
i32.const 56
drop
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 42
i32.const 32
call_indirect (type 4)
i32.const 0
i32.const 97
)
(else
i32.const 78
call 17
call 32
i32.const 68
drop
i32.const 3
i32.const 16
call 47
drop
drop
i32.const 68
i32.const 7
call_indirect (type 3)
i32.const 14
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
i32.const 19
i32.const 44
call_indirect (type 4)
i32.const 52
i32.const 70
)
)
i32.le_u
)
(else
i32.const 1
(if 
(then
i32.const 44
i32.const 32
call_indirect (type 4)
)
(else
i32.const 90
drop
)
)
i32.const 81
)
)
)
)
call 36
i32.const 0
(if (result i32 i32 )
(then
i32.const 55
drop
i32.const 79
call 6
i32.const 15
call 30
i32.const 3
i32.const 1
(if (result i32 i32 )
(then
i32.const 66
i32.const 0
(if (result i32 i32 )
(then
i32.const 21
call 33
call 6
i32.const 71
drop
i32.const 31
drop
i32.const 28
i32.const 20
call_indirect (type 3)
i32.const 21
i32.div_s
call 38
drop
i32.const 48
i32.const 30
call_indirect (type 4)
i32.const 32
drop
i32.const 99
i32.const 27
call_indirect (type 3)
i32.const 6
call_indirect (type 4)
i32.const 49
i32.const 13
)
(else
i32.const 9
i32.const 35
call 5
i32.const 57
i32.const 38
call_indirect (type 3)
i32.const 7
call_indirect (type 3)
i32.const 2
i32.and
i32.const 42
i32.const 5
call_indirect (type 0)
i32.const 41
i32.const 36
)
)
i32.lt_u
)
(else
i32.const 81
i32.const 0
(if 
(then
i32.const 26
i32.const 17
call_indirect (type 3)
i32.const 14
call 47
call 46
)
(else
i32.const 45
drop
)
)
i32.const 48
)
)
call 40
i32.const 39
call_indirect (type 0)
i32.const 0
(if (result i32 i32 )
(then
i32.const 73
i32.const 82
)
(else
i32.const 22
i32.const 1
(if 
(then
i32.const 94
call 38
drop
)
(else
i32.const 30
call 33
drop
)
)
drop
i32.const 52
call 30
i32.const 55
i32.const 0
(if 
(then
i32.const 60
call 30
)
(else
i32.const 38
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 66
i32.const 94
i32.const 32
call_indirect (type 4)
)
(else
i32.const 38
i32.const 33
call_indirect (type 3)
i32.const 2
call 39
i32.const 55
i32.const 47
call_indirect (type 3)
call 14
drop
i32.const 35
call 43
i32.const 17
call_indirect (type 3)
i32.const 44
i32.gt_s
)
)
)
)
call 46
i32.const 27
call_indirect (type 3)
drop
i32.const 35
i32.const 2
)
(else
i32.const 64
i32.const 1
(if 
(then
i32.const 76
i32.const 79
call 30
i32.const 48
call 32
drop
)
(else
i32.const 12
call 20
i32.const 27
i32.gt_u
call 47
drop
)
)
i32.const 1
(if 
(then
i32.const 68
call 43
i32.const 44
call_indirect (type 4)
)
(else
i32.const 78
drop
)
)
drop
i32.const 26
i32.const 74
)
)
i32.eq
)
(else
i32.const 61
i32.const 27
call_indirect (type 3)
i32.const 1
(if (result i32 )
(then
i32.const 1
(if 
(then
i32.const 70
i32.const 20
call_indirect (type 3)
call 7
drop
)
(else
i32.const 4
i32.const 95
i32.gt_s
call 33
drop
)
)
i32.const 52
)
(else
i32.const 0
(if 
(then
i32.const 4
i32.const 30
call_indirect (type 4)
)
(else
i32.const 37
call 30
)
)
i32.const 67
)
)
)
)
call 48
i32.const 91
)
(func $41 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 21
drop
i32.const 95
i32.const 0
(if 
(then
i32.const 94
drop
)
(else
i32.const 29
drop
)
)
i32.const 0
(if 
(then
i32.const 3
drop
)
(else
i32.const 51
call 7
call 40
call 40
i32.const 77
i32.const 33
call_indirect (type 3)
i32.ge_s
i32.const 40
call_indirect (type 3)
i32.const 81
call 20
call 36
)
)
drop
i32.const 42
i32.const 1
(if 
(then
i32.const 88
drop
)
(else
i32.const 25
call 38
drop
)
)
drop
i32.const 58
i32.const 40
)
(func $42 (type 0) (param i32 i32) 
i32.const 4
i32.const 95
i32.div_u
call 38
i32.const 27
call_indirect (type 3)
i32.const 17
call_indirect (type 3)
call 44
i32.const 5
drop
i32.const 36
i32.const 69
i32.gt_s
drop
)
(func $43 (type 3) (param i32) (result i32)
i32.const 1
(if (result i32 i32 )
(then
i32.const 88
i32.const 94
)
(else
i32.const 79
i32.const 0
(if 
(then
i32.const 72
call 43
drop
)
(else
i32.const 47
i32.const 94
call 47
i32.le_u
drop
)
)
drop
i32.const 61
i32.const 27
call_indirect (type 3)
drop
i32.const 3
i32.const 0
(if (result i32 i32 )
(then
i32.const 36
i32.const 33
call_indirect (type 3)
i32.const 1
(if 
(then
i32.const 73
call 7
i32.const 17
call_indirect (type 3)
i32.const 89
i32.const 42
call_indirect (type 0)
)
(else
i32.const 97
call 7
i32.const 59
call 49
)
)
i32.const 27
call_indirect (type 3)
i32.const 0
(if (result i32 i32 )
(then
i32.const 100
call 30
i32.const 3
i32.const 1
(if (result i32 )
(then
i32.const 37
i32.const 13
call 24
i32.const 55
i32.const 27
call_indirect (type 3)
i32.const 54
call 40
call 40
call 38
call 36
i32.const 40
call 20
)
(else
i32.const 3
call 30
i32.const 4
)
)
)
(else
i32.const 87
i32.const 0
(if 
(then
i32.const 36
i32.const 51
i32.and
call 43
call 43
call 40
i32.const 14
call_indirect (type 3)
i32.const 38
i32.ge_u
i32.const 51
i32.div_u
i32.const 44
call 49
)
(else
i32.const 22
i32.const 21
i32.const 14
call_indirect (type 3)
i32.div_s
call 14
i32.const 32
call_indirect (type 4)
)
)
drop
i32.const 26
drop
i32.const 34
i32.const 0
(if 
(then
i32.const 84
call 47
drop
)
(else
i32.const 1
i32.const 17
call_indirect (type 3)
call 47
call 7
drop
)
)
call 43
i32.const 14
call_indirect (type 3)
i32.const 1
(if 
(then
i32.const 24
call 33
drop
)
(else
i32.const 57
drop
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 77
i32.const 95
)
(else
i32.const 5
i32.const 39
i32.const 46
call_indirect (type 0)
i32.const 18
drop
i32.const 98
drop
i32.const 49
call 32
i32.const 72
drop
i32.const 69
call 20
i32.const 17
)
)
call 17
call 21
i32.const 0
(if 
(then
i32.const 50
call 43
call 7
i32.const 14
call_indirect (type 3)
call 44
)
(else
i32.const 78
i32.const 40
call_indirect (type 3)
i32.const 71
call 21
)
)
i32.const 1
(if (result i32 i32 )
(then
i32.const 26
call 43
i32.const 36
)
(else
i32.const 48
i32.const 55
)
)
i32.rem_u
)
)
drop
)
(else
i32.const 69
i32.const 1
(if 
(then
i32.const 44
call 30
)
(else
i32.const 44
call 30
)
)
drop
i32.const 86
i32.const 1
(if (result i32 i32 )
(then
i32.const 29
call 33
i32.const 0
(if (result i32 i32 )
(then
i32.const 24
i32.const 6
call_indirect (type 4)
i32.const 23
drop
i32.const 28
drop
i32.const 74
drop
i32.const 37
call 43
call 30
i32.const 55
i32.const 89
call 33
call 24
i32.const 51
i32.const 41
)
(else
i32.const 84
i32.const 17
call_indirect (type 3)
i32.const 15
i32.const 8
call_indirect (type 0)
i32.const 20
i32.const 40
call_indirect (type 3)
call 14
i32.const 22
i32.const 27
call_indirect (type 3)
call 40
i32.or
i32.const 75
i32.ge_s
i32.const 21
i32.div_s
i32.const 79
i32.eq
i32.const 50
i32.const 43
call_indirect (type 3)
i32.gt_u
i32.const 29
i32.const 42
call_indirect (type 0)
i32.const 49
call 38
drop
i32.const 74
call 43
drop
i32.const 37
call 33
drop
i32.const 79
call 32
i32.const 91
drop
i32.const 36
i32.const 55
)
)
i32.gt_s
)
(else
i32.const 95
i32.const 0
(if 
(then
i32.const 98
drop
)
(else
i32.const 64
drop
)
)
call 38
i32.const 0
(if 
(then
i32.const 88
i32.const 47
call_indirect (type 3)
i32.const 84
i32.lt_s
i32.const 87
i32.div_s
i32.const 12
i32.const 7
call_indirect (type 3)
call 8
)
(else
i32.const 55
drop
)
)
i32.const 0
(if (result i32 )
(then
i32.const 22
call 33
i32.const 47
call_indirect (type 3)
drop
i32.const 24
drop
i32.const 98
i32.const 47
call_indirect (type 3)
drop
i32.const 12
drop
i32.const 100
drop
i32.const 32
drop
i32.const 94
call 32
i32.const 24
call 40
i32.const 43
call_indirect (type 3)
i32.const 38
call_indirect (type 3)
i32.const 87
i32.rem_u
)
(else
i32.const 99
i32.const 32
call_indirect (type 4)
i32.const 77
)
)
)
)
drop
)
)
call 20
i32.sub
)
)
call 36
i32.const 92
drop
i32.const 59
call 7
call 7
drop
i32.const 0
(if 
(then
i32.const 95
call 44
)
(else
i32.const 45
drop
)
)
i32.const 69
)
(func $44 (type 4) (param i32) 
i32.const 87
call 43
i32.const 54
i32.const 49
call_indirect (type 0)
i32.const 96
call 30
i32.const 47
call 44
i32.const 48
i32.const 7
call_indirect (type 3)
drop
)
(func $45 (type 1) (param i32 i32 i32 i32) (result i32 i32)
i32.const 88
i32.const 0
(if (result i32 i32 )
(then
i32.const 83
drop
i32.const 74
i32.const 44
call_indirect (type 4)
i32.const 26
i32.const 0
(if (result i32 i32 )
(then
i32.const 9
i32.const 0
(if (result i32 )
(then
i32.const 1
(if (result i32 i32 )
(then
i32.const 85
call 47
call 17
call 30
i32.const 16
call 32
i32.const 40
i32.const 75
)
(else
i32.const 72
i32.const 44
call_indirect (type 4)
i32.const 66
drop
i32.const 52
call 30
i32.const 95
call 14
drop
i32.const 41
i32.const 47
call_indirect (type 3)
call 44
i32.const 40
i32.const 47
call_indirect (type 3)
call 30
i32.const 43
i32.const 40
call_indirect (type 3)
drop
i32.const 76
call 38
i32.const 67
i32.ge_u
call 7
call 17
i32.const 14
)
)
i32.lt_u
)
(else
i32.const 0
(if (result i32 )
(then
i32.const 80
i32.const 30
call_indirect (type 4)
i32.const 38
)
(else
i32.const 68
i32.const 58
i32.mul
call 32
i32.const 79
drop
i32.const 85
drop
i32.const 89
i32.const 38
call_indirect (type 3)
call 27
)
)
call 32
i32.const 95
)
)
)
(else
i32.const 85
i32.const 59
)
)
call 38
i32.lt_s
)
(else
i32.const 82
i32.const 1
(if (result i32 i32 )
(then
i32.const 46
i32.const 85
)
(else
i32.const 32
drop
i32.const 94
i32.const 0
(if 
(then
i32.const 17
call 44
)
(else
i32.const 2
call 44
)
)
i32.const 0
(if (result i32 )
(then
i32.const 0
(if 
(then
i32.const 50
i32.const 12
i32.ne
drop
)
(else
i32.const 19
drop
)
)
i32.const 1
(if (result i32 )
(then
i32.const 87
call 43
)
(else
i32.const 100
i32.const 0
i32.const 40
call_indirect (type 3)
call 44
drop
i32.const 82
i32.const 38
call_indirect (type 3)
i32.const 91
i32.le_u
i32.const 75
i32.ne
i32.const 6
call_indirect (type 4)
i32.const 2
i32.const 39
i32.add
call 43
i32.const 30
call_indirect (type 4)
i32.const 59
i32.const 97
i32.const 24
call_indirect (type 0)
i32.const 74
i32.const 43
call_indirect (type 3)
)
)
)
(else
i32.const 71
drop
i32.const 0
(if (result i32 )
(then
i32.const 43
i32.const 32
i32.const 31
call_indirect (type 0)
i32.const 81
i32.const 2
i32.const 48
call_indirect (type 0)
i32.const 12
i32.const 15
i32.sub
drop
i32.const 58
drop
i32.const 82
)
(else
i32.const 85
i32.const 30
call_indirect (type 4)
i32.const 26
i32.const 20
call_indirect (type 3)
i32.const 63
i32.const 44
call_indirect (type 4)
drop
i32.const 5
call 14
i32.const 86
i32.sub
call 38
)
)
)
)
)
)
drop
)
)
call 46
i32.const 1
(if 
(then
i32.const 9
drop
)
(else
i32.const 64
i32.const 16
call 30
drop
)
)
i32.const 0
(if 
(then
i32.const 83
i32.const 77
call 43
call 6
drop
)
(else
i32.const 21
call 40
i32.const 17
i32.sub
call 20
call 38
i32.const 32
call_indirect (type 4)
)
)
call 32
i32.const 21
drop
i32.const 3
drop
i32.const 63
i32.const 1
(if 
(then
i32.const 62
i32.const 98
i32.const 5
call_indirect (type 0)
)
(else
i32.const 40
drop
)
)
i32.const 63
)
(func $46 (type 0) (param i32 i32) 
i32.const 15
i32.const 28
call 44
drop
i32.const 95
drop
i32.const 4
drop
i32.const 69
drop
)
(func $47 (type 3) (param i32) (result i32)
i32.const 54
i32.const 27
call_indirect (type 3)
i32.const 32
call_indirect (type 4)
i32.const 74
call 33
i32.const 14
call_indirect (type 3)
call 17
drop
i32.const 0
(if 
(then
i32.const 93
i32.const 52
i32.const 49
call_indirect (type 0)
)
(else
i32.const 98
drop
)
)
i32.const 44
)
(func $48 (type 0) (param i32 i32) 
i32.const 51
call 14
call 7
i32.const 7
call_indirect (type 3)
i32.const 44
call_indirect (type 4)
i32.const 94
drop
i32.const 82
i32.const 33
call_indirect (type 3)
i32.const 11
i32.lt_u
i32.const 71
call 44
call 17
i32.const 66
i32.const 24
call_indirect (type 0)
)
(func $49 (type 0) (param i32 i32) 
i32.const 8
i32.const 20
call_indirect (type 3)
i32.const 61
call 27
i32.const 17
call_indirect (type 3)
i32.const 31
call_indirect (type 0)
i32.const 42
i32.const 33
call_indirect (type 3)
call 27
call 17
i32.const 44
call_indirect (type 4)
)
)
