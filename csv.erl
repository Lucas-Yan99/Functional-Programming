-module(csv).
-export([print_file/1,parse_file/1,split/4,add_to/2]).

%every time we add a list to another, we first have to reverse it :-(
add_to(A,B) ->[lists:reverse(A)|B].


%% 
% split a list of char. 
% Using A as an accumulator
% Row as a list of values in a row
% Tmp as the string buing built up
%%
%nothing left to do, just need to reverse the accumulator
split([]    ,A,[] ,[] ) -> lists:reverse(A); 
%no more data, but we need to add tmp
split([]    ,A,Row,Tmp) -> split([],add_to(add_to(Tmp,Row),A),[],[]); 
%theres a new line but it was empty (nb line end can depend on OS)
split([13,10|T],A,[] ,[] ) -> split(T,A,[],[]); %consume 2 char 
split([10   |T],A,[] ,[] ) -> split(T,A,[],[]); 
% new line, add Tmp to Row and Row to A
split([13,10|T],A,Row,Tmp) -> split(T ,add_to(add_to(Tmp,Row),A),[],[]); 
split([10   |T],A,Row,Tmp) -> split(T ,add_to(add_to(Tmp,Row),A),[],[]); 
%comma, add Tmp to Row and reset Tmp
split([44|T],A,Row,Tmp) -> split(T ,A,add_to(Tmp,Row),[]); 
%add C to Tmp
split([C |T],A,Row,Tmp) -> split(T ,A,Row,[C|Tmp]). 

parse_file(FileName) -> split(parse(FileName),[],[],[]).


process({ok,D}) -> binary:bin_to_list(D);
process(_) ->[].

parse(FileName) ->	process( file:read_file(FileName) ).

print_file(FileName) ->
	io:format("~s",[parse(FileName)]).
