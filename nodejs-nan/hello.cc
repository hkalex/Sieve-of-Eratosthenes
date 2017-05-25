#include <nan.h>
#include <stdio.h>
#include <math.h>

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using v8::Local;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_METHOD(calculateSD) {
  Local<v8::Array> arr = Local<v8::Array>::Cast(info[0]);

  int len = arr->Length();
  double avg = 0;
  uint32_t sum = 0;

  // calculate the average
  for(int i=0; i<len; i++) {
    uint32_t val = arr->Get(i)->Uint32Value();
    sum += val;
  }
  avg = sum / len;

  double s2 = 0;
  // calculate the standard deviation
  for(int i=0; i<len; i++) {
    uint32_t val = arr->Get(i)->Uint32Value();
    s2 += pow( (double)(val - avg), 2);
  }
  s2 /= len;
  s2 = sqrt(s2);

  info.GetReturnValue().Set(s2);
}

NAN_MODULE_INIT(Init) {
  Set(target, New<String>("calculateSD").ToLocalChecked(), 
    GetFunction(New<FunctionTemplate>(calculateSD)).ToLocalChecked());
}

NODE_MODULE(hello, Init)
