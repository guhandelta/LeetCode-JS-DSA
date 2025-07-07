// Sample array of arrays
const nestedArr = [
    [1, 2, 3, 4, 3, 4],
    [3, 4, 2, 4, 5, 2, 5, 4, 6],
    [7, 2, 4, 3, 8, 4, 9],
];

const removeDuplicates = (nestedArr) => {

    const seen = new Set()
    return nestedArr.map(innerArr =>{

        const frequencyMap = new Map();
        const uniqueArr = [];

        for (const item of innerArr){
            frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1 );

            if(frequencyMap.get(item) === 1 && !seen.has(item)){
                seen.add(item);
                uniqueArr.push(item);
            }
        }

        return uniqueArr
    })
}

const cleanedArray = removeDuplicates();

console.log('Resule:\t', cleanedArray);


/*
Maps in JavaScript: A Quick Overview

A Map is a data structure that stores key-value pairs. Unlike objects, Maps allow any data type as keys, not just strings. In the provided code, the seen Map is used to keep track of elements encountered.

How Maps are Used in the Code:

    Tracking Unique Elements:
        As the code iterates over each element in a sub-array, the seen Map is checked to see if the element already exists.
    Efficient Lookup:
        Maps provide efficient lookup of keys, making it easy to determine if an element has been encountered before.

Best Situations to Use Maps for Duplicate Removal:

    Large Datasets: Maps can efficiently handle large datasets, especially when the number of unique elements is relatively small.
    Frequent Lookups: If you need to repeatedly check for the existence of elements, Maps provide fast lookup times.
    Complex Data Structures: Maps can be used to store more complex data structures as keys, allowing for flexible filtering and grouping operations.

Worst Situations to Use Maps for Duplicate Removal:

    Small Datasets: For small datasets, a simple array or Set might be sufficient and more efficient.
    Frequent Insertions and Deletions: If you need to frequently add and remove elements from the Map, the performance might be affected, especially for large Maps.

Maps are a powerful tool for handling unique values and performing efficient lookups. In the context of removing duplicates from nested arrays, they provide a clear and effective solution. However, consider the specific use case and dataset size to determine if a Map is the best approach.

--

Maps vs. Sets for Duplicate Removal

While both Maps and Sets can be used to track unique elements, they have distinct characteristics and use cases:

Maps:

    Key-Value Pairs: Maps store key-value pairs.
    Flexible Keys: Keys can be of any data type, including objects.
    Duplicate Keys: Duplicate keys are allowed, but the latest value associated with the key will be retained.

Sets:

    Unique Values: Sets only store unique values.
    Efficient Membership Testing: Sets offer efficient membership testing using the has() method.
    No Duplicate Values: Duplicate values are automatically removed.

In the context of removing duplicates from a nested array:

Using Maps:

    A Map can be used to track the frequency of elements, but in this specific case, it's not necessary.
    The seen Set is sufficient to track unique elements.

Using Sets:

    A Set is the ideal choice for this scenario.
    The seen Set can directly store unique elements encountered, without the need for additional complexity or overhead.

Key Differences and When to Use Which:

    Unique Values Only: If you only need to track unique values, a Set is the most efficient choice.
    Frequency Tracking: If you need to count the occurrences of each element, a Map is more suitable.
    Complex Data Structures as Keys: If you need to use complex data structures as keys, a Map is necessary.

In the given code, using a Set is the most efficient and straightforward approach for removing duplicates from the nested array.

*/



// 1. Types & Intrfaces
// ✅ Use interface for component props
// ✅ Use type for unions, intersections, utility types

// interface - extensible
interface UserProps {
    name: string;
    age: number;
}

// type - flexible
type Status = 'success' | 'error' | 'loading';

// - -- --- ---- ----- ---- --- -- -

// 2. Props

// ✅ Enforces strict prop typing
// ❌ Avoid using any for props

type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => (
    <button onClick={onClick}>{label}</button>
);

// - -- --- ---- ----- ---- --- -- -

// 3. useState<T> with Generics

// ✅ Ensures consistent state types
// 🧠 Useful when state starts as null

const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<UserProps | null>(null);

// - -- --- ---- ----- ---- --- -- -

// 4. Union & Literal Types

// ✅ Guarantees theme is either 'light' or 'dark'

const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<UserProps | null>(null);

type Theme = 'light' | 'dark';
const ThemeSwitcher = ({ theme }: { theme: Theme }) => (
    <div>{theme === 'dark' ? '🌙' : '☀️'}</div>
);

enum Role {
    Admin = 'admin',
    User = 'user',
}

const Welcome = ({ role }: { role: Role }) => (
    <h1>Welcome, {role}</h1>
);

// - -- --- ---- ----- ---- --- -- -

// 5. Enums

// ✅ Makes code readable for roles, status, types

type User = {
    age: number;
     name: string;
    email?: string;
};

type PartialUser = Partial<User>; // All fields optional
type NameOnly = Pick<User, 'name'>;
type NoEmail = Omit<User, 'email'>;
type StrictUser = Required<User>; // All fields required

const roles = ['admin', 'user'] as const;
type Role = typeof roles[number];
const isValidRole = (r: Role) => roles.includes(r);

// - -- --- ---- ----- ---- --- -- -

// 6. Utility Types: Partial, Pick, Omit, Required

type User = {
    name: string;
    age: number;
    email?: string;
};

type PartialUser = Partial<User>; // All fields optional
type NameOnly = Pick<User, 'name'>;
type NoEmail = Omit<User, 'email'>;
type StrictUser = Required<User>; // All fields required


// ✅ Perfect for flexible form types, API payloads

