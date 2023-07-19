//1. Let's build a Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

//2. Extending the Teacher class
interface Directors extends Teacher {
    numberOfReports: number;
}

// 3. Printing Teachers
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
};

// 4. Writing a class
interface StudentClassInterace {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomeWork(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomeWork(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}