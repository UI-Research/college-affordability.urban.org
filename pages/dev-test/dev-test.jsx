'use strict';

import React from 'react';
import Template from '20-templates/default/default.jsx';
import Graph from '30-components/graphs/graph/graph.jsx';
import Multiples from '30-components/graphs/multiples/multiples.jsx';
import Box from '30-components/box/box/box.jsx';
import SinglePage from '30-components/singlepage/singlepage.jsx';import util from 'util.jsx';

let singlepage = (
<div>
<h2>pages/after-college/debt-burden/debt-burden.jsx</h2>
<h2>./json/06_0090.json</h2>
<Graph file={require('./json/06_0090.json')}/>
<h2>pages/after-college/debt-burden/debt-burden.jsx</h2>
<h2>./json/06_0100.json</h2>
<Graph file={require('./json/06_0100.json')}/>
<h2>pages/after-college/debt-burden/debt-burden.jsx</h2>
<h2>./json/06_0110.json</h2>
<Graph file={require('./json/06_0110.json')}/>
<h2>pages/after-college/debt-burden/debt-burden.jsx</h2>
<h2>./json/06_0120.json</h2>
<Graph file={require('./json/06_0120.json')}/>
<h2>pages/after-college/debt-burden/debt-burden.jsx</h2>
<h2>./json/06_0130.json</h2>
<Graph file={require('./json/06_0130.json')}/>
<h2>pages/after-college/debt-burden/debt-burden.jsx</h2>
<h2>./json/06_0140.json</h2>
<Graph file={require('./json/06_0140.json')}/>
<h2>pages/after-college/debt-burden/debt-burden.jsx</h2>
<h2>./json/06_0150.json</h2>
<Graph file={require('./json/06_0150.json')}/>
<h2>pages/after-college/employment-after-college/employment-after-college.jsx</h2>
<h2>./json/06_0010.json</h2>
<Graph file={require('./json/06_0010.json')}/>
<h2>pages/after-college/employment-after-college/employment-after-college.jsx</h2>
<h2>./json/06_0020.json</h2>
<Graph file={require('./json/06_0020.json')}/>
<h2>pages/after-college/employment-after-college/employment-after-college.jsx</h2>
<h2>./json/06_0030.json</h2>
<Graph file={require('./json/06_0030.json')}/>
<h2>pages/after-college/variation-in-earnings/variation-in-earnings.jsx</h2>
<h2>./json/06_0040.json</h2>
<Graph file={require('./json/06_0040.json')} />
<h2>pages/after-college/variation-in-earnings/variation-in-earnings.jsx</h2>
<h2>./json/06_0050.json</h2>
<Graph file={require('./json/06_0050.json')} />
<h2>pages/after-college/variation-in-earnings/variation-in-earnings.jsx</h2>
<h2>./json/06_0060.json</h2>
<Graph file={require('./json/06_0060.json')} />
<h2>pages/after-college/variation-in-earnings/variation-in-earnings.jsx</h2>
<h2>./json/06_0070.json</h2>
<Graph file={require('./json/06_0070.json')} />
<h2>pages/breaking-even/breaking-even.jsx</h2>
<h2>./json/06_0210.json</h2>
<Graph file={require('./json/06_0210.json')}/>
<h2>pages/cost-of-educating/appropriations/appropriations.jsx</h2>
<h2>./json/02_0010.json</h2>
<Graph file={require('./json/02_0010.json')}/>
<h2>pages/cost-of-educating/appropriations/appropriations.jsx</h2>
<h2>./json/02_0020.json</h2>
<Graph file={require('./json/02_0020.json')}/>
<h2>pages/cost-of-educating/appropriations/appropriations.jsx</h2>
<h2>./json/02_0030.json</h2>
<Graph file={require('./json/02_0030.json')}/>
<h2>pages/cost-of-educating/appropriations/appropriations.jsx</h2>
<h2>./json/02_0040.json</h2>
<Graph file={require('./json/02_0040.json')}/>
<h2>pages/cost-of-educating/endowments/endowments.jsx</h2>
<h2>./json/02_0051.json</h2>
<Graph file={require('./json/02_0051.json')} small="true"/>
<h2>pages/cost-of-educating/endowments/endowments.jsx</h2>
<h2>./json/02_0052.json</h2>
<Graph file={require('./json/02_0052.json')} small="true"/>
<h2>pages/cost-of-educating/endowments/endowments.jsx</h2>
<h2>./json/02_0053.json</h2>
<Graph file={require('./json/02_0053.json')} small="true"/>
<h2>pages/cost-of-educating/endowments/endowments.jsx</h2>
<h2>./json/02_0054.json</h2>
<Graph file={require('./json/02_0054.json')} small="true"/>
<h2>pages/cost-of-educating/endowments/endowments.jsx</h2>
<h2>./json/02_0055.json</h2>
<Graph file={require('./json/02_0055.json')} small="true"/>
<h2>pages/cost-of-educating/endowments/endowments.jsx</h2>
<h2>./json/02_0061.json</h2>
<Graph file={require('./json/02_0061.json')} small="true"/>
<h2>pages/cost-of-educating/endowments/endowments.jsx</h2>
<h2>./json/02_0062.json</h2>
<Graph file={require('./json/02_0062.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0071.json</h2>
<Graph file={require('./json/02_0071.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0072.json</h2>
<Graph file={require('./json/02_0072.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0073.json</h2>
<Graph file={require('./json/02_0073.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0081.json</h2>
<Graph file={require('./json/02_0081.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0082.json</h2>
<Graph file={require('./json/02_0082.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0083.json</h2>
<Graph file={require('./json/02_0083.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0091.json</h2>
<Graph file={require('./json/02_0091.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0092.json</h2>
<Graph file={require('./json/02_0092.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0093.json</h2>
<Graph file={require('./json/02_0093.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0094.json</h2>
<Graph file={require('./json/02_0094.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0095.json</h2>
<Graph file={require('./json/02_0095.json')} small="true"/>
<h2>pages/cost-of-educating/subsidies/subsidies.jsx</h2>
<h2>./json/02_0096.json</h2>
<Graph file={require('./json/02_0096.json')} small="true"/>
<h2>pages/covering-expenses/borrowing/borrowing.jsx</h2>
<h2>./json/05_0120.json</h2>
<Graph file={require('./json/05_0120.json')}/>
<h2>pages/covering-expenses/pre-college-income/pre-college-income.jsx</h2>
<h2>./json/05_0011.json</h2>
<Graph file={require('./json/05_0011.json')} small="true"/>
<h2>pages/covering-expenses/pre-college-income/pre-college-income.jsx</h2>
<h2>./json/05_0012.json</h2>
<Graph file={require('./json/05_0012.json')} small="true"/>
<h2>pages/covering-expenses/pre-college-income/pre-college-income.jsx</h2>
<h2>./json/05_0013.json</h2>
<Graph file={require('./json/05_0013.json')} small="true"/>
<h2>pages/covering-expenses/pre-college-income/pre-college-income.jsx</h2>
<h2>./json/05_0014.json</h2>
<Graph file={require('./json/05_0014.json')} small="true"/>
<h2>pages/covering-expenses/pre-college-income/pre-college-income.jsx</h2>
<h2>./json/05_0020.json</h2>
<Graph file={require('./json/05_0020.json')}/>
<h2>pages/covering-expenses/pre-college-income/pre-college-income.jsx</h2>
<h2>./json/05_0030.json</h2>
<Graph file={require('./json/05_0030.json')}/>
<h2>pages/covering-expenses/pre-college-income/pre-college-income.jsx</h2>
<h2>./json/05_0050.json</h2>
<Graph file={require('./json/05_0050.json')}/>
<h2>pages/covering-expenses/time-to-degree/time-to-degree.jsx</h2>
<h2>./json/05_0190.json</h2>
<Graph file={require('./json/05_0190.json')}/>
<h2>pages/covering-expenses/time-to-degree/time-to-degree.jsx</h2>
<h2>./json/05_0200.json</h2>
<Graph file={require('./json/05_0200.json')}/>
<h2>pages/covering-expenses/time-to-degree/time-to-degree.jsx</h2>
<h2>./json/05_0210.json</h2>
<Graph file={require('./json/05_0210.json')}/>
<h2>pages/covering-expenses/time-to-degree/time-to-degree.jsx</h2>
<h2>./json/05_0220.json</h2>
<Graph file={require('./json/05_0220.json')}/>
<h2>pages/covering-expenses/time-to-degree/time-to-degree.jsx</h2>
<h2>./json/05_0230.json</h2>
<Graph file={require('./json/05_0230.json')}/>
<h2>pages/covering-expenses/time-to-degree/time-to-degree.jsx</h2>
<h2>./json/05_0240.json</h2>
<Graph file={require('./json/05_0240.json')}/>
<h2>pages/covering-expenses/working-during-college/working-during-college.jsx</h2>
<h2>./json/05_0060.json</h2>
<Graph file={require('./json/05_0060.json')}/>
<h2>pages/covering-expenses/working-during-college/working-during-college.jsx</h2>
<h2>./json/05_0070.json</h2>
<Graph file={require('./json/05_0070.json')}/>
<h2>pages/covering-expenses/working-during-college/working-during-college.jsx</h2>
<h2>./json/05_0080.json</h2>
<Graph file={require('./json/05_0080.json')}/>
<h2>pages/covering-expenses/working-during-college/working-during-college.jsx</h2>
<h2>./json/05_0090.json</h2>
<Graph file={require('./json/05_0090.json')}/>
<h2>pages/covering-expenses/working-during-college/working-during-college.jsx</h2>
<h2>./json/05_0100.json</h2>
<Graph file={require('./json/05_0100.json')}/>
<h2>pages/covering-expenses/working-during-college/working-during-college.jsx</h2>
<h2>./json/05_0110.json</h2>
<Graph file={require('./json/05_0110.json')}/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_0091.json</h2>
<Graph file={require('./json/04_0091.json')} small="true"/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_0092.json</h2>
<Graph file={require('./json/04_0092.json')} small="true"/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_0093.json</h2>
<Graph file={require('./json/04_0093.json')} small="true"/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_00911.json</h2>
<Graph file={require('./json/04_00911.json')} small="true"/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_00922.json</h2>
<Graph file={require('./json/04_00922.json')} small="true"/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_00933.json</h2>
<Graph file={require('./json/04_00933.json')} small="true"/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_0100.json</h2>
<Graph file={require('./json/04_0100.json')}/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_0110.json</h2>
<Graph file={require('./json/04_0110.json')}/>
<h2>pages/financial-aid/federal/federal.jsx</h2>
<h2>./json/04_0120.json</h2>
<Graph file={require('./json/04_0120.json')}/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0010.json</h2>
<Graph file={require('./json/04_0010.json')}/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0020.json</h2>
<Graph file={require('./json/04_0020.json')}/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0030.json</h2>
<Graph file={require('./json/04_0030.json')}/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0041.json</h2>
<Graph file={require('./json/04_0041.json')} small="true"/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0042.json</h2>
<Graph file={require('./json/04_0042.json')} small="true"/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0043.json</h2>
<Graph file={require('./json/04_0043.json')} small="true"/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0044.json</h2>
<Graph file={require('./json/04_0044.json')} small="true"/>
<h2>pages/financial-aid/financial-need/financial-need.jsx</h2>
<h2>./json/04_0045.json</h2>
<Graph file={require('./json/04_0045.json')} small="true"/>
<h2>pages/financial-aid/grant-aid/grant-aid.jsx</h2>
<h2>./json/04_0050.json</h2>
<Graph file={require('./json/04_0050.json')}/>
<h2>pages/financial-aid/grant-aid/grant-aid.jsx</h2>
<h2>./json/04_0060.json</h2>
<Graph file={require('./json/04_0060.json')}/>
<h2>pages/financial-aid/grant-aid/grant-aid.jsx</h2>
<h2>./json/04_0071.json</h2>
<Graph file={require('./json/04_0071.json')} small="true"/>
<h2>pages/financial-aid/grant-aid/grant-aid.jsx</h2>
<h2>./json/04_0072.json</h2>
<Graph file={require('./json/04_0072.json')} small="true"/>
<h2>pages/financial-aid/grant-aid/grant-aid.jsx</h2>
<h2>./json/04_0080.json</h2>
<Graph file={require('./json/04_0080.json')}/>
<h2>pages/financial-aid/institutional/institutional.jsx</h2>
<h2>./json/04_0180.json</h2>
<Graph file={require('./json/04_0180.json')}/>
<h2>pages/financial-aid/institutional/institutional.jsx</h2>
<h2>./json/04_0190.json</h2>
<Graph file={require('./json/04_0190.json')}/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0221.json</h2>
<Graph file={require('./json/04_0221.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0222.json</h2>
<Graph file={require('./json/04_0222.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0223.json</h2>
<Graph file={require('./json/04_0223.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0224.json</h2>
<Graph file={require('./json/04_0224.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02211.json</h2>
<Graph file={require('./json/04_02211.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02222.json</h2>
<Graph file={require('./json/04_02222.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02233.json</h2>
<Graph file={require('./json/04_02233.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02244.json</h2>
<Graph file={require('./json/04_02244.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0231.json</h2>
<Graph file={require('./json/04_0231.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0232.json</h2>
<Graph file={require('./json/04_0232.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0233.json</h2>
<Graph file={require('./json/04_0233.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_0234.json</h2>
<Graph file={require('./json/04_0234.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02311.json</h2>
<Graph file={require('./json/04_02311.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02322.json</h2>
<Graph file={require('./json/04_02322.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02333.json</h2>
<Graph file={require('./json/04_02333.json')} small="true"/>
<h2>pages/financial-aid/other/other.jsx</h2>
<h2>./json/04_02344.json</h2>
<Graph file={require('./json/04_02344.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0130.json</h2>
<Graph file={require('./json/04_0130.json')} />
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0140.json</h2>
<Graph file={require('./json/04_0140.json')} />
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0170.json</h2>
<Graph file={require('./json/04_0170.json')} />
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0151.json</h2>
<Graph file={require('./json/04_0151.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0152.json</h2>
<Graph file={require('./json/04_0152.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0153.json</h2>
<Graph file={require('./json/04_0153.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0154.json</h2>
<Graph file={require('./json/04_0154.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0155.json</h2>
<Graph file={require('./json/04_0155.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0161.json</h2>
<Graph file={require('./json/04_0161.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0162.json</h2>
<Graph file={require('./json/04_0162.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0163.json</h2>
<Graph file={require('./json/04_0163.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0164.json</h2>
<Graph file={require('./json/04_0164.json')} small="true"/>
<h2>pages/financial-aid/state/state.jsx</h2>
<h2>./json/04_0165.json</h2>
<Graph file={require('./json/04_0165.json')} small="true"/>
<h2>pages/financial-aid/tax-benefits/tax-benefits.jsx</h2>
<h2>./json/04_0240.json</h2>
<Graph file={require('./json/04_0240.json')}/>
<h2>pages/financial-aid/tax-benefits/tax-benefits.jsx</h2>
<h2>./json/04_0250.json</h2>
<Graph file={require('./json/04_0250.json')}/>
<h2>pages/financial-aid/tax-benefits/tax-benefits.jsx</h2>
<h2>./json/04_0260.json</h2>
<Graph file={require('./json/04_0260.json')}/>
<h2>pages/financial-aid/tax-benefits/tax-benefits.jsx</h2>
<h2>./json/04_0270.json</h2>
<Graph file={require('./json/04_0270.json')}/>
<h2>pages/prices-and-expenses/forgone-earnings/forgone-earnings.jsx</h2>
<h2>./json/03_0170.json</h2>
<Graph file={require('./json/03_0170.json')}/>
<h2>pages/prices-and-expenses/room-and-board/room-and-board.jsx</h2>
<h2>./json/03_0050.json</h2>
<Graph file={require('./json/03_0050.json')}/>
<h2>pages/prices-and-expenses/room-and-board/room-and-board.jsx</h2>
<h2>./json/03_0060.json</h2>
<Graph file={require('./json/03_0060.json')}/>
<h2>pages/prices-and-expenses/room-and-board/room-and-board.jsx</h2>
<h2>./json/03_0070.json</h2>
<Graph file={require('./json/03_0070.json')}/>
<h2>pages/prices-and-expenses/room-and-board/room-and-board.jsx</h2>
<h2>./json/03_0090.json</h2>
<Graph file={require('./json/03_0090.json')}/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0121.json</h2>
<Graph file={require('./json/03_0121.json')} small="true"/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0122.json</h2>
<Graph file={require('./json/03_0122.json')} small="true"/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0123.json</h2>
<Graph file={require('./json/03_0123.json')} small="true"/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0124.json</h2>
<Graph file={require('./json/03_0124.json')} small="true"/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0130.json</h2>
<Graph file={require('./json/03_0130.json')}/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0140.json</h2>
<Graph file={require('./json/03_0140.json')}/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0150.json</h2>
<Graph file={require('./json/03_0150.json')}/>
<h2>pages/prices-and-expenses/student-budgets/student-budgets.jsx</h2>
<h2>./json/03_0160.json</h2>
<Graph file={require('./json/03_0160.json')}/>
<h2>pages/prices-and-expenses/tuition-and-fees/tuition-and-fees.jsx</h2>
<h2>./json/03_0010.json</h2>
<Graph file={require('./json/03_0010.json')}/>
<h2>pages/prices-and-expenses/tuition-and-fees/tuition-and-fees.jsx</h2>
<h2>./json/03_0041.json</h2>
<Graph file={require('./json/03_0041.json')} small="true"/>
<h2>pages/prices-and-expenses/tuition-and-fees/tuition-and-fees.jsx</h2>
<h2>./json/03_0042.json</h2>
<Graph file={require('./json/03_0042.json')} small="true"/>
<h2>pages/prices-and-expenses/tuition-and-fees/tuition-and-fees.jsx</h2>
<h2>./json/03_0020.json</h2>
<Graph file={require('./json/03_0020.json')}/>
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0071.json</h2>
<Graph file={require('./json/02_0071.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0072.json</h2>
<Graph file={require('./json/02_0072.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0073.json</h2>
<Graph file={require('./json/02_0073.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0081.json</h2>
<Graph file={require('./json/02_0081.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0082.json</h2>
<Graph file={require('./json/02_0082.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0083.json</h2>
<Graph file={require('./json/02_0083.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0091.json</h2>
<Graph file={require('./json/02_0091.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0092.json</h2>
<Graph file={require('./json/02_0092.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0093.json</h2>
<Graph file={require('./json/02_0093.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0094.json</h2>
<Graph file={require('./json/02_0094.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0095.json</h2>
<Graph file={require('./json/02_0095.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0096.json</h2>
<Graph file={require('./json/02_0096.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0010.json</h2>
<Graph file={require('./json/02_0010.json')} />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0020.json</h2>
<Graph file={require('./json/02_0020.json')} />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0030.json</h2>
<Graph file={require('./json/02_0030.json')} />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0040.json</h2>
<Graph file={require('./json/02_0040.json')} />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0051.json</h2>
<Graph file={require('./json/02_0051.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0052.json</h2>
<Graph file={require('./json/02_0052.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0053.json</h2>
<Graph file={require('./json/02_0053.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0054.json</h2>
<Graph file={require('./json/02_0054.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0055.json</h2>
<Graph file={require('./json/02_0055.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0061.json</h2>
<Graph file={require('./json/02_0061.json')} small="true" />
<h2>pages/producing-education/producing-education.jsx</h2>
<h2>./json/02_0062.json</h2>
<Graph file={require('./json/02_0062.json')} small="true" />
<h2>pages/what-is-college/institutions/institutions.jsx</h2>
<h2>./json/01_0010.json</h2>
<Graph file={require('./json/01_0010.json')}/>
<h2>pages/what-is-college/institutions/institutions.jsx</h2>
<h2>./json/01_0020.json</h2>
<Graph file={require('./json/01_0020.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0050.json</h2>
<Graph file={require('./json/01_0050.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0060.json</h2>
<Graph file={require('./json/01_0060.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0070.json</h2>
<Graph file={require('./json/01_0070.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0080.json</h2>
<Graph file={require('./json/01_0080.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0090.json</h2>
<Graph file={require('./json/01_0090.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0100.json</h2>
<Graph file={require('./json/01_0100.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0110.json</h2>
<Graph file={require('./json/01_0110.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0120.json</h2>
<Graph file={require('./json/01_0120.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0130.json</h2>
<Graph file={require('./json/01_0130.json')}/>
<h2>pages/what-is-college/students/students.jsx</h2>
<h2>./json/01_0140.json</h2>
<Graph file={require('./json/01_0140.json')}/>
</div>
);
let specifications = {
  'name': 'dev-test',
  'title': 'Dev Test',
  'content': <SinglePage content={singlepage} />
};

const DevTest = React.createClass({
  render: function() {
    return (
      <Template title={specifications.title} machineName={specifications.name} includeHTML={this.props.includeHTML}>
        {specifications.content}
      </Template>
    );
  }
});
if (util.canUseDOM()) {
  require('./' + specifications.name.toLowerCase() + '.scss');
}
util.printToPage('dev-test', DevTest);

module.exports = DevTest;