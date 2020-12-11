#!/usr/bin/env Rscript
data(iris)
iris <- read.table("solarSystem.data", col.names="timing")
as.data.frame.matrix(iris)

first<-data.frame(iris[iris$timing<1 & iris$timing>=0, ])
second<-data.frame(iris[iris$timing<2 &iris$timing>=1, ])
third<-data.frame(iris[iris$timing<3 &iris$timing>=2, ])
fourth<-data.frame(iris[iris$timing<4 &iris$timing>=3, ])
fifth<-data.frame(iris[iris$timing<5 &iris$timing>=4, ])
sixth<-data.frame(iris[iris$timing<6 &iris$timing>=5, ])
seventh<-data.frame(iris[iris$timing<7 &iris$timing>=6, ])
eighth<-data.frame(iris[iris$timing<8 &iris$timing>=7, ])
nineth<-data.frame(iris[iris$timing<9 &iris$timing>=8, ])
tenth<-data.frame(iris[iris$timing<10 &iris$timing>=9, ])

df<-data.frame(range=c("0-1", "1-2", "2-3","3-4","4-5","5-6","6-7","7-8","8-9","9-10"), number=c(nrow(first),nrow(second), nrow(third), nrow(fourth), nrow(fifth), nrow(sixth), nrow(seventh),nrow(eighth),nrow(nineth),nrow(tenth)))
write.table(df, file="solarSystem.tab", quote=T, row.names =F, qmethod = "double", sep = ",")