class Income {
  static afterTax = async (annualBaseSalary: number) => {
    let salary = Math.round(annualBaseSalary);
    let taxRate;
    switch (true) {
      case (salary >= 18201 && salary <= 37000):
        taxRate = 0.19;
        break;
      case (salary >= 37001 && salary <= 87000):
        taxRate = 0.325;
        break;
      case (salary >= 87001 && salary <= 180000):
        taxRate = 0.37;
        break;
      case (salary > 180000):
        taxRate = 0.45;
        break;
      default:
        taxRate = 0;
    }

    let medicareRate;
    switch (true) {
      case (salary >= 21336 && salary <= 26668):
        medicareRate = 0.01;
        break;
      case (salary > 26668):
        medicareRate = 0.02;
        break;
      default:
        medicareRate = 0
    }

    let incomeTax = salary * taxRate;
    let medicareTax = salary * medicareRate;
    let totalTax = incomeTax + medicareTax;

    let data = {
      baseSalary: salary,
      superanuation: Math.round((salary * 0.095)* 100) / 100,
      taxes: {
        income: incomeTax,
        medicare: medicareTax,
        total: totalTax,
      },
      postTaxIncome: salary - totalTax
    }
    return data;
  };

  static preTax = async (postTaxSalary: number) => {
    let taxRate;
    switch (true) {
      case (postTaxSalary >= 14742.81 && postTaxSalary <= 29230):
        taxRate = 0.19;
        break;
      case (postTaxSalary >= 24235.655 && postTaxSalary <= 56985):
        taxRate = 0.325;
        break;
      case (postTaxSalary >= 53070.61 && postTaxSalary <= 109800):
        taxRate = 0.37;
        break;
      case (postTaxSalary > 109800):
        taxRate = 0.45;
        break;
      default:
        taxRate = 0;
    }

    let medicareRate;
    switch (true) {
      case (postTaxSalary >= 17068.8 && postTaxSalary <= 21334.4):
        medicareRate = 0.01;
        break;
      case (postTaxSalary > 21334.4):
        medicareRate = 0.02;
        break;
      default:
        medicareRate = 0;
    }

    let totalTaxRate = 1 - (taxRate + medicareRate);
    let salary = postTaxSalary / totalTaxRate;
    return await Income.afterTax(salary);
  };
}

export default Income;
