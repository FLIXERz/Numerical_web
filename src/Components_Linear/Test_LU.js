export function LU_Decomposition(a, n) {
    let L = Array.from({ length: n }, () => Array(n).fill(0));
    let U = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        // Upper Triangular
        for (let k = i; k < n; k++) {
            let sum = 0;
            for (let j = 0; j < i; j++) sum += L[i][j] * U[j][k];
            U[i][k] = a[i][k] - sum;
        }

        // Lower Triangular
        L[i][i] = 1;
        for (let k = i + 1; k < n; k++) {
            let sum = 0;
            for (let j = 0; j < i; j++) sum += L[k][j] * U[j][i];
            L[k][i] = (a[k][i] - sum) / U[i][i];
        }
    }

    console.log("Lower Triangular Matrix L:", L);
    console.log("Upper Triangular Matrix U:", U);
    return { L, U };
}

// ฟังก์ชันแยกต่างหากสำหรับขนาดเมทริกซ์เฉพาะ (2x2, 3x3, 4x4, 5x5) ถ้าจำเป็น

export function LU_Decomposition2x2(a) {
    return LU_Decomposition(a, 2);
}

export function LU_Decomposition3x3(a) {
    return LU_Decomposition(a, 3);
}

export function LU_Decomposition4x4(a) {
    return LU_Decomposition(a, 4);
}

export function LU_Decomposition5x5(a) {
    return LU_Decomposition(a, 5);
}

// ตัวอย่างการใช้งาน
let a = [
    [2, -1, -2],
    [-4, 6, 3],
    [-4, -2, 8]
];
let n = 3;

LU_Decomposition3x3(a);
