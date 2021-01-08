const assert = require("chai").assert;
const chakram = require("chakram")
const sayHello = require("../app").sayHello();
const request = require('supertest')
var should=assert.should;
const express = require('express');
const app = express();
expect = chakram.expect;

describe('App', function(){
    it("rest",function(){
        var response = chakram.get("http://reqres.in/api/users/2");
        //expect(response).not.to.have.cookie;
        return expect(response).to.have.string('data');
        
    })
    it('app should return hello',function(){
        let result=sayHello;
        assert.equal(sayHello,'hello');
    })

    it('app should return string type',function(){
        let result=sayHello;
        assert.typeOf(result,'string');
    })
    it("rest",function(){
        var response = chakram.get("http://reqres.in/api/users/2");
        expect(response).not.to.have.cookie;
        expect(response).to.have.header('content-type');
        expect(response).to.have.header('content-type', /json/);
        return expect(response).to.have.status(200);
    })
})
