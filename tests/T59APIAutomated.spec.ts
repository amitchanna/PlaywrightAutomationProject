import{test,expect}from'@playwright/test';
import { assert } from 'node:console';

test.describe('Get home screen test',()=>{

test('get home screen',async({request,baseURL})=>
    {
    
    const response=await request.get(`${baseURL}/api/vitality-home-screen-points-agreement-service-1/1.0/svc/59/getHomeScreenGetPointsGetStatus/5700739621/5750998106`);
    expect(response.status()).toBe(200);
    const responseBody=await response.json();
    console.log(responseBody);
    const bronzePoints=responseBody.pointsToNextStatuses[0].statusPoints;
    const silverPoints=responseBody.pointsToNextStatuses[1].statusPoints;
    const goldPoints=responseBody.pointsToNextStatuses[2].statusPoints;
    const platinumPoints=responseBody.pointsToNextStatuses[3].statusPoints;
    console.log(`Bronze Points: ${bronzePoints}`);
    console.log(`Silver Points: ${silverPoints}`);
    console.log(`Gold Points: ${goldPoints}`);
    console.log(`Platinum Points: ${platinumPoints}`);
    assert(bronzePoints === 1000, `Expected Bronze Points to be 1000, actual: ${bronzePoints}`);
    assert(silverPoints === 3500, `Expected Silver Points to be 3500, actual: ${silverPoints}`);
    assert(goldPoints === 7000, `Expected Gold Points to be 7000, actual: ${goldPoints}`);
    assert(platinumPoints === 10000, `Expected Platinum Points to be 10000, actual: ${platinumPoints}`);
    }
);
});
