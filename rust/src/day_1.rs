pub mod day_1 {
    // TEST
    pub fn test() {
        println!("Hello, world!");
        datatypes();
        control_flow();
        println!("{}th fibonacci number : {}", 10, fibonacci(10));
        println!("{}*C = {}*F", 0.0, conv_temp(0.0, "c"));
        println!("{}*F = {}*C", 100.0, conv_temp(100.0, "f"));
    }


    // Datatypes
    fn datatypes() {
        // MAX LIMIT
        let n1 : i32 = (0x1 << 30) - 1 + (0x1 << 30);
        let n2 : i16 = (0x1 << 14) - 1 + (0x1 << 14);
        let n3 : i8  = (0o1 << 6 ) - 1 + (0o1 << 6 );
        let n4 : char = 'x';
        let n5 : String = "new string".to_string();
        let n6 : bool = true;
        let n7 : u8  = (0o1 << 7 ) - 1 + (0o1 << 7 );
        let n8 : u16 = (0x1 << 15) - 1 + (0x1 << 15);
        let n9 : u32 = (0x1 << 31) - 1 + (0x1 << 31);
        let _n10: f32 = 0.2 + 0.3;
        let _n11: (char, u8) = ('x', b'x');
        let _n12 = [ b'a'; 10];

        println!("i32 : {n1}, i16 : {n2}, i8 : {n3}, char : {n4}, string : \"{n5}\", bool : {n6}, u8 : {n7}, u16 : {n8}, u32 : {n9}, f32 : {_n10}, tup : {}, arr : {}", _n11.0,_n12[1]);
    }

    // Control flow
    fn control_flow () {
        let mut multiplier : i16 = if true | false {
            println!("Exec true statement!");
            69
        } else {
            println!("Exec false statement!");
            96
        };

        for i in (1..=10).rev() {
            println!("{} x {} = {}", multiplier, i, multiplier*i);
        }

        while multiplier != 0 {
            multiplier -= 1;
        }   println!("[{}] End control flow!", multiplier);
    }

    // Convert between fahrenheit and celsius
    fn conv_temp(temp : f32, unit : &str) -> f32 {
        let res = match unit {
            "C" | "c" | "Celsius" | "celsius" =>
                9.0/5.0 * temp + 32.0,
                "F" | "f" | "Fahrenheit" | "fahrenheit" => 
                    (temp - 32.0) * 5.0 / 9.0,
                _ => {
                    println!("Invalid unit!");
                    temp
                }
        };
        res
    }

    // Unoptimized fibonacci function
    fn fibonacci (n : i32) -> i32 {
        if n < 2 {
            return n;
        }
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}
