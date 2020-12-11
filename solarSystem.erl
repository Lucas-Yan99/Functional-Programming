-module(solarSystem).
-export([process_csv/1,is_numeric/1,parseALine/2,parse/1,expandT/1,expandT/2,parseNames/1]).

    process_csv([])    ->   [];
    process_csv([H|T]) when H == ["name       ","  col"," dist"," a","  angv","   r ","    ..."] -> process_csv(T);
    process_csv([H|T]) -> [parseALine(is_numeric(lists:nth(3, H)), H) ++ "\n", process_csv(T)].

parseALine(false,T) -> parseNames(T); %sun 
parseALine(true,T) -> parse(T). %planets

parse([Name,Colour,Distance,Angle,AngleVelocity,Radius,"1"|T])-> Name++"=[\""++Colour++"\","++Distance++","++Angle++","++AngleVelocity++","++Radius++","++expandT(T, ",")++"];";
parse([Name,Colour,Distance,Angle,AngleVelocity,Radius|T])-> Name++"=[\""++Colour++"\","++Distance++","++Angle++","++AngleVelocity++","++Radius++",["++expandT(T, ",")++"]];\n".

parseNames([H|T]) -> H ++ "=[" ++ expandT(T) ++ "];".

			expandT([]) -> [];
			expandT([H|T]) when T == [] -> H;   
			expandT([H|T]) -> H ++ "," ++ expandT(T).
			
			%expandT(T, _) -> "["++expandT(T,"")++"]".
			expandT([],_) ->"";
			expandT([H|T],Sep) when T == []-> H;
			expandT([H|T],Sep) -> H++Sep++expandT(T,",").

% https://rosettacode.org/wiki/Determine_if_a_string_is_numeric#Erlang
is_numeric(L) -> 
	S = trim(L,""),
    Float = (catch erlang:list_to_float(  S)),
    Int   = (catch erlang:list_to_integer(S)),
    is_number(Float) orelse is_number(Int).

trim(A)->A.
trim([],A)->A;
trim([32|T],A)->trim(T,A);
trim([H|T],A)->trim(T,A++[H]).