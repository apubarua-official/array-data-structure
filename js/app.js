// 30 Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees )

const student = [
    ['Apu Barua', 1, 10, 4, 'Male', 'Mohakhali', 4000],
    ['Farjana Yesmen', 2, 10, 4, 'Female', 'Mirpur', 4000],
    ['Md. Ali', 3, 30, 4, 'Male', 'Taltola', 4000],
    ['Md. Asif', 4, 13, 5, 'Male', 'Mirpur', 5000],
    ['Iqbal Hossain', 5, 10, 7, 'Male', 'Karwan Bazar', 7000],
    ['Sujon Shil', 6, 14, 7, 'Male', 'Karwan Bazar', 7000],
    ['Bristy Roy', 7, 12, 8, 'Female', 'Badda', 8000],
    ['Musabbir Rahman', 8, 35, 5, 'Male', 'Bashabo', 5000],
    ['Arifa Akhter', 9, 28, 5, 'Female', 'Farmgate', 5000],
    ['Zakaria Khan', 10, 30, 8, 'Male', 'Bashudhora', 8000],
    ['Animesh Benarje', 11, 34, 6, 'Male', 'Old Dhaka', 6000],
    ['Fahad Hasan', 12, 15, 5, 'Male', 'Bashudhora', 5000],
    ['Rabiul Awal', 13, 12, 4, 'Male', 'Bonosree', 4000],
    ['Alamghir Hossain', 14, 37, 4, 'Male', 'Taltola', 4000],
    ['Md. Shohidul Islam', 15, 35, 4, 'Male', 'Jatrabari', 4000],
    ['Md. Galid Hossain', 16, 13, 4, 'Male', 'Hatirjhil', 4000],
    ['Md. Fahim', 17, 13, 5, 'Male', 'Badda', 5000],
    ['Saiful Islam', 18, 10, 5, 'Male', 'Karwan Bazar', 5000],
    ['Muyeen Hossain', 19, 14, 6, 'Male', 'Karwan Bazar', 6000],
    ['Shafiq Islam', 20, 12, 4, 'Male', 'Karwan Bazar', 4000],
    ['Shariar Kobir', 21, 14, 6, 'Male', 'Banglamotor', 6000],
    ['Jubair Hossain', 22, 12, 4, 'Male', 'Savar', 4000],
    ['Md. Shimul', 23, 10, 5, 'Male', 'Kola Bagan', 5000],
    ['Md. Habib', 24, 11, 3, 'Male', 'Dhanmondi', 3000],
    ['Md. Shakil', 25, 13, 4, 'Male', 'Dhanmondi-32', 4000],
    ['Parvin Akhter', 26, 14, 5, 'Female', 'Gulshan', 5000],
    ['Jesmin Akhter', 27, 10, 4, 'Female', 'Banani', 4000],
    ['Surovi Akhter', 28, 10, 4, 'Female', 'Banani', 4000],
    ['Popy Akhter', 29, 60, 4, 'Female', 'Banani', 4000],
    ['Aklima Akhter', 30, 40, 4, 'Female', 'Banani', 4000],

];

let addminissionFees = 0;

student.forEach( item => {

    // 01. Total Admnission fees
    addminissionFees += item[6];

    // 02. Find All Female Students

    // if(item[4] == 'Female'){
    //     console.log(`
    //         Name : ${ item[0] }
    //     `);
    // } 

    // 03. Find class wise student result [Here I find class 4 student class based on admission fees 4000]

    //  if(item[6] == 4000){
    //     console.log(`
    //         Name: ${ item[0] }
    //         class: ${ item[3] }
    //     `);
    // };
    
    // 04. Location wise student result [Here I find student Location based on class 5 student]

    // if(item[3] == 5){
    //     console.log(`
    //         Location: ${ item[5]}
    //     `);
    // }

    // 05. find student between 10 - 25 age 

    // if(item[2] >= 10 && item[2] <= 25){
    //     console.log(`
    //         Name: ${ item[0] }
    //         Age: ${ item[2] }
    //     `);
    // }

    

});

// Total Admnission fees Output
console.log(`Total Admission Fees = ${ addminissionFees } Taka`);  